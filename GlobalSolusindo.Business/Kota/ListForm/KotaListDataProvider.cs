using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Kota.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Kota.ListForm
{
    public class KotaListDataProvider : FactoryBase
    {
        private KotaSearch kotaSearch;

        public KotaListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public KotaListDataProvider(GlobalSolusindoDb db, tblM_User user, KotaSearch kotaSearch) : base(db, user)
        {
            this.kotaSearch = kotaSearch;
        }

        public KotaListModel Get(KotaSearchFilter searchFilter)
        {
            KotaListFormData formData = new KotaListFormData();
            SearchResult<KotaDTO> searchResult = kotaSearch.GetDataByFilter(searchFilter);
            return new KotaListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
