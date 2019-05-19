using Newtonsoft.Json;
using System;

namespace Kairos.Data
{
    public class PagingCount
    {
        private PagingFilter _paging;

        [JsonProperty("totalDisplayed")]
        public int TotalDisplayed { get; set; }

        [JsonProperty("totalPage")]
        public int TotalPage
        {
            get
            {
                var totalPage = Math.Ceiling(Convert.ToDouble(TotalFiltered) / Convert.ToDouble(_paging.PageSize));
                if (totalPage != 0 && _paging.PageIndex > totalPage)
                    _paging.PageIndex = Convert.ToInt32(totalPage);
                return Convert.ToInt32(totalPage);
            }
        }

        [JsonProperty("totalRecords")]
        public int TotalRecords { get; set; }

        [JsonProperty("totalFiltered")]
        public int TotalFiltered { get; set; }

        public PagingCount(PagingFilter paging)
        {
            _paging = paging;
        }
    }
}
