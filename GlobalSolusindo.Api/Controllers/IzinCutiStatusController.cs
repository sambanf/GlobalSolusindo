using GlobalSolusindo.Business.IzinCutiStatus;
using GlobalSolusindo.Business.IzinCutiStatus.DML;
using GlobalSolusindo.Business.IzinCutiStatus.EntryForm;
using GlobalSolusindo.Business.IzinCutiStatus.Queries;
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
    public class IzinCutiStatusController : ApiControllerBase
    {
        public IzinCutiStatusController()
        {
        }

        [Route("izinCutiStatus/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "IzinCutiStatus_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (IzinCutiStatusQuery izinCutiStatusQuery = new IzinCutiStatusQuery(Db))
            {
                var data = izinCutiStatusQuery.GetByPrimaryKey(id);
                SaveLog("IzinCutiStatus", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("izinCutiStatus/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "IzinCutiStatus_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (IzinCutiStatusEntryDataProvider izinCutiStatusEntryDataProvider = new IzinCutiStatusEntryDataProvider(Db, ActiveUser, AccessControl, new IzinCutiStatusQuery(Db)))
            {
                var data = izinCutiStatusEntryDataProvider.Get(id);
                SaveLog("IzinCutiStatus", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("izinCutiStatus/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]IzinCutiStatusSearchFilter filter)
        {
            string accessType = "IzinCutiStatus_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var izinCutiStatusSearch = new IzinCutiStatusSearch(Db))
            {
                var data = izinCutiStatusSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("izinCutiStatus")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]IzinCutiStatusDTO izinCutiStatus)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (izinCutiStatus == null)
                throw new KairosException("Missing model parameter");

            if (izinCutiStatus.IzinCutiStatus_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var izinCutiStatusCreateHandler = new IzinCutiStatusCreateHandler(Db, ActiveUser, new IzinCutiStatusValidator(), new IzinCutiStatusFactory(Db, ActiveUser), new IzinCutiStatusQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = izinCutiStatusCreateHandler.Save(izinCutiStatusDTO: izinCutiStatus, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("izinCutiStatus")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]IzinCutiStatusDTO izinCutiStatus)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (izinCutiStatus == null)
                throw new KairosException("Missing model parameter");

            if (izinCutiStatus.IzinCutiStatus_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var izinCutiStatusUpdateHandler = new IzinCutiStatusUpdateHandler(Db, ActiveUser, new IzinCutiStatusValidator(), new IzinCutiStatusFactory(Db, ActiveUser), new IzinCutiStatusQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = izinCutiStatusUpdateHandler.Save(izinCutiStatus, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("izinCutiStatus")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserCannotAccess(accessType);

            using (var izinCutiStatusDeleteHandler = new IzinCutiStatusDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_IzinCutiStatus>>();

                    foreach (var id in ids)
                    {
                        result.Add(izinCutiStatusDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }
}
