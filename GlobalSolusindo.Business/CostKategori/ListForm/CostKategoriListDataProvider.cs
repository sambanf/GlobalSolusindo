using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CostKategori.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.CostKategori.ListForm
{
    public class CostKategoriListDataProvider : FactoryBase
    {
        private CostKategoriSearch costKategoriSearch;

        public CostKategoriListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public CostKategoriListDataProvider(GlobalSolusindoDb db, tblM_User user, CostKategoriSearch costKategoriSearch) : base(db, user)
        {
            this.costKategoriSearch = costKategoriSearch;
        }

        public CostKategoriListModel Get(CostKategoriSearchFilter searchFilter)
        {
            CostKategoriListFormData formData = new CostKategoriListFormData();
            SearchResult<CostKategoriDTO> searchResult = costKategoriSearch.GetDataByFilter(searchFilter);
            return new CostKategoriListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
