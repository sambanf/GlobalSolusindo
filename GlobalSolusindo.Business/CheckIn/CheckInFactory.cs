using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.CheckIn
{
    public class CheckInFactory : FactoryBase
    {
        public CheckInFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_CheckIn CreateFromDTO(CheckInDTO checkInDTO, DateTime dateStamp)
        {
            if (checkInDTO == null)
                throw new ArgumentNullException("CheckIn model is null.");
            checkInDTO.Status_FK = (int)RecordStatus.Active;
            checkInDTO.CreatedBy = User.Username;
            checkInDTO.CreatedDate = dateStamp;
            checkInDTO.UpdatedBy = User.Username;
            checkInDTO.UpdatedDate = dateStamp;
            tblT_CheckIn checkIn = checkInDTO.ToObject<tblT_CheckIn>();
            return checkIn;
        }

        public tblT_CheckIn CreateFromDbAndUpdateFromDTO(CheckInDTO checkInDTO, DateTime dateStamp)
        {
            tblT_CheckIn checkIn;

            if (checkInDTO == null)
                throw new ArgumentNullException("CheckIn model is null.");
            checkIn = Db.tblT_CheckIn.Find(checkInDTO.CheckIn_PK);
            if (checkIn == null)
                throw new KairosException($"Record with key '{checkInDTO.CheckIn_PK}' is not found.");

            checkIn.UpdateValueFrom(checkInDTO, "CheckIn_PK", "Status_FK");
            checkInDTO.CreatedBy = checkIn.CreatedBy;
            checkInDTO.CreatedDate = checkIn.CreatedDate;
            checkIn.UpdatedBy = checkInDTO.UpdatedBy = User.Username;
            checkIn.UpdatedDate = checkInDTO.UpdatedDate = dateStamp;

            return checkIn;
        }
    }
}
