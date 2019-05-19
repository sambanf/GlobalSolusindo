using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Identity.Role.DML
{
    public class RoleDeleteHandler : DeleteOperation
    {
        public RoleDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Role role)
        {
            if (role != null)
                Db.tblM_Role.Remove(role);
        }

        private void SoftDelete(tblM_Role role)
        {
            if (role != null)
                role.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Role> Execute(int rolePK, DeleteMethod deleteMethod)
        {
            tblM_Role role = Db.tblM_Role.Find(rolePK); 
            if (role == null)
            {
                return new DeleteResult<tblM_Role>()
                {
                    Success = false,
                    Message = $"Id '{rolePK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(role);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(role);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Role>()
            {
                Success = true,
                Message = $"Role with Id '{rolePK}' successfully deleted.",
                Record = role
            };
        }
    }
}
