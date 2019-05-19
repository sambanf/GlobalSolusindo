using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System;
using System.Globalization;
using System.Linq;

namespace GlobalSolusindo.Business.SOW.Queries
{
    public class SOWSearchFilter : SearchFilter
    {
    }

    public class SOWSearch : QueryBase
    {
        public SOWSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<SOWDTO> GetDataByFilter(SOWSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "SOW_PK";
            SOWQuery sowQuery = new SOWQuery(this.Db);

            var filteredRecords =
                sowQuery.GetQuery()
                .Where(sow =>
                    sow.SOWName.Contains(filter.Keyword));

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<SOWDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = sowQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
