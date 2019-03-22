using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Area.EntryForm;
using GlobalSolusindo.Business.Area.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Area.DML
{
    public class AreaCreateHandler : CreateOperation
    {
        private AreaValidator areaValidator;
        private AreaFactory areaFactory;
        private AreaQuery areaQuery;
        private AreaEntryDataProvider areaEntryDataProvider;

        public AreaCreateHandler(GlobalSolusindoDb db, tblM_User user, AreaValidator areaValidator, AreaFactory areaFactory, AreaQuery areaQuery, AccessControl accessControl) : base(db, user)
        {
            this.areaValidator = areaValidator;
            this.areaFactory = areaFactory;
            this.areaQuery = areaQuery;
            this.areaEntryDataProvider = new AreaEntryDataProvider(db, user, accessControl, areaQuery);
        }

        public tblM_Area Insert(AreaDTO areaDTO, DateTime dateStamp)
        {
            if (areaDTO == null)
                throw new ArgumentNullException("Area model is null.");
            tblM_Area area = areaFactory.CreateFromDTO(areaDTO, dateStamp);
            return Db.tblM_Area.Add(area);
        }

        public SaveResult<AreaEntryModel> Save(AreaDTO areaDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = areaValidator.Validate(areaDTO);
            bool success = false;
            AreaEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_Area area = Insert(areaDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = areaEntryDataProvider.Get(area.Area_PK);
            }

            return new SaveResult<AreaEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
