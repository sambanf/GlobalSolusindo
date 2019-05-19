using GlobalSolusindo.Base;
using GlobalSolusindo.Business.CheckIn.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.CheckIn.ListForm
{
    public class CheckInListDataProvider : FactoryBase
    {
        private CheckInSearch checkInSearch;

        public CheckInListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public CheckInListDataProvider(GlobalSolusindoDb db, tblM_User user, CheckInSearch checkInSearch) : base(db, user)
        {
            this.checkInSearch = checkInSearch;
        }

        public CheckInListModel Get(CheckInSearchFilter searchFilter)
        {
            CheckInListFormData formData = new CheckInListFormData();
            SearchResult<CheckInDTO> searchResult = checkInSearch.GetDataByFilter(searchFilter);
            return new CheckInListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
