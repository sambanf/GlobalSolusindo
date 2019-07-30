using GlobalSolusindo.Api.Models;
using GlobalSolusindo.Business.BTS;
using GlobalSolusindo.Business.BTS.DML;
using GlobalSolusindo.Business.BTS.EntryForm;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.BTSStatus.Queries;
using GlobalSolusindo.Business.BTSTechnology;
using GlobalSolusindo.DataAccess;
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
    public class BTSController : ApiControllerBase
    {
        private const string createRole = "BTS_Input";
        private const string updateRole = "BTS_Edit";
        private const string readRole = "BTS_ViewAll";
        private const string deleteRole = "BTS_Delete";
        private const string importRole = "BTS_Import";

        public BTSController()
        {
        }

        [Route("bts/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (BTSQuery btsQuery = new BTSQuery(Db))
            {
                var data = btsQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("bts/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (BTSEntryDataProvider btsEntryDataProvider = new BTSEntryDataProvider(Db, ActiveUser, AccessControl, new BTSQuery(Db)))
            {
                var data = btsEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("bts/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]BTSSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var btsSearch = new BTSSearch(Db))
            {
                var data = btsSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("bts")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]BTSDTO bts)
        {
            ThrowIfUserHasNoRole(createRole);
            if (bts == null)
                throw new KairosException("Missing model parameter");

            if (bts.BTS_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var btsCreateHandler = new BTSCreateHandler(Db, ActiveUser, new BTSValidator(), new BTSFactory(Db, ActiveUser), new BTSQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = btsCreateHandler.Save(btsDTO: bts, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(bts), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(bts), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("bts")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]BTSDTO bts)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (bts == null)
                throw new KairosException("Missing model parameter");

            if (bts.BTS_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            BTSQuery btsQuery = new BTSQuery();
            BTSDTO ValueOld = new BTSDTO();
            ValueOld = btsQuery.GetByPrimaryKey(bts.BTS_PK);

            using (var btsUpdateHandler = new BTSUpdateHandler(Db, ActiveUser, new BTSValidator(), new BTSFactory(Db, ActiveUser), new BTSQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = btsUpdateHandler.Save(bts, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(bts), "Success", "", JsonConvert.SerializeObject(ValueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(bts), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("bts")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var btsDeleteHandler = new BTSDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_BTS>>();

                    foreach (var id in ids)
                    {
                        result.Add(btsDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }

        [Route("bts/import")]
        [HttpPost]
        public IHttpActionResult Import([FromBody]BTSImportDTO btsImportDTO)
        {
            ThrowIfUserHasNoRole(importRole);
            if (btsImportDTO == null)
                throw new KairosException("Missing model parameter");
            var importResult = new BTSImportExcelHandler(Db, ActiveUser, new BTSValidator(), new BTSFactory(Db, ActiveUser), new BTSTechnologyFactory(Db,ActiveUser), new BTSQuery(Db), AccessControl).ExecuteImport(btsImportDTO, DateTime.Now);
            SaveLog(ActiveUser.Username, importRole, JsonConvert.SerializeObject(btsImportDTO), "Success", "", "", "");
            return Ok(new SuccessResponse(importResult));
        }


        [Route("bts/export")]
        [HttpPost]
        public HttpResponseMessage Export([FromBody]BTSStatusSearchFilter filter)
        {
            BTSExport userExport = new BTSExport();
            SaveLog(ActiveUser.Username, "BTS_Export", JsonConvert.SerializeObject(filter), "Success", "", "", "");
            return userExport.Export(Db, "BTSUpload", filter);
        }
    }
}