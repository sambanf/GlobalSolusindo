using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWResult.ListForm
{
    public class SOWResultListDataProvider : FactoryBase
    {
        private SOWResultQuery sowResultQuery;

        public SOWResultListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public SOWResultListDataProvider(GlobalSolusindoDb db, tblM_User user, SOWResultQuery sowResultQuery) : base(db, user)
        {
            this.sowResultQuery = sowResultQuery;
        }

        public SOWResultListModel Get(SOWResultSearchFilter searchFilter)
        {
            SOWResultListFormData formData = new SOWResultListFormData();
            SearchResult<SOWResultDTO> searchResult = sowResultQuery.GetDataByFilter(searchFilter);
            return new SOWResultListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
