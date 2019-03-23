using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Project.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Project.EntryForm
{
    public class ProjectEntryDataProvider : FactoryBase
    {
        private ProjectQuery projectQuery;
        private AccessControl accessControl;

        public ProjectEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, ProjectQuery projectQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.projectQuery = projectQuery;
        }

        private List<Control> CreateFormControls(int projectPK)
        {
            ProjectEntryControlBuilder controlBuilder = new ProjectEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (projectPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private ProjectEntryModel GetCreateStateModel()
        {
            ProjectEntryFormData formData = new ProjectEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            ProjectDTO projectDTO = new ProjectDTO();
            return new ProjectEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new ProjectDTO(),
            };
        }

        private ProjectEntryModel GetUpdateStateModel(int projectPK)
        {
            ProjectEntryFormData formData = new ProjectEntryFormData();
            List<Control> formControls = CreateFormControls(projectPK);
            ProjectDTO projectDTO = projectQuery.GetByPrimaryKey(projectPK);

            if (projectDTO == null)
                throw new KairosException($"Record with primary key '{projectDTO.Project_PK}' is not found.");

            return new ProjectEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = projectDTO,
            };
        }

        public ProjectEntryModel Get(int projectPK)
        {
            if (projectPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(projectPK);
        }
    }
}
