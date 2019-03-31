using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.AsetHistori.Queries
{
    public class AsetHistoriSearchFilter : SearchFilter
    {
        [JsonProperty("userDetail_fk")]
        public int UserDetail_FK { get; set; }
    }

    public class AsetHistoriSearchResult : SearchResult<AsetHistoriDTO>
    {
        public AsetHistoriSearchResult(AsetHistoriSearchFilter filter) : base(filter)
        {
        }

        [JsonProperty("user")]
        public UserDTO User { get; set; }
    }

    public class AsetHistoriSearch : QueryBase
    {
        public AsetHistoriSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public AsetHistoriSearchResult GetDataByFilter(AsetHistoriSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "AsetHistori_PK";
            AsetHistoriQuery asetHistoriQuery = new AsetHistoriQuery(this.Db);

            var filteredRecords =
                asetHistoriQuery.GetQuery()
                .Where(asetHistori =>
                    asetHistori.UserDetail_FK == filter.UserDetail_FK
                    && (asetHistori.UserName.Contains(filter.Keyword)
                    || asetHistori.AsetID.Contains(filter.Keyword)
                    || asetHistori.AsetName.Contains(filter.Keyword)
                    ));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new AsetHistoriSearchResult(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = asetHistoriQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;
            searchResult.User = new UserQuery(Db).GetByUserDetailFK(filter.UserDetail_FK);
            return searchResult;
        }
    }
}
