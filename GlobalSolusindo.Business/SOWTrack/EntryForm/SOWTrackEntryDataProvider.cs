using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWTrack.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.SOWTrack.EntryForm
{
    public class SOWTrackEntryDataProvider : FactoryBase
    {
        private SOWTrackQuery sowTrackQuery;
        private AccessControl accessControl;

        public SOWTrackEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, SOWTrackQuery sowTrackQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.sowTrackQuery = sowTrackQuery;
        }

        private List<Control> CreateFormControls(int sowTrackPK)
        {
            SOWTrackEntryControlBuilder controlBuilder = new SOWTrackEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (sowTrackPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private SOWTrackEntryModel GetCreateStateModel()
        {
            SOWTrackEntryFormData formData = new SOWTrackEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            SOWTrackDTO sowTrackDTO = new SOWTrackDTO();
            return new SOWTrackEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = sowTrackDTO,
            };
        }

        private SOWTrackEntryModel GetUpdateStateModel(int sowTrackPK)
        {
            SOWTrackEntryFormData formData = new SOWTrackEntryFormData();
            List<Control> formControls = CreateFormControls(sowTrackPK);
            SOWTrackDTO sowTrackDTO = sowTrackQuery.GetByPrimaryKey(sowTrackPK);

            if (sowTrackDTO == null)
                throw new KairosException($"Record with primary key '{sowTrackDTO.SOWTrack_PK}' is not found.");

            return new SOWTrackEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = sowTrackDTO,
            };
        }

        public SOWTrackEntryModel Get(int sowTrackPK)
        {
            if (sowTrackPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(sowTrackPK);
        }
    }
}
