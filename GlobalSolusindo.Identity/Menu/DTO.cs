using GlobalSolusindo.Base;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace GlobalSolusindo.Identity.Menu
{
    public class MenuDTO : DTO
    {
        [JsonProperty("menu_pk")]
        public int Menu_PK { get; set; }

        [Required]
        [JsonProperty("code")]
        [Unique(typeof(MenuQuery), nameof(Menu_PK))]
        public string Code { get; set; }

        [Required]
        [JsonProperty("caption")]
        [Unique(typeof(MenuQuery), nameof(Menu_PK))]
        public string Caption { get; set; }

        [Required]
        [JsonProperty("path")]
        [Unique(typeof(MenuQuery), nameof(Menu_PK))]
        public string Path { get; set; }


        [Required]
        [JsonProperty("parentGroup")]
        public string ParentGroup { get; set; }
    }
}
