using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWIssue.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWIssue.ListForm
{
    public class SOWIssueListDataProvider : FactoryBase
    {
        private SOWIssueSearch sowIssueSearch;

        public SOWIssueListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public SOWIssueListDataProvider(GlobalSolusindoDb db, tblM_User user, SOWIssueSearch sowIssueSearch) : base(db, user)
        {
            this.sowIssueSearch = sowIssueSearch;
        }

        public SOWIssueListModel Get(SOWIssueSearchFilter searchFilter)
        {
            SOWIssueListFormData formData = new SOWIssueListFormData();
            SearchResult<SOWIssueDTO> searchResult = sowIssueSearch.GetDataByFilter(searchFilter);
            return new SOWIssueListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
