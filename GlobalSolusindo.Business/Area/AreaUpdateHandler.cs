using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Area.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Area
{
    public class AreaUpdateHandler : UpdateOperation
    {
        private AreaValidator areaValidator;
        private AreaFactory areaFactory;
        private AreaQuery areaQuery;
        private AreaEntryDataProvider areaEntryDataProvider;

        public AreaUpdateHandler(GlobalSolusindoDb db, tblM_User user, AreaValidator areaValidator, AreaFactory areaFactory, AreaQuery areaQuery, AccessControl accessControl) : base(db, user)
        {
            this.areaValidator = areaValidator;
            this.areaFactory = areaFactory;
            this.areaQuery = areaQuery;
            this.areaEntryDataProvider = new AreaEntryDataProvider(db, user, accessControl, areaQuery);
        }

        private void Initialize(AreaValidator areaValidator, AreaFactory areaFactory)
        {
            this.areaValidator = areaValidator;
            this.areaFactory = areaFactory;
        }

        public void UpdateArea(AreaDTO areaDTO, DateTime dateStamp)
        {
            if (areaDTO == null)
                throw new ArgumentNullException("Area model is null.");
            tblM_Area area = areaFactory.CreateFromDbAndUpdateFromDTO(areaDTO, dateStamp);
        }

        public SaveResult<AreaEntryModel> Save(AreaDTO areaDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = areaValidator.Validate(areaDTO);
            bool success = false;
            AreaEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                UpdateArea(areaDTO, dateStamp);
                Db.SaveChanges();
                model = areaEntryDataProvider.Get(areaDTO.Area_PK);
            }

            return new SaveResult<AreaEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
