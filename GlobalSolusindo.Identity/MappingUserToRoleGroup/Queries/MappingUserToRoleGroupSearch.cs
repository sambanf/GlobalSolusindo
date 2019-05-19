using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup.Queries
{
    public class MappingUserToRoleGroupSearchFilter : SearchFilter
    {
        [JsonProperty("roleGroup_pk")]
        public int RoleGroup_PK { get; set; }
    }

    public class MappingUserToRoleGroupSearch : QueryBase
    {
        public MappingUserToRoleGroupSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<MappingUserToRoleGroupDTO> GetDataByFilter(MappingUserToRoleGroupSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "UserUsername";
            MappingUserToRoleGroupQuery mappingUserToRoleGroupQuery = new MappingUserToRoleGroupQuery(this.Db);

            var filteredRecords =
                mappingUserToRoleGroupQuery
                .GetByRoleGroupPK(filter.RoleGroup_PK)
                .Where(mappingUserToRoleGroup =>
                    mappingUserToRoleGroup.UserUsername.Contains(filter.Keyword)
                    ||
                    mappingUserToRoleGroup.UserName.Contains(filter.Keyword)
                    );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<MappingUserToRoleGroupDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = mappingUserToRoleGroupQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
