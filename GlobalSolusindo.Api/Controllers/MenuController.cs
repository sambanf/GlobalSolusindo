using GlobalSolusindo.Identity.Menu;
using GlobalSolusindo.Identity.Menu.EntryForm;
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
    public class MenuController : ApiControllerBase
    {
        public MenuController()
        {
        }

        [Route("menu/{id}")]
        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            string accessType = "Menu_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            using (MenuQuery menuQuery = new MenuQuery(Db))
            {
                var data = menuQuery.GetByPrimaryKey(id);
                SaveLog("Menu", "Get", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("menu/form/{id}")]
        [HttpGet]
        public IHttpActionResult GetForm(int id)
        {
            string accessType = "Menu_ViewAll";
            if (id > 0)
                ThrowIfUserHasNoRole(accessType);
            using (MenuEntryDataProvider menuEntryDataProvider = new MenuEntryDataProvider(Db, ActiveUser, AccessControl, new MenuQuery(Db)))
            {
                var data = menuEntryDataProvider.Get(id);
                SaveLog("Menu", "GetForm", JsonConvert.SerializeObject(new { primaryKey = id }));
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("menu/search")]
        [HttpGet]
        public IHttpActionResult Search([FromUri]MenuSearchFilter filter)
        {
            string accessType = "Menu_ViewAll";
            ThrowIfUserHasNoRole(accessType);
            if (filter == null)
                throw new KairosException("Missing search filter parameter");

            using (var menuQuery = new MenuQuery(Db))
            {
                var data = menuQuery.Search(filter);
                return Ok(new SuccessResponse(data));
            }
        }

        [Route("menu")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]MenuDTO menu)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (menu == null)
                throw new KairosException("Missing model parameter");

            if (menu.Menu_PK != 0)
                throw new KairosException("Post method is not allowed because the requested primary key is must be '0' (zero) .");
            using (var menuCreateHandler = new MenuCreateHandler(Db, ActiveUser, new MenuValidator(), new MenuFactory(Db, ActiveUser), new MenuQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = menuCreateHandler.Save(menuDTO: menu, dateStamp: DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("menu")]
        [HttpPut]
        public IHttpActionResult Update([FromBody]MenuDTO menu)
        {
            string accessType = "";
            ThrowIfUserHasNoRole(accessType);
            if (menu == null)
                throw new KairosException("Missing model parameter");

            if (menu.Menu_PK == 0)
                throw new KairosException("Put method is not allowed because the requested primary key is '0' (zero) .");

            using (var menuUpdateHandler = new MenuUpdateHandler(Db, ActiveUser, new MenuValidator(), new MenuFactory(Db, ActiveUser), new MenuQuery(Db), AccessControl))
            {
                using (var transaction = new TransactionScope())
                {
                    var saveResult = menuUpdateHandler.Save(menu, DateTime.Now);
                    transaction.Complete();
                    if (saveResult.Success)
                        return Ok(new SuccessResponse(saveResult.Model, saveResult.Message));
                    return Ok(new ErrorResponse(ServiceStatusCode.ValidationError, saveResult.ValidationResult, saveResult.Message));
                }
            }
        }

        [Route("menu")]
        [HttpDelete]
        public IHttpActionResult Delete([FromBody] List<int> ids)
        {
            if (ids == null)
                throw new KairosException("Missing parameter: 'ids'");

            string accessType = "";
            ThrowIfUserHasNoRole(accessType);

            using (var menuDeleteHandler = new MenuDeleteHandler(Db, ActiveUser))
            {
                using (var transaction = new TransactionScope())
                {
                    var result = new List<DeleteResult<tblM_Menu>>();

                    foreach (var id in ids)
                    {
                        result.Add(menuDeleteHandler.Execute(id, Base.DeleteMethod.Soft));
                    }
                    transaction.Complete();
                    
                    return Ok(new SuccessResponse(result, DeleteMessageBuilder.BuildMessage(result)));
                }
            }
        }
    }
}
