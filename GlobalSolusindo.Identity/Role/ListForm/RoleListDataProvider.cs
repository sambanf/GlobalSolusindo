using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.Role.Queries;
using Kairos.Data;

namespace GlobalSolusindo.Identity.Role.ListForm
{
    public class RoleListDataProvider : FactoryBase
    {
        private RoleSearch roleSearch;

        public RoleListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public RoleListDataProvider(GlobalSolusindoDb db, tblM_User user, RoleSearch roleSearch) : base(db, user)
        {
            this.roleSearch = roleSearch;
        }

        public RoleListModel Get(RoleSearchFilter searchFilter)
        {
            RoleListFormData formData = new RoleListFormData();
            SearchResult<RoleDTO> searchResult = roleSearch.GetDataByFilter(searchFilter);
            return new RoleListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
