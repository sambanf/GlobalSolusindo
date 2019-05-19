using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWStatus.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWStatus.ListForm
{
    public class SOWStatusListDataProvider : FactoryBase
    {
        private SOWStatusSearch sowStatusSearch;

        public SOWStatusListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public SOWStatusListDataProvider(GlobalSolusindoDb db, tblM_User user, SOWStatusSearch sowStatusSearch) : base(db, user)
        {
            this.sowStatusSearch = sowStatusSearch;
        }

        public SOWStatusListModel Get(SOWStatusSearchFilter searchFilter)
        {
            SOWStatusListFormData formData = new SOWStatusListFormData();
            SearchResult<SOWStatusDTO> searchResult = sowStatusSearch.GetDataByFilter(searchFilter);
            return new SOWStatusListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
