using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Area.EntryForm
{
    public class AreaEntryDataProvider : FactoryBase
    {
        private AreaQuery areaQuery;
        private AccessControl accessControl;

        public AreaEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, AreaQuery areaQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.areaQuery = areaQuery;
        }

        private List<Control> CreateFormControls(int areaPK)
        {
            AreaEntryControlBuilder controlBuilder = new AreaEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (areaPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private AreaEntryModel GetCreateStateModel()
        {
            AreaEntryFormData formData = new AreaEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            AreaDTO areaDTO = new AreaDTO();
            return new AreaEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = areaDTO,
            };
        }

        private AreaEntryModel GetUpdateStateModel(int areaPK)
        {
            AreaEntryFormData formData = new AreaEntryFormData();
            List<Control> formControls = CreateFormControls(areaPK);
            AreaDTO areaDTO = areaQuery.GetByPrimaryKey(areaPK);

            if (areaDTO == null)
                throw new KairosException($"Record with primary key '{areaDTO.Area_PK}' is not found.");

            return new AreaEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = areaDTO,
            };
        }

        public AreaEntryModel Get(int areaPK)
        {
            if (areaPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(areaPK);
        }
    }
}
