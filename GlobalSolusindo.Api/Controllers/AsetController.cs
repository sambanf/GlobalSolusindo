using GlobalSolusindo.Business.Aset;
using GlobalSolusindo.Business.Aset.DML;
using GlobalSolusindo.Business.Aset.EntryForm;
using GlobalSolusindo.Business.Aset.Queries;
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
    public class AsetController : ApiControllerBase
    {
        private const string createRole = "Aset_Input";
        private const string updateRole = "Aset_Edit";
        private const string readRole = "Aset_ViewAll";
        private const string deleteRole = "Aset_Delete";
        private const string importRole = "Aset_Import";

        public AsetController()
        {
        }

        [Route("aset/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (AsetQuery asetQuery = new AsetQuery(Db))
            {
                var data = asetQuery.GetByPrimaryKey(id);
                SaveLog("Aset", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("aset/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (AsetEntryDataProvider asetEntryDataProvider = new AsetEntryDataProvider(Db, ActiveUser, AccessControl, new AsetQuery(Db)))
            {
                var data = asetEntryDataProvider.Get(id);
                SaveLog("Aset", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("aset/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]AsetSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var asetSearch = new AsetSearch(Db))
            {
                var data = asetSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("aset")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]AsetDTO aset)
        {
            ThrowIfUserHasNoRole(createRole);
            if (aset == null)
                throw new KairosException("Missing model parameter");

            if (aset.Aset_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var asetCreateHandler = new AsetCreateHandler(Db, ActiveUser, new AsetValidator(), new AsetFactory(Db, ActiveUser), new AsetQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = asetCreateHandler.Save(asetDTO: aset, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("aset")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]AsetDTO aset)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (aset == null)
                throw new KairosException("Missing model parameter");

            if (aset.Aset_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var asetUpdateHandler = new AsetUpdateHandler(Db, ActiveUser, new AsetValidator(), new AsetFactory(Db, ActiveUser), new AsetQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = asetUpdateHandler.Save(aset, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("aset")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var asetDeleteHandler = new AsetDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Aset>>();

                    foreach (var id in ids)
                    {
                        result.Add(asetDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
