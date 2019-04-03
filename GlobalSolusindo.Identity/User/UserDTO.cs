using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.User.Queries;
using GlobalSolusindo.Identity.UserDetail;
using Kairos.Data;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.User
{
    public class UserDTO : UserDetailDTO
    {
        [JsonProperty("user_pk")]
        public int User_PK { get; set; }

        [JsonProperty("userDetail_fk")]
        public int UserDetail_FK { get; set; }

        [Required]
        [ForeignKey(typeof(KategoriJabatanQuery), "KategoriJabatan_PK")]
        [JsonProperty("kategoriJabatan_fk")]
        public int KategoriJabatan_FK { get; set; }

        [JsonProperty("kategoriJabatanTitle")]
        public string KategoriJabatanTitle { get; set; }

        [JsonProperty("roleGroupTitle")]
        public string RoleGroupTitle { get; set; }

        [Required]
        [JsonProperty("username")]
        [Unique(typeof(UserQuery), nameof(User_PK))]
        public string Username { get; set; }

        [Required]
        [JsonProperty("password")]
        public string Password { get; set; }

        public tblM_User ToUserEntity()
        {
            if (this == null)
                return null;
            return this.ToObject<tblM_User>();
        }
         
    }
}
