using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Identity.UserDetail.Queries
{
    public class UserDetailSearchFilter : SearchFilter
    {
    }

    public class UserDetailSearch : QueryBase
    {
        public UserDetailSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<UserDetailDTO> GetDataByFilter(UserDetailSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "UserDetail_PK";
            UserDetailQuery userDetailQuery = new UserDetailQuery(this.Db);

            var filteredRecords =
                userDetailQuery.GetQuery()
                .Where(userDetail => 
                    userDetail.UserCode.Contains(filter.Keyword)
                    ||
                    userDetail.Name.Contains(filter.Keyword)
                    ||
                    userDetail.NoKTP.Contains(filter.Keyword)
                    ||
                    userDetail.NoHP.Contains(filter.Keyword)
                    ||
                    userDetail.Email.Contains(filter.Keyword)
                    ||
                    userDetail.Address.Contains(filter.Keyword)
                    ||
                    userDetail.Description.Contains(filter.Keyword)
                    );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();
             
            var searchResult = new SearchResult<UserDetailDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = userDetailQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
