using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Identity.AuthParam.DML
{
    public class AuthParamDeleteHandler : DeleteOperation
    {
        public AuthParamDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_AuthParam authParam)
        {
            if (authParam != null)
                Db.tblM_AuthParam.Remove(authParam);
        }

        private void SoftDelete(tblM_AuthParam authParam)
        {
            if (authParam != null)
                authParam.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_AuthParam> Execute(int authParamPK, DeleteMethod deleteMethod)
        {
            tblM_AuthParam authParam = Db.tblM_AuthParam.Find(authParamPK); 
            if (authParam == null)
            {
                return new DeleteResult<tblM_AuthParam>()
                {
                    Success = false,
                    Message = $"Id '{authParamPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(authParam);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(authParam);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_AuthParam>()
            {
                Success = true,
                Message = $"AuthParam with Id '{authParamPK}' successfully deleted.",
                Record = authParam
            };
        }
    }
}
