using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.TipePekerjaan
{
    public class TipePekerjaanSearchFilter : SearchFilter
    {
    }

    public class TipePekerjaanQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public TipePekerjaanQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public TipePekerjaanQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<TipePekerjaanDTO> GetQuery()
        {
            var query = from tipePekerjaan in Db.tblM_TipePekerjaan
                        where
                        tipePekerjaan.Status_FK != deleted
                        orderby tipePekerjaan.Order
                        select new TipePekerjaanDTO
                        {
                            TipePekerjaan_PK = tipePekerjaan.TipePekerjaan_PK,
                            Title = tipePekerjaan.Title,
                            CreatedBy = tipePekerjaan.CreatedBy,
                            CreatedDate = tipePekerjaan.CreatedDate,
                            UpdatedBy = tipePekerjaan.UpdatedBy,
                            UpdatedDate = tipePekerjaan.UpdatedDate,
                            Status_FK = tipePekerjaan.Status_FK
                        };

            return query;
        }

        public SearchResult<TipePekerjaanDTO> Search(TipePekerjaanSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "TipePekerjaan_PK"; 

            var filteredRecords =
                 GetQuery()
                .Where(tipePekerjaan =>
                    tipePekerjaan.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<TipePekerjaanDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

        public IQueryable<TipePekerjaanDropdownDTO> GetDropdownBySowAssign(int sowAssignPK)
        {
            var DropdownlistTipePekerjaan = Db.GetDropdownlistTipePekerjaanBySowAssign(sowAssignPK).ToList();
            
            var query = from Data in DropdownlistTipePekerjaan
                        select new TipePekerjaanDropdownDTO
                        {
                            TipePekerjaan_PK = Data.TipePekerjaan_FK,
                            Title = Data.Title,
                            Checkin_Fk = Data.CheckIn_PK
                        };

            return query.AsQueryable();
        }

        public TipePekerjaanDTO GetByPrimaryKey(int primaryKey)
        {
            TipePekerjaanDTO record = GetQuery().FirstOrDefault(tipePekerjaan => tipePekerjaan.TipePekerjaan_PK == primaryKey);
            return record;
        }

        public TipePekerjaanDTO GetByTitle(string title)
        {
            TipePekerjaanDTO record = GetQuery().FirstOrDefault(tipePekerjaan => tipePekerjaan.Title == title);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.TipePekerjaan_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_TipePekerjaan WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_TipePekerjaan.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
