using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup.DML
{
    public class MappingRoleToRoleGroupDeleteHandler : DeleteOperation
    {
        public MappingRoleToRoleGroupDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_MappingRoleToRoleGroup mappingRoleToRoleGroup)
        {
            if (mappingRoleToRoleGroup != null)
                Db.tblM_MappingRoleToRoleGroup.Remove(mappingRoleToRoleGroup);
        }

        private void SoftDelete(tblM_MappingRoleToRoleGroup mappingRoleToRoleGroup)
        {
            if (mappingRoleToRoleGroup != null)
                mappingRoleToRoleGroup.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_MappingRoleToRoleGroup> Execute(int mappingRoleToRoleGroupPK, DeleteMethod deleteMethod)
        {
            tblM_MappingRoleToRoleGroup mappingRoleToRoleGroup = Db.tblM_MappingRoleToRoleGroup.Find(mappingRoleToRoleGroupPK); 
            if (mappingRoleToRoleGroup == null)
            {
                return new DeleteResult<tblM_MappingRoleToRoleGroup>()
                {
                    Success = false,
                    Message = $"Id '{mappingRoleToRoleGroupPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(mappingRoleToRoleGroup);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(mappingRoleToRoleGroup);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_MappingRoleToRoleGroup>()
            {
                Success = true,
                Message = $"MappingRoleToRoleGroup with Id '{mappingRoleToRoleGroupPK}' successfully deleted.",
                Record = mappingRoleToRoleGroup
            };
        }
    }
}
