using GlobalSolusindo.Business.IzinCuti;
using GlobalSolusindo.Business.IzinCuti.DML;
using GlobalSolusindo.Business.IzinCuti.EntryForm;
using GlobalSolusindo.Business.IzinCuti.Queries;
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
    public class IzinCutiController : ApiControllerBase
    {
        private const string createRole = "IzinCuti_Input";
        private const string updateRole = "IzinCuti_Edit";
        private const string readRole = "IzinCuti_ViewAll";
        private const string deleteRole = "IzinCuti_Delete";
        private const string importRole = "IzinCuti_Import";
        private const string approvalRole = "IzinCuti_Approval";

        public IzinCutiController()
        {
        }

        [Route("izinCuti/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (IzinCutiQuery izinCutiQuery = new IzinCutiQuery(Db))
            {
                var data = izinCutiQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("izinCuti/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (IzinCutiEntryDataProvider izinCutiEntryDataProvider = new IzinCutiEntryDataProvider(Db, ActiveUser, AccessControl, new IzinCutiQuery(Db)))
            {
                var data = izinCutiEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("izinCuti/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]IzinCutiSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var izinCutiSearch = new IzinCutiSearch(Db))
            {
                var data = izinCutiSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("izinCuti")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]IzinCutiDTO izinCuti)
        {
            ThrowIfUserHasNoRole(createRole);
            if (izinCuti == null)
                throw new KairosException("Missing model parameter");

            if (izinCuti.IzinCuti_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var izinCutiCreateHandler = new IzinCutiCreateHandler(Db, ActiveUser, new IzinCutiValidator(), new IzinCutiFactory(Db, ActiveUser), new IzinCutiQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = izinCutiCreateHandler.Save(izinCutiDTO: izinCuti, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(izinCuti), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {

                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(izinCuti), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("izinCuti")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]IzinCutiDTO izinCuti)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (izinCuti == null)
                throw new KairosException("Missing model parameter");

            if (izinCuti.IzinCuti_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            IzinCutiQuery izinCutiQuery = new IzinCutiQuery();
            IzinCutiDTO valueOld = new IzinCutiDTO();
            valueOld = izinCutiQuery.GetByPrimaryKey(izinCuti.IzinCuti_PK);

            using (var izinCutiUpdateHandler = new IzinCutiUpdateHandler(Db, ActiveUser, new IzinCutiValidator(), new IzinCutiFactory(Db, ActiveUser), new IzinCutiQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = izinCutiUpdateHandler.Save(izinCuti, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(izinCuti), "Success", "", JsonConvert.SerializeObject(valueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(izinCuti), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("izinCuti/approval")]
        [HttpPut]
        public IHttpActionResult Approval([FromBody]IzinCutiApprovalModel izinCutiApproval)
        {
            ThrowIfUserHasNoRole(approvalRole);
            if (izinCutiApproval == null)
                throw new KairosException("Missing model parameter");

            if (izinCutiApproval.IzinCuti_PK == 0)
                throw new KairosException("Approval is only allowed for a non zero ('0') Id of izin cuti.");

            using (var izinCutiApprovalHandler = new IzinCutiApprovalHandler(Db, ActiveUser, new IzinCutiValidator(), new IzinCutiFactory(Db, ActiveUser), new IzinCutiQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = izinCutiApprovalHandler.Save(izinCutiApproval, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, approvalRole, JsonConvert.SerializeObject(izinCutiApproval), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, approvalRole, JsonConvert.SerializeObject(izinCutiApproval), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("izinCuti")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var izinCutiDeleteHandler = new IzinCutiDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblT_IzinCuti>>();

                    foreach (var id in ids)
                    {
                        result.Add(izinCutiDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}