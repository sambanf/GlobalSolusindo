using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;
using System.Linq;

namespace GlobalSolusindo.Business.Project
{
    public class ProjectFactory : FactoryBase
    {
        public ProjectFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Project CreateFromDTO(ProjectDTO projectDTO, DateTime dateStamp)
        {
            if (projectDTO == null)
                throw new ArgumentNullException("Project model is null.");
            projectDTO.Status_FK = (int)RecordStatus.Active;
            projectDTO.CreatedBy = User.Username;
            projectDTO.CreatedDate = dateStamp;
            projectDTO.UpdatedBy = User.Username;
            projectDTO.UpdatedDate = dateStamp;
            tblM_Project project = projectDTO.ToObject<tblM_Project>();
            return project;
        }

        public tblM_Project CreateFromDbAndUpdateFromDTO(ProjectDTO projectDTO, DateTime dateStamp)
        {
            tblM_Project project;

            if (projectDTO == null)
                throw new ArgumentNullException("Project model is null.");
            project = Db.tblM_Project.FirstOrDefault(x => x.Project_PK == projectDTO.Project_PK);
            if (project == null)
                throw new KairosException($"Record with key '{projectDTO.Project_PK}' is not found.");

            project.UpdateValueFrom(projectDTO, "Project_PK", "Status_FK");
            projectDTO.CreatedBy = project.CreatedBy;
            projectDTO.CreatedDate = project.CreatedDate;
            project.UpdatedBy = projectDTO.UpdatedBy = User.Username;
            project.UpdatedDate = projectDTO.UpdatedDate = dateStamp;

            return project;
        }
    }
}
