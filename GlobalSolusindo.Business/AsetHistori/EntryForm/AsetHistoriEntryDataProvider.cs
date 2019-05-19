using GlobalSolusindo.Base;
using GlobalSolusindo.Business.AsetHistori.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.AsetHistori.EntryForm
{
    public class AsetHistoriEntryDataProvider : FactoryBase
    {
        private AsetHistoriQuery asetHistoriQuery;
        private AccessControl accessControl;

        public AsetHistoriEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, AsetHistoriQuery asetHistoriQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.asetHistoriQuery = asetHistoriQuery;
        }

        private List<Control> CreateFormControls(int asetHistoriPK)
        {
            AsetHistoriEntryControlBuilder controlBuilder = new AsetHistoriEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (asetHistoriPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private AsetHistoriEntryModel GetCreateStateModel()
        {
            AsetHistoriEntryFormData formData = new AsetHistoriEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            AsetHistoriDTO asetHistoriDTO = new AsetHistoriDTO();
            return new AsetHistoriEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = asetHistoriDTO,
            };
        }

        private AsetHistoriEntryModel GetUpdateStateModel(int asetHistoriPK)
        {
            AsetHistoriEntryFormData formData = new AsetHistoriEntryFormData();
            List<Control> formControls = CreateFormControls(asetHistoriPK);
            AsetHistoriDTO asetHistoriDTO = asetHistoriQuery.GetByPrimaryKey(asetHistoriPK);

            if (asetHistoriDTO == null)
                throw new KairosException($"Record with primary key '{asetHistoriDTO.AsetHistori_PK}' is not found.");

            return new AsetHistoriEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = asetHistoriDTO,
            };
        }

        public AsetHistoriEntryModel Get(int asetHistoriPK)
        {
            if (asetHistoriPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(asetHistoriPK);
        }
    }
}
