using GlobalSolusindo.Business.CheckIn.MobileCheckIn;
using GlobalSolusindo.Business.CheckIn.MobileCheckOut;
using GlobalSolusindo.Business.CheckIn.Queries;
using Kairos;
using System;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.MobileControllers
{
    public class MobileCheckInController : ApiControllerBase
    {
        public MobileCheckInController()
        {
        }

        [Route("mobile/doCheckIn")]
        [HttpPost]
        public IHttpActionResult DoCheckIn([FromBody]MobileCheckInDTO checkIn)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (checkIn == null)
                throw new KairosException("Missing model parameter");

            if (checkIn.CheckIn_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var doCheckIn = new DoCheckIn(Db, ActiveUser, new CheckInValidator(), new CheckInFactory(Db, ActiveUser), new CheckInQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = doCheckIn.Save(checkInDTO: checkIn, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new
                        {
                            status = true,
                            msg = "Check in success.",
                            checkInID = saveResult.Model.Model.CheckIn_PK
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

        [Route("mobile/doCheckOut")]
        [HttpPost]
        public IHttpActionResult DoCheckOut([FromBody]MobileCheckOutDTO checkOut)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (checkOut == null)
                throw new KairosException("Missing model parameter");

            using (var doCheckOut = new DoCheckOut(Db, ActiveUser, new CheckOutValidator(), new CheckOutFactory(Db, ActiveUser), new CheckInQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = doCheckOut.Save(checkOutDTO: checkOut, dateStamp: DateTime.UtcNow);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new
                        {
                            status = true,
                            msg = "Check out success.",
                            checkInID = saveResult.Model.Model.CheckIn_PK
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
