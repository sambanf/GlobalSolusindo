using System;
using System.ComponentModel;

namespace GlobalSolusindo.Api.Models
{
    public class UserExportDTO
    {
        [Description("No")]
        public int Nomor { get; set; }

        [Description("Emp Code/ID")]
        public string UserName { get; set; }

        [Description("Position")]
        public string KategoriJabatanTitle { get; set; }

        [Description("Name In Passport")]
        public string Name { get; set; }

        [Description("Date of Birth")]
        public DateTime? TglLahir { get; set; }

        [Description("KTP /Identity No")]
        public string NoKTP { get; set; }

        [Description("Religion")]
        public string ReligionName { get; set; }

        [Description("Category Contract")]
        public string CategoryContract { get; set; }

        [Description("Project")]
        public string Project { get; set; }

        [Description("Gender")]
        public string Gender { get; set; }

        [Description("Marital Status")]
        public string MartialStatus { get; set; }

        [Description("NPWP")]
        public string NPWP { get; set; }

        [Description("BPJS")]
        public string BPJS { get; set; }

        [Description("Join Date")]
        public DateTime? JoinDate { get; set; }

        [Description("Contact Number")]
        public string ContactNumber { get; set; }

        [Description("G1 Email ID")]
        public string G1EmailID { get; set; }

        [Description("Email Personal")]
        public string PersonalEmail { get; set; }

        [Description("Address")]
        public string Address { get; set; }

        [Description("Nama Bank")]
        public string NamaBank { get; set; }

        [Description("No. Rekening")]
        public string NoRekening { get; set; }

        [Description("Salary")]
        public double? Salary { get; set; }

        [Description("Remark")]
        public string Remark { get; set; }

        [Description("Status")]
        public string Status { get; set; }
    }
}