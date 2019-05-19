using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSTechnology.Queries;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.Business.Technology.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Linq;

namespace GlobalSolusindo.Business.SOWTrack.Queries
{
    public class SOWTrackSearchFilter : SearchFilter
    {
        [JsonProperty("taskID")]
        public int TaskId { get; set; }

        [JsonProperty("format")]
        public int Format { get; set; }

        [JsonProperty("networkType")]
        public string NetworkType { get; set; }
    }

    public class SOWTrackSearch : QueryBase
    {
        public SOWTrackSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<SOWTrackDTO> GetDataByFilter(SOWTrackSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "SOWTrack_PK";
            SOWTrackQuery sowTrackQuery = new SOWTrackQuery(this.Db);

            var sowAssign = new SOWAssignQuery(Db).GetByPrimaryKey(filter.TaskId);
            int sowFk = 0;
            if (sowAssign == null)
                throw new Kairos.KairosException($"Invalid task ID '{filter.TaskId}'.");
            if (sowAssign != null)
            {
                sowFk = sowAssign.SOW_FK;
            }

            var filteredRecords =
                sowTrackQuery.GetQuery(); 

            if (filter.TaskId > 0 && sowFk > 0)
            {
                filteredRecords = filteredRecords.Where(x => x.SOW_FK == sowFk);
            }

            if (!string.IsNullOrEmpty(filter.NetworkType))
            {
                var technology = new TechnologyQuery(Db).GetByTitle(filter.NetworkType);
                if (technology != null)
                {
                    filteredRecords.Where(x => x.Technology_FK == technology.Technology_PK);
                }
                else
                {
                    filteredRecords.Where(x => x.Technology_FK == 0);
                }
            }

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var routes =

            displayedRecords = displayedRecords.Select(sowTrack => new SOWTrackDTO
            {
                SOWTrack_PK = sowTrack.SOWTrack_PK,
                SOW_FK = sowTrack.SOW_FK,
                Route = sowTrack.Route,
                CreatedBy = sowTrack.CreatedBy,
                CreatedDate = sowTrack.CreatedDate,
                UpdatedBy = sowTrack.UpdatedBy,
                UpdatedDate = sowTrack.UpdatedDate,
                Status_FK = sowTrack.Status_FK

            }).ToList();


            var searchResult = new SearchResult<SOWTrackDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = sowTrackQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
