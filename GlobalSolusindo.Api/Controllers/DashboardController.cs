﻿using GlobalSolusindo.Api.Models;
using GlobalSolusindo.Business.PO;
using GlobalSolusindo.Business.PO.DML;
using GlobalSolusindo.Business.PO.Queries;
using GlobalSolusindo.DataAccess.PO.EntryForm;
using GlobalSolusindo.Identity.User;
using GlobalSolusindo.Identity.User.DML;
using GlobalSolusindo.Identity.User.EntryForm;
using GlobalSolusindo.Identity.User.Queries;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class DashboardController : ApiControllerBase
    {

        private const string readRole = "Dashboard_ViewAll";


        [Route("dashboard/getRole")]
        [HttpGet]
        public IHttpActionResult getRole(string dashboard)
        {
            var roles = AccessControl.userGetRoles();
            return Ok(new SuccessResponse(roles));

        }

        [Route("dashboard/IsDashboardViewAll")]
        [HttpGet]
        public IHttpActionResult IsDashboardViewAll(string dashboard)
        {
            var data = false;
            var isSuperAdministrator = AccessControl.UserHasRole("Full_Access");
            if (isSuperAdministrator)
            {
                data = true;
            }
            else {
                bool isDashboardView = AccessControl.UserHasRole(readRole);
                data = isDashboardView;
            }
            
            return Ok(new SuccessResponse(data));
            
        }

        [Route("dashboard/GetGoalCompletion")]
        [HttpGet]
        public IHttpActionResult GetGoalCompletion(string start, string end, int project)
        {
            ThrowIfUserHasNoRole(readRole);
            DateTime startDate = Convert.ToDateTime(start);
            DateTime endDate = Convert.ToDateTime(end);

            using (var poQuery = new POQuery(Db))
            {
                var data = poQuery.GetDashboardGoalCompletion(startDate, endDate, project);
                SaveLog(ActiveUser.Username, "GetGoalCompletion", JsonConvert.SerializeObject(new { startDate = start, endDate = end, project = project }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("dashboard/GetDashboardValue")]
        [HttpGet]
        public IHttpActionResult GetDashboardValue(string start, string end, int project)
        {
            ThrowIfUserHasNoRole(readRole);
            DateTime startDate = Convert.ToDateTime(start);
            DateTime endDate = Convert.ToDateTime(end);

            using (var poQuery = new POQuery(Db))
            {
                var data = poQuery.GetDashboardValue(startDate, endDate, project);
                SaveLog(ActiveUser.Username, "GetDashboardCardValue", JsonConvert.SerializeObject(new { startDate = start, endDate = end, project = project }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }
        [Route("dashboard/GetRevenueCost")]
        [HttpGet]
        public IHttpActionResult GetRevenueCost(string start, string end, int project)
        {
            ThrowIfUserHasNoRole(readRole);
            DateTime startDate = Convert.ToDateTime(start);
            DateTime endDate = Convert.ToDateTime(end);

            using (var poQuery = new POQuery(Db))
            {
                var data = poQuery.GetRevenueCost(startDate, endDate, project);
                SaveLog(ActiveUser.Username, "GetRevenueCost", JsonConvert.SerializeObject(new { startDate = start, endDate = end, project = project }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }
        [Route("dashboard/GetRevenueCostProfit")]
        [HttpGet]
        public IHttpActionResult GetRevenueCostProfit(string start, string end, int project)
        {
            ThrowIfUserHasNoRole(readRole);
            DateTime startDate = Convert.ToDateTime(start);
            DateTime endDate = Convert.ToDateTime(end);

            using (var poQuery = new POQuery(Db))
            {
                var data = poQuery.GetRevenueCostProfit(startDate, endDate, project);
                SaveLog(ActiveUser.Username, "GetRevenueCostProvit", JsonConvert.SerializeObject(new { startDate = start, endDate = end, project = project }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("dashboard/GetSalesReport")]
        [HttpGet]
        public IHttpActionResult GetSalesReport(string start, string end, int vendor)
        {
            ThrowIfUserHasNoRole(readRole);
            DateTime startDate = Convert.ToDateTime(start);
            DateTime endDate = Convert.ToDateTime(end);

            using (var poQuery = new POQuery(Db))
            {
                var data = poQuery.GetSalesReport(startDate, endDate, vendor);
                SaveLog(ActiveUser.Username, "GetSalesReport", JsonConvert.SerializeObject(new { startDate = start, endDate = end, vendor = vendor }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }
    }
}
