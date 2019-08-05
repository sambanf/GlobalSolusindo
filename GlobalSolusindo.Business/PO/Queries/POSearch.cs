using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.PO.Queries
{
    
    public class POSearchFilter : SearchFilter
    {
        [JsonProperty("po_pk")]
        public int PO_PK { get; set; }
       
        public bool forexcel  { get; set; }
    }

    public class POSearch : QueryBase
    {
        public POSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<PODTO> GetDataByFilter(POSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "PO_PK";
            POQuery query = new POQuery(this.Db);

            IQueryable<PODTO> filteredRecords = query.GetQuery()
                .Where(user =>
                    user.Account.Contains(filter.Keyword)
                    || user.ProjectCode.Contains(filter.Keyword)
                    || user.SiteIDImp.Contains(filter.Keyword)
                    || user.SiteID.Contains(filter.Keyword)
                    || user.SiteName.Contains(filter.Keyword)
                    || user.SOWPO.Contains(filter.Keyword)
                    );

            

            if (filter.PO_PK > 0)
            {
                filteredRecords = filteredRecords
                    .Where(user =>
                    user.PO_PK == (int)filter.PO_PK);
            }

            var searchResult = new SearchResult<PODTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = query.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            var displayedRecords = filteredRecords.ToList();
            if (!filter.forexcel)
            {
                displayedRecords = filteredRecords.
               SortBy(filter.SortName, filter.SortDir)
               .Skip(filter.Skip)
               .Take(filter.PageSize)
               .ToList();
            }
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }



       
    }
}
