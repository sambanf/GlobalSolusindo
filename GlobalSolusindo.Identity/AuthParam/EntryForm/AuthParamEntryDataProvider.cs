using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.AuthParam.Queries;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.AuthParam.EntryForm
{
    public class AuthParamEntryDataProvider : FactoryBase
    {
        private AuthParamQuery authParamQuery;
        private AccessControl accessControl;

        public AuthParamEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, AuthParamQuery authParamQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.authParamQuery = authParamQuery;
        }

        private List<Control> CreateFormControls(int authParamPK)
        {
            AuthParamEntryControlBuilder controlBuilder = new AuthParamEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (authParamPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private AuthParamEntryModel GetCreateStateModel()
        {
            AuthParamEntryFormData formData = new AuthParamEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            AuthParamDTO authParamDTO = new AuthParamDTO();
            return new AuthParamEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new AuthParamDTO(),
            };
        }

        private AuthParamEntryModel GetUpdateStateModel(int authParamPK)
        {
            AuthParamEntryFormData formData = new AuthParamEntryFormData();
            List<Control> formControls = CreateFormControls(authParamPK);
            AuthParamDTO authParamDTO = authParamQuery.GetByPrimaryKey(authParamPK);

            if (authParamDTO == null)
                throw new KairosException($"Record with primary key '{authParamDTO.AuthParam_PK}' is not found.");

            return new AuthParamEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = authParamDTO,
            };
        }

        public AuthParamEntryModel Get(int authParamPK)
        {
            if (authParamPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(authParamPK);
        }
    }
}
