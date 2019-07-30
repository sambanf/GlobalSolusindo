using GlobalSolusindo.Business.BTSStatus;
using GlobalSolusindo.Business.BTSStatus.DML;
using GlobalSolusindo.Business.BTSStatus.EntryForm;
using GlobalSolusindo.Business.BTSStatus.Queries;
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
    public class BTSStatusController : ApiControllerBase
    {
        public BTSStatusController()
        {
        }

        [Route("btsStatus/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "BTSStatus_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (BTSStatusQuery btsStatusQuery = new BTSStatusQuery(Db))
            {
                var data = btsStatusQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, accessType, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("btsStatus/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "BTSStatus_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (BTSStatusEntryDataProvider btsStatusEntryDataProvider = new BTSStatusEntryDataProvider(Db, ActiveUser, AccessControl, new BTSStatusQuery(Db)))
            {
                var data = btsStatusEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, accessType, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("btsStatus/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]BTSStatusSearchFilter filter)
        {
            string accessType = "BTSStatus_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var btsStatusSearch = new BTSStatusSearch(Db))
            {
                var data = btsStatusSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, accessType, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("btsStatus")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]BTSStatusDTO btsStatus)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (btsStatus == null)
                throw new KairosException("Missing model parameter");

            if (btsStatus.BTSStatus_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var btsStatusCreateHandler = new BTSStatusCreateHandler(Db, ActiveUser, new BTSStatusValidator(), new BTSStatusFactory(Db, ActiveUser), new BTSStatusQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = btsStatusCreateHandler.Save(btsStatusDTO: btsStatus, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, "BTSStatus_Input", JsonConvert.SerializeObject(btsStatus), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, "BTSStatus_Input", JsonConvert.SerializeObject(btsStatus), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("btsStatus")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]BTSStatusDTO btsStatus)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (btsStatus == null)
                throw new KairosException("Missing model parameter");

            if (btsStatus.BTSStatus_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            BTSStatusQuery btsStatusQuery = new BTSStatusQuery();
            BTSStatusDTO ValueOld = new BTSStatusDTO();
            ValueOld = btsStatusQuery.GetByPrimaryKey(btsStatus.BTSStatus_PK);

            using (var btsStatusUpdateHandler = new BTSStatusUpdateHandler(Db, ActiveUser, new BTSStatusValidator(), new BTSStatusFactory(Db, ActiveUser), new BTSStatusQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = btsStatusUpdateHandler.Save(btsStatus, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, "BTSStatus_Edit", JsonConvert.SerializeObject(btsStatus), "Success", "", JsonConvert.SerializeObject(ValueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, "BTSStatus_Edit", JsonConvert.SerializeObject(btsStatus), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("btsStatus")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var btsStatusDeleteHandler = new BTSStatusDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_BTSStatus>>();

                    foreach (var id in ids)
                    {
                        result.Add(btsStatusDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    SaveLog(ActiveUser.Username, "BTSStatus_Delete", JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}