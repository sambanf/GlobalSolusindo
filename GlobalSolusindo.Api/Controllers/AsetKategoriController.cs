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
        public AsetKategoriController()
        {
        }

        [Route("asetKategori/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "AsetKategori_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (AsetKategoriQuery asetKategoriQuery = new AsetKategoriQuery(Db))
            {
                var data = asetKategoriQuery.GetByPrimaryKey(id);
                SaveLog("AsetKategori", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("asetKategori/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "AsetKategori_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            using (AsetKategoriEntryDataProvider asetKategoriEntryDataProvider = new AsetKategoriEntryDataProvider(Db, ActiveUser, AccessControl, new AsetKategoriQuery(Db)))
            {
                var data = asetKategoriEntryDataProvider.Get(id);
                SaveLog("AsetKategori", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("asetKategori/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]AsetKategoriSearchFilter filter)
        {
            string accessType = "AsetKategori_ViewAll";
            ThrowIfUserCannotAccess(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var asetKategoriSearch = new AsetKategoriSearch(Db))
            {
                var data = asetKategoriSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("asetKategori")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]AsetKategoriDTO asetKategori)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (asetKategori == null)
                throw new KairosException("Missing model parameter");

            if (asetKategori.AsetKategori_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var asetKategoriCreateHandler = new AsetKategoriCreateHandler(Db, ActiveUser, new AsetKategoriValidator(), new AsetKategoriFactory(Db, ActiveUser), new AsetKategoriQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = asetKategoriCreateHandler.Save(asetKategoriDTO: asetKategori, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("asetKategori")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]AsetKategoriDTO asetKategori)
        {
            string accessType = "";
            ThrowIfUserCannotAccess(accessType);
            if (asetKategori == null)
                throw new KairosException("Missing model parameter");

            if (asetKategori.AsetKategori_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var asetKategoriUpdateHandler = new AsetKategoriUpdateHandler(Db, ActiveUser, new AsetKategoriValidator(), new AsetKategoriFactory(Db, ActiveUser), new AsetKategoriQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = asetKategoriUpdateHandler.Save(asetKategori, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("asetKategori")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserCannotAccess(accessType);

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
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }
}
