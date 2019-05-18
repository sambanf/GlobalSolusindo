using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Project.EntryForm;
using GlobalSolusindo.Business.Project.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Project.DML
{
    public class ProjectUpdateHandler : UpdateOperation
    {
        private ProjectValidator projectValidator;
        private ProjectFactory projectFactory;
        private ProjectQuery projectQuery;
        private ProjectEntryDataProvider projectEntryDataProvider;

        public ProjectUpdateHandler(GlobalSolusindoDb db, tblM_User user, ProjectValidator projectValidator, ProjectFactory projectFactory, ProjectQuery projectQuery, AccessControl accessControl) : base(db, user)
        {
            this.projectValidator = projectValidator;
            this.projectFactory = projectFactory;
            this.projectQuery = projectQuery;
            this.projectEntryDataProvider = new ProjectEntryDataProvider(db, user, accessControl, projectQuery);
        }

        private void Initialize(ProjectValidator projectValidator, ProjectFactory projectFactory)
        {
            this.projectValidator = projectValidator;
            this.projectFactory = projectFactory;
        }

        public void Update(ProjectDTO projectDTO, DateTime dateStamp)
        {
            if (projectDTO == null)
                throw new ArgumentNullException("Project model is null.");
            tblM_Project project = projectFactory.CreateFromDbAndUpdateFromDTO(projectDTO, dateStamp);  
        }

        public SaveResult<ProjectEntryModel> Save(ProjectDTO projectDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = projectValidator.Validate(projectDTO);
            bool success = false;
            ProjectEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(projectDTO, dateStamp); 
                Db.SaveChanges();
                model = projectEntryDataProvider.Get(projectDTO.Project_PK);
            }

            return new SaveResult<ProjectEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
