using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Identity.KategoriJabatan.ListForm
{
    public class KategoriJabatanListDataProvider : FactoryBase
    {
        private KategoriJabatanSearch kategoriJabatanSearch;

        public KategoriJabatanListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public KategoriJabatanListDataProvider(GlobalSolusindoDb db, tblM_User user, KategoriJabatanSearch kategoriJabatanSearch) : base(db, user)
        {
            this.kategoriJabatanSearch = kategoriJabatanSearch;
        }

        public KategoriJabatanListModel Get(KategoriJabatanSearchFilter searchFilter)
        {
            KategoriJabatanListFormData formData = new KategoriJabatanListFormData();
            SearchResult<KategoriJabatanDTO> searchResult = kategoriJabatanSearch.GetDataByFilter(searchFilter);
            return new KategoriJabatanListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
