using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Vendor.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Vendor
{
    public class VendorCreateHandler : CreateOperation
    {
        private VendorValidator vendorValidator;
        private VendorFactory vendorFactory;
        private VendorQuery vendorQuery;
        private VendorEntryDataProvider vendorEntryDataProvider;

        public VendorCreateHandler(GlobalSolusindoDb db, tblM_User user, VendorValidator vendorValidator, VendorFactory vendorFactory, VendorQuery vendorQuery, AccessControl accessControl) : base(db, user)
        {
            this.vendorValidator = vendorValidator;
            this.vendorFactory = vendorFactory;
            this.vendorQuery = vendorQuery;
            this.vendorEntryDataProvider = new VendorEntryDataProvider(db, user, accessControl, vendorQuery);
        }

        public tblM_Vendor AddVendor(VendorDTO vendorDTO, DateTime dateStamp)
        {
            if (vendorDTO == null)
                throw new ArgumentNullException("Vendor model is null.");
            tblM_Vendor vendor = vendorFactory.CreateFromDTO(vendorDTO, dateStamp);
            return Db.tblM_Vendor.Add(vendor);
        }

        public SaveResult<VendorEntryModel> Save(VendorDTO vendorDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = vendorValidator.Validate(vendorDTO);
            bool success = false;
            VendorEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_Vendor vendor = AddVendor(vendorDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = vendorEntryDataProvider.Get(vendor.Vendor_PK);
            }

            return new SaveResult<VendorEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
