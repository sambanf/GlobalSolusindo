using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.KategoriJabatan;
using GlobalSolusindo.Identity.KategoriJabatan.DML;
using GlobalSolusindo.Identity.KategoriJabatan.EntryForm;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.User.Queries;
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
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
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
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
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
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
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
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(kategoriJabatan), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(kategoriJabatan), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
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

            KategoriJabatanQuery kategoriJabatanQuery = new KategoriJabatanQuery();
            KategoriJabatanDTO valueOld = new KategoriJabatanDTO();
            valueOld = kategoriJabatanQuery.GetByPrimaryKey(kategoriJabatan.KategoriJabatan_PK);

            using (var kategoriJabatanUpdateHandler = new KategoriJabatanUpdateHandler(Db, ActiveUser, new KategoriJabatanValidator(), new KategoriJabatanFactory(Db, ActiveUser), new KategoriJabatanQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = kategoriJabatanUpdateHandler.Save(kategoriJabatan, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(kategoriJabatan), "Success", "", JsonConvert.SerializeObject(valueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(kategoriJabatan), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
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

            UserQuery userQuery = new UserQuery();
            bool isUse = false;
            foreach (var id in ids)
            {
                int countRow = userQuery.CountBy("KategoriJabatan_FK", id.ToString());
                if (countRow > 0)
                {
                    isUse = true;
                    break;
                }
            }

            if (!isUse)
            {

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
                        SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                        return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                    }
                }
            }
            else
            {
                return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, "", "Kategory Jabatan has been use in Master User"));
            }
        }
    }
}