using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.IzinCuti.Queries
{
    public class IzinCutiSearchFilter : SearchFilter
    {
        private int length;
        private int page;

        [JsonProperty("userID")]
        public int UserId { get; set; }

        [JsonProperty("length")]
        public int Length
        {
            get
            {
                return length;
            }
            set
            {
                length = value;
                PageSize = value;
            }
        }

        [JsonProperty("page")]
        public int Page
        {
            get
            {
                return page;
            }
            set
            {
                page = value;
                PageIndex = value;
            }
        }

        [JsonProperty("status")]
        public int? Status { get; set; }
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

            if (filter.UserId != 0)
            {
                filteredRecords = filteredRecords
                    .Where(x =>
                    x.User_FK == filter.UserId);
            }

            if (filter.Status != 0)
            {
                if (filter.Status == 1)
                {
                    filteredRecords = filteredRecords
                                 .Where(x =>
                                 x.IzinCutiStatus_FK == filter.Status || x.IzinCutiStatus_FK == null);
                }
                else
                {
                    filteredRecords = filteredRecords
                                     .Where(x =>
                                     x.IzinCutiStatus_FK == filter.Status);
                }
            }

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
