using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCutiStatus.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.IzinCutiStatus.ListForm
{
    public class IzinCutiStatusListDataProvider : FactoryBase
    {
        private IzinCutiStatusSearch izinCutiStatusSearch;

        public IzinCutiStatusListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public IzinCutiStatusListDataProvider(GlobalSolusindoDb db, tblM_User user, IzinCutiStatusSearch izinCutiStatusSearch) : base(db, user)
        {
            this.izinCutiStatusSearch = izinCutiStatusSearch;
        }

        public IzinCutiStatusListModel Get(IzinCutiStatusSearchFilter searchFilter)
        {
            IzinCutiStatusListFormData formData = new IzinCutiStatusListFormData();
            SearchResult<IzinCutiStatusDTO> searchResult = izinCutiStatusSearch.GetDataByFilter(searchFilter);
            return new IzinCutiStatusListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
