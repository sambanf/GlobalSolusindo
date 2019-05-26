using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Vendor
{
    public class VendorSearchFilter : SearchFilter
    {
    }

    public class VendorQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public VendorQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public VendorQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<VendorDTO> GetQuery()
        {
            var query = from vendor in Db.tblM_Vendor
                        where
                        vendor.Status_FK != deleted
                        select new VendorDTO
                        {
                            Vendor_PK = vendor.Vendor_PK,
                            Title = vendor.Title,
                            CreatedBy = vendor.CreatedBy,
                            CreatedDate = vendor.CreatedDate,
                            UpdatedBy = vendor.UpdatedBy,
                            UpdatedDate = vendor.UpdatedDate,
                            Status_FK = vendor.Status_FK
                        };

            return query;
        }

        public SearchResult<VendorDTO> Search(VendorSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Vendor_PK"; 

            var filteredRecords =
                 GetQuery()
                .Where(vendor =>
                    vendor.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<VendorDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

        public VendorDTO GetByPrimaryKey(int? primaryKey)
        {
            VendorDTO record = GetQuery().FirstOrDefault(vendor => vendor.Vendor_PK == primaryKey);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Vendor_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Vendor WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Vendor.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
