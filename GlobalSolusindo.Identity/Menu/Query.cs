using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Identity.Menu
{
    public class MenuSearchFilter : SearchFilter
    {
    }

    public class MenuQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public MenuQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public MenuQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<MenuDTO> GetQuery()
        {
            var query = from menu in Db.tblM_Menu
                        where
                        menu.Status_FK != deleted
                        select new MenuDTO
                        {
                            Menu_PK = menu.Menu_PK,
                            Code = menu.Code,
                            Caption = menu.Caption,
                            Path = menu.Path,
                            ParentGroup = menu.ParentGroup,
                            CreatedBy = menu.CreatedBy,
                            CreatedDate = menu.CreatedDate,
                            UpdatedBy = menu.UpdatedBy,
                            UpdatedDate = menu.UpdatedDate,
                            Status_FK = menu.Status_FK
                        };

            return query;
        }

        public SearchResult<MenuDTO> Search(MenuSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Menu_PK";

            var filteredRecords =
                 GetQuery()
                .Where(menu =>
                    menu.Code.Contains(filter.Keyword)
                    || menu.Caption.Contains(filter.Keyword)
                    || menu.Path.Contains(filter.Keyword)
                    || menu.ParentGroup.Contains(filter.Keyword)
                    );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<MenuDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

        public MenuDTO GetByPrimaryKey(int primaryKey)
        {
            MenuDTO record = GetQuery().FirstOrDefault(menu => menu.Menu_PK == primaryKey);
            return record;
        }

        public MenuDTO GetByCode(string code)
        {
            MenuDTO record = GetQuery().FirstOrDefault(menu => menu.Code == code);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Menu_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Menu WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Menu.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
