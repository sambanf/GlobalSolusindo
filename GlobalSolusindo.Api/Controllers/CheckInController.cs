using GlobalSolusindo.Business.CheckIn;
using GlobalSolusindo.Business.CheckIn.DML;
using GlobalSolusindo.Business.CheckIn.EntryForm;
using GlobalSolusindo.Business.CheckIn.Queries;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class CheckInController : ApiControllerBase
    {
        public CheckInController()
        {
        }

        [Route("checkIn/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "CheckIn_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (CheckInQuery checkInQuery = new CheckInQuery(Db))
            {
                var data = checkInQuery.GetByPrimaryKey(id);
                SaveLog("CheckIn", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("checkIn/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "CheckIn_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (CheckInEntryDataProvider checkInEntryDataProvider = new CheckInEntryDataProvider(Db, ActiveUser, AccessControl, new CheckInQuery(Db)))
            {
                var data = checkInEntryDataProvider.Get(id);
                SaveLog("CheckIn", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("checkIn/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]CheckInSearchFilter filter)
        {
            string accessType = "CheckIn_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var checkInSearch = new CheckInSearch(Db))
            {
                var data = checkInSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("checkIn")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]CheckInDTO checkIn)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (checkIn == null)
                throw new KairosException("Missing model parameter");

            if (checkIn.CheckIn_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var checkInCreateHandler = new CheckInCreateHandler(Db, ActiveUser, new CheckInValidator(), new CheckInFactory(Db, ActiveUser), new CheckInQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = checkInCreateHandler.Save(checkInDTO: checkIn, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("checkIn")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]CheckInDTO checkIn)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (checkIn == null)
                throw new KairosException("Missing model parameter");

            if (checkIn.CheckIn_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var checkInUpdateHandler = new CheckInUpdateHandler(Db, ActiveUser, new CheckInValidator(), new CheckInFactory(Db, ActiveUser), new CheckInQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = checkInUpdateHandler.Save(checkIn, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("checkIn")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var checkInDeleteHandler = new CheckInDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblT_CheckIn>>();

                    foreach (var id in ids)
                    {
                        result.Add(checkInDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }
}
