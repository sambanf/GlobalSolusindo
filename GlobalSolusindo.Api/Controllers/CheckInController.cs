﻿using GlobalSolusindo.Business.CheckIn.EntryForm;
using GlobalSolusindo.Business.CheckIn.Queries;
using Kairos;
using Newtonsoft.Json;
using System;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class CheckInController : ApiControllerBase
    {
        ApiControllerBase apiControllerBase = new ApiControllerBase();

        public CheckInController()
        {
        }

        [Route("checkIn/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            //string accessType = "CheckIn_ViewAll";
            //ThrowIfUserHasNoRole(accessType);
            using (CheckInQuery checkInQuery = new CheckInQuery(Db))
            {
                var data = checkInQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, "TaskApproval_ViewAll", JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("checkIn/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            //string accessType = "CheckIn_ViewAll";
            //if (id > 0)
            //    ThrowIfUserHasNoRole(accessType);
            using (CheckInEntryDataProvider checkInEntryDataProvider = new CheckInEntryDataProvider(Db, ActiveUser, AccessControl, new CheckInQuery(Db)))
            {
                var data = checkInEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, "TaskApproval_ViewAll", JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("checkIn/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]TaskApprovalSearchFilter filter)
        {
            //string accessType = "CheckIn_ViewAll";
            //ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            //filter.User = ActiveUser;

            using (var checkInSearch = new CheckInSearch(Db))
            {
                filter.User = ActiveUser;
                //var data = checkInSearch.GetDataByFilter(filter);
                //return Ok(new SuccessResponse(data));
                var data = checkInSearch.Search(filter);
                SaveLog(ActiveUser.Username, "TaskApproval_ViewAll", JsonConvert.SerializeObject(filter), "Success", "", "", "");

                return Ok(new SuccessResponse(data));
            }
        }

        [Route("myTaskList/search")]
        [HttpGet]
        public IHttpActionResult SearchMyTaskList([FromUri]CheckInSearchFilter filter)
        {
            //string accessType = "CheckIn_ViewAll";
            //ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var checkInSearch = new CheckInSearch(Db))
            {
                filter.UserId = ActiveUser.User_PK;
                var data = checkInSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, "MyTaskList_ViewAll", JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }
    }
}