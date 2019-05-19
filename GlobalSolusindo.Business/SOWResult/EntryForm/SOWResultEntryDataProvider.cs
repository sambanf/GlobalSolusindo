using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWResult.EntryForm
{
    public class SOWResultEntryDataProvider : FactoryBase
    {
        private SOWResultQuery sowResultQuery;
        private AccessControl accessControl;

        public SOWResultEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, SOWResultQuery sowResultQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.sowResultQuery = sowResultQuery;
        }

        private List<Control> CreateFormControls(int sowResultPK)
        {
            SOWResultEntryControlBuilder controlBuilder = new SOWResultEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (sowResultPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private SOWResultEntryModel GetCreateStateModel()
        {
            SOWResultEntryFormData formData = new SOWResultEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            SOWResultDTO sowResultDTO = new SOWResultDTO();
            return new SOWResultEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = sowResultDTO,
            };
        }

        private SOWResultEntryModel GetUpdateStateModel(int sowResultPK)
        {
            SOWResultEntryFormData formData = new SOWResultEntryFormData();
            List<Control> formControls = CreateFormControls(sowResultPK);
            SOWResultDTO sowResultDTO = sowResultQuery.GetByPrimaryKey(sowResultPK);

            if (sowResultDTO == null)
                throw new KairosException($"Record with primary key '{sowResultDTO.SOWResult_PK}' is not found.");

            return new SOWResultEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = sowResultDTO,
            };
        }

        public SOWResultEntryModel Get(int sowResultPK)
        {
            if (sowResultPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(sowResultPK);
        }
    }
}
