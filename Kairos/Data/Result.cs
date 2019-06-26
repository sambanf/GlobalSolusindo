using Newtonsoft.Json;
using System.Collections.Generic;

namespace Kairos.Data
{
    public class SearchResult<T>
    {
        [JsonProperty("filter")]
        public SearchFilter Filter { get; set; }

        [JsonProperty("count")]
        public PagingCount Count { get; set; }

        [JsonProperty("records")]
        public List<T> Records { get; set; }

        public SearchResult(SearchFilter filter)
        {
            Filter = filter;
            Count = new PagingCount(filter);
        }
    }

    public class SaveResult<T>
    {
        [JsonProperty("success")]
        public bool Success { get; set; }

        [JsonProperty("validationResult")]
        public ModelValidationResult ValidationResult { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("model")]
        public T Model { get; set; }
    }


    public class DeleteResult<T>
    {
        [JsonProperty("success")]
        public bool Success { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("record")]
        public T Record { get; set; }
    }
}
