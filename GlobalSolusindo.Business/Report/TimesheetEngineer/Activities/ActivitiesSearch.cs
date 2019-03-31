using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.Activities.Queries
{
    public class ActivitiesSearchFilter : SearchFilter
    {
        [JsonProperty("user_fk")]
        public int User_FK { get; set; }

        [JsonProperty("bulan")]
        public int Bulan { get; set; }
    }

    public class ActivitiesSearchResult : SearchResult<ActivitiesDTO>
    {
        public ActivitiesSearchResult(ActivitiesSearchFilter filter) : base(filter)
        {
        }

        [JsonProperty("user")]
        public UserDTO User { get; set; }
    }

    public class ActivitiesSearch : QueryBase
    {
        public ActivitiesSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public ActivitiesSearchResult GetDataByFilter(ActivitiesSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "User_FK";
            ActivitiesQuery activitiesQuery = new ActivitiesQuery(this.Db);

            var filteredRecords =
                activitiesQuery.GetQuery(filter.User_FK)
                .Where(activities =>
                    activities.Aktifitas.Contains(filter.Keyword)
                    )
                    .AsQueryable();

            if (filter.Bulan != 0)
                filteredRecords = filteredRecords.Where(x => x.Tanggal.Month == filter.Bulan);


            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new ActivitiesSearchResult(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = activitiesQuery.GetTotalRecords(filter.User_FK);
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;
            searchResult.User = new UserQuery(Db).GetByPrimaryKey(filter.User_FK);

            return searchResult;
        }
    }
}
