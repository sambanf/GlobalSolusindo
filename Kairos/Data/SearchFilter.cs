using Newtonsoft.Json;

namespace Kairos.Data
{
    public class SearchFilter : PagingFilter
    {
        private string _keyword;
        private string _sortName;
        private string _sortDir;

        [JsonProperty("keyword")]
        public string Keyword
        {
            get
            {
                return _keyword ?? string.Empty;
            }
            set
            {
                _keyword = value;
            }
        }

        [JsonProperty("sortName")]
        public string SortName
        {
            get
            {
                return _sortName ?? "";
            }
            set
            {
                _sortName = value;
            }
        }

        [JsonProperty("sortDir")]
        public string SortDir
        {
            get
            {
                _sortDir = string.IsNullOrEmpty(_sortDir) ? "asc" : _sortDir;
                return _sortDir.ToUpper();
            }
            set
            {
                _sortDir = value;
            }
        }
    }
}
