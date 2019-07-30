using GlobalSolusindo.Base;
using GlobalSolusindo.Business.LogActivity.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.LogActivity.EntryForm
{
    
    public class LogActivityEntryDataProvider : FactoryBase
    {
        private LogActivityQuery logActivityQuery;
        private AccessControl accessControl;

        public LogActivityEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, LogActivityQuery logActivityQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.logActivityQuery = logActivityQuery;
        }

        private List<Control> CreateFormControls(int logActivityPK)
        {
            LogActivityEntryControlBuilder controlBuilder = new LogActivityEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (logActivityPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private LogActivityEntryModel GetCreateStateModel()
        {
            LogActivityEntryFormData formData = new LogActivityEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            LogActivityDTO logActivityDTO = new LogActivityDTO();
            return new LogActivityEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new LogActivityDTO(),
            };
        }

        private LogActivityEntryModel GetUpdateStateModel(int logActivityPK)
        {
            LogActivityEntryFormData formData = new LogActivityEntryFormData();
            List<Control> formControls = CreateFormControls(logActivityPK);
            LogActivityDTO logActivityDTO = logActivityQuery.GetByPrimaryKey(logActivityPK);

            if (logActivityDTO == null)
                throw new KairosException($"Record with primary key '{logActivityDTO.LogActivity_PK}' is not found.");

            return new LogActivityEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = logActivityDTO,
            };
        }

        public LogActivityEntryModel Get(int logActivityPK)
        {
            if (logActivityPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(logActivityPK);
        }
    }
}
