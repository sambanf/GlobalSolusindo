using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.MappingUserToAuthParam.Queries;
using Kairos.Data;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam.ListForm
{
    public class MappingUserToAuthParamListDataProvider : FactoryBase
    {
        private MappingUserToAuthParamSearch mappingUserToAuthParamSearch;

        public MappingUserToAuthParamListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public MappingUserToAuthParamListDataProvider(GlobalSolusindoDb db, tblM_User user, MappingUserToAuthParamSearch mappingUserToAuthParamSearch) : base(db, user)
        {
            this.mappingUserToAuthParamSearch = mappingUserToAuthParamSearch;
        }

        public MappingUserToAuthParamListModel Get(MappingUserToAuthParamSearchFilter searchFilter)
        {
            MappingUserToAuthParamListFormData formData = new MappingUserToAuthParamListFormData();
            SearchResult<MappingUserToAuthParamDTO> searchResult = mappingUserToAuthParamSearch.GetDataByFilter(searchFilter);
            return new MappingUserToAuthParamListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
