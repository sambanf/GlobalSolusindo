using GlobalSolusindo.Base;
using GlobalSolusindo.Business.DeliveryArea;
using GlobalSolusindo.Business.DeliveryArea.Queries;
using GlobalSolusindo.Business.Operator;
using GlobalSolusindo.Business.Operator.Queries;
using GlobalSolusindo.Business.Vendor;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Project.EntryForm
{
    public class ProjectEntryFormData
    {
        [JsonProperty("operators")]
        public List<OperatorDTO> Operators { get; set; } = new List<OperatorDTO>();

        [JsonProperty("deliveryAreas")]
        public List<DeliveryAreaDTO> DeliveryAreas { get; set; } = new List<DeliveryAreaDTO>();

        [JsonProperty("vendors")]
        public List<VendorDTO> Vendors { get; set; } = new List<VendorDTO>();
    }

    public class ProjectEntryModel
    {
        [JsonProperty("formData")]
        public ProjectEntryFormData FormData { get; set; } = new ProjectEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public ProjectDTO Model { get; set; }
    }

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

        private ProjectEntryFormData CreateFormData(ProjectDTO projectDTO)
        {
            if (projectDTO == null)
                return new ProjectEntryFormData();

            ProjectEntryFormData formData = new ProjectEntryFormData();

            var _operator = new OperatorQuery(this.Db).GetByPrimaryKey(projectDTO.Operator_FK);
            if (_operator != null)
                formData.Operators.Add(_operator); 

            var deliveryArea = new DeliveryAreaQuery(this.Db).GetByPrimaryKey(projectDTO.DeliveryArea_FK);
            if (deliveryArea != null)
                formData.DeliveryAreas.Add(deliveryArea);

            var vendor = new VendorQuery(this.Db).GetByPrimaryKey(projectDTO.Vendor_FK);
            if (vendor != null)
                formData.Vendors.Add(vendor);

            return formData;
        }

        private ProjectEntryModel GetCreateStateModel()
        { 
            List<Control> formControls = CreateFormControls(0);
            ProjectDTO projectDTO = new ProjectDTO();
            ProjectEntryFormData formData = new ProjectEntryFormData();
            return new ProjectEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new ProjectDTO(),
            };
        }

        private ProjectEntryModel GetUpdateStateModel(int projectPK)
        { 
            List<Control> formControls = CreateFormControls(projectPK);
            ProjectDTO projectDTO = projectQuery.GetByPrimaryKey(projectPK);

            if (projectDTO == null)
                throw new KairosException($"Record with primary key '{projectDTO.Project_PK}' is not found.");

            ProjectEntryFormData formData = CreateFormData(projectDTO);

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
