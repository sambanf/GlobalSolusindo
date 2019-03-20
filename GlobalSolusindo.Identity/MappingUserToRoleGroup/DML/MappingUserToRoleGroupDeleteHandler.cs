using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup.DML
{
    public class MappingUserToRoleGroupDeleteHandler : DeleteOperation
    {
        public MappingUserToRoleGroupDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_MappingUserToRoleGroup mappingUserToRoleGroup)
        {
            if (mappingUserToRoleGroup != null)
                Db.tblM_MappingUserToRoleGroup.Remove(mappingUserToRoleGroup);
        }

        private void SoftDelete(tblM_MappingUserToRoleGroup mappingUserToRoleGroup)
        {
            if (mappingUserToRoleGroup != null)
                mappingUserToRoleGroup.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_MappingUserToRoleGroup> Execute(int roleGroupPk, int userPk, DeleteMethod deleteMethod)
        {
            tblM_MappingUserToRoleGroup mappingUserToRoleGroup = Db.tblM_MappingUserToRoleGroup.Find(userPk, roleGroupPk);
            if (mappingUserToRoleGroup == null)
            {
                return new DeleteResult<tblM_MappingUserToRoleGroup>()
                {
                    Success = false,
                    Message = $"Id '{roleGroupPk} and {userPk}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(mappingUserToRoleGroup);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(mappingUserToRoleGroup);
                    break;
                default:
                    break;
            }

            Db.SaveChanges();

            return new DeleteResult<tblM_MappingUserToRoleGroup>()
            {
                Success = true,
                Message = $"User member of role group successfully deleted.",
                Record = mappingUserToRoleGroup
            };
        }
    }
}
