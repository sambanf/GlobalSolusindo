using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.SOWAssign.Queries
{
    public class SOWAssignSearchFilter : SearchFilter
    {
    }

    public class SOWAssignSearch : QueryBase
    {
        public SOWAssignSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<SOWAssignDTO> GetDataByFilter(SOWAssignSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "SOWAssign_PK";
            SOWAssignQuery sowAssignQuery = new SOWAssignQuery(this.Db);

            var filteredRecords =
                sowAssignQuery.GetQuery()
                .Where(sowAssign =>
                    sowAssign.SOWName.Contains(filter.Keyword)
                    || sowAssign.UserName.Contains(filter.Keyword)
                    || sowAssign.KategoriJabatanTitle.Contains(filter.Keyword)
                    );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<SOWAssignDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = sowAssignQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
