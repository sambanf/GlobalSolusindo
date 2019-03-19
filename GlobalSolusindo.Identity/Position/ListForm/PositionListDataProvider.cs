using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.Position.Queries;
using Kairos.Data;

namespace GlobalSolusindo.Identity.Position.ListForm
{
    public class PositionListDataProvider : FactoryBase
    {
        private PositionSearch positionSearch;

        public PositionListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public PositionListDataProvider(GlobalSolusindoDb db, tblM_User user, PositionSearch positionSearch) : base(db, user)
        {
            this.positionSearch = positionSearch;
        }

        public PositionListModel Get(PositionSearchFilter searchFilter)
        {
            PositionListFormData formData = new PositionListFormData();
            SearchResult<PositionDTO> searchResult = positionSearch.GetDataByFilter(searchFilter);
            return new PositionListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
