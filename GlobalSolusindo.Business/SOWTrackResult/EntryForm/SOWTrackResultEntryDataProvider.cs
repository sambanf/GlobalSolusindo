using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWTrackResult.EntryForm
{
    public class SOWTrackResultEntryDataProvider : FactoryBase
    {
        private SOWTrackResultQuery sowTrackResultQuery;
        private AccessControl accessControl;

        public SOWTrackResultEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, SOWTrackResultQuery sowTrackResultQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.sowTrackResultQuery = sowTrackResultQuery;
        }

        private List<Control> CreateFormControls(int sowTrackResultPK)
        {
            SOWTrackResultEntryControlBuilder controlBuilder = new SOWTrackResultEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (sowTrackResultPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private SOWTrackResultEntryModel GetCreateStateModel()
        {
            SOWTrackResultEntryFormData formData = new SOWTrackResultEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            SOWTrackResultDTO sowTrackResultDTO = new SOWTrackResultDTO();
            return new SOWTrackResultEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = sowTrackResultDTO,
            };
        }

        private SOWTrackResultEntryModel GetUpdateStateModel(int sowTrackResultPK)
        {
            SOWTrackResultEntryFormData formData = new SOWTrackResultEntryFormData();
            List<Control> formControls = CreateFormControls(sowTrackResultPK);
            SOWTrackResultDTO sowTrackResultDTO = sowTrackResultQuery.GetByPrimaryKey(sowTrackResultPK);

            if (sowTrackResultDTO == null)
                throw new KairosException($"Record with primary key '{sowTrackResultDTO.SOWTrackResult_PK}' is not found.");

            return new SOWTrackResultEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = sowTrackResultDTO,
            };
        }

        public SOWTrackResultEntryModel Get(int sowTrackResultPK)
        {
            if (sowTrackResultPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(sowTrackResultPK);
        }
    }
}
