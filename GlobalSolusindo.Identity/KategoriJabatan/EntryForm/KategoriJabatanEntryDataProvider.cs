using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.KategoriJabatan.EntryForm
{
    public class KategoriJabatanEntryDataProvider : FactoryBase
    {
        private KategoriJabatanQuery kategoriJabatanQuery;
        private AccessControl accessControl;

        public KategoriJabatanEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, KategoriJabatanQuery kategoriJabatanQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.kategoriJabatanQuery = kategoriJabatanQuery;
        }

        private List<Control> CreateFormControls(int kategoriJabatanPK)
        {
            KategoriJabatanEntryControlBuilder controlBuilder = new KategoriJabatanEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (kategoriJabatanPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private KategoriJabatanEntryModel GetCreateStateModel()
        {
            KategoriJabatanEntryFormData formData = new KategoriJabatanEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            KategoriJabatanDTO kategoriJabatanDTO = new KategoriJabatanDTO();
            return new KategoriJabatanEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new KategoriJabatanDTO(),
            };
        }

        private KategoriJabatanEntryModel GetUpdateStateModel(int kategoriJabatanPK)
        {
            KategoriJabatanEntryFormData formData = new KategoriJabatanEntryFormData();
            List<Control> formControls = CreateFormControls(kategoriJabatanPK);
            KategoriJabatanDTO kategoriJabatanDTO = kategoriJabatanQuery.GetByPrimaryKey(kategoriJabatanPK);

            if (kategoriJabatanDTO == null)
                throw new KairosException($"Record with primary key '{kategoriJabatanDTO.KategoriJabatan_PK}' is not found.");

            return new KategoriJabatanEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = kategoriJabatanDTO,
            };
        }

        public KategoriJabatanEntryModel Get(int kategoriJabatanPK)
        {
            if (kategoriJabatanPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(kategoriJabatanPK);
        }
    }
}
