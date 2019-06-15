using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Product
{
    public class ProductSearchFilter : SearchFilter
    {
    }

    public class ProductQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public ProductQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public ProductQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<ProductDTO> GetQuery()
        {
            var query = from product in Db.tblM_Product
                        where
                        product.Status_FK != deleted
                        select new ProductDTO
                        {
                            Id = product.Id,
                            Name = product.Name,
                            Price = product.Price,
                            UnitCost = product.UnitCost,
                            CreatedBy = product.CreatedBy,
                            CreatedDate = product.CreatedDate,
                            UpdatedBy = product.UpdatedBy,
                            UpdatedDate = product.UpdatedDate,
                            Status_FK = product.Status_FK
                        };

            return query;
        }

        public SearchResult<ProductDTO> Search(ProductSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Id";

            var filteredRecords =
                 GetQuery()
                .Where(product =>
                    product.Name.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<ProductDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

        public ProductDTO GetByPrimaryKey(int primaryKey)
        {
            ProductDTO record = GetQuery().FirstOrDefault(product => product.Id == primaryKey);
            return record;
        }

        public ProductDTO GetByName(string name)
        {
            ProductDTO record = GetQuery().FirstOrDefault(product => product.Name == name);
            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Id == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Product WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Product.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
