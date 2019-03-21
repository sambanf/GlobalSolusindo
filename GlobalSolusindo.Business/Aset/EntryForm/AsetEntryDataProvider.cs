using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Aset.Queries;
using GlobalSolusindo.Business.AsetKategori;
using GlobalSolusindo.Business.AsetKategori.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Aset.EntryForm
{
    public class AsetEntryDataProvider : FactoryBase
    {
        private AsetQuery asetQuery;
        private AccessControl accessControl;

        public AsetEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, AsetQuery asetQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.asetQuery = asetQuery;
        }

        private List<Control> CreateFormControls(int asetPK)
        {
            AsetEntryControlBuilder controlBuilder = new AsetEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (asetPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private AsetEntryModel GetCreateStateModel()
        {
            AsetEntryFormData formData = new AsetEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            AsetDTO asetDTO = new AsetDTO();
            return new AsetEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new AsetDTO(),
            };
        }

        private List<AsetKategoriDTO> GetAsetKategoris(int asetKategoriPk)
        {
            var asetKategoris = new List<AsetKategoriDTO>();
            var asetKategori = new AsetKategoriQuery(Db).GetByPrimaryKey(asetKategoriPk);
            if (asetKategori != null)
            {
                asetKategoris.Add(asetKategori);
            }
            return asetKategoris;
        }

        private AsetEntryModel GetUpdateStateModel(int asetPK)
        {
            AsetEntryFormData formData = new AsetEntryFormData();
            List<Control> formControls = CreateFormControls(asetPK);
            AsetDTO asetDTO = asetQuery.GetByPrimaryKey(asetPK);

            if (asetDTO == null)
                throw new KairosException($"Record with primary key '{asetDTO.Aset_PK}' is not found.");

            formData.AsetKategoris = GetAsetKategoris(asetDTO.KategoriAset_FK);

            return new AsetEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = asetDTO,
            };
        }

        public AsetEntryModel Get(int asetPK)
        {
            if (asetPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(asetPK);
        }
    }
}
