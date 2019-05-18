using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingRoleToRoleGroup.Queries;
using Kairos.Data;

namespace GlobalSolusindo.Identity.MappingRoleToRoleGroup.ListForm
{
    public class MappingRoleToRoleGroupListDataProvider : FactoryBase
    {
        private MappingRoleToRoleGroupSearch mappingRoleToRoleGroupSearch;

        public MappingRoleToRoleGroupListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public MappingRoleToRoleGroupListDataProvider(GlobalSolusindoDb db, tblM_User user, MappingRoleToRoleGroupSearch mappingRoleToRoleGroupSearch) : base(db, user)
        {
            this.mappingRoleToRoleGroupSearch = mappingRoleToRoleGroupSearch;
        }

        public MappingRoleToRoleGroupListModel Get(MappingRoleToRoleGroupSearchFilter searchFilter)
        {
            MappingRoleToRoleGroupListFormData formData = new MappingRoleToRoleGroupListFormData();
            SearchResult<MappingRoleToRoleGroupDTO> searchResult = mappingRoleToRoleGroupSearch.GetDataByFilter(searchFilter);
            return new MappingRoleToRoleGroupListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
