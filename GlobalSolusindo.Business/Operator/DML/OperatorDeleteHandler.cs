using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Operator.DML
{
    public class OperatorDeleteHandler : DeleteOperation
    {
        public OperatorDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Operator _operator)
        {
            if (_operator != null)
                Db.tblM_Operator.Remove(_operator);
        }

        private void SoftDelete(tblM_Operator _operator)
        {
            if (_operator != null)
                _operator.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Operator> Execute(int _operatorPK, DeleteMethod deleteMethod)
        {
            tblM_Operator _operator = Db.tblM_Operator.Find(_operatorPK); 
            if (_operator == null)
            {
                return new DeleteResult<tblM_Operator>()
                {
                    Success = false,
                    Message = $"Id '{_operatorPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(_operator);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(_operator);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Operator>()
            {
                Success = true,
                Message = $"Operator with Id '{_operatorPK}' successfully deleted.",
                Record = _operator
            };
        }
    }
}
