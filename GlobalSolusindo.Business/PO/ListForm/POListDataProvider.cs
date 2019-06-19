using GlobalSolusindo.Base;
using GlobalSolusindo.Business.PO.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.Data;

namespace GlobalSolusindo.Business.PO.ListForm
{
    public class POListDataProvider : FactoryBase
    {
        private POSearch  POSearch;

        public POListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public POListDataProvider(GlobalSolusindoDb db, tblM_User user, POSearch  pOSearch) : base(db, user)
        {
            this.POSearch = pOSearch;
        }

        public POListModel Get(POSearchFilter searchFilter)
        {
            POListFormData formData = new POListFormData();
            SearchResult<PODTO> searchResult = POSearch.GetDataByFilter(searchFilter);
            return new POListModel()
            {
                SearchResult = searchResult
            };
        }
    }
}
