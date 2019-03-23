using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.KategoriJabatan.EntryForm
{
    public class KategoriJabatanEntryControlBuilder : BuilderBase
    { 
        private AccessControl accessControl;

        public KategoriJabatanEntryControlBuilder(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl) : base(db, user)
        { 
            this.accessControl = accessControl;
        }

        public List<Control> GetControls(EntryFormState formState)
        {
            List<Control> controls = new List<Control>();
            Control saveButton = new SaveButtonBuilder(Db, User, formState, accessControl).GetButton();
            controls.Add(saveButton);
            return controls;
        }
    }

    class SaveButtonBuilder : BuilderBase
    {
        private AccessControl accessControl;
        private EntryFormState formState; 

        public SaveButtonBuilder(GlobalSolusindoDb db, tblM_User user, EntryFormState formState, AccessControl accessControl) : base(db, user)
        { 
            this.accessControl = accessControl;
            this.formState = formState;
        }

        private bool GetEnabledState()
        {
            bool enabled = false;
            switch (formState)
            {
                case EntryFormState.Create:
                    enabled = accessControl.CanAccess("KategoriJabatan_Input");
                    break;
                case EntryFormState.Update:
                    enabled = accessControl.CanAccess("KategoriJabatan_Edit");
                    break;
                default:
                    break;
            }

            return enabled;
        }

        private string GetHttpMethod()
        {
            string method = string.Empty;
            switch (formState)
            {
                case EntryFormState.Create:
                    method = "POST";
                    break;
                case EntryFormState.Update:
                    method = "PUT";
                    break;
                default:
                    break;
            }

            return method;
        }

        public Button GetButton()
        {
            return new Button()
            {
                ControlName = "saveButton",
                CommandName = "Save",
                CommandDescription = "Save kategoriJabatan.",
                Type = "Button",
                Text = "Save",
                Tooltip = formState == EntryFormState.Create ? "Create kategoriJabatan" : "Update kategoriJabatan",
                Link = "/kategoriJabatan",
                HttpMethod = GetHttpMethod(),
                Enabled = true,
                Visible = true
            };
        }
    }

}
