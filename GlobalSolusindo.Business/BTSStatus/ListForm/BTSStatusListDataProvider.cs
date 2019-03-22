using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSStatus.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.BTSStatus.ListForm
{
    public class BTSStatusListDataProvider : FactoryBase
    {
        private BTSStatusSearch btsStatusSearch;

        public BTSStatusListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public BTSStatusListDataProvider(GlobalSolusindoDb db, tblM_User user, BTSStatusSearch btsStatusSearch) : base(db, user)
        {
            this.btsStatusSearch = btsStatusSearch;
        }

        public BTSStatusListModel Get(BTSStatusSearchFilter searchFilter)
        {
            BTSStatusListFormData formData = new BTSStatusListFormData();
            SearchResult<BTSStatusDTO> searchResult = btsStatusSearch.GetDataByFilter(searchFilter);
            return new BTSStatusListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
