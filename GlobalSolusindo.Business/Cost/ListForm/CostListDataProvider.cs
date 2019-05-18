using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Cost.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Cost.ListForm
{
    public class CostListDataProvider : FactoryBase
    {
        private CostSearch costSearch;

        public CostListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public CostListDataProvider(GlobalSolusindoDb db, tblM_User user, CostSearch costSearch) : base(db, user)
        {
            this.costSearch = costSearch;
        }

        public CostListModel Get(CostSearchFilter searchFilter)
        {
            CostListFormData formData = new CostListFormData();
            SearchResult<CostDTO> searchResult = costSearch.GetDataByFilter(searchFilter);
            return new CostListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
