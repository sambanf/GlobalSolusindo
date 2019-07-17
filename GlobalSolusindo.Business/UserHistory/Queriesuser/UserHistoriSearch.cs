using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.AsetHistori.Queries
{
    public class UserHistoriSearchFilter : SearchFilter
    {
        [JsonProperty("aset_fk")]
        public int Aset_FK { get; set; }
    }

    public class UserHistoriSearchResult : SearchResult<UserHistoriDTO>
    {
        public UserHistoriSearchResult(UserHistoriSearchFilter filter) : base(filter)
        {
        }

        [JsonProperty("user")]
        public UserDTO User { get; set; }
    }

    public class UserHistoriSearch : QueryBase
    {
        public UserHistoriSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public UserHistoriSearchResult GetDataByFilter(UserHistoriSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "AsetHistori_PK";
            UserHistoriQuery userHistoriQuery = new UserHistoriQuery(this.Db);

            var filteredRecords =
                userHistoriQuery.GetQuery()
                .Where(asetHistori =>
                    asetHistori.Aset_FK == filter.Aset_FK
                    && (asetHistori.UserFullName.Contains(filter.Keyword)
                    || asetHistori.AsetID.Contains(filter.Keyword)
                    || asetHistori.AsetName.Contains(filter.Keyword)
                     || asetHistori.Description.Contains(filter.Keyword)
                    ));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new UserHistoriSearchResult(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = userHistoriQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;
            searchResult.User = new UserQuery(Db).GetByUserDetailFK(filter.Aset_FK);
            return searchResult;
        }
    }
}
