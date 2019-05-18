using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IssueType.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.IssueType.ListForm
{
    public class IssueTypeListDataProvider : FactoryBase
    {
        private IssueTypeSearch issueTypeSearch;

        public IssueTypeListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public IssueTypeListDataProvider(GlobalSolusindoDb db, tblM_User user, IssueTypeSearch issueTypeSearch) : base(db, user)
        {
            this.issueTypeSearch = issueTypeSearch;
        }

        public IssueTypeListModel Get(IssueTypeSearchFilter searchFilter)
        {
            IssueTypeListFormData formData = new IssueTypeListFormData();
            SearchResult<IssueTypeDTO> searchResult = issueTypeSearch.GetDataByFilter(searchFilter);
            return new IssueTypeListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
