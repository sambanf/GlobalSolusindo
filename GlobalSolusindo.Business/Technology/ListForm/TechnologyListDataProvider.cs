using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Technology.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Technology.ListForm
{
    public class TechnologyListDataProvider : FactoryBase
    {
        private TechnologySearch technologySearch;

        public TechnologyListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public TechnologyListDataProvider(GlobalSolusindoDb db, tblM_User user, TechnologySearch technologySearch) : base(db, user)
        {
            this.technologySearch = technologySearch;
        }

        public TechnologyListModel Get(TechnologySearchFilter searchFilter)
        {
            TechnologyListFormData formData = new TechnologyListFormData();
            SearchResult<TechnologyDTO> searchResult = technologySearch.GetDataByFilter(searchFilter);
            return new TechnologyListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
