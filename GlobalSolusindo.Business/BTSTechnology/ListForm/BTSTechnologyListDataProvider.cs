using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSTechnology.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.BTSTechnology.ListForm
{
    public class BTSTechnologyListDataProvider : FactoryBase
    {
        private BTSTechnologySearch btsTechnologySearch;

        public BTSTechnologyListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public BTSTechnologyListDataProvider(GlobalSolusindoDb db, tblM_User user, BTSTechnologySearch btsTechnologySearch) : base(db, user)
        {
            this.btsTechnologySearch = btsTechnologySearch;
        }

        public BTSTechnologyListModel Get(BTSTechnologySearchFilter searchFilter)
        {
            BTSTechnologyListFormData formData = new BTSTechnologyListFormData();
            SearchResult<BTSTechnologyDTO> searchResult = btsTechnologySearch.GetDataByFilter(searchFilter);
            return new BTSTechnologyListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
