using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Operator.EntryForm;
using GlobalSolusindo.Business.Operator.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Operator.DML
{
    public class OperatorCreateHandler : CreateOperation
    {
        private OperatorValidator _operatorValidator;
        private OperatorFactory _operatorFactory;
        private OperatorQuery _operatorQuery;
        private OperatorEntryDataProvider _operatorEntryDataProvider;

        public OperatorCreateHandler(GlobalSolusindoDb db, tblM_User user, OperatorValidator _operatorValidator, OperatorFactory _operatorFactory, OperatorQuery _operatorQuery, AccessControl accessControl) : base(db, user)
        {
            this._operatorValidator = _operatorValidator;
            this._operatorFactory = _operatorFactory;
            this._operatorQuery = _operatorQuery;
            this._operatorEntryDataProvider = new OperatorEntryDataProvider(db, user, accessControl, _operatorQuery);
        }

        public tblM_Operator Insert(OperatorDTO _operatorDTO, DateTime dateStamp)
        {
            if (_operatorDTO == null)
                throw new ArgumentNullException("Operator model is null.");
            tblM_Operator _operator = _operatorFactory.CreateFromDTO(_operatorDTO, dateStamp);
            return Db.tblM_Operator.Add(_operator);
        }

        public SaveResult<OperatorEntryModel> Save(OperatorDTO _operatorDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = _operatorValidator.Validate(_operatorDTO);
            bool success = false;
            OperatorEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_Operator _operator = Insert(_operatorDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = _operatorEntryDataProvider.Get(_operator.Operator_PK);
            }

            return new SaveResult<OperatorEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
