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
        public KotaController()
        {
        }

        [Route("kota/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "Kota_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (KotaQuery kotaQuery = new KotaQuery(Db))
            {
                var data = kotaQuery.GetByPrimaryKey(id);
                SaveLog("Kota", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("kota/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "Kota_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (KotaEntryDataProvider kotaEntryDataProvider = new KotaEntryDataProvider(Db, ActiveUser, AccessControl, new KotaQuery(Db)))
            {
                var data = kotaEntryDataProvider.Get(id);
                SaveLog("Kota", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("kota/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]KotaSearchFilter filter)
        {
            string accessType = "Kota_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var kotaSearch = new KotaSearch(Db))
            {
                var data = kotaSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("kota")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]KotaDTO kota)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (kota == null)
                throw new KairosException("Missing model parameter");

            if (kota.Kota_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var kotaCreateHandler = new KotaCreateHandler(Db, ActiveUser, new KotaValidator(), new KotaFactory(Db, ActiveUser), new KotaQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = kotaCreateHandler.Save(kotaDTO: kota, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("kota")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]KotaDTO kota)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (kota == null)
                throw new KairosException("Missing model parameter");

            if (kota.Kota_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var kotaUpdateHandler = new KotaUpdateHandler(Db, ActiveUser, new KotaValidator(), new KotaFactory(Db, ActiveUser), new KotaQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = kotaUpdateHandler.Save(kota, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("kota")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

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
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
