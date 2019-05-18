using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Technology
{
    public class TechnologyFactory : FactoryBase
    {
        public TechnologyFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Technology CreateFromDTO(TechnologyDTO technologyDTO, DateTime dateStamp)
        {
            if (technologyDTO == null)
                throw new ArgumentNullException("Technology model is null.");
            technologyDTO.Status_FK = (int)RecordStatus.Active;
            technologyDTO.CreatedBy = User.Username;
            technologyDTO.CreatedDate = dateStamp;
            technologyDTO.UpdatedBy = User.Username;
            technologyDTO.UpdatedDate = dateStamp;
            tblM_Technology technology = technologyDTO.ToObject<tblM_Technology>();
            return technology;
        }

        public tblM_Technology CreateFromDbAndUpdateFromDTO(TechnologyDTO technologyDTO, DateTime dateStamp)
        {
            tblM_Technology technology;

            if (technologyDTO == null)
                throw new ArgumentNullException("Technology model is null.");
            technology = Db.tblM_Technology.Find(technologyDTO.Technology_PK);
            if (technology == null)
                throw new KairosException($"Record with key '{technologyDTO.Technology_PK}' is not found.");

            technology.UpdateValueFrom(technologyDTO, "Technology_PK", "Status_FK");
            technologyDTO.CreatedBy = technology.CreatedBy;
            technologyDTO.CreatedDate = technology.CreatedDate;
            technology.UpdatedBy = technologyDTO.UpdatedBy = User.Username;
            technology.UpdatedDate = technologyDTO.UpdatedDate = dateStamp;

            return technology;
        }
    }
}
