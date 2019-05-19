using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.IzinCutiStatus.Queries
{
    public class IzinCutiStatusSearchFilter : SearchFilter
    {
    }

    public class IzinCutiStatusSearch : QueryBase
    {
        public IzinCutiStatusSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<IzinCutiStatusDTO> GetDataByFilter(IzinCutiStatusSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "IzinCutiStatus_PK";
            IzinCutiStatusQuery izinCutiStatusQuery = new IzinCutiStatusQuery(this.Db);

            var filteredRecords =
                izinCutiStatusQuery.GetQuery()
                .Where(izinCutiStatus =>
                    izinCutiStatus.Title.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<IzinCutiStatusDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = izinCutiStatusQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
