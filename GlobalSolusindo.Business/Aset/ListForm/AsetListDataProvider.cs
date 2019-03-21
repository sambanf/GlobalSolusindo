using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Aset.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Aset.ListForm
{
    public class AsetListDataProvider : FactoryBase
    {
        private AsetSearch asetSearch;

        public AsetListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public AsetListDataProvider(GlobalSolusindoDb db, tblM_User user, AsetSearch asetSearch) : base(db, user)
        {
            this.asetSearch = asetSearch;
        }

        public AsetListModel Get(AsetSearchFilter searchFilter)
        {
            AsetListFormData formData = new AsetListFormData();
            SearchResult<AsetDTO> searchResult = asetSearch.GetDataByFilter(searchFilter);
            return new AsetListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
