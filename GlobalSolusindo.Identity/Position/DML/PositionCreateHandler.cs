using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.Position.EntryForm;
using GlobalSolusindo.Identity.Position.Queries;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.Position.DML
{
    public class PositionCreateHandler : CreateOperation
    {
        private PositionValidator positionValidator;
        private PositionFactory positionFactory;
        private PositionQuery positionQuery;
        private PositionEntryDataProvider positionEntryDataProvider;

        public PositionCreateHandler(GlobalSolusindoDb db, tblM_User user, PositionValidator positionValidator, PositionFactory positionFactory, PositionQuery positionQuery, AccessControl accessControl) : base(db, user)
        {
            this.positionValidator = positionValidator;
            this.positionFactory = positionFactory;
            this.positionQuery = positionQuery;
            this.positionEntryDataProvider = new PositionEntryDataProvider(db, user, accessControl, positionQuery);
        }

        public tblM_Position Insert(PositionDTO positionDTO, DateTime dateStamp)
        {
            if (positionDTO == null)
                throw new ArgumentNullException("Position model is null.");
            tblM_Position position = positionFactory.CreateFromDTO(positionDTO, dateStamp);
            return Db.tblM_Position.Add(position);
        }

        public SaveResult<PositionEntryModel> Save(PositionDTO positionDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = positionValidator.Validate(positionDTO);
            bool success = false;
            PositionEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_Position position = Insert(positionDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = positionEntryDataProvider.Get(position.Position_PK);
            }

            return new SaveResult<PositionEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
