using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCutiStatus.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.IzinCutiStatus.EntryForm
{
    public class IzinCutiStatusEntryDataProvider : FactoryBase
    {
        private IzinCutiStatusQuery izinCutiStatusQuery;
        private AccessControl accessControl;

        public IzinCutiStatusEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, IzinCutiStatusQuery izinCutiStatusQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.izinCutiStatusQuery = izinCutiStatusQuery;
        }

        private List<Control> CreateFormControls(int izinCutiStatusPK)
        {
            IzinCutiStatusEntryControlBuilder controlBuilder = new IzinCutiStatusEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (izinCutiStatusPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private IzinCutiStatusEntryModel GetCreateStateModel()
        {
            IzinCutiStatusEntryFormData formData = new IzinCutiStatusEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            IzinCutiStatusDTO izinCutiStatusDTO = new IzinCutiStatusDTO();
            return new IzinCutiStatusEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new IzinCutiStatusDTO(),
            };
        }

        private IzinCutiStatusEntryModel GetUpdateStateModel(int izinCutiStatusPK)
        {
            IzinCutiStatusEntryFormData formData = new IzinCutiStatusEntryFormData();
            List<Control> formControls = CreateFormControls(izinCutiStatusPK);
            IzinCutiStatusDTO izinCutiStatusDTO = izinCutiStatusQuery.GetByPrimaryKey(izinCutiStatusPK);

            if (izinCutiStatusDTO == null)
                throw new KairosException($"Record with primary key '{izinCutiStatusDTO.IzinCutiStatus_PK}' is not found.");

            return new IzinCutiStatusEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = izinCutiStatusDTO,
            };
        }

        public IzinCutiStatusEntryModel Get(int izinCutiStatusPK)
        {
            if (izinCutiStatusPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(izinCutiStatusPK);
        }
    }
}
