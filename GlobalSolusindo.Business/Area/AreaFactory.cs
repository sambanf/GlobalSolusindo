using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Area
{
    public class AreaFactory : FactoryBase
    {
        public AreaFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Area CreateFromDTO(AreaDTO areaDTO, DateTime dateStamp)
        {
            if (areaDTO == null)
                throw new ArgumentNullException("Area model is null.");
            areaDTO.Status_FK = (int)RecordStatus.Active;
            areaDTO.CreatedBy = User.Username;
            areaDTO.CreatedDate = dateStamp;
            areaDTO.UpdatedBy = User.Username;
            areaDTO.UpdatedDate = dateStamp;
            tblM_Area area = areaDTO.ToObject<tblM_Area>();
            return area;
        }

        public tblM_Area CreateFromDbAndUpdateFromDTO(AreaDTO areaDTO, DateTime dateStamp)
        {
            tblM_Area area;

            if (areaDTO == null)
                throw new ArgumentNullException("Area model is null.");
            area = Db.tblM_Area.Find(areaDTO.Area_PK);
            if (area == null)
                throw new KairosException($"Record with key '{areaDTO.Area_PK}' is not found.");

            area.UpdateValueFrom(areaDTO, "Area_PK", "Status_FK");
            areaDTO.CreatedBy = area.CreatedBy;
            areaDTO.CreatedDate = area.CreatedDate;
            area.UpdatedBy = areaDTO.UpdatedBy = User.Username;
            area.UpdatedDate = areaDTO.UpdatedDate = dateStamp;

            return area;
        }
    }
}
