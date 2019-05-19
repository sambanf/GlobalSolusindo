using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Kairos.Imaging;
using System;

namespace GlobalSolusindo.Business.CheckIn.MobileCheckIn
{
    public class CheckInFactory : FactoryBase
    {
        public CheckInFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_CheckIn CreateFromDTO(MobileCheckInDTO checkInDTO, DateTime dateStamp)
        {
            if (checkInDTO == null)
                throw new ArgumentNullException("CheckIn model is null.");
            checkInDTO.Status_FK = (int)RecordStatus.Active;
            checkInDTO.CreatedBy = User.Username;
            checkInDTO.CreatedDate = dateStamp;
            checkInDTO.UpdatedBy = User.Username;
            checkInDTO.UpdatedDate = dateStamp;
            checkInDTO.WaktuCheckIn = dateStamp;
            tblT_CheckIn checkIn = checkInDTO.ToObject<tblT_CheckIn>();

            checkIn.LongitudeCheckIn = checkInDTO.LongitudeCheckIn;
            checkIn.LatitudeCheckIn = checkInDTO.LatitudeCheckIn;
            checkIn.MCCCheckIn = checkInDTO.MCCCheckIn;
            checkIn.MNCCheckIn = checkInDTO.MNCCheckIn;
            checkIn.LACCheckIn = checkInDTO.LACCheckIn;
            checkIn.CellIDCheckIn = checkInDTO.CellIDCheckIn;
            checkIn.WaktuCheckIn = dateStamp;
            checkIn.SOWAssign_FK = checkInDTO.SOWAssign_FK;

            if (!string.IsNullOrEmpty(checkInDTO.FileString))
            {
                var bytes = Convert.FromBase64String(checkInDTO.FileString);
                checkIn.File = bytes;
            }


            return checkIn;
        }
    }
}
