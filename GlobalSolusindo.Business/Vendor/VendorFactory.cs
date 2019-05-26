using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Vendor
{
    public class VendorFactory : FactoryBase
    {
        public VendorFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Vendor CreateFromDTO(VendorDTO vendorDTO, DateTime dateStamp)
        {
            if (vendorDTO == null)
                throw new ArgumentNullException("Vendor model is null.");
            vendorDTO.Status_FK = (int)RecordStatus.Active;
            vendorDTO.CreatedBy = User.Username;
            vendorDTO.CreatedDate = dateStamp;
            vendorDTO.UpdatedBy = User.Username;
            vendorDTO.UpdatedDate = dateStamp;
            tblM_Vendor vendor = vendorDTO.ToObject<tblM_Vendor>();
            return vendor;
        }

        public tblM_Vendor CreateFromDbAndUpdateFromDTO(VendorDTO vendorDTO, DateTime dateStamp)
        {
            tblM_Vendor vendor;

            if (vendorDTO == null)
                throw new ArgumentNullException("Vendor model is null.");
            vendor = Db.tblM_Vendor.Find(vendorDTO.Vendor_PK);
            if (vendor == null)
                throw new KairosException($"Record with key '{vendorDTO.Vendor_PK}' is not found.");

            vendor.UpdateValueFrom(vendorDTO, "Vendor_PK", "Status_FK");
            vendorDTO.CreatedBy = vendor.CreatedBy;
            vendorDTO.CreatedDate = vendor.CreatedDate;
            vendor.UpdatedBy = vendorDTO.UpdatedBy = User.Username;
            vendor.UpdatedDate = vendorDTO.UpdatedDate = dateStamp;

            return vendor;
        }
    }
}
