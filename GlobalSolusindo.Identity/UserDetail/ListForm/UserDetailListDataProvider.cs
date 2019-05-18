using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.UserDetail.Queries;
using Kairos.Data;

namespace GlobalSolusindo.Identity.UserDetail.ListForm
{
    public class UserDetailListDataProvider : FactoryBase
    {
        private UserDetailSearch userDetailSearch;

        public UserDetailListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public UserDetailListDataProvider(GlobalSolusindoDb db, tblM_User user, UserDetailSearch userDetailSearch) : base(db, user)
        {
            this.userDetailSearch = userDetailSearch;
        }

        public UserDetailListModel Get(UserDetailSearchFilter searchFilter)
        {
            UserDetailListFormData formData = new UserDetailListFormData();
            SearchResult<UserDetailDTO> searchResult = userDetailSearch.GetDataByFilter(searchFilter);
            return new UserDetailListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
