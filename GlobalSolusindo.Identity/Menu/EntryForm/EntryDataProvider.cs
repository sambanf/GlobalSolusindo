using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.Menu.EntryForm
{
    public class MenuEntryModel
    {
        [JsonProperty("formData")]
        public MenuEntryFormData FormData { get; set; } = new MenuEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public MenuDTO Model { get; set; }
    }

    public class MenuEntryFormData
    {
    }

    public class MenuEntryDataProvider : FactoryBase
    {
        private MenuQuery menuQuery;
        private AccessControl accessControl;

        public MenuEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, MenuQuery menuQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.menuQuery = menuQuery;
        }

        private List<Control> CreateFormControls(int menuPK)
        {
            MenuEntryControlBuilder controlBuilder = new MenuEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (menuPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private MenuEntryModel GetCreateStateModel()
        {
            MenuEntryFormData formData = new MenuEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            MenuDTO menuDTO = new MenuDTO();
            return new MenuEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = menuDTO,
            };
        }

        private MenuEntryModel GetUpdateStateModel(int menuPK)
        {
            MenuEntryFormData formData = new MenuEntryFormData();
            List<Control> formControls = CreateFormControls(menuPK);
            MenuDTO menuDTO = menuQuery.GetByPrimaryKey(menuPK);

            if (menuDTO == null)
                throw new KairosException($"Record with primary key '{menuDTO.Menu_PK}' is not found.");

            return new MenuEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = menuDTO,
            };
        }

        public MenuEntryModel Get(int menuPK)
        {
            if (menuPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(menuPK);
        }
    }
}
