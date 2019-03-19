using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.Position.EntryForm;
using GlobalSolusindo.Identity.Position.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.Position.DML
{
    public class PositionUpdateHandler : UpdateOperation
    {
        private PositionValidator positionValidator;
        private PositionFactory positionFactory;
        private PositionQuery positionQuery;
        private PositionEntryDataProvider positionEntryDataProvider;

        public PositionUpdateHandler(GlobalSolusindoDb db, tblM_User user, PositionValidator positionValidator, PositionFactory positionFactory, PositionQuery positionQuery, AccessControl accessControl) : base(db, user)
        {
            this.positionValidator = positionValidator;
            this.positionFactory = positionFactory;
            this.positionQuery = positionQuery;
            this.positionEntryDataProvider = new PositionEntryDataProvider(db, user, accessControl, positionQuery);
        }

        private void Initialize(PositionValidator positionValidator, PositionFactory positionFactory)
        {
            this.positionValidator = positionValidator;
            this.positionFactory = positionFactory;
        }

        public void Update(PositionDTO positionDTO, DateTime dateStamp)
        {
            if (positionDTO == null)
                throw new ArgumentNullException("Position model is null.");
            tblM_Position position = positionFactory.CreateFromDbAndUpdateFromDTO(positionDTO, dateStamp);  
        }

        public SaveResult<PositionEntryModel> Save(PositionDTO positionDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = positionValidator.Validate(positionDTO);
            bool success = false;
            PositionEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(positionDTO, dateStamp); 
                Db.SaveChanges();
                model = positionEntryDataProvider.Get(positionDTO.Position_PK);
            }

            return new SaveResult<PositionEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
