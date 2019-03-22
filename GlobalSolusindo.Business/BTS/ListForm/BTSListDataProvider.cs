using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.BTS.ListForm
{
    public class BTSListDataProvider : FactoryBase
    {
        private BTSSearch btsSearch;

        public BTSListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public BTSListDataProvider(GlobalSolusindoDb db, tblM_User user, BTSSearch btsSearch) : base(db, user)
        {
            this.btsSearch = btsSearch;
        }

        public BTSListModel Get(BTSSearchFilter searchFilter)
        {
            BTSListFormData formData = new BTSListFormData();
            SearchResult<BTSDTO> searchResult = btsSearch.GetDataByFilter(searchFilter);
            return new BTSListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
