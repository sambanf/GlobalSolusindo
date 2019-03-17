using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User.Queries;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.User.EntryForm
{
    public class UserEntryDataProvider : FactoryBase
    {
        private UserQuery userQuery;
        private AccessControl accessControl;

        public UserEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, UserQuery userQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.userQuery = userQuery;
        }

        private List<Control> CreateFormControls(int userPK)
        {
            UserEntryControlBuilder controlBuilder = new UserEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (userPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private UserEntryModel GetCreateStateModel()
        {
            UserEntryFormData formData = new UserEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            UserDTO userDTO = new UserDTO();
            return new UserEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new UserDTO(),
            };
        }

        private UserEntryModel GetUpdateStateModel(int userPK)
        {
            UserEntryFormData formData = new UserEntryFormData();
            List<Control> formControls = CreateFormControls(userPK);
            UserDTO userDTO = userQuery.GetByPrimaryKey(userPK);

            if (userDTO == null)
                throw new KairosException($"Record with primary key '{userDTO.User_PK}' is not found.");

            return new UserEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = userDTO,
            };
        }

        public UserEntryModel Get(int userPK)
        {
            if (userPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(userPK);
        }
    }
}
