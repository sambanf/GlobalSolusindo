using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.KategoriJabatan;
using GlobalSolusindo.Identity.KategoriJabatan.DML;
using GlobalSolusindo.Identity.KategoriJabatan.EntryForm;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class KategoriJabatanController : ApiControllerBase
    {
        private const string createRole = "KategoriJabatan_Input";
        private const string updateRole = "KategoriJabatan_Edit";
        private const string readRole = "KategoriJabatan_ViewAll";
        private const string deleteRole = "KategoriJabatan_Delete";
        private const string importRole = "KategoriJabatan_Import";

        public KategoriJabatanController()
        {
        }

        [Route("kategoriJabatan/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (KategoriJabatanQuery kategoriJabatanQuery = new KategoriJabatanQuery(Db))
            {
                var data = kategoriJabatanQuery.GetByPrimaryKey(id);
                SaveLog("KategoriJabatan", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("kategoriJabatan/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (KategoriJabatanEntryDataProvider kategoriJabatanEntryDataProvider = new KategoriJabatanEntryDataProvider(Db, ActiveUser, AccessControl, new KategoriJabatanQuery(Db)))
            {
                var data = kategoriJabatanEntryDataProvider.Get(id);
                SaveLog("KategoriJabatan", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("kategoriJabatan/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]KategoriJabatanSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var kategoriJabatanSearch = new KategoriJabatanSearch(Db))
            {
                var data = kategoriJabatanSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("kategoriJabatan")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]KategoriJabatanDTO kategoriJabatan)
        {
            ThrowIfUserHasNoRole(createRole);
            if (kategoriJabatan == null)
                throw new KairosException("Missing model parameter");

            if (kategoriJabatan.KategoriJabatan_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var kategoriJabatanCreateHandler = new KategoriJabatanCreateHandler(Db, ActiveUser, new KategoriJabatanValidator(), new KategoriJabatanFactory(Db, ActiveUser), new KategoriJabatanQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = kategoriJabatanCreateHandler.Save(kategoriJabatanDTO: kategoriJabatan, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("kategoriJabatan")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]KategoriJabatanDTO kategoriJabatan)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (kategoriJabatan == null)
                throw new KairosException("Missing model parameter");

            if (kategoriJabatan.KategoriJabatan_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var kategoriJabatanUpdateHandler = new KategoriJabatanUpdateHandler(Db, ActiveUser, new KategoriJabatanValidator(), new KategoriJabatanFactory(Db, ActiveUser), new KategoriJabatanQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = kategoriJabatanUpdateHandler.Save(kategoriJabatan, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("kategoriJabatan")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var kategoriJabatanDeleteHandler = new KategoriJabatanDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_KategoriJabatan>>();

                    foreach (var id in ids)
                    {
                        result.Add(kategoriJabatanDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
