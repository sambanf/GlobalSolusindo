using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.Area.ListForm
{
    public class AreaListFormData
    {
    }

    public class AreaListModel
    {
        [JsonProperty("formData")]
        public AreaListFormData FormData { get; set; } = new AreaListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<AreaDTO> SearchResult { get; set; }
    }

    public class AreaListDataProvider : FactoryBase
    {
        private AreaQuery areaQuery;

        public AreaListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public AreaListDataProvider(GlobalSolusindoDb db, tblM_User user, AreaQuery areaQuery) : base(db, user)
        {
            this.areaQuery = areaQuery;
        }

        public AreaListModel Get(AreaSearchFilter searchFilter)
        {
            AreaListFormData formData = new AreaListFormData();
            SearchResult<AreaDTO> searchResult = areaQuery.Search(searchFilter);
            return new AreaListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
