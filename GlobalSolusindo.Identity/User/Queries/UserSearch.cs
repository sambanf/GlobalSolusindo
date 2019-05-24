using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Identity.User.Queries
{
    public enum UserKategoriJabatanFilter
    {
        All = 0,
        TeamLeader = 1,
        RF = 2,
        RNO = 3,
        Rigger = 4,
        DriveTester = 5
    }

    public class UserSearchFilter : SearchFilter
    {
        [JsonProperty("user_pk")]
        public int User_PK { get; set; }

        [JsonProperty("kategoriJabatan_fk")]
        public int KategoriJabatan_FK{ get; set; }
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
            UserQuery query = new UserQuery(this.Db);

            IQueryable<UserDTO> filteredRecords = query.GetQuery()
                .Where(user =>
                    user.Username.Contains(filter.Keyword)
                    || user.UserCode.Contains(filter.Keyword)
                    || user.Name.Contains(filter.Keyword)
                    || user.NoKTP.Contains(filter.Keyword)
                    || user.NoHP.Contains(filter.Keyword)
                    || user.Email.Contains(filter.Keyword)
                    //|| user.Address.Contains(filter.Keyword)
                    //|| user.Description.Contains(filter.Keyword)
                    );

            if ((UserKategoriJabatanFilter)filter.KategoriJabatan_FK != UserKategoriJabatanFilter.All)
            {
                filteredRecords = filteredRecords
                    .Where(user =>
                    user.KategoriJabatan_FK == (int)filter.KategoriJabatan_FK);
            }

            if (filter.User_PK > 0)
            {
                filteredRecords = filteredRecords
                    .Where(user =>
                    user.User_PK == (int)filter.User_PK);
            }

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<UserDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = query.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

       
    }
}
