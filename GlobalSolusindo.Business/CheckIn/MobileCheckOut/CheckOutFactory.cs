using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.CheckIn.MobileCheckOut
{
    public class CheckOutFactory : FactoryBase
    {
        public CheckOutFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_CheckIn CreateFromDbAndUpdateFromDTO(MobileCheckOutDTO checkOutDTO, DateTime dateStamp)
        {
            tblT_CheckIn checkIn;

            if (checkOutDTO == null)
                throw new ArgumentNullException("CheckIn model is null.");
            checkIn = Db.tblT_CheckIn.Find(checkOutDTO.CheckIn_PK);
            if (checkIn == null)
                throw new KairosException($"Record with key '{checkOutDTO.CheckIn_PK}' is not found.");

            checkIn.UpdateValueFrom(checkOutDTO, "CheckIn_PK", "Status_FK");

            checkIn.LongitudeCheckOut = checkOutDTO.LongitudeCheckOut;
            checkIn.LatitudeCheckOut = checkOutDTO.LatitudeCheckOut;
            checkIn.MCCCheckOut = checkOutDTO.MCCCheckOut;
            checkIn.MNCCheckOut = checkOutDTO.MNCCheckOut;
            checkIn.LACCheckOut = checkOutDTO.LACCheckOut;
            checkIn.CellIDCheckOut = checkOutDTO.CellIDCheckOut;
            checkIn.WaktuCheckOut = dateStamp;
            checkIn.SOWAssign_FK = checkOutDTO.SOWAssign_FK;

            checkOutDTO.CheckIn_PK = checkIn.CheckIn_PK;
            checkOutDTO.CreatedBy = checkIn.CreatedBy;
            checkOutDTO.CreatedDate = checkIn.CreatedDate;
            checkIn.UpdatedBy = checkOutDTO.UpdatedBy = User.Username;
            checkIn.UpdatedDate = checkOutDTO.UpdatedDate = dateStamp;

            return checkIn;
        }
    }
}
