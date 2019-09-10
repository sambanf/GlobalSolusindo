using GlobalSolusindo.Api.Models;
using GlobalSolusindo.Identity.User;
using GlobalSolusindo.Identity.User.DML;
using GlobalSolusindo.Identity.User.EntryForm;
using GlobalSolusindo.Identity.User.Queries;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class UserController : ApiControllerBase
    {
        private const string createRole = "User_Input";
        private const string updateRole = "User_Edit";
        private const string readRole = "User_ViewAll";
        private const string deleteRole = "User_Delete";
        private const string importRole = "User_Import";
        private const string exportRole = "User_Export";

        private const string activateRole = "User_Activate";
        private const string deactivateRole = "User_Deactivate";

        public UserController()
        {
        }

        [Route("user/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            ThrowIfUserHasNoRole(readRole);
            using (UserQuery userQuery = new UserQuery(Db))
            {
                var data = userQuery.GetByPrimaryKey(id);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("user/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {

            if (id > 0)
                ThrowIfUserHasNoRole(readRole);
            using (UserEntryDataProvider userEntryDataProvider = new UserEntryDataProvider(Db, ActiveUser, AccessControl, new UserQuery(Db)))
            {
                var data = userEntryDataProvider.Get(id);
                if (!AccessControl.UserHasRole(updateRole))
                {
                    data.Model.Salary = null;
                    data.Model.BankName = null;
                    data.Model.AccountNumber = null;
                }
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = id }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("user/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]UserSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var userSearch = new UserSearch(Db))
            {
                var data = userSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = filter }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("user/list")]
        [HttpGet]
        public IHttpActionResult List([FromUri]UserSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var userSearch = new UserSearch(Db))
            {
                var data = userSearch.GetDataByFilter(filter, ActiveUser);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = filter }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }


        [Route("user")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]UserDTO user)
        {
            ThrowIfUserHasNoRole(createRole);
            if (user == null)
                throw new KairosException("Missing model parameter");

            if (user.User_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var userCreateHandler = new UserCreateHandler(Db, ActiveUser, new UserValidator(), new UserFactory(Db, ActiveUser), new UserQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = userCreateHandler.Save(userDTO: user, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(user), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(user), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("user")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]UserDTO user)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (user == null)
                throw new KairosException("Missing model parameter");

            if (user.User_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            UserQuery userQuery = new UserQuery();
            UserDTO valueOld = new UserDTO();
            valueOld = userQuery.GetByPrimaryKey(user.User_PK);

            using (var userUpdateHandler = new UserUpdateHandler(Db, ActiveUser, new UserValidator(), new UserFactory(Db, ActiveUser), new UserQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = userUpdateHandler.Save(user, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(user), "Success", "", JsonConvert.SerializeObject(valueOld), JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(user), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("user")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            using (var userDeleteHandler = new UserDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<int>>();

                    foreach (var id in ids)
                    {
                        result.Add(userDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(ids), "Success", "", "", "");
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }

        [Route("user/import")]
        [HttpPost]
        public IHttpActionResult Import([FromBody]UserImportDTO userImportDTO)
        {
            ThrowIfUserHasNoRole(importRole);

            if (userImportDTO == null)
                throw new KairosException("Missing model parameter");
            var importResult = new UserImportExcelHandler(Db, ActiveUser, new UserValidator(), new UserFactory(Db, ActiveUser), new UserQuery(Db), AccessControl).ExecuteImport(userImportDTO, DateTime.Now);
            SaveLog(ActiveUser.Username, importRole, JsonConvert.SerializeObject(userImportDTO), "Success", "", "", "");
            return Ok(new SuccessResponse(importResult));
        }

        [Route("user/export")]
        [HttpPost]
        public HttpResponseMessage Export([FromBody]UserSearchFilter filter)
        {
            ThrowIfUserHasNoRole(exportRole);
            if (filter != null)
                filter.PageSize = 1000000;

            string accessType = "User_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            //if (filter == null)
            //    throw new KairosException("Missing search filter parameter");
            UserExport userExport = new UserExport();
            //SaveLog(ActiveUser.Username, exportRole, JsonConvert.SerializeObject(filter), "Success", "", "", "");
            return userExport.Export(Db,ActiveUser, "UserUpload", filter);
        }

        [Route("user/changePassword")]
        [HttpPost]
        public IHttpActionResult ChangePassword([FromBody]UpdatePasswordDTO updatePasswordDTO)
        {
            using (var updatePasswordHandler = new UpdatePasswordHandler(Db, ActiveUser, new ChangePasswordValidator()))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = updatePasswordHandler.Save(updatePasswordDTO, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, "User_ChangePassword", "", "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, "User_ChangePassword", "", "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("user/inactivate")]
        [HttpPost]
        public IHttpActionResult Inactivate([FromBody]UserActivationDTO userInactivateDTO)
        {
            ThrowIfUserHasNoRole(deactivateRole);
            using (var userInactivateHandler = new UserActivationHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = userInactivateHandler.Inactivate(userInactivateDTO, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, deactivateRole, JsonConvert.SerializeObject(userInactivateDTO), "Success", "", "", "");
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, deactivateRole, "", "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("user/activate")]
        [HttpPost]
        public IHttpActionResult Activate([FromBody]UserActivationDTO userInactivateDTO)
        {
            ThrowIfUserHasNoRole(activateRole);
            using (var userInactivateHandler = new UserActivationHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = userInactivateHandler.Activate(userInactivateDTO, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, activateRole, JsonConvert.SerializeObject(userInactivateDTO), "Success", "", "", "");
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, activateRole, JsonConvert.SerializeObject(userInactivateDTO), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }
    }
}