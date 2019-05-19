using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Cost
{
    public class CostFactory : FactoryBase
    {
        public CostFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblT_Cost CreateFromDTO(CostDTO costDTO, DateTime dateStamp)
        {
            if (costDTO == null)
                throw new ArgumentNullException("Cost model is null.");
            costDTO.Status_FK = (int)RecordStatus.Active;
            costDTO.CreatedBy = User.Username;
            costDTO.CreatedDate = dateStamp;
            costDTO.UpdatedBy = User.Username;
            costDTO.UpdatedDate = dateStamp;
            tblT_Cost cost = costDTO.ToObject<tblT_Cost>();
            return cost;
        }

        public tblT_Cost CreateFromDbAndUpdateFromDTO(CostDTO costDTO, DateTime dateStamp)
        {
            tblT_Cost cost;

            if (costDTO == null)
                throw new ArgumentNullException("Cost model is null.");
            cost = Db.tblT_Cost.Find(costDTO.Cost_PK);
            if (cost == null)
                throw new KairosException($"Record with key '{costDTO.Cost_PK}' is not found.");

            cost.UpdateValueFrom(costDTO, "Cost_PK", "Status_FK");
            costDTO.CreatedBy = cost.CreatedBy;
            costDTO.CreatedDate = cost.CreatedDate;
            cost.UpdatedBy = costDTO.UpdatedBy = User.Username;
            cost.UpdatedDate = costDTO.UpdatedDate = dateStamp;

            return cost;
        }
    }
}
