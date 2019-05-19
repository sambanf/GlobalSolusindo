using GlobalSolusindo.Business.SOWResult;
using Kairos;
using System;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.MobileControllers
{
    public class MobileSOWResultController : ApiControllerBase
    {
        public MobileSOWResultController()
        {
        }

        [Route("mobile/doSubmitUrl")]
        [HttpPost]
        public IHttpActionResult DoSubmitUrl([FromBody]SOWResultDTO sowResultDTO)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (sowResultDTO == null)
                throw new KairosException("Missing model parameter");

            if (sowResultDTO.SOWResult_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var createHandler = new SOWResultCreateHandler(Db, ActiveUser, new SOWResultValidator(), new SOWResultFactory(Db, ActiveUser), new SOWResultQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = createHandler.Save(sowResultDTO: sowResultDTO, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new
                        {
                            status = true,
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

        [Route("mobile/doCloseTask")]
        [HttpPost]
        public IHttpActionResult DoSOWResult([FromBody]SOWResultDTO sowResult)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (sowResult == null)
                throw new KairosException("Missing model parameter");

            using (var updateHandler = new SOWResultUpdateHandler(Db, ActiveUser, new SOWResultValidator(), new SOWResultFactory(Db, ActiveUser), new SOWResultQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = updateHandler.Save(sowResultDTO: sowResult, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new
                        {
                            status = true
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
    }
}
