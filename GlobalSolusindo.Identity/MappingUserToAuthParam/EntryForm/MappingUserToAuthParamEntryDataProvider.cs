using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingUserToAuthParam.Queries;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam.EntryForm
{
    public class MappingUserToAuthParamEntryDataProvider : FactoryBase
    {
        private MappingUserToAuthParamQuery mappingUserToAuthParamQuery;
        private AccessControl accessControl;

        public MappingUserToAuthParamEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, MappingUserToAuthParamQuery mappingUserToAuthParamQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.mappingUserToAuthParamQuery = mappingUserToAuthParamQuery;
        }

        private List<Control> CreateFormControls(int mappingUserToAuthParamPK)
        {
            MappingUserToAuthParamEntryControlBuilder controlBuilder = new MappingUserToAuthParamEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (mappingUserToAuthParamPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private MappingUserToAuthParamEntryModel CreateEntryModel(int authParamPK, int userPk)
        {
            tblM_AuthParam authParam = Db.tblM_AuthParam.Find(authParamPK);
            if (authParam == null)
                throw new KairosException($"Role group id '{authParamPK}' is not found.");

            MappingUserToAuthParamEntryFormData formData = new MappingUserToAuthParamEntryFormData();
            List<Control> formControls = CreateFormControls(authParamPK);

            var model = new MappingUserToAuthParamQuery(this.Db).GetByPrimaryKey(authParamPK, userPk);

            return new MappingUserToAuthParamEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = model,
            };
        }

        public MappingUserToAuthParamEntryModel Get(int authParamPK, int userPk)
        { 
            return CreateEntryModel(authParamPK, userPk);
        }
    }
}
