using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.IzinCuti.Queries
{
    public class IzinCutiSearchFilter : SearchFilter
    {
    }

    public class IzinCutiSearch : QueryBase
    {
        public IzinCutiSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<IzinCutiDTO> GetDataByFilter(IzinCutiSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "IzinCuti_PK";
            IzinCutiQuery izinCutiQuery = new IzinCutiQuery(this.Db);

            var filteredRecords =
                izinCutiQuery.GetQuery()
                .Where(izinCuti =>
                    izinCuti.UserIzinCutiName.Contains(filter.Keyword)
                    || izinCuti.ApprovedByUserName.Contains(filter.Keyword)
                    || izinCuti.Alasan.Contains(filter.Keyword)
                    || izinCuti.UserIzinCutiJabatanTitle.Contains(filter.Keyword)
                    );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<IzinCutiDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = izinCutiQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
