using Newtonsoft.Json;

namespace Kairos.UI
{
    public class Button : Control
    {
        [JsonProperty("link")]
        public string Link { get; set; }

        [JsonProperty("httpMethod")]
        public string HttpMethod { get; set; }
    }
}
