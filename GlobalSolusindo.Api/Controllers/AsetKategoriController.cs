using GlobalSolusindo.Business.AsetKategori;
using GlobalSolusindo.Business.AsetKategori.DML;
using GlobalSolusindo.Business.AsetKategori.EntryForm;
using GlobalSolusindo.Business.AsetKategori.Queries;
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
    public class AsetKategoriController : ApiControllerBase
    {
        private const string createRole = "AsetKategori_Input";
        private const string updateRole = "AsetKategori_Edit";
        private const string readRole = "AsetKategori_ViewAll";
        private const string deleteRole = "AsetKategori_Delete";
        private const string importRole = "AsetKategori_Import";

        public AsetKategoriController()
        {
        }

        [Route("asetKategori/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (AsetKategoriQuery asetKategoriQuery = new AsetKategoriQuery(Db))
            {
                var data = asetKategoriQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("asetKategori/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (AsetKategoriEntryDataProvider asetKategoriEntryDataProvider = new AsetKategoriEntryDataProvider(Db, ActiveUser, AccessControl, new AsetKategoriQuery(Db)))
            {
                var data = asetKategoriEntryDataProvider.Get(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("asetKategori/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]AsetKategoriSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var asetKategoriSearch = new AsetKategoriSearch(Db))
            {
                var data = asetKategoriSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("asetKategori")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]AsetKategoriDTO asetKategori)
        {
            ThrowIfUserHasNoRole(createRole);
            if (asetKategori == null)
                throw new KairosException("Missing model parameter");

            if (asetKategori.AsetKategori_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var asetKategoriCreateHandler = new AsetKategoriCreateHandler(Db, ActiveUser, new AsetKategoriValidator(), new AsetKategoriFactory(Db, ActiveUser), new AsetKategoriQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = asetKategoriCreateHandler.Save(asetKategoriDTO: asetKategori, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(asetKategori), "Success", "","",JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(asetKategori), "Error", JsonConvert.SerializeObject(saveResult.Message), "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("asetKategori")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]AsetKategoriDTO asetKategori)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (asetKategori == null)
                throw new KairosException("Missing model parameter");

            if (asetKategori.AsetKategori_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            AsetKategoriQuery asetKategoriQuery = new AsetKategoriQuery();
            AsetKategoriDTO valueOld = new AsetKategoriDTO();
            valueOld = asetKategoriQuery.GetByPrimaryKey(asetKategori.AsetKategori_PK);

            using (var asetKategoriUpdateHandler = new AsetKategoriUpdateHandler(Db, ActiveUser, new AsetKategoriValidator(), new AsetKategoriFactory(Db, ActiveUser), new AsetKategoriQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = asetKategoriUpdateHandler.Save(asetKategori, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(asetKategori), "Success", "", JsonConvert.SerializeObject(valueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(asetKategori), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("asetKategori")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var asetKategoriDeleteHandler = new AsetKategoriDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_AsetKategori>>();

                    foreach (var id in ids)
                    {
                        result.Add(asetKategoriDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
