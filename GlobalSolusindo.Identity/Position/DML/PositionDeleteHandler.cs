using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Identity.Position.DML
{
    public class PositionDeleteHandler : DeleteOperation
    {
        public PositionDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Position position)
        {
            if (position != null)
                Db.tblM_Position.Remove(position);
        }

        private void SoftDelete(tblM_Position position)
        {
            if (position != null)
                position.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Position> Execute(int positionPK, DeleteMethod deleteMethod)
        {
            tblM_Position position = Db.tblM_Position.Find(positionPK); 
            if (position == null)
            {
                return new DeleteResult<tblM_Position>()
                {
                    Success = false,
                    Message = $"Id '{positionPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(position);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(position);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Position>()
            {
                Success = true,
                Message = $"Position with Id '{positionPK}' successfully deleted.",
                Record = position
            };
        }
    }
}
