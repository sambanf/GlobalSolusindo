using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.CategoryContract;
using GlobalSolusindo.Identity.Gender;
using GlobalSolusindo.Identity.KategoriJabatan;
using GlobalSolusindo.Identity.MaritalStatus;
using GlobalSolusindo.Identity.Religion;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Identity.User.EntryForm
{
    public class UserEntryFormData
    {
        [JsonProperty("kategoriJabatans")]
        public List<KategoriJabatanDTO> KategoriJabatans { get; set; } = new List<KategoriJabatanDTO>();

        [JsonProperty("projects")]
        public List<Project> Projects { get; set; } = new List<Project>();

        [JsonProperty("religions")]
        public List<ReligionDTO> Religions { get; set; } = new List<ReligionDTO>();

        [JsonProperty("categoryContracts")]
        public List<CategoryContractDTO> CategoryContracts { get; set; } = new List<CategoryContractDTO>();

        [JsonProperty("genders")]
        public List<GenderDTO> Genders { get; set; } = new List<GenderDTO>();

        [JsonProperty("maritalStatuses")]
        public List<MaritalStatusDTO> MaritalStatuses { get; set; } = new List<MaritalStatusDTO>();
    }

    public class Project
    {
        [JsonProperty("project_pk")]
        public int Project_PK { get; set; }

        [JsonProperty("operator_fk")]
        public int Operator_FK { get; set; }

        [JsonProperty("operatorTitle")]
        public string OperatorTitle { get; set; }

        [JsonProperty("deliveryArea_fk")]
        public int DeliveryArea_FK { get; set; }

        [JsonProperty("deliveryAreaTitle")]
        public string DeliveryAreaTitle { get; set; }

        [JsonProperty("vendor_fk")]
        public int? Vendor_FK { get; set; }

        [JsonProperty("vendorTitle")]
        public string VendorTitle { get; set; }

        [JsonProperty("user_fk")]
        public int? User_FK { get; set; }
    }

    public class ProjectQuery
    {
        private GlobalSolusindoDb Db;
        public ProjectQuery(GlobalSolusindoDb db)
        {
            this.Db = db;
        }

        public IQueryable<Project> GetQuery()
        {
            var query = from project in Db.tblM_Project
                        join _operator in Db.tblM_Operator on project.Operator_FK equals _operator.Operator_PK into operatorTemp
                        from _operator in operatorTemp.DefaultIfEmpty()
                        join deliveryArea in Db.tblM_DeliveryArea on project.DeliveryArea_FK equals deliveryArea.DeliveryArea_PK into deliveryAreaTemp
                        from deliveryArea in deliveryAreaTemp.DefaultIfEmpty()
                        join vendor in Db.tblM_Vendor on project.Vendor_FK equals vendor.Vendor_PK into vendorTemp
                        from vendor in vendorTemp.DefaultIfEmpty()
                        where
                        project.Status_FK != 3
                        select new Project
                        {
                            Project_PK = project.Project_PK,
                            Operator_FK = project.Operator_FK,
                            OperatorTitle = _operator.Title,
                            DeliveryArea_FK = project.DeliveryArea_FK,
                            DeliveryAreaTitle = deliveryArea.Title,
                            VendorTitle = vendor.Title,
                            Vendor_FK = project.Vendor_FK,
                            User_FK = project.User_FK,
                        };

            return query;
        }

        public Project GetById(int? projectPk)
        {
            return GetQuery().FirstOrDefault(x => x.Project_PK == projectPk);
        }
    }
}
