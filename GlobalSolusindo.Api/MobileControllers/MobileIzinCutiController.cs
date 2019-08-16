using GlobalSolusindo.Business.IzinCuti;
using GlobalSolusindo.Business.IzinCuti.DML;
using GlobalSolusindo.Business.IzinCuti.Queries;
using Kairos;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.MobileControllers
{
    public class MobileIzinCutiRequest
    {
        [JsonProperty("userID")]
        public int UserId { get; set; }

        [JsonProperty("dateStart")]
        public DateTime DateStart { get; set; }

        [JsonProperty("dateEnd")]
        public DateTime DateEnd { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("photo")]
        public string Photo { get; set; }

        public IzinCutiDTO ToIzinCutiDTO()
        {
            return new IzinCutiDTO
            {
                User_FK = UserId,
                TglMulai = DateStart,
                TglSelesai = DateEnd,
                Alasan = Description,
                FilePhotoInBase64 = Photo
            };
        }
    }

    public class MobileIzinCutiController : ApiControllerBase
    {
        /// <summary>
        /// Pengajuan izin cuti
        /// </summary>
        /// <param name="izinCutiRequest"></param>
        /// <returns></returns>
        [Route("mobile/doLeave")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]MobileIzinCutiRequest izinCutiRequest)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (izinCutiRequest == null)
                throw new KairosException("Missing model parameter");

            var izinCuti = izinCutiRequest.ToIzinCutiDTO();

            if (izinCuti.IzinCuti_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var izinCutiCreateHandler = new IzinCutiCreateHandler(Db, ActiveUser, new IzinCutiValidator(), new IzinCutiFactory(Db, ActiveUser), new IzinCutiQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = izinCutiCreateHandler.Save(izinCutiDTO: izinCuti, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, "MobileDoLeave_Input", JsonConvert.SerializeObject(izinCutiRequest), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        
                        return Ok(new
                        {
                            success = true,
                            msg = "Pengajuan berhasil."
                        });
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, "MobileDoLeave_Inpput", JsonConvert.SerializeObject(izinCutiRequest), "Error", saveResult.Message, "", "");
                        return Ok(new
                        {
                            success = false,
                            msg = saveResult.ValidationResult.Errors.Count > 0 ? saveResult.ValidationResult.Errors[0].Message : saveResult.Message,
                            validationResult = saveResult.ValidationResult
                        });
                    }
                }
            }
        }

        [Route("mobile/leaveHistory")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]IzinCutiSearchFilter filter)
        {
            string accessType = "IzinCuti_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            if (filter.UserId <= 0)
            {
                throw new KairosException("Missing parameter 'userID'.");
            }

            using (var izinCutiSearch = new IzinCutiSearch(Db))
            {
                var data = izinCutiSearch.GetDataByFilterMobile(filter);
                var mobileResponse = (from records in data.Records.AsQueryable()
                                      select new
                                      {
                                          leaveId = records.IzinCuti_PK,
                                          dateStart = records.TglMulai,
                                          dateEnd = records.TglSelesai,
                                          content = records.Alasan,
                                          photo = records.FilePhotoInBase64,
                                          status = records.IzinCutiStatus_FK == null ? 1 : records.IzinCutiStatus_FK,
                                          statusName = records.IzinCutiStatusTitle
                                      })
                                      .ToList();
                SaveLog(ActiveUser.Username, "Mobile"+accessType, JsonConvert.SerializeObject(new { primaryKey = filter }), "Success", "", "", "");
                return Ok(mobileResponse);
            }
        }
    }
}
