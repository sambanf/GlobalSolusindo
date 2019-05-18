using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSStatus.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.BTSStatus.EntryForm
{
    public class BTSStatusEntryDataProvider : FactoryBase
    {
        private BTSStatusQuery btsStatusQuery;
        private AccessControl accessControl;

        public BTSStatusEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, BTSStatusQuery btsStatusQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.btsStatusQuery = btsStatusQuery;
        }

        private List<Control> CreateFormControls(int btsStatusPK)
        {
            BTSStatusEntryControlBuilder controlBuilder = new BTSStatusEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (btsStatusPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private BTSStatusEntryModel GetCreateStateModel()
        {
            BTSStatusEntryFormData formData = new BTSStatusEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            BTSStatusDTO btsStatusDTO = new BTSStatusDTO();
            return new BTSStatusEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new BTSStatusDTO(),
            };
        }

        private BTSStatusEntryModel GetUpdateStateModel(int btsStatusPK)
        {
            BTSStatusEntryFormData formData = new BTSStatusEntryFormData();
            List<Control> formControls = CreateFormControls(btsStatusPK);
            BTSStatusDTO btsStatusDTO = btsStatusQuery.GetByPrimaryKey(btsStatusPK);

            if (btsStatusDTO == null)
                throw new KairosException($"Record with primary key '{btsStatusDTO.BTSStatus_PK}' is not found.");

            return new BTSStatusEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = btsStatusDTO,
            };
        }

        public BTSStatusEntryModel Get(int btsStatusPK)
        {
            if (btsStatusPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(btsStatusPK);
        }
    }
}
