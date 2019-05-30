using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.UserDetail.Queries;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.UserDetail.EntryForm
{
    public class UserDetailEntryDataProvider : FactoryBase
    {
        private UserDetailQuery userDetailQuery;
        private AccessControl accessControl;

        public UserDetailEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, UserDetailQuery userDetailQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.userDetailQuery = userDetailQuery;
        }

        private List<Control> CreateFormControls(int userDetailPK)
        {
            UserDetailEntryControlBuilder controlBuilder = new UserDetailEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (userDetailPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private UserDetailEntryModel GetCreateStateModel()
        {
            UserDetailEntryFormData formData = new UserDetailEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            UserDetailDTO userDetailDTO = new UserDetailDTO();
            return new UserDetailEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new UserDetailDTO(),
            };
        }

        private UserDetailEntryModel GetUpdateStateModel(int userDetailPK)
        {
            UserDetailEntryFormData formData = new UserDetailEntryFormData();
            List<Control> formControls = CreateFormControls(userDetailPK);
            UserDetailDTO userDetailDTO = userDetailQuery.GetByPrimaryKey(userDetailPK);

            if (userDetailDTO == null)
                throw new KairosException($"Record with primary key '{userDetailPK}' is not found.");

            return new UserDetailEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = userDetailDTO,
            };
        }

        public UserDetailEntryModel Get(int userDetailPK)
        {
            if (userDetailPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(userDetailPK);
        }
    }
}
