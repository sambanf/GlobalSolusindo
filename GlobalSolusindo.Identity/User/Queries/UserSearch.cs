using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Identity.User.Queries
{
    public class UserSearchFilter : SearchFilter
    {
    }

    public class UserSearch : QueryBase
    {
        public UserSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<UserDTO> GetDataByFilter(UserSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "User_PK";
            UserQuery userQuery = new UserQuery(this.Db);

            var filteredRecords =
                userQuery.GetQuery()
                .Where(user =>
                    user.Username.Contains(filter.Keyword)
                    ||
                    user.UserCode.Contains(filter.Keyword)
                    ||
                    user.Name.Contains(filter.Keyword)
                    ||
                    user.NoKTP.Contains(filter.Keyword)
                    ||
                    user.NoHP.Contains(filter.Keyword)
                    ||
                    user.Email.Contains(filter.Keyword)
                    ||
                    user.Address.Contains(filter.Keyword)
                    ||
                    user.Description.Contains(filter.Keyword)
                    );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<UserDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = userQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
