using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Vendor
{
    public class VendorDeleteHandler : DeleteOperation
    {
        public VendorDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Vendor vendor)
        {
            if (vendor != null)
                Db.tblM_Vendor.Remove(vendor);
        }

        private void SoftDelete(tblM_Vendor vendor)
        {
            if (vendor != null)
                vendor.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Vendor> Execute(int vendorPK, DeleteMethod deleteMethod)
        {
            tblM_Vendor vendor = Db.tblM_Vendor.Find(vendorPK); 
            if (vendor == null)
            {
                return new DeleteResult<tblM_Vendor>()
                {
                    Success = false,
                    Message = $"Id '{vendorPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(vendor);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(vendor);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Vendor>()
            {
                Success = true,
                Message = $"Vendor with Id '{vendorPK}' successfully deleted.",
                Record = vendor
            };
        }
    }
}
