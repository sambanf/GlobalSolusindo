using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam.DML
{
    public class MappingUserToAuthParamDeleteHandler : DeleteOperation
    {
        public MappingUserToAuthParamDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_MappingUserToAuthParam mappingUserToAuthParam)
        {
            if (mappingUserToAuthParam != null)
                Db.tblM_MappingUserToAuthParam.Remove(mappingUserToAuthParam);
        }

        private void SoftDelete(tblM_MappingUserToAuthParam mappingUserToAuthParam)
        {
            if (mappingUserToAuthParam != null)
                mappingUserToAuthParam.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_MappingUserToAuthParam> Execute(int authParamPk, int userPk, DeleteMethod deleteMethod)
        {
            tblM_MappingUserToAuthParam mappingUserToAuthParam = Db.tblM_MappingUserToAuthParam.Find(userPk, authParamPk);
            if (mappingUserToAuthParam == null)
            {
                return new DeleteResult<tblM_MappingUserToAuthParam>()
                {
                    Success = false,
                    Message = $"Id '{authParamPk} and {userPk}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(mappingUserToAuthParam);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(mappingUserToAuthParam);
                    break;
                default:
                    break;
            }

            Db.SaveChanges();

            return new DeleteResult<tblM_MappingUserToAuthParam>()
            {
                Success = true,
                Message = $"User member of role group successfully deleted.",
                Record = mappingUserToAuthParam
            };
        }
    }
}
