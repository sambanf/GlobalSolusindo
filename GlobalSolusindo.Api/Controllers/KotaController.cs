using GlobalSolusindo.Business.Kota;
using GlobalSolusindo.Business.Kota.DML;
using GlobalSolusindo.Business.Kota.EntryForm;
using GlobalSolusindo.Business.Kota.Queries;
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
    public class KotaController : ApiControllerBase
    {
        private const string createRole = "Kota_Input";
        private const string updateRole = "Kota_Edit";
        private const string readRole = "Kota_ViewAll";
        private const string deleteRole = "Kota_Delete";
        private const string importRole = "Kota_Import";

        public KotaController()
        {
        }

        [Route("kota/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (KotaQuery kotaQuery = new KotaQuery(Db))
            {
                var data = kotaQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("kota/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (KotaEntryDataProvider kotaEntryDataProvider = new KotaEntryDataProvider(Db, ActiveUser, AccessControl, new KotaQuery(Db)))
            {
                var data = kotaEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("kota/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]KotaSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var kotaSearch = new KotaSearch(Db))
            {
                var data = kotaSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("kota")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]KotaDTO kota)
        {
            ThrowIfUserHasNoRole(createRole);
            if (kota == null)
                throw new KairosException("Missing model parameter");

            if (kota.Kota_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var kotaCreateHandler = new KotaCreateHandler(Db, ActiveUser, new KotaValidator(), new KotaFactory(Db, ActiveUser), new KotaQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = kotaCreateHandler.Save(kotaDTO: kota, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(kota), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(kota), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("kota")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]KotaDTO kota)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (kota == null)
                throw new KairosException("Missing model parameter");

            if (kota.Kota_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            KotaQuery kotaQuery = new KotaQuery();
            KotaDTO valueOld = new KotaDTO();
            valueOld = kotaQuery.GetByPrimaryKey(kota.Kota_PK);

            using (var kotaUpdateHandler = new KotaUpdateHandler(Db, ActiveUser, new KotaValidator(), new KotaFactory(Db, ActiveUser), new KotaQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = kotaUpdateHandler.Save(kota, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(kota), "Success", "", JsonConvert.SerializeObject(valueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(kota), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("kota")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var kotaDeleteHandler = new KotaDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Kota>>();

                    foreach (var id in ids)
                    {
                        result.Add(kotaDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}