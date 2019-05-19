using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.Queries;
using Kairos.Data;

namespace GlobalSolusindo.Identity.MappingUserToRoleGroup.ListForm
{
    public class MappingUserToRoleGroupListDataProvider : FactoryBase
    {
        private MappingUserToRoleGroupSearch mappingUserToRoleGroupSearch;

        public MappingUserToRoleGroupListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public MappingUserToRoleGroupListDataProvider(GlobalSolusindoDb db, tblM_User user, MappingUserToRoleGroupSearch mappingUserToRoleGroupSearch) : base(db, user)
        {
            this.mappingUserToRoleGroupSearch = mappingUserToRoleGroupSearch;
        }

        public MappingUserToRoleGroupListModel Get(MappingUserToRoleGroupSearchFilter searchFilter)
        {
            MappingUserToRoleGroupListFormData formData = new MappingUserToRoleGroupListFormData();
            SearchResult<MappingUserToRoleGroupDTO> searchResult = mappingUserToRoleGroupSearch.GetDataByFilter(searchFilter);
            return new MappingUserToRoleGroupListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
