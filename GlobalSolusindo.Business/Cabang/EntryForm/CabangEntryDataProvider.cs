using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Cabang.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Cabang.EntryForm
{
    public class CabangEntryDataProvider : FactoryBase
    {
        private CabangQuery cabangQuery;
        private AccessControl accessControl;

        public CabangEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, CabangQuery cabangQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.cabangQuery = cabangQuery;
        }

        private List<Control> CreateFormControls(int cabangPK)
        {
            CabangEntryControlBuilder controlBuilder = new CabangEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (cabangPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private CabangEntryModel GetCreateStateModel()
        {
            CabangEntryFormData formData = new CabangEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            CabangDTO cabangDTO = new CabangDTO();
            return new CabangEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new CabangDTO(),
            };
        }

        private CabangEntryModel GetUpdateStateModel(int cabangPK)
        {
            CabangEntryFormData formData = new CabangEntryFormData();
            List<Control> formControls = CreateFormControls(cabangPK);
            CabangDTO cabangDTO = cabangQuery.GetByPrimaryKey(cabangPK);

            if (cabangDTO == null)
                throw new KairosException($"Record with primary key '{cabangDTO.Cabang_PK}' is not found.");

            return new CabangEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = cabangDTO,
            };
        }

        public CabangEntryModel Get(int cabangPK)
        {
            if (cabangPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(cabangPK);
        }
    }
}
