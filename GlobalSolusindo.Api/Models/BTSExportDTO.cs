using System;
using System.ComponentModel;

namespace GlobalSolusindo.Api.Models
{
    public class BTSExportDTO
    {
        [Description("TowerID")]
        public string TowerID { get; set; }
        [Description("CellID")]
        public string CellID { get; set; }
        [Description("Name")]
        public string Name { get; set; }
        [Description("Operator")]
        public string Operator { get; set; }
        [Description("StatusBTS")]
        public string StatusBts { get; set; }
        [Description("Longitude")]
        public string Longitude { get; set; }
        [Description("Latitude")]
        public string Latitude { get; set; }
        
        [Description("AreaTitle")]
        public string Area { get; set; }
        [Description("Alamat")]
        public string Alamat { get; set; }
    }
}