using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.Menu
{
    public class MenuNode
    {
        [JsonProperty("code")]
        public string Code { get; set; }

        [JsonProperty("caption")]
        public string Caption { get; set; }

        [JsonProperty("path")]
        public string Path { get; set; }
    }

    public class GroupMenu
    {
        [JsonProperty("groupName")]
        public string GroupName { get; set; }

        [JsonProperty("menus")]
        public List<MenuNode> Menus { get; set; } = new List<MenuNode>();
    }

    public class TreeMenu
    {
        [JsonProperty("groupMenus")]
        public List<GroupMenu> GroupMenus { get; set; } = new List<GroupMenu>();
    }
}
