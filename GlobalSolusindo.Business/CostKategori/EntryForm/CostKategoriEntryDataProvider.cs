using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CostKategori.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.CostKategori.EntryForm
{
    public class CostKategoriEntryDataProvider : FactoryBase
    {
        private CostKategoriQuery costKategoriQuery;
        private AccessControl accessControl;

        public CostKategoriEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, CostKategoriQuery costKategoriQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.costKategoriQuery = costKategoriQuery;
        }

        private List<Control> CreateFormControls(int costKategoriPK)
        {
            CostKategoriEntryControlBuilder controlBuilder = new CostKategoriEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (costKategoriPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private CostKategoriEntryModel GetCreateStateModel()
        {
            CostKategoriEntryFormData formData = new CostKategoriEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            CostKategoriDTO costKategoriDTO = new CostKategoriDTO();
            return new CostKategoriEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new CostKategoriDTO(),
            };
        }

        private CostKategoriEntryModel GetUpdateStateModel(int costKategoriPK)
        {
            CostKategoriEntryFormData formData = new CostKategoriEntryFormData();
            List<Control> formControls = CreateFormControls(costKategoriPK);
            CostKategoriDTO costKategoriDTO = costKategoriQuery.GetByPrimaryKey(costKategoriPK);

            if (costKategoriDTO == null)
                throw new KairosException($"Record with primary key '{costKategoriDTO.CostKategori_PK}' is not found.");

            return new CostKategoriEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = costKategoriDTO,
            };
        }

        public CostKategoriEntryModel Get(int costKategoriPK)
        {
            if (costKategoriPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(costKategoriPK);
        }
    }
}
