using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Identity.RoleGroup.DML
{
    public class RoleGroupDeleteHandler : DeleteOperation
    {
        public RoleGroupDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_RoleGroup roleGroup)
        {
            if (roleGroup != null)
                Db.tblM_RoleGroup.Remove(roleGroup);
        }

        private void SoftDelete(tblM_RoleGroup roleGroup)
        {
            if (roleGroup != null)
                roleGroup.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_RoleGroup> Execute(int roleGroupPK, DeleteMethod deleteMethod)
        {
            tblM_RoleGroup roleGroup = Db.tblM_RoleGroup.Find(roleGroupPK); 
            if (roleGroup == null)
            {
                return new DeleteResult<tblM_RoleGroup>()
                {
                    Success = false,
                    Message = $"Id '{roleGroupPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(roleGroup);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(roleGroup);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_RoleGroup>()
            {
                Success = true,
                Message = $"RoleGroup with Id '{roleGroupPK}' successfully deleted.",
                Record = roleGroup
            };
        }
    }
}
