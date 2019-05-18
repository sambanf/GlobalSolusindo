using GlobalSolusindo.Base;
using GlobalSolusindo.Business.AsetKategori.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.AsetKategori.ListForm
{
    public class AsetKategoriListDataProvider : FactoryBase
    {
        private AsetKategoriSearch asetKategoriSearch;

        public AsetKategoriListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public AsetKategoriListDataProvider(GlobalSolusindoDb db, tblM_User user, AsetKategoriSearch asetKategoriSearch) : base(db, user)
        {
            this.asetKategoriSearch = asetKategoriSearch;
        }

        public AsetKategoriListModel Get(AsetKategoriSearchFilter searchFilter)
        {
            AsetKategoriListFormData formData = new AsetKategoriListFormData();
            SearchResult<AsetKategoriDTO> searchResult = asetKategoriSearch.GetDataByFilter(searchFilter);
            return new AsetKategoriListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
