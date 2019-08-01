using GlobalSolusindo.Business.TipePekerjaan;
using GlobalSolusindo.Business.TipePekerjaan.EntryForm;
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
    public class TipePekerjaanController : ApiControllerBase
    {
        //private const string createRole = "TipePekerjaan_Input";
        //private const string updateRole = "TipePekerjaan_Edit";
        //private const string readRole = "TipePekerjaan_ViewAll";
        //private const string deleteRole = "TipePekerjaan_Delete";
        //private const string importRole = "TipePekerjaan_Import";

        private const string createRole = "";
        private const string updateRole = "";
        private const string readRole = "";
        private const string deleteRole = "";
        private const string importRole = "";

        public TipePekerjaanController()
        {
        }

        [Route("tipepekerjaan/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (TipePekerjaanQuery tipePekerjaanQuery = new TipePekerjaanQuery(Db))
            {
                var data = tipePekerjaanQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("tipepekerjaan/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0) ThrowIfUserHasNoRole(readRole);
            using (TipePekerjaanEntryDataProvider tipePekerjaanEntryDataProvider = new TipePekerjaanEntryDataProvider(Db, ActiveUser, AccessControl, new TipePekerjaanQuery(Db)))
            {
                var data = tipePekerjaanEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("tipepekerjaan/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]TipePekerjaanSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var tipePekerjaan = new TipePekerjaanQuery(Db))
            {
                var data = tipePekerjaan.Search(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = filter }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("tipepekerjaan/GetDropdownlistBySowAssign")]
        [HttpGet]
        public IHttpActionResult GetDropdownlistBySowAssign(int sowAssignFk)
        {
            ThrowIfUserHasNoRole(readRole);
            
            using (var tipePekerjaan = new TipePekerjaanQuery(Db))
            {
                var data = tipePekerjaan.GetDropdownBySowAssign(sowAssignFk);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = sowAssignFk }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("tipepekerjaan")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]TipePekerjaanDTO tipePekerjaan)
        {
            ThrowIfUserHasNoRole(createRole);
            if (tipePekerjaan == null)
                throw new KairosException("Missing model parameter");

            if (tipePekerjaan.TipePekerjaan_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var tipePekerjaanCreateHandler = new TipePekerjaanCreateHandler(Db, ActiveUser, new TipePekerjaanValidator(), new TipePekerjaanFactory(Db, ActiveUser), new TipePekerjaanQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = tipePekerjaanCreateHandler.Save(tipePekerjaanDTO: tipePekerjaan, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(tipePekerjaan), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(tipePekerjaan), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("tipepekerjaan")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]TipePekerjaanDTO tipePekerjaan)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (tipePekerjaan == null)
                throw new KairosException("Missing model parameter");

            if (tipePekerjaan.TipePekerjaan_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");
            TipePekerjaanQuery tipePekerjaanQuery = new TipePekerjaanQuery();
            TipePekerjaanDTO valueOld = new TipePekerjaanDTO();
            valueOld = tipePekerjaanQuery.GetByPrimaryKey(tipePekerjaan.TipePekerjaan_PK);

            using (var tipePekerjaanUpdateHandler = new TipePekerjaanUpdateHandler(Db, ActiveUser, new TipePekerjaanValidator(), new TipePekerjaanFactory(Db, ActiveUser), new TipePekerjaanQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = tipePekerjaanUpdateHandler.Save(tipePekerjaan, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(tipePekerjaan), "Success", "", JsonConvert.SerializeObject(valueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(tipePekerjaan), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("tipepekerjaan")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var tipePekerjaanDeleteHandler = new TipePekerjaanDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_TipePekerjaan>>();

                    foreach (var id in ids)
                    {
                        result.Add(tipePekerjaanDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}