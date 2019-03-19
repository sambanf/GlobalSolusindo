using GlobalSolusindo.Identity.Position.Queries;
using GlobalSolusindo.Identity.User.Queries;
using GlobalSolusindo.Identity.UserDetail;
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
        [ForeignKey(typeof(PositionQuery), "Position_PK")]
        [JsonProperty("position_fk")]
        public int Position_FK { get; set; }

        [Required]
        [JsonProperty("username")]
        [Unique(typeof(UserQuery), nameof(User_PK))]
        public string Username { get; set; }

        [Required]
        [JsonProperty("password")]
        public string Password { get; set; }
    }
}
