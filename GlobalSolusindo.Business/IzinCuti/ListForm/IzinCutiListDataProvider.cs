using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCuti.Queries;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.IzinCuti.ListForm
{
    public class IzinCutiListDataProvider : FactoryBase
    {
        private IzinCutiSearch izinCutiSearch;

        public IzinCutiListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public IzinCutiListDataProvider(GlobalSolusindoDb db, tblM_User user, IzinCutiSearch izinCutiSearch) : base(db, user)
        {
            this.izinCutiSearch = izinCutiSearch;
        }

        public IzinCutiListModel Get(IzinCutiSearchFilter searchFilter)
        {
            IzinCutiListFormData formData = new IzinCutiListFormData();
            SearchResult<IzinCutiDTO> searchResult = izinCutiSearch.GetDataByFilter(searchFilter);
            return new IzinCutiListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
