using GlobalSolusindo.Business.SOWTrack.Queries;
using GlobalSolusindo.Business.SOWTrackResult;
using Kairos;
using Kairos.Google.KMLs;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class TaskRouteController : ApiControllerBase
    {
        public TaskRouteController()
        {
        }

        [Route("mobile/taskRoute")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]SOWTrackSearchFilter filter)
        {
            string accessType = "TaskRoute_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var trackSearch = new SOWTrackSearch(Db))
            {
                var data = trackSearch.GetDataByFilter(filter);
                var xml = string.Empty;
                var result = new object();

                if (data.Records.Count > 0)
                {
                    xml = data.Records[0].Route;
                    var kml = KMLReader.ConvertToKML(xml);

                    if (filter.Format == 0)
                    {
                        result = kml.GetCoordinates();
                    }
                    else
                    {
                        result = kml;
                    }
                }
                else
                {
                    result = new List<object>();
                }
                return Ok(result);
            }
        }


        [Route("mobile/doFinishDrive")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]SOWTrackResultDTO sowTrackResult)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (sowTrackResult == null)
                throw new KairosException("Missing model parameter");

            if (sowTrackResult.SOWTrackResult_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var sowTrackResultUpdateHandler = new SOWTrackResultUpdateHandler(Db, ActiveUser, new SOWTrackResultValidator(), new SOWTrackResultFactory(Db, ActiveUser), new SOWTrackResultQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = sowTrackResultUpdateHandler.Save(sowTrackResultDTO: sowTrackResult, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new
                        {
                            status = true
                        });
                    
                    return Ok(new
                    {
                        status = false,
                        message = saveResult.Message,
                        data = saveResult.ValidationResult
                    });
                }
            }
        }
    }
}