using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.BTS.Queries
{
    public class BTSSearchFilter : SearchFilter
    {
    }

    public class BTSSearch : QueryBase
    {
        public BTSSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<BTSDTO> GetDataByFilter(BTSSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "BTS_PK";
            BTSQuery btsQuery = new BTSQuery(this.Db);

            var filteredRecords =
                btsQuery.GetQuery()
                .Where(bts =>
                    bts.Name.Contains(filter.Keyword)
                     || bts.CabangTitle.Contains(filter.Keyword)
                     || bts.OperatorTitle.Contains(filter.Keyword)
                    || bts.TowerID.Contains(filter.Keyword)
                    || bts.CellID.Contains(filter.Keyword)
                    || bts.CustomerSite.Contains(filter.Keyword)
                    || bts.Alamat.Contains(filter.Keyword)
                    );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<BTSDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = btsQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
