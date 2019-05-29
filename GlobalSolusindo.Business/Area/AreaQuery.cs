using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Area
{
    public class AreaSearchFilter : SearchFilter
    {
    }

    public class AreaQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public AreaQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public AreaQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<AreaDTO> GetQuery()
        {
            var query = from area in Db.tblM_Area
                        where
                        area.Status_FK != deleted
                        select new AreaDTO
                        {
                            Area_PK = area.Area_PK,
                            Title = area.Title,
                            CreatedBy = area.CreatedBy,
                            CreatedDate = area.CreatedDate,
                            UpdatedBy = area.UpdatedBy,
                            UpdatedDate = area.UpdatedDate,
                            Status_FK = area.Status_FK
                        };

            return query;
        }

        public SearchResult<AreaDTO> Search(AreaSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Area_PK"; 

            var filteredRecords =
                 GetQuery()
                .Where(area =>
                    area.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<AreaDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

        public AreaDTO GetByPrimaryKey(int primaryKey)
        {
            AreaDTO record = GetQuery().FirstOrDefault(area => area.Area_PK == primaryKey);
            return record;
        }

        public AreaDTO GetByTitle(string title)
        {
            AreaDTO record = GetQuery().FirstOrDefault(area => area.Title == title);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Area_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Area WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Area.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
