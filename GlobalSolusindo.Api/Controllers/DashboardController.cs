using GlobalSolusindo.Api.Models;
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
        [Route("dashboard/GetGoalCompletion")]
        [HttpGet]
        public IHttpActionResult GetGoalCompletion(string start, string end, int project)
        {
            //string accessType = "PO_ViewAll";
            //ThrowIfUserHasNoRole(accessType);
            //if (filter == null)
            //    throw new KairosException("Missing search filter parameter");

            DateTime startDate = Convert.ToDateTime(start);
            DateTime endDate = Convert.ToDateTime(end);

            using (var poQuery = new POQuery(Db))
            {
                var data = poQuery.GetDashboardGoalCompletion(startDate, endDate, project);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("dashboard/GetDashboardValue")]
        [HttpGet]
        public IHttpActionResult GetDashboardValue(string start, string end, int project)
        {
            //string accessType = "PO_ViewAll";
            //ThrowIfUserHasNoRole(accessType);
            //if (filter == null)
            //    throw new KairosException("Missing search filter parameter");

            DateTime startDate = Convert.ToDateTime(start);
            DateTime endDate = Convert.ToDateTime(end);

            using (var poQuery = new POQuery(Db))
            {
                var data = poQuery.GetDashboardValue(startDate, endDate, project);
                return Ok(new SuccessResponse(data));
            }
        }
        [Route("dashboard/GetRevenueCost")]
        [HttpGet]
        public IHttpActionResult GetRevenueCost(string start, string end, int project)
        {
            //string accessType = "PO_ViewAll";
            //ThrowIfUserHasNoRole(accessType);
            //if (filter == null)
            //    throw new KairosException("Missing search filter parameter");

            DateTime startDate = Convert.ToDateTime(start);
            DateTime endDate = Convert.ToDateTime(end);

            using (var poQuery = new POQuery(Db))
            {
                var data = poQuery.GetRevenueCost(startDate, endDate, project);
                return Ok(new SuccessResponse(data));
            }
        }
        [Route("dashboard/GetRevenueCostProfit")]
        [HttpGet]
        public IHttpActionResult GetRevenueCostProfit(string start, string end, int project)
        {
            //string accessType = "PO_ViewAll";
            //ThrowIfUserHasNoRole(accessType);
            //if (filter == null)
            //    throw new KairosException("Missing search filter parameter");

            DateTime startDate = Convert.ToDateTime(start);
            DateTime endDate = Convert.ToDateTime(end);

            using (var poQuery = new POQuery(Db))
            {
                var data = poQuery.GetRevenueCostProfit(startDate, endDate, project);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("dashboard/GetSalesReport")]
        [HttpGet]
        public IHttpActionResult GetSalesReport(string start, string end, int vendor)
        {
            //string accessType = "PO_ViewAll";
            //ThrowIfUserHasNoRole(accessType);
            //if (filter == null)
            //    throw new KairosException("Missing search filter parameter");

            DateTime startDate = Convert.ToDateTime(start);
            DateTime endDate = Convert.ToDateTime(end);

            using (var poQuery = new POQuery(Db))
            {
                var data = poQuery.GetSalesReport(startDate, endDate, vendor);
                return Ok(new SuccessResponse(data));
            }
        }
    }
}
