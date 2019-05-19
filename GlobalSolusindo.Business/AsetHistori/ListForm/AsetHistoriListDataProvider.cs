using GlobalSolusindo.Base;
using GlobalSolusindo.Business.AsetHistori.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.AsetHistori.ListForm
{
    public class AsetHistoriListDataProvider : FactoryBase
    {
        private AsetHistoriSearch asetHistoriSearch;

        public AsetHistoriListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public AsetHistoriListDataProvider(GlobalSolusindoDb db, tblM_User user, AsetHistoriSearch asetHistoriSearch) : base(db, user)
        {
            this.asetHistoriSearch = asetHistoriSearch;
        }

        public AsetHistoriListModel Get(AsetHistoriSearchFilter searchFilter)
        {
            AsetHistoriListFormData formData = new AsetHistoriListFormData();
            SearchResult<AsetHistoriDTO> searchResult = asetHistoriSearch.GetDataByFilter(searchFilter);
            return new AsetHistoriListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
