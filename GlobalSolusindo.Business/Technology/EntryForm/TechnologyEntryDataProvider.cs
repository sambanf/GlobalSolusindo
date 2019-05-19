using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Technology.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Technology.EntryForm
{
    public class TechnologyEntryDataProvider : FactoryBase
    {
        private TechnologyQuery technologyQuery;
        private AccessControl accessControl;

        public TechnologyEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, TechnologyQuery technologyQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.technologyQuery = technologyQuery;
        }

        private List<Control> CreateFormControls(int technologyPK)
        {
            TechnologyEntryControlBuilder controlBuilder = new TechnologyEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (technologyPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private TechnologyEntryModel GetCreateStateModel()
        {
            TechnologyEntryFormData formData = new TechnologyEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            TechnologyDTO technologyDTO = new TechnologyDTO();
            return new TechnologyEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = technologyDTO,
            };
        }

        private TechnologyEntryModel GetUpdateStateModel(int technologyPK)
        {
            TechnologyEntryFormData formData = new TechnologyEntryFormData();
            List<Control> formControls = CreateFormControls(technologyPK);
            TechnologyDTO technologyDTO = technologyQuery.GetByPrimaryKey(technologyPK);

            if (technologyDTO == null)
                throw new KairosException($"Record with primary key '{technologyDTO.Technology_PK}' is not found.");

            return new TechnologyEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = technologyDTO,
            };
        }

        public TechnologyEntryModel Get(int technologyPK)
        {
            if (technologyPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(technologyPK);
        }
    }
}
