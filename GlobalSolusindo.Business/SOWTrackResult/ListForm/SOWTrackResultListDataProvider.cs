using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWTrackResult.ListForm
{
    public class SOWTrackResultListDataProvider : FactoryBase
    {
        private SOWTrackResultQuery sowTrackResultQuery;

        public SOWTrackResultListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public SOWTrackResultListDataProvider(GlobalSolusindoDb db, tblM_User user, SOWTrackResultQuery sowTrackResultQuery) : base(db, user)
        {
            this.sowTrackResultQuery = sowTrackResultQuery;
        }

        public SOWTrackResultListModel Get(SOWTrackResultSearchFilter searchFilter)
        {
            SOWTrackResultListFormData formData = new SOWTrackResultListFormData();
            SearchResult<SOWTrackResultDTO> searchResult = sowTrackResultQuery.GetDataByFilter(searchFilter);
            return new SOWTrackResultListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
