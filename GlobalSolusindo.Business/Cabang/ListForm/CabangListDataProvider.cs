using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Cabang.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Cabang.ListForm
{
    public class CabangListDataProvider : FactoryBase
    {
        private CabangSearch cabangSearch;

        public CabangListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public CabangListDataProvider(GlobalSolusindoDb db, tblM_User user, CabangSearch cabangSearch) : base(db, user)
        {
            this.cabangSearch = cabangSearch;
        }

        public CabangListModel Get(CabangSearchFilter searchFilter)
        {
            CabangListFormData formData = new CabangListFormData();
            SearchResult<CabangDTO> searchResult = cabangSearch.GetDataByFilter(searchFilter);
            return new CabangListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
