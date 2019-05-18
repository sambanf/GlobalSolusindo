using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWAssign.ListForm
{
    public class SOWAssignListDataProvider : FactoryBase
    {
        private SOWAssignSearch sowAssignSearch;

        public SOWAssignListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public SOWAssignListDataProvider(GlobalSolusindoDb db, tblM_User user, SOWAssignSearch sowAssignSearch) : base(db, user)
        {
            this.sowAssignSearch = sowAssignSearch;
        }

        public SOWAssignListModel Get(SOWAssignSearchFilter searchFilter)
        {
            SOWAssignListFormData formData = new SOWAssignListFormData();
            SearchResult<SOWAssignDTO> searchResult = sowAssignSearch.GetDataByFilter(searchFilter);
            return new SOWAssignListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
