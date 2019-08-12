using GlobalSolusindo.Business.SOW;
using GlobalSolusindo.Business.SOW.DML;
using GlobalSolusindo.Business.SOW.EntryForm;
using GlobalSolusindo.Business.SOW.InfoForm;
using GlobalSolusindo.Api.Models;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Business.SOWAssign;
using GlobalSolusindo.Business.SOWTrack;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Transactions;
using System.Web.Http;
using GlobalSolusindo.Business.TaskList.Queries;
using GlobalSolusindo.Business.Cost.Queries;

namespace GlobalSolusindo.Api.Controllers
{
    public class SOWController : ApiControllerBase
    {
        private const string createRole = "SOW_Input";
        private const string updateRole = "SOW_Edit";
        private const string readRole = "SOW_ViewAll";
        private const string deleteRole = "SOW_Delete";
        private const string importRole = "SOW_Import";
        private const string approvalRole = "SOW_Approval";
        public SOWController()
        {
        }

        [Route("sow/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (SOWQuery sowQuery = new SOWQuery(Db))
            {
                var data = sowQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("sow/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0) ThrowIfUserHasNoRole(readRole);

            using (SOWEntryDataProvider sowEntryDataProvider = new SOWEntryDataProvider(Db, ActiveUser, AccessControl, new SOWQuery(Db)))
            {
                var data = sowEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("sow/info/{id}")]
        [HttpGet]
        public IHttpActionResult GetInfo(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (SOWInfoDataProvider sowEntryDataProvider = new SOWInfoDataProvider(Db, ActiveUser, AccessControl, new SOWQuery(Db)))
            {
                var data = sowEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("sow/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]SOWSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            filter.User = ActiveUser;
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var sowQuery = new SOWQuery(Db))
            {
                var data = sowQuery.Search(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = filter }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("sow")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]SOWDTO sow)
        {
            ThrowIfUserHasNoRole(createRole);
            if (sow == null)
                throw new KairosException("Missing model parameter");

            if (sow.SOW_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var sowCreateHandler = new SOWCreateHandler(Db, ActiveUser, new SOWValidator(), new SOWFactory(Db, ActiveUser), new SOWAssignFactory(Db, ActiveUser), new SOWTrackFactory(Db, ActiveUser), new SOWQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = sowCreateHandler.Save(sowDTO: sow, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(sow), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(sow), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("sow")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]SOWDTO sow)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (sow == null)
                throw new KairosException("Missing model parameter");

            if (sow.SOW_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            SOWQuery sowQuery = new SOWQuery();
            SOWDTO valueOld = new SOWDTO();
            valueOld = sowQuery.GetByPrimaryKey(sow.SOW_PK);

            using (var sowUpdateHandler = new SOWUpdateHandler(Db, ActiveUser, new SOWValidator(), new SOWFactory(Db, ActiveUser), new SOWAssignFactory(Db, ActiveUser), new SOWTrackFactory(Db, ActiveUser), new SOWQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = sowUpdateHandler.Save(sow, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(sow), "Success", "", JsonConvert.SerializeObject(valueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(sow), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("sow/approval")]
        [HttpPut]
        public IHttpActionResult Approve([FromBody]SOWApprovalDTO sOWApproval)
        {
            ThrowIfUserHasNoRole(approvalRole);
            if (sOWApproval == null)
                throw new KairosException("Missing model parameter");

            if (sOWApproval.SOW_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var sOWApprovalHandler = new SOWApprovalHandler(Db, ActiveUser, new SOWValidator(), new SOWFactory(Db, ActiveUser), new SOWAssignFactory(Db, ActiveUser), new SOWTrackFactory(Db, ActiveUser), new SOWQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = sOWApprovalHandler.Save(sOWApproval, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, approvalRole, JsonConvert.SerializeObject(sOWApproval), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, approvalRole, JsonConvert.SerializeObject(sOWApproval), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("sow")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var sowDeleteHandler = new SOWDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblT_SOW>>();

                    foreach (var id in ids)
                    {
                        result.Add(sowDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }



        [Route("sow/import")]
        [HttpPost]
        public IHttpActionResult Import([FromBody]SOWImportDTO SOWImportDTO)
        {
            //ThrowIfUserHasNoRole(importRole);

            if (SOWImportDTO == null)
                throw new KairosException("Missing model parameter");
            
            var importResult = new SOWImportExcelHandler(Db, ActiveUser, new SOWValidator(), new SOWFactory(Db, ActiveUser), new SOWAssignFactory(Db, ActiveUser), new SOWQuery(Db), AccessControl).ExecuteImport(SOWImportDTO, DateTime.Now);
            SaveLog(ActiveUser.Username, importRole, JsonConvert.SerializeObject(SOWImportDTO), "Success", "", "", "");
            return Ok(new SuccessResponse(importResult));
        }

        [Route("SOW/export")]
        [HttpPost]
        public HttpResponseMessage Export([FromBody]TaskListSearchFilter filter)
        {
            string accessType = "SOW_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            SOWExport SOWExport = new SOWExport();
            SaveLog(ActiveUser.Username, accessType, JsonConvert.SerializeObject(filter), "Success", "", "", "");
            return SOWExport.Export(Db, ActiveUser, "SOWUpload", filter);
        }

        [Route("SOW/exportviewall")]
        [HttpPost]
        public HttpResponseMessage ExportViewAll([FromBody]TaskListSearchFilter filter)
        {
            string accessType = "SOW_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            SOWExport SOWExport = new SOWExport();
            //SaveLog(ActiveUser.Username, accessType, JsonConvert.SerializeObject(filter), "Success", "", "", "");
            return SOWExport.ExportViewAll(Db, ActiveUser, "SOWViewAll", filter);
        }


        [Route("sow/link")]
        [HttpGet]
        public IHttpActionResult Link([FromUri]CostSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);

            using (var sowSearch = new TaskListSearch(Db))
            {
                var data = sowSearch.GetLink(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }

        }

        [Route("sow/issue")]
        [HttpGet]
        public IHttpActionResult Issue([FromUri]CostSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);

            using (var sowSearch = new TaskListSearch(Db))
            {
                var data = sowSearch.GetIssue(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }

        }


        [Route("sow/sowname")]
        [HttpGet]
        public IHttpActionResult Sowname([FromUri]SOWSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);

            using (var sowSearch = new TaskListSearch(Db))
            {
                var data = sowSearch.GetSOWName(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }

        }

    }
}
