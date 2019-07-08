using GlobalSolusindo.Business.Cabang;
using GlobalSolusindo.Business.Cabang.DML;
using GlobalSolusindo.Business.Cabang.EntryForm;
using GlobalSolusindo.Business.Cabang.Queries;
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
    public class CabangController : ApiControllerBase
    {
        private const string createRole = "Cabang_Input";
        private const string updateRole = "Cabang_Edit";
        private const string readRole = "Cabang_ViewAll";
        private const string deleteRole = "Cabang_Delete";
        private const string importRole = "Cabang_Import";
        public CabangController()
        {
        }

        [Route("cabang/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (CabangQuery cabangQuery = new CabangQuery(Db))
            {
                var data = cabangQuery.GetByPrimaryKey(id);
                SaveLog("Cabang", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("cabang/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        { 
            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (CabangEntryDataProvider cabangEntryDataProvider = new CabangEntryDataProvider(Db, ActiveUser, AccessControl, new CabangQuery(Db)))
            {
                var data = cabangEntryDataProvider.Get(id);
                SaveLog("Cabang", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("cabang/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]CabangSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var cabangSearch = new CabangSearch(Db))
            {
                var data = cabangSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("cabang")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]CabangDTO cabang)
        {
            ThrowIfUserHasNoRole(createRole);
            if (cabang == null)
                throw new KairosException("Missing model parameter");

            if (cabang.Cabang_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var cabangCreateHandler = new CabangCreateHandler(Db, ActiveUser, new CabangValidator(), new CabangFactory(Db, ActiveUser), new CabangQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = cabangCreateHandler.Save(cabangDTO: cabang, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("cabang")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]CabangDTO cabang)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (cabang == null)
                throw new KairosException("Missing model parameter");

            if (cabang.Cabang_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var cabangUpdateHandler = new CabangUpdateHandler(Db, ActiveUser, new CabangValidator(), new CabangFactory(Db, ActiveUser), new CabangQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = cabangUpdateHandler.Save(cabang, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("cabang")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var cabangDeleteHandler = new CabangDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Cabang>>();

                    foreach (var id in ids)
                    {
                        result.Add(cabangDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
