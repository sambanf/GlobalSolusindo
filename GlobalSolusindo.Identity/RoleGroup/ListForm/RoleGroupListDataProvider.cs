using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.RoleGroup.Queries;
using Kairos.Data;

namespace GlobalSolusindo.Identity.RoleGroup.ListForm
{
    public class RoleGroupListDataProvider : FactoryBase
    {
        private RoleGroupSearch roleGroupSearch;

        public RoleGroupListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public RoleGroupListDataProvider(GlobalSolusindoDb db, tblM_User user, RoleGroupSearch roleGroupSearch) : base(db, user)
        {
            this.roleGroupSearch = roleGroupSearch;
        }

        public RoleGroupListModel Get(RoleGroupSearchFilter searchFilter)
        {
            RoleGroupListFormData formData = new RoleGroupListFormData();
            SearchResult<RoleGroupDTO> searchResult = roleGroupSearch.GetDataByFilter(searchFilter);
            return new RoleGroupListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
