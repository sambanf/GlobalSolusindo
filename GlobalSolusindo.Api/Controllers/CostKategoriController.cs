using GlobalSolusindo.Business.CostKategori;
using GlobalSolusindo.Business.CostKategori.DML;
using GlobalSolusindo.Business.CostKategori.EntryForm;
using GlobalSolusindo.Business.CostKategori.Queries;
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
    public class CostKategoriController : ApiControllerBase
    {
        private const string createRole = "CostKategori_Input";
        private const string updateRole = "CostKategori_Edit";
        private const string readRole = "CostKategori_ViewAll";
        private const string deleteRole = "CostKategori_Delete";
        private const string importRole = "CostKategori_Import";

        public CostKategoriController()
        {
        }

        [Route("costKategori/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (CostKategoriQuery costKategoriQuery = new CostKategoriQuery(Db))
            {
                var data = costKategoriQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("costKategori/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (CostKategoriEntryDataProvider costKategoriEntryDataProvider = new CostKategoriEntryDataProvider(Db, ActiveUser, AccessControl, new CostKategoriQuery(Db)))
            {
                var data = costKategoriEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("costKategori/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]CostKategoriSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var costKategoriSearch = new CostKategoriSearch(Db))
            {
                var data = costKategoriSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("costKategori")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]CostKategoriDTO costKategori)
        {
            ThrowIfUserHasNoRole(createRole);
            if (costKategori == null)
                throw new KairosException("Missing model parameter");

            if (costKategori.CostKategori_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var costKategoriCreateHandler = new CostKategoriCreateHandler(Db, ActiveUser, new CostKategoriValidator(), new CostKategoriFactory(Db, ActiveUser), new CostKategoriQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = costKategoriCreateHandler.Save(costKategoriDTO: costKategori, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(costKategori), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(costKategori), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("costKategori")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]CostKategoriDTO costKategori)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (costKategori == null)
                throw new KairosException("Missing model parameter");

            if (costKategori.CostKategori_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            CostKategoriQuery costKategoriQuery = new CostKategoriQuery();
            CostKategoriDTO valueOld = new CostKategoriDTO();
            valueOld = costKategoriQuery.GetByPrimaryKey(costKategori.CostKategori_PK);

            using (var costKategoriUpdateHandler = new CostKategoriUpdateHandler(Db, ActiveUser, new CostKategoriValidator(), new CostKategoriFactory(Db, ActiveUser), new CostKategoriQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = costKategoriUpdateHandler.Save(costKategori, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(costKategori), "Success", "", JsonConvert.SerializeObject(valueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(costKategori), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                        
                }
            }
        }

        [Route("costKategori")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var costKategoriDeleteHandler = new CostKategoriDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_CostKategori>>();

                    foreach (var id in ids)
                    {
                        result.Add(costKategoriDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}