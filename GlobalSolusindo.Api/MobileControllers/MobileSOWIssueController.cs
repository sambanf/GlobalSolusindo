using GlobalSolusindo.Business.SOWIssue;
using GlobalSolusindo.Business.SOWIssue.DML;
using GlobalSolusindo.Business.SOWIssue.EntryForm;
using GlobalSolusindo.Business.SOWIssue.Queries;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.MobileControllers
{
    public class SOWIssueController : ApiControllerBase
    {
        public SOWIssueController()
        {
        }

        [Route("mobile/sowIssue/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "SOWIssue_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (SOWIssueQuery sowIssueQuery = new SOWIssueQuery(Db))
            {
                var data = sowIssueQuery.GetByPrimaryKey(id);
                SaveLog("SOWIssue", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mobile/sowIssue/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "SOWIssue_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (SOWIssueEntryDataProvider sowIssueEntryDataProvider = new SOWIssueEntryDataProvider(Db, ActiveUser, AccessControl, new SOWIssueQuery(Db)))
            {
                var data = sowIssueEntryDataProvider.Get(id);
                SaveLog("SOWIssue", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mobile/issueHistory")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]SOWIssueSearchFilter filter)
        {
            string accessType = "SOWIssue_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var sowIssueQuery = new SOWIssueQuery(Db))
            {
                var data = sowIssueQuery.Search(filter);
                var mobileResponse = data.Records.Select(x => new
                {
                    issueId = x.SOWIssue_PK,
                    date = x.CreatedDate.ToString("dd-MM-yyyy"),
                    content = x.Description,
                    photo = x.FilePhotoInBase64,
                });
                return Ok(mobileResponse);
            }
        }

        [Route("mobile/doTaskReport")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]SOWIssueDTO sowIssue)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (sowIssue == null)
                throw new KairosException("Missing model parameter");

            if (sowIssue.SOWIssue_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var sowIssueCreateHandler = new SOWIssueCreateHandler(Db, ActiveUser, new SOWIssueValidator(), new SOWIssueFactory(Db, ActiveUser), new SOWIssueQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = sowIssueCreateHandler.Save(sowIssueDTO: sowIssue, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new
                        {
                            issueId = saveResult.Model.Model.SOWIssue_PK,
                            success = true,
                            msg = "Laporan kendala berhasil."
                        });
                    return Ok(new
                    {
                       
                        status = false,
                        msg = saveResult.ValidationResult.Errors.Count > 0 ? saveResult.ValidationResult.Errors[0].Message : saveResult.Message,
                        validationResult = saveResult.ValidationResult
                    });
                }
            }
        }

        [Route("mobile/doTaskReport")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]SOWIssueDTO sowIssue)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (sowIssue == null)
                throw new KairosException("Missing model parameter");

            if (sowIssue.SOWIssue_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var sowIssueUpdateHandler = new SOWIssueUpdateHandler(Db, ActiveUser, new SOWIssueValidator(), new SOWIssueFactory(Db, ActiveUser), new SOWIssueQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = sowIssueUpdateHandler.Save(sowIssue, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new
                        {
                            issueId = saveResult.Model.Model.SOWIssue_PK,
                            success = true,
                            msg = "Update laporan kendala berhasil."
                        });
                    return Ok(new
                    {
                        status = false,
                        msg = saveResult.ValidationResult.Errors.Count > 0 ? saveResult.ValidationResult.Errors[0].Message : saveResult.Message,
                        validationResult = saveResult.ValidationResult
                    });
                }
            }
        }

        [Route("mobile/sowIssue")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var sowIssueDeleteHandler = new SOWIssueDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblT_SOWIssue>>();

                    foreach (var id in ids)
                    {
                        result.Add(sowIssueDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();

                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
