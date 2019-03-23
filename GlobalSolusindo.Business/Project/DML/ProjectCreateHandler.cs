using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Project.EntryForm;
using GlobalSolusindo.Business.Project.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Project.DML
{
    public class ProjectCreateHandler : CreateOperation
    {
        private ProjectValidator projectValidator;
        private ProjectFactory projectFactory;
        private ProjectQuery projectQuery;
        private ProjectEntryDataProvider projectEntryDataProvider;

        public ProjectCreateHandler(GlobalSolusindoDb db, tblM_User user, ProjectValidator projectValidator, ProjectFactory projectFactory, ProjectQuery projectQuery, AccessControl accessControl) : base(db, user)
        {
            this.projectValidator = projectValidator;
            this.projectFactory = projectFactory;
            this.projectQuery = projectQuery;
            this.projectEntryDataProvider = new ProjectEntryDataProvider(db, user, accessControl, projectQuery);
        }

        public tblM_Project Insert(ProjectDTO projectDTO, DateTime dateStamp)
        {
            if (projectDTO == null)
                throw new ArgumentNullException("Project model is null.");
            tblM_Project project = projectFactory.CreateFromDTO(projectDTO, dateStamp);
            return Db.tblM_Project.Add(project);
        }

        public SaveResult<ProjectEntryModel> Save(ProjectDTO projectDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = projectValidator.Validate(projectDTO);
            bool success = false;
            ProjectEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_Project project = Insert(projectDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = projectEntryDataProvider.Get(project.Project_PK);
            }

            return new SaveResult<ProjectEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
