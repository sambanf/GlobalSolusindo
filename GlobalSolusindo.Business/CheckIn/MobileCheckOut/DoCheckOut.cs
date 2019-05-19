using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CheckIn.EntryForm;
using GlobalSolusindo.Business.CheckIn.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.CheckIn.MobileCheckOut
{ 
    public class DoCheckOut : UpdateOperation
    {
        private CheckOutValidator checkOutValidator;
        private CheckOutFactory checkOutFactory;
        private CheckInQuery checkInQuery;
        private CheckInEntryDataProvider checkInEntryDataProvider;

        public DoCheckOut(GlobalSolusindoDb db, tblM_User user, CheckOutValidator checkOutValidator, CheckOutFactory checkOutFactory, CheckInQuery checkInQuery, AccessControl accessControl) : base(db, user)
        {
            this.checkOutValidator = checkOutValidator;
            this.checkOutFactory = checkOutFactory;
            this.checkInQuery = checkInQuery;
            this.checkInEntryDataProvider = new CheckInEntryDataProvider(db, user, accessControl, checkInQuery);
        }

        private void Initialize(CheckOutValidator checkOutValidator, CheckOutFactory checkOutFactory)
        {
            this.checkOutValidator = checkOutValidator;
            this.checkOutFactory = checkOutFactory;
        }

        public void Update(MobileCheckOutDTO checkOutDTO, DateTime dateStamp)
        {
            if (checkOutDTO == null)
                throw new ArgumentNullException("CheckOut model is null.");
            tblT_CheckIn checkIn = checkOutFactory.CreateFromDbAndUpdateFromDTO(checkOutDTO, dateStamp);
        }

        public SaveResult<CheckInEntryModel> Save(MobileCheckOutDTO checkOutDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = checkOutValidator.Validate(checkOutDTO);
            bool success = false;
            CheckInEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                Update(checkOutDTO, dateStamp);
                Db.SaveChanges();
                model = checkInEntryDataProvider.Get(checkOutDTO.CheckIn_PK);
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
