using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Project.DML
{
    public class ProjectDeleteHandler : DeleteOperation
    {
        public ProjectDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Project project)
        {
            if (project != null)
                Db.tblM_Project.Remove(project);
        }

        private void SoftDelete(tblM_Project project)
        {
            if (project != null)
                project.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Project> Execute(int projectPK, DeleteMethod deleteMethod)
        {
            tblM_Project project = Db.tblM_Project.Find(projectPK); 
            if (project == null)
            {
                return new DeleteResult<tblM_Project>()
                {
                    Success = false,
                    Message = $"Id '{projectPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(project);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(project);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Project>()
            {
                Success = true,
                Message = $"Project with Id '{projectPK}' successfully deleted.",
                Record = project
            };
        }
    }
}
