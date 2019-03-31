using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CheckIn.EntryForm;
using GlobalSolusindo.Business.CheckIn.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.CheckIn.DML
{
    public class CheckInCreateHandler : CreateOperation
    {
        private CheckInValidator checkInValidator;
        private CheckInFactory checkInFactory;
        private CheckInQuery checkInQuery;
        private CheckInEntryDataProvider checkInEntryDataProvider;

        public CheckInCreateHandler(GlobalSolusindoDb db, tblM_User user, CheckInValidator checkInValidator, CheckInFactory checkInFactory, CheckInQuery checkInQuery, AccessControl accessControl) : base(db, user)
        {
            this.checkInValidator = checkInValidator;
            this.checkInFactory = checkInFactory;
            this.checkInQuery = checkInQuery;
            this.checkInEntryDataProvider = new CheckInEntryDataProvider(db, user, accessControl, checkInQuery);
        }

        public tblT_CheckIn Insert(CheckInDTO checkInDTO, DateTime dateStamp)
        {
            if (checkInDTO == null)
                throw new ArgumentNullException("CheckIn model is null.");
            tblT_CheckIn checkIn = checkInFactory.CreateFromDTO(checkInDTO, dateStamp);
            return Db.tblT_CheckIn.Add(checkIn);
        }

        public SaveResult<CheckInEntryModel> Save(CheckInDTO checkInDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = checkInValidator.Validate(checkInDTO);
            bool success = false;
            CheckInEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_CheckIn checkIn = Insert(checkInDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = checkInEntryDataProvider.Get(checkIn.CheckIn_PK);
            }

            return new SaveResult<CheckInEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
