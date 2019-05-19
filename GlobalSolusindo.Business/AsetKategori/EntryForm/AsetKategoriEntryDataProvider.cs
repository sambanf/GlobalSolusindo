using GlobalSolusindo.Base;
using GlobalSolusindo.Business.AsetKategori.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.AsetKategori.EntryForm
{
    public class AsetKategoriEntryDataProvider : FactoryBase
    {
        private AsetKategoriQuery asetKategoriQuery;
        private AccessControl accessControl;

        public AsetKategoriEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, AsetKategoriQuery asetKategoriQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.asetKategoriQuery = asetKategoriQuery;
        }

        private List<Control> CreateFormControls(int asetKategoriPK)
        {
            AsetKategoriEntryControlBuilder controlBuilder = new AsetKategoriEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (asetKategoriPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private AsetKategoriEntryModel GetCreateStateModel()
        {
            AsetKategoriEntryFormData formData = new AsetKategoriEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            AsetKategoriDTO asetKategoriDTO = new AsetKategoriDTO();
            return new AsetKategoriEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new AsetKategoriDTO(),
            };
        }

        private AsetKategoriEntryModel GetUpdateStateModel(int asetKategoriPK)
        {
            AsetKategoriEntryFormData formData = new AsetKategoriEntryFormData();
            List<Control> formControls = CreateFormControls(asetKategoriPK);
            AsetKategoriDTO asetKategoriDTO = asetKategoriQuery.GetByPrimaryKey(asetKategoriPK);

            if (asetKategoriDTO == null)
                throw new KairosException($"Record with primary key '{asetKategoriDTO.AsetKategori_PK}' is not found.");

            return new AsetKategoriEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = asetKategoriDTO,
            };
        }

        public AsetKategoriEntryModel Get(int asetKategoriPK)
        {
            if (asetKategoriPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(asetKategoriPK);
        }
    }
}
