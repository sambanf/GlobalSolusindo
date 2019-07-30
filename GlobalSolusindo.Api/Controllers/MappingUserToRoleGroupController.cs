﻿using GlobalSolusindo.Identity.MappingUserToRoleGroup;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.DML;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.EntryForm;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.Queries;
using Kairos;
using Newtonsoft.Json;
using System;
using System.Transactions;
using System.Web.Http;

namespace GlobalSolusindo.Api.Controllers
{
    public class MappingUserToRoleGroupController : ApiControllerBase
    {
        private const string createRole = "MappingUserToRoleGroup_Input";
        private const string updateRole = "MappingUserToRoleGroup_Edit";
        private const string readRole = "MappingUserToRoleGroup_ViewAll";
        private const string deleteRole = "MappingUserToRoleGroup_Delete";
        private const string importRole = "MappingUserToRoleGroup_Import";

        public MappingUserToRoleGroupController()
        {
        }

        [Route("mappingUserToRoleGroup/{roleGroupPk}/{userPk}")]
        [HttpGet]
        public IHttpActionResult Get([FromBody]UserRoleMapPK userRoleMapPK)
        {
            ThrowIfUserHasNoRole(readRole);
            using (MappingUserToRoleGroupQuery mappingUserToRoleGroupQuery = new MappingUserToRoleGroupQuery(Db))
            {
                var data = mappingUserToRoleGroupQuery.GetByPrimaryKey(userRoleMapPK.RoleGroupPK, userRoleMapPK.UserPK);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = userRoleMapPK }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToRoleGroup/form")]
        [HttpGet]
        public IHttpActionResult GetForm([FromBody]UserRoleMapPK userRoleMapPK)
        {
            ThrowIfUserHasNoRole(readRole);
            using (MappingUserToRoleGroupEntryDataProvider mappingUserToRoleGroupEntryDataProvider = new MappingUserToRoleGroupEntryDataProvider(Db, ActiveUser, AccessControl, new MappingUserToRoleGroupQuery(Db)))
            {
                var data = mappingUserToRoleGroupEntryDataProvider.Get(userRoleMapPK.RoleGroupPK, userRoleMapPK.UserPK);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = userRoleMapPK }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToRoleGroup/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]MappingUserToRoleGroupSearchFilter filter)
        {
            ThrowIfUserHasNoRole(readRole);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var mappingUserToRoleGroupSearch = new MappingUserToRoleGroupSearch(Db))
            {
                var data = mappingUserToRoleGroupSearch.GetDataByFilter(filter);
                SaveLog(ActiveUser.Username, readRole, JsonConvert.SerializeObject(new { primaryKey = filter }), "Success", "", "", "");
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("mappingUserToRoleGroup")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]MappingUserToRoleGroupDTO mappingUserToRoleGroup)
        {
            ThrowIfUserHasNoRole(createRole);
            if (mappingUserToRoleGroup == null)
                throw new KairosException("Missing model parameter"); 

            using (var mappingUserToRoleGroupCreateHandler = new MappingUserToRoleGroupCreateHandler(Db, ActiveUser, new MappingUserToRoleGroupValidator(), new MappingUserToRoleGroupFactory(Db, ActiveUser), new MappingUserToRoleGroupQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = mappingUserToRoleGroupCreateHandler.Save(mappingUserToRoleGroupDTO: mappingUserToRoleGroup, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(mappingUserToRoleGroup), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, createRole, JsonConvert.SerializeObject(mappingUserToRoleGroup), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("mappingUserToRoleGroup")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]MappingUserToRoleGroupDTO mappingUserToRoleGroup)
        {
            ThrowIfUserHasNoRole(updateRole);
            if (mappingUserToRoleGroup == null)
                throw new KairosException("Missing model parameter");

            //MappingUserToRoleGroupQuery mappingUserToRoleGroupQuery = new MappingUserToRoleGroupQuery();
            //MappingUserToRoleGroupDTO valueOld = new MappingUserToRoleGroupDTO();
            //valueOld = mappingUserToRoleGroupQuery.GetByPrimaryKey()

            using (var mappingUserToRoleGroupUpdateHandler = new MappingUserToRoleGroupUpdateHandler(Db, ActiveUser, new MappingUserToRoleGroupValidator(), new MappingUserToRoleGroupFactory(Db, ActiveUser), new MappingUserToRoleGroupQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = mappingUserToRoleGroupUpdateHandler.Save(mappingUserToRoleGroup, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(mappingUserToRoleGroup), "Success", "", "", JsonConvert.SerializeObject(saveResult.Model.Model));
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    }
                    else
                    {
                        SaveLog(ActiveUser.Username, updateRole, JsonConvert.SerializeObject(mappingUserToRoleGroup), "Error", saveResult.Message, "", "");
                        return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                    }
                }
            }
        }

        [Route("mappingUserToRoleGroup")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] UserRoleMapPK keys)
        {
            ThrowIfUserHasNoRole(deleteRole);

            if (keys == null)
                throw new KairosException("Missing parameter: 'primary keys'");

            using (var mappingUserToRoleGroupDeleteHandler = new MappingUserToRoleGroupDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result =   mappingUserToRoleGroupDeleteHandler.Execute(keys.RoleGroupPK, keys.UserPK, Base.DeleteMethod.Hard);
                    transaction.Complete();
                    SaveLog(ActiveUser.Username, deleteRole, JsonConvert.SerializeObject(keys), "Success", "", "", "");
                    return Ok(new SuccessResponse(result));
                }
            }
        }
    }

    public class UserRoleMapPK
    {
        [JsonProperty("roleGroup_pk")]
        public int RoleGroupPK { get; set; }

        [JsonProperty("user_pk")]
        public int UserPK { get; set; }
    }
}