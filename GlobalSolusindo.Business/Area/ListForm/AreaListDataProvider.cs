using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Area.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Area.ListForm
{
    public class AreaListDataProvider : FactoryBase
    {
        private AreaSearch areaSearch;

        public AreaListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public AreaListDataProvider(GlobalSolusindoDb db, tblM_User user, AreaSearch areaSearch) : base(db, user)
        {
            this.areaSearch = areaSearch;
        }

        public AreaListModel Get(AreaSearchFilter searchFilter)
        {
            AreaListFormData formData = new AreaListFormData();
            SearchResult<AreaDTO> searchResult = areaSearch.GetDataByFilter(searchFilter);
            return new AreaListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
