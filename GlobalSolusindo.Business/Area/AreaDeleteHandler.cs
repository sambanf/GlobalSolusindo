using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.Area
{
    public class AreaDeleteHandler : DeleteOperation
    {
        public AreaDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Area area)
        {
            if (area != null)
                Db.tblM_Area.Remove(area);
        }

        private void SoftDelete(tblM_Area area)
        {
            if (area != null)
                area.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Area> Execute(int areaPK, DeleteMethod deleteMethod)
        {
            tblM_Area area = Db.tblM_Area.Find(areaPK); 
            if (area == null)
            {
                return new DeleteResult<tblM_Area>()
                {
                    Success = false,
                    Message = $"Id '{areaPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(area);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(area);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Area>()
            {
                Success = true,
                Message = $"Area with Id '{areaPK}' successfully deleted.",
                Record = area
            };
        }
    }
}
