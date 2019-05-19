using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Technology.DML
{
    public class TechnologyDeleteHandler : DeleteOperation
    {
        public TechnologyDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Technology technology)
        {
            if (technology != null)
                Db.tblM_Technology.Remove(technology);
        }

        private void SoftDelete(tblM_Technology technology)
        {
            if (technology != null)
                technology.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Technology> Execute(int technologyPK, DeleteMethod deleteMethod)
        {
            tblM_Technology technology = Db.tblM_Technology.Find(technologyPK); 
            if (technology == null)
            {
                return new DeleteResult<tblM_Technology>()
                {
                    Success = false,
                    Message = $"Id '{technologyPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(technology);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(technology);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Technology>()
            {
                Success = true,
                Message = $"Technology with Id '{technologyPK}' successfully deleted.",
                Record = technology
            };
        }
    }
}
