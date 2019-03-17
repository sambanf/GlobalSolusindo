using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup.Queries
{
    public class MappingRoleToRoleGroupSearchFilter : SearchFilter
    {
        [JsonProperty("roleGroup_pk")]
        public int RoleGroup_PK { get; set; }
    }

    public class MappingRoleToRoleGroupSearch : QueryBase
    {
        public MappingRoleToRoleGroupSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<MappingRoleToRoleGroupDTO> GetDataByFilter(MappingRoleToRoleGroupSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "RoleName";
            MappingRoleToRoleGroupQuery mappingRoleToRoleGroupQuery = new MappingRoleToRoleGroupQuery(this.Db);

            var filteredRecords =
                mappingRoleToRoleGroupQuery
                .GetByRoleGroupPK(filter.RoleGroup_PK)
                .Where(mappingRoleToRoleGroup =>
                    mappingRoleToRoleGroup.RoleName.Contains(filter.Keyword)
                    ||
                    mappingRoleToRoleGroup.RoleDescription.Contains(filter.Keyword)
                    );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<MappingRoleToRoleGroupDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = mappingRoleToRoleGroupQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
