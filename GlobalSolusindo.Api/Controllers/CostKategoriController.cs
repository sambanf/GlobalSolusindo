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
        public CostKategoriController()
        {
        }

        [Route("costKategori/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "CostKategori_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (CostKategoriQuery costKategoriQuery = new CostKategoriQuery(Db))
            {
                var data = costKategoriQuery.GetByPrimaryKey(id);
                SaveLog("CostKategori", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("costKategori/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "CostKategori_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (CostKategoriEntryDataProvider costKategoriEntryDataProvider = new CostKategoriEntryDataProvider(Db, ActiveUser, AccessControl, new CostKategoriQuery(Db)))
            {
                var data = costKategoriEntryDataProvider.Get(id);
                SaveLog("CostKategori", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("costKategori/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]CostKategoriSearchFilter filter)
        {
            string accessType = "CostKategori_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var costKategoriSearch = new CostKategoriSearch(Db))
            {
                var data = costKategoriSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("costKategori")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]CostKategoriDTO costKategori)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (costKategori == null)
                throw new KairosException("Missing model parameter");

            if (costKategori.CostKategori_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var costKategoriCreateHandler = new CostKategoriCreateHandler(Db, ActiveUser, new CostKategoriValidator(), new CostKategoriFactory(Db, ActiveUser), new CostKategoriQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = costKategoriCreateHandler.Save(costKategoriDTO: costKategori, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("costKategori")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]CostKategoriDTO costKategori)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (costKategori == null)
                throw new KairosException("Missing model parameter");

            if (costKategori.CostKategori_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var costKategoriUpdateHandler = new CostKategoriUpdateHandler(Db, ActiveUser, new CostKategoriValidator(), new CostKategoriFactory(Db, ActiveUser), new CostKategoriQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = costKategoriUpdateHandler.Save(costKategori, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("costKategori")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserCannotAccess(accessType);

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
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }
}
