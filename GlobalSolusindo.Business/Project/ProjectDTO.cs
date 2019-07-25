﻿using GlobalSolusindo.Base;
using GlobalSolusindo.Business.DeliveryArea.Queries;
using GlobalSolusindo.Business.Operator.Queries;
using GlobalSolusindo.Business.Vendor;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Business.Project
{
    public class ProjectDTO : DTO
    {
        [JsonProperty("project_pk")]
        public int Project_PK { get; set; } 

        //Request mas indra di hapus 20190619
        //[Required]
        //[JsonProperty("title")]
        //[Unique(typeof(ProjectQuery), nameof(Project_PK))]
        //public string Title { get; set; }

        [Required]
        [JsonProperty("operator_fk")]
        [ForeignKey(typeof(OperatorQuery), "Operator_PK")]
        public int Operator_FK { get; set; }

        [JsonProperty("operatorTitle")]
        public string OperatorTitle { get; set; }

        [Required]
        [JsonProperty("deliveryArea_fk")]
        [ForeignKey(typeof(DeliveryAreaQuery), "DeliveryArea_PK")]
        public int DeliveryArea_FK { get; set; }

        [JsonProperty("deliveryAreaTitle")]
        public string DeliveryAreaTitle { get; set; }

        [Required]
        [JsonProperty("vendor_fk")]
        [ForeignKey(typeof(VendorQuery), "Vendor_PK")]
        public int? Vendor_FK { get; set; }

        [JsonProperty("vendorTitle")]
        public string VendorTitle { get; set; }

        [Required]
        [JsonProperty("user_fk")]
        [ForeignKey(typeof(UserQuery), "User_PK")]
        public int? User_FK { get; set; }

        [JsonProperty("userName")]
        public string UserName { get; set; }
    }
}
