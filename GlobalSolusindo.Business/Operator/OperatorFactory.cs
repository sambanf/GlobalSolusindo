using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Operator
{
    public class OperatorFactory : FactoryBase
    {
        public OperatorFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Operator CreateFromDTO(OperatorDTO _operatorDTO, DateTime dateStamp)
        {
            if (_operatorDTO == null)
                throw new ArgumentNullException("Operator model is null.");
            _operatorDTO.Status_FK = (int)RecordStatus.Active;
            _operatorDTO.CreatedBy = User.Username;
            _operatorDTO.CreatedDate = dateStamp;
            _operatorDTO.UpdatedBy = User.Username;
            _operatorDTO.UpdatedDate = dateStamp;
            tblM_Operator _operator = _operatorDTO.ToObject<tblM_Operator>();
            return _operator;
        }

        public tblM_Operator CreateFromDbAndUpdateFromDTO(OperatorDTO _operatorDTO, DateTime dateStamp)
        {
            tblM_Operator _operator;

            if (_operatorDTO == null)
                throw new ArgumentNullException("Operator model is null.");
            _operator = Db.tblM_Operator.Find(_operatorDTO.Operator_PK);
            if (_operator == null)
                throw new KairosException($"Record with key '{_operatorDTO.Operator_PK}' is not found.");

            _operator.UpdateValueFrom(_operatorDTO, "Operator_PK", "Status_FK");
            _operatorDTO.CreatedBy = _operator.CreatedBy;
            _operatorDTO.CreatedDate = _operator.CreatedDate;
            _operator.UpdatedBy = _operatorDTO.UpdatedBy = User.Username;
            _operator.UpdatedDate = _operatorDTO.UpdatedDate = dateStamp;

            return _operator;
        }
    }
}
