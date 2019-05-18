using GlobalSolusindo.Business.IzinCuti;
using GlobalSolusindo.Business.IzinCuti.DML;
using GlobalSolusindo.Business.IzinCuti.EntryForm;
using GlobalSolusindo.Business.IzinCuti.Queries;
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
    public class IzinCutiController : ApiControllerBase
    {
        public IzinCutiController()
        {
        }

        [Route("izinCuti/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "IzinCuti_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (IzinCutiQuery izinCutiQuery = new IzinCutiQuery(Db))
            {
                var data = izinCutiQuery.GetByPrimaryKey(id);
                SaveLog("IzinCuti", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("izinCuti/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "IzinCuti_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (IzinCutiEntryDataProvider izinCutiEntryDataProvider = new IzinCutiEntryDataProvider(Db, ActiveUser, AccessControl, new IzinCutiQuery(Db)))
            {
                var data = izinCutiEntryDataProvider.Get(id);
                SaveLog("IzinCuti", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("izinCuti/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]IzinCutiSearchFilter filter)
        {
            string accessType = "IzinCuti_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var izinCutiSearch = new IzinCutiSearch(Db))
            {
                var data = izinCutiSearch.GetDataByFilter(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("izinCuti")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]IzinCutiDTO izinCuti)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (izinCuti == null)
                throw new KairosException("Missing model parameter");

            if (izinCuti.IzinCuti_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var izinCutiCreateHandler = new IzinCutiCreateHandler(Db, ActiveUser, new IzinCutiValidator(), new IzinCutiFactory(Db, ActiveUser), new IzinCutiQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                { 
                    var saveResult = izinCutiCreateHandler.Save(izinCutiDTO: izinCuti, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        } 

        [Route("izinCuti")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]IzinCutiDTO izinCuti)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (izinCuti == null)
                throw new KairosException("Missing model parameter");

            if (izinCuti.IzinCuti_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var izinCutiUpdateHandler = new IzinCutiUpdateHandler(Db, ActiveUser, new IzinCutiValidator(), new IzinCutiFactory(Db, ActiveUser), new IzinCutiQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = izinCutiUpdateHandler.Save(izinCuti, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("izinCuti/approval")]
        [HttpPut]
        public IHttpActionResult Approval([FromBody]IzinCutiApprovalModel izinCutiApproval)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (izinCutiApproval == null)
                throw new KairosException("Missing model parameter");

            if (izinCutiApproval.IzinCuti_PK == 0)
                throw new KairosException("Approval is only allowed for a non zero ('0') Id of izin cuti.");

            using (var izinCutiApprovalHandler = new IzinCutiApprovalHandler(Db, ActiveUser, new IzinCutiValidator(), new IzinCutiFactory(Db, ActiveUser), new IzinCutiQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = izinCutiApprovalHandler.Save(izinCutiApproval, DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("izinCuti")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var izinCutiDeleteHandler = new IzinCutiDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblT_IzinCuti>>();

                    foreach (var id in ids)
                    {
                        result.Add(izinCutiDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
