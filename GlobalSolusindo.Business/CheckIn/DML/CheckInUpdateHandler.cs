using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CheckIn.EntryForm;
using GlobalSolusindo.Business.CheckIn.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.CheckIn.DML
{
    public class CheckInUpdateHandler : UpdateOperation
    {
        private CheckInValidator checkInValidator;
        private CheckInFactory checkInFactory;
        private CheckInQuery checkInQuery;
        private CheckInEntryDataProvider checkInEntryDataProvider;

        public CheckInUpdateHandler(GlobalSolusindoDb db, tblM_User user, CheckInValidator checkInValidator, CheckInFactory checkInFactory, CheckInQuery checkInQuery, AccessControl accessControl) : base(db, user)
        {
            this.checkInValidator = checkInValidator;
            this.checkInFactory = checkInFactory;
            this.checkInQuery = checkInQuery;
            this.checkInEntryDataProvider = new CheckInEntryDataProvider(db, user, accessControl, checkInQuery);
        }

        private void Initialize(CheckInValidator checkInValidator, CheckInFactory checkInFactory)
        {
            this.checkInValidator = checkInValidator;
            this.checkInFactory = checkInFactory;
        }

        public void Update(CheckInDTO checkInDTO, DateTime dateStamp)
        {
            if (checkInDTO == null)
                throw new ArgumentNullException("CheckIn model is null.");
            tblT_CheckIn checkIn = checkInFactory.CreateFromDbAndUpdateFromDTO(checkInDTO, dateStamp);  
        }

        public SaveResult<CheckInEntryModel> Save(CheckInDTO checkInDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = checkInValidator.Validate(checkInDTO);
            bool success = false;
            CheckInEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(checkInDTO, dateStamp); 
                Db.SaveChanges();
                model = checkInEntryDataProvider.Get(checkInDTO.CheckIn_PK);
            }

            return new SaveResult<CheckInEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
