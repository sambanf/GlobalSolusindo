using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Identity.CategoryContract.Queries
{
    public class CategoryContractSearchFilter : SearchFilter
    {
    }

    public class CategoryContractSearch : QueryBase
    {
        public CategoryContractSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<CategoryContractDTO> GetDataByFilter(CategoryContractSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "CategoryContract_PK";
            CategoryContractQuery CategoryContractQuery = new CategoryContractQuery(this.Db);

            var filteredRecords =
                CategoryContractQuery.GetQuery()
                .Where(CategoryContract =>
                    CategoryContract.Name.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<CategoryContractDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = CategoryContractQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
