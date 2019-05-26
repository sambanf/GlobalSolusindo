using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSTechnology.Queries;
using GlobalSolusindo.Business.SOW;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.TaskList.Queries
{
    public class TaskListSearchFilter : SearchFilter
    {
        private int length;
        private int page;

        [JsonProperty("userID")]
        public int UserID { get; set; }

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
        public int Status { get; set; }
    }

    public class TaskListSearch : QueryBase
    {
        public TaskListSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        public SearchResult<TaskListDTO> GetDataByFilter(TaskListSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "UserID";
            TaskListQuery sowQuery = new TaskListQuery(this.Db);

            var filteredRecords =
                sowQuery.GetQuery()
                .Where(sow =>
                    sow.UserId == filter.UserID
                    && (sow.BTS.Contains(filter.Keyword)
                    || sow.Address.Contains(filter.Keyword))
                    );

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<TaskListDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = sowQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

        private List<NetworkType> GetNetworkType(int? userFk, int? btsFk)
        {
            var sql = @"
select
	--distinct SOWTrackResult.CheckIn_FK,
	SOWAssign.SOWAssign_PK, 
	--SOWTrackResult.SOWTrackResult_PK,
	SOWAssign.User_FK,
	SOWTrack.SOWTrack_PK,
	SOW.SOW_PK,
	BTSTechnology.BTS_FK,
	SOWTrack.Technology_FK,
	Technology.Title AS Type,
    (ISNULL((select  max(checkin_pk) from tblT_CheckIn where SOWAssign_FK = SOWAssign.SOWAssign_PK),0)) AS CheckIn_PK, 
	CASE when EXISTS(select CheckIn_FK from tblT_SOWTrackResult SOWTrackResult where SOWTrackResult.SOWTrack_FK = SOWTrack.SOWTrack_PK) 
	THEN 
		CASE ISNULL((select top 1 Route from tblT_SOWTrackResult SOWTrackResult where SOWTrackResult.SOWTrack_FK = SOWTrack.SOWTrack_PK order by SOWTrackResult.SOWTrackResult_PK desc), '') 
		WHEN ''
			THEN 2
		ELSE
			 3
		END
	ELSE
		1
	END AS Status
from 
	tblM_BTSTechnology BTSTechnology 
	LEFT JOIN tblM_BTS BTS ON BTSTechnology.BTS_FK = BTS.BTS_PK
	LEFT JOIN tblT_SOW SOW ON BTS.BTS_PK = SOW.BTS_FK 
	LEFT JOIN tblT_SOWTrack SOWTrack ON BTSTechnology.Technology_FK = SOWTrack.Technology_FK
	LEFT JOIN tblT_SOWAssign SOWAssign ON SOW.SOW_PK = SOWAssign.SOW_FK   
	LEFT JOIN tblM_Technology Technology ON SOWTrack.Technology_FK = Technology.Technology_PK 
WHERE 
	SOWAssign.User_FK = @userFk   
	AND SOWTrack.SOW_FK = SOW.SOW_PK  
    AND SOW.BTS_FK = @btsFk
";

            return Db.Database.SqlQuery<NetworkType>(sql, new SqlParameter("@userFk", userFk), new SqlParameter("@btsFk", btsFk)).ToList();
        }

        public SearchResult<TaskListDTO> GetDataWithSPByFilter(TaskListSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "UserID";


            var taskList_Results = Db.GetTaskList(filter.UserID, filter.Status).ToList();
            var filteredRecords = from taskList_Result in taskList_Results
                                  select new TaskListDTO
                                  {
                                      UserId = filter.UserID,
                                      TaskId = taskList_Result.SOWAssign_PK,
                                      CheckIn_PK = taskList_Result.CheckIn_PK,
                                      BTS = taskList_Result.BTS,
                                      Address = taskList_Result.Alamat,
                                      Status = taskList_Result.Status,
                                      Reported = taskList_Result.Reported.Value,
                                      IsClose = taskList_Result.IsClose,
                                      IsSubmitted = taskList_Result.IsSubmitted,
                                      ReportedValue = taskList_Result.ReportedValue,
                                      SOWName = taskList_Result.SOWName,
                                      TowerID = taskList_Result.TowerID,
                                      Network = GetNetworkType(taskList_Result.User_FK, taskList_Result.BTS_FK)
                                  };

            var displayedRecords = filteredRecords;

            var searchResult = new SearchResult<TaskListDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = displayedRecords.Count();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = filteredRecords.ToList();

            return searchResult;
        }
    }
}
