using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.CheckIn.Queries
{
    public class CheckInSearchFilter : SearchFilter
    {
        [JsonProperty("userId")]
        public int UserId { get; set; }
    }

    public class CheckInSearch : QueryBase
    {
        public CheckInSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<CheckInDTO> GetDataByFilter(CheckInSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "CheckIn_PK";
            CheckInQuery checkInQuery = new CheckInQuery(this.Db);

            var unfilteredRecords = checkInQuery.GetQuery();
            var filteredRecords = unfilteredRecords;

            if (filter.UserId != 0)
            {
                filteredRecords = filteredRecords.Where(x => x.UserId == filter.UserId);
            }

            filteredRecords =
              filteredRecords
              .Where(checkIn =>
                  checkIn.SOWName.Contains(filter.Keyword)
                  || checkIn.UserName.Contains(filter.Keyword)
                  || checkIn.BTSName.Contains(filter.Keyword)
                  || checkIn.BTSAddress.Contains(filter.Keyword)
                  || checkIn.KategoriJabatanTitle.Contains(filter.Keyword)
                  );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<CheckInDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = checkInQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
