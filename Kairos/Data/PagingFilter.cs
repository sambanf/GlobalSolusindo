using Newtonsoft.Json;

namespace Kairos.Data
{
    public class PagingFilter
    {
        private int pageIndex;
        private int pageSize;

        [JsonProperty("pageIndex")]
        public int PageIndex
        {
            get
            {
                return (pageIndex == 0) ? 1 : pageIndex;
            }
            set
            {
                pageIndex = value;
            }
        }

        [JsonProperty("pageSize")]
        public int PageSize
        {
            get
            {
                return (pageSize == 0) ? 10 : pageSize;
            }
            set
            {
                pageSize = value;
            }
        }

        [JsonProperty("skip")]
        public int Skip
        {
            get
            {
                return (PageIndex - 1) * PageSize;
            }
        }

        [JsonProperty("start")]
        public int Start
        {
            get
            {
                return ((PageSize * PageIndex) - PageSize) + 1;
            }
        }

        [JsonProperty("end")]
        public int End
        {
            get
            {
                return PageSize * PageIndex;
            }
        }
    }
}
