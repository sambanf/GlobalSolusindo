using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.AuthParam.Queries;
using Kairos.Data;

namespace GlobalSolusindo.Identity.AuthParam.ListForm
{
    public class AuthParamListDataProvider : FactoryBase
    {
        private AuthParamSearch authParamSearch;

        public AuthParamListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public AuthParamListDataProvider(GlobalSolusindoDb db, tblM_User user, AuthParamSearch authParamSearch) : base(db, user)
        {
            this.authParamSearch = authParamSearch;
        }

        public AuthParamListModel Get(AuthParamSearchFilter searchFilter)
        {
            AuthParamListFormData formData = new AuthParamListFormData();
            SearchResult<AuthParamDTO> searchResult = authParamSearch.GetDataByFilter(searchFilter);
            return new AuthParamListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
