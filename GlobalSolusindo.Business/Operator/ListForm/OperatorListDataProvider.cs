using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Operator.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Operator.ListForm
{
    public class OperatorListDataProvider : FactoryBase
    {
        private OperatorSearch _operatorSearch;

        public OperatorListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public OperatorListDataProvider(GlobalSolusindoDb db, tblM_User user, OperatorSearch _operatorSearch) : base(db, user)
        {
            this._operatorSearch = _operatorSearch;
        }

        public OperatorListModel Get(OperatorSearchFilter searchFilter)
        {
            OperatorListFormData formData = new OperatorListFormData();
            SearchResult<OperatorDTO> searchResult = _operatorSearch.GetDataByFilter(searchFilter);
            return new OperatorListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
