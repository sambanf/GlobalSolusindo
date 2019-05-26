using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.SOW.ListForm
{
    public class SOWListFormData
    {
    }

    public class SOWListModel
    {
        [JsonProperty("formData")]
        public SOWListFormData FormData { get; set; } = new SOWListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<SOWDTO> SearchResult { get; set; }
    }

    public class SOWListDataProvider : FactoryBase
    {
        private SOWQuery sowQuery;

        public SOWListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public SOWListDataProvider(GlobalSolusindoDb db, tblM_User user, SOWQuery sowQuery) : base(db, user)
        {
            this.sowQuery = sowQuery;
        }

        public SOWListModel Get(SOWSearchFilter searchFilter)
        {
            SOWListFormData formData = new SOWListFormData();
            SearchResult<SOWDTO> searchResult = sowQuery.Search(searchFilter);
            return new SOWListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
