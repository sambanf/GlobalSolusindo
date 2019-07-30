using GlobalSolusindo.Base;
using GlobalSolusindo.Business.LogActivity.EntryForm;
using GlobalSolusindo.Business.LogActivity.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.LogActivity.DML
{
    public class InsertLogActivity : DbOperation
    {
        private LogActivityValidator logActivityValidator;
        private LogActivityFactory logActivityFactory;
        private LogActivityQuery logActivityQuery;
        private LogActivityEntryDataProvider logActivityEntryDataProvider;

        public InsertLogActivity(GlobalSolusindoDb db, LogActivityValidator logActivityValidator, LogActivityFactory logActivityFactory, LogActivityQuery logActivityQuery) : base(db)
        {
            this.logActivityValidator = logActivityValidator;
            this.logActivityFactory = logActivityFactory;
            this.logActivityQuery = logActivityQuery;
            //this.logActivityEntryDataProvider = new LogActivityEntryDataProvider(db, logActivityQuery, ActiveUser, accessControl);
        }

        public tblT_LogActivity Insert(LogActivityDTO logActivityDTO, DateTime dateStamp)
        {
            if (logActivityDTO == null)
                throw new ArgumentNullException("LogActivity model is null.");
            tblT_LogActivity logActivity = logActivityFactory.CreateFromDTO(logActivityDTO, dateStamp);
            return Db.tblT_LogActivity.Add(logActivity);
        }

        public SaveResult<LogActivityEntryModel> Save(LogActivityDTO logActivityDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = logActivityValidator.Validate(logActivityDTO);
            bool success = false;
            LogActivityEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_LogActivity logActivity = Insert(logActivityDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                //model = logActivityEntryDataProvider.Get(logActivity.LogActivity_PK);
            }

            return new SaveResult<LogActivityEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
