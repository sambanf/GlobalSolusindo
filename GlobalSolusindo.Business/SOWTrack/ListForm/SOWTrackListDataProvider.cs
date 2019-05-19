using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOWTrack.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.SOWTrack.ListForm
{
    public class SOWTrackListDataProvider : FactoryBase
    {
        private SOWTrackSearch sowTrackSearch;

        public SOWTrackListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public SOWTrackListDataProvider(GlobalSolusindoDb db, tblM_User user, SOWTrackSearch sowTrackSearch) : base(db, user)
        {
            this.sowTrackSearch = sowTrackSearch;
        }

        public SOWTrackListModel Get(SOWTrackSearchFilter searchFilter)
        {
            SOWTrackListFormData formData = new SOWTrackListFormData();
            SearchResult<SOWTrackDTO> searchResult = sowTrackSearch.GetDataByFilter(searchFilter);
            return new SOWTrackListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
