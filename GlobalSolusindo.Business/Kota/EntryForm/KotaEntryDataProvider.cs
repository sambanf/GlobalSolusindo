using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Kota.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Kota.EntryForm
{
    public class KotaEntryDataProvider : FactoryBase
    {
        private KotaQuery kotaQuery;
        private AccessControl accessControl;

        public KotaEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, KotaQuery kotaQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.kotaQuery = kotaQuery;
        }

        private List<Control> CreateFormControls(int kotaPK)
        {
            KotaEntryControlBuilder controlBuilder = new KotaEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (kotaPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private KotaEntryModel GetCreateStateModel()
        {
            KotaEntryFormData formData = new KotaEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            KotaDTO kotaDTO = new KotaDTO();
            return new KotaEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new KotaDTO(),
            };
        }

        private KotaEntryModel GetUpdateStateModel(int kotaPK)
        {
            KotaEntryFormData formData = new KotaEntryFormData();
            List<Control> formControls = CreateFormControls(kotaPK);
            KotaDTO kotaDTO = kotaQuery.GetByPrimaryKey(kotaPK);

            if (kotaDTO == null)
                throw new KairosException($"Record with primary key '{kotaDTO.Kota_PK}' is not found.");

            return new KotaEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = kotaDTO,
            };
        }

        public KotaEntryModel Get(int kotaPK)
        {
            if (kotaPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(kotaPK);
        }
    }
}
