using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CheckIn.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.CheckIn.EntryForm
{
    public class CheckInEntryDataProvider : FactoryBase
    {
        private CheckInQuery checkInQuery;
        private AccessControl accessControl;

        public CheckInEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, CheckInQuery checkInQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.checkInQuery = checkInQuery;
        }

        private List<Control> CreateFormControls(int checkInPK)
        {
            CheckInEntryControlBuilder controlBuilder = new CheckInEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (checkInPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private CheckInEntryModel GetCreateStateModel()
        {
            CheckInEntryFormData formData = new CheckInEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            CheckInDTO checkInDTO = new CheckInDTO();
            return new CheckInEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = checkInDTO,
            };
        }

        private CheckInEntryModel GetUpdateStateModel(int checkInPK)
        {
            CheckInEntryFormData formData = new CheckInEntryFormData();
            List<Control> formControls = CreateFormControls(checkInPK);
            CheckInDTO checkInDTO = checkInQuery.GetByPrimaryKeyPhoto(checkInPK);

            if (checkInDTO == null)
                throw new KairosException($"Record with primary key '{checkInDTO.CheckIn_PK}' is not found.");

            return new CheckInEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = checkInDTO,
            };
        }

        public CheckInEntryModel Get(int checkInPK)
        {
            if (checkInPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(checkInPK);
        }
    }
}
