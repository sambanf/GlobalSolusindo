using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.Data;

namespace GlobalSolusindo.Identity.User.ListForm
{
    public class UserListDataProvider : FactoryBase
    {
        private UserSearch userSearch;

        public UserListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public UserListDataProvider(GlobalSolusindoDb db, tblM_User user, UserSearch userSearch) : base(db, user)
        {
            this.userSearch = userSearch;
        }

        public UserListModel Get(UserSearchFilter searchFilter, tblM_User user)
        {
            UserListFormData formData = new UserListFormData();
            SearchResult<UserDTO> searchResult = userSearch.GetDataByFilter(searchFilter, user);
            return new UserListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
