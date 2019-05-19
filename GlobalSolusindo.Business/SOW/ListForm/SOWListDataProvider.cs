using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOW.ListForm
{
    public class SOWListDataProvider : FactoryBase
    {
        private SOWSearch sowSearch;

        public SOWListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public SOWListDataProvider(GlobalSolusindoDb db, tblM_User user, SOWSearch sowSearch) : base(db, user)
        {
            this.sowSearch = sowSearch;
        }

        public SOWListModel Get(SOWSearchFilter searchFilter)
        {
            SOWListFormData formData = new SOWListFormData();
            SearchResult<SOWDTO> searchResult = sowSearch.GetDataByFilter(searchFilter);
            return new SOWListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
