using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.Cost.Queries
{
    public class CostSearchFilter : SearchFilter
    { 
        [JsonProperty("sow_fk")] 
        public int SOW_FK { get; set; }
    }

    public class CostSearch : QueryBase
    {
        public CostSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<CostDTO> GetDataByFilter(CostSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "Cost_PK";
            CostQuery costQuery = new CostQuery(this.Db);

            var filteredRecords =
                costQuery.GetQuery()
                .Where(cost =>
                    cost.KategoriCostTitle.Contains(filter.Keyword)
                    || cost.Deskripsi.Contains(filter.Keyword)
                    || cost.Nominal.ToString().Contains(filter.Keyword)
                    );

            if (filter.SOW_FK > 0)
            {
                filteredRecords = filteredRecords.Where(cost => cost.SOW_FK == filter.SOW_FK);
            }

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<CostDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = costQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
