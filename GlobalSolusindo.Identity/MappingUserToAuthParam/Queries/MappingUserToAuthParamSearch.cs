using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam.Queries
{
    public class MappingUserToAuthParamSearchFilter : SearchFilter
    {
        [JsonProperty("authParam_pk")]
        public int AuthParam_PK { get; set; }
    }

    public class MappingUserToAuthParamSearch : QueryBase
    {
        public MappingUserToAuthParamSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<MappingUserToAuthParamDTO> GetDataByFilter(MappingUserToAuthParamSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "UserUsername";
            MappingUserToAuthParamQuery mappingUserToAuthParamQuery = new MappingUserToAuthParamQuery(this.Db);

            var filteredRecords =
                mappingUserToAuthParamQuery
                .GetByAuthParamPK(filter.AuthParam_PK)
                .Where(mappingUserToAuthParam =>
                    mappingUserToAuthParam.UserUsername.Contains(filter.Keyword)
                    ||
                    mappingUserToAuthParam.UserName.Contains(filter.Keyword)
                    );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<MappingUserToAuthParamDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = mappingUserToAuthParamQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
