using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Vendor.EntryForm
{
    public class VendorEntryDataProvider : FactoryBase
    {
        private VendorQuery vendorQuery;
        private AccessControl accessControl;

        public VendorEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, VendorQuery vendorQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.vendorQuery = vendorQuery;
        }

        private List<Control> CreateFormControls(int vendorPK)
        {
            VendorEntryControlBuilder controlBuilder = new VendorEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (vendorPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private VendorEntryModel GetCreateStateModel()
        {
            VendorEntryFormData formData = new VendorEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            VendorDTO vendorDTO = new VendorDTO();
            return new VendorEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = vendorDTO,
            };
        }

        private VendorEntryModel GetUpdateStateModel(int vendorPK)
        {
            VendorEntryFormData formData = new VendorEntryFormData();
            List<Control> formControls = CreateFormControls(vendorPK);
            VendorDTO vendorDTO = vendorQuery.GetByPrimaryKey(vendorPK);

            if (vendorDTO == null)
                throw new KairosException($"Record with primary key '{vendorDTO.Vendor_PK}' is not found.");

            return new VendorEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = vendorDTO,
            };
        }

        public VendorEntryModel Get(int vendorPK)
        {
            if (vendorPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(vendorPK);
        }
    }
}
