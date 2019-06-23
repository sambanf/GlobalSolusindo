using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Business.TipePekerjaan.ListForm
{
    public class TipePekerjaanListFormData
    {
    }

    public class TipePekerjaanListModel
    {
        [JsonProperty("formData")]
        public TipePekerjaanListFormData FormData { get; set; } = new TipePekerjaanListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<TipePekerjaanDTO> SearchResult { get; set; }
    }

    public class TipePekerjaanListDataProvider : FactoryBase
    {
        private TipePekerjaanQuery tipePekerjaanQuery;

        public TipePekerjaanListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public TipePekerjaanListDataProvider(GlobalSolusindoDb db, tblM_User user, TipePekerjaanQuery tipePekerjaanQuery) : base(db, user)
        {
            this.tipePekerjaanQuery = tipePekerjaanQuery;
        }

        public TipePekerjaanListModel Get(TipePekerjaanSearchFilter searchFilter)
        {
            TipePekerjaanListFormData formData = new TipePekerjaanListFormData();
            SearchResult<TipePekerjaanDTO> searchResult = tipePekerjaanQuery.Search(searchFilter);
            return new TipePekerjaanListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
