using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.DeliveryArea.Queries
{
    public class DeliveryAreaSearchFilter : SearchFilter
    {
    }

    public class DeliveryAreaSearch : QueryBase
    {
        public DeliveryAreaSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<DeliveryAreaDTO> GetDataByFilter(DeliveryAreaSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "DeliveryArea_PK";
            DeliveryAreaQuery deliveryAreaQuery = new DeliveryAreaQuery(this.Db);

            var filteredRecords =
                deliveryAreaQuery.GetQuery()
                .Where(deliveryArea =>
                    deliveryArea.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<DeliveryAreaDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = deliveryAreaQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
