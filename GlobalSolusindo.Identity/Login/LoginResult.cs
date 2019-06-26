using GlobalSolusindo.Identity.Menu;
using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.Login
{
    public class LoginResult<T>
    {
        [JsonProperty("success")]
        public bool Success { get; set; }

        [JsonProperty("token")]
        public string Token { get; set; }

        [JsonProperty("validationResult")]
        public ModelValidationResult ValidationResult { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("model")]
        public T Model { get; set; }

        [JsonProperty("treeMenu")]
        public TreeMenu TreeMenu { get; set; }
    }
}
