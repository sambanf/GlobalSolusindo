using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Vendor.ListForm
{
    public class VendorListDataProvider : FactoryBase
    {
        private VendorQuery vendorQuery;

        public VendorListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public VendorListDataProvider(GlobalSolusindoDb db, tblM_User user, VendorQuery vendorQuery) : base(db, user)
        {
            this.vendorQuery = vendorQuery;
        }

        public VendorListModel Get(VendorSearchFilter searchFilter)
        {
            VendorListFormData formData = new VendorListFormData();
            SearchResult<VendorDTO> searchResult = vendorQuery.Search(searchFilter);
            return new VendorListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
