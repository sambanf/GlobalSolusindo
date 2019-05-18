using Newtonsoft.Json;

namespace Kairos.UI
{
    public class Control
    {
        [JsonProperty("controlName")]
        public string ControlName { get; set; }

        [JsonProperty("commandName")]
        public string CommandName { get; set; }

        [JsonProperty("commandDescription")]
        public string CommandDescription { get; set; }

        [JsonProperty("type")]
        public string Type { get; set; }

        [JsonProperty("text")]
        public string Text { get; set; }

        [JsonProperty("tooltip")]
        public string Tooltip { get; set; }

        [JsonProperty("visible")]
        public bool Visible { get; set; }

        [JsonProperty("enabled")]
        public bool Enabled { get; set; }
    }
}
