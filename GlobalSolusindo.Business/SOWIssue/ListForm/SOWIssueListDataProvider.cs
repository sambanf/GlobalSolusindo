using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWIssue.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWIssue.ListForm
{
    public class SOWIssueListDataProvider : FactoryBase
    {
        private SOWIssueQuery sowIssueQuery;

        public SOWIssueListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public SOWIssueListDataProvider(GlobalSolusindoDb db, tblM_User user, SOWIssueQuery sowIssueQuery) : base(db, user)
        {
            this.sowIssueQuery = sowIssueQuery;
        }

        public SOWIssueListModel Get(SOWIssueSearchFilter searchFilter)
        {
            SOWIssueListFormData formData = new SOWIssueListFormData();
            SearchResult<SOWIssueDTO> searchResult = sowIssueQuery.Search(searchFilter);
            return new SOWIssueListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
