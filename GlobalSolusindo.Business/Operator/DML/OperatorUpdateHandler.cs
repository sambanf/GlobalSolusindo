using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Operator.EntryForm;
using GlobalSolusindo.Business.Operator.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Operator.DML
{
    public class OperatorUpdateHandler : UpdateOperation
    {
        private OperatorValidator _operatorValidator;
        private OperatorFactory _operatorFactory;
        private OperatorQuery _operatorQuery;
        private OperatorEntryDataProvider _operatorEntryDataProvider;

        public OperatorUpdateHandler(GlobalSolusindoDb db, tblM_User user, OperatorValidator _operatorValidator, OperatorFactory _operatorFactory, OperatorQuery _operatorQuery, AccessControl accessControl) : base(db, user)
        {
            this._operatorValidator = _operatorValidator;
            this._operatorFactory = _operatorFactory;
            this._operatorQuery = _operatorQuery;
            this._operatorEntryDataProvider = new OperatorEntryDataProvider(db, user, accessControl, _operatorQuery);
        }

        private void Initialize(OperatorValidator _operatorValidator, OperatorFactory _operatorFactory)
        {
            this._operatorValidator = _operatorValidator;
            this._operatorFactory = _operatorFactory;
        }

        public void Update(OperatorDTO _operatorDTO, DateTime dateStamp)
        {
            if (_operatorDTO == null)
                throw new ArgumentNullException("Operator model is null.");
            tblM_Operator _operator = _operatorFactory.CreateFromDbAndUpdateFromDTO(_operatorDTO, dateStamp);  
        }

        public SaveResult<OperatorEntryModel> Save(OperatorDTO _operatorDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = _operatorValidator.Validate(_operatorDTO);
            bool success = false;
            OperatorEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(_operatorDTO, dateStamp); 
                Db.SaveChanges();
                model = _operatorEntryDataProvider.Get(_operatorDTO.Operator_PK);
            }

            return new SaveResult<OperatorEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
