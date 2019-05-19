using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.BTSTechnology.DML
{
    public class BTSTechnologyDeleteHandler : DeleteOperation
    {
        public BTSTechnologyDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_BTSTechnology btsTechnology)
        {
            if (btsTechnology != null)
                Db.tblM_BTSTechnology.Remove(btsTechnology);
        }

        private void SoftDelete(tblM_BTSTechnology btsTechnology)
        {
            if (btsTechnology != null)
                btsTechnology.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_BTSTechnology> Execute(int btsTechnologyPK, DeleteMethod deleteMethod)
        {
            tblM_BTSTechnology btsTechnology = Db.tblM_BTSTechnology.Find(btsTechnologyPK); 
            if (btsTechnology == null)
            {
                return new DeleteResult<tblM_BTSTechnology>()
                {
                    Success = false,
                    Message = $"Id '{btsTechnologyPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(btsTechnology);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(btsTechnology);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_BTSTechnology>()
            {
                Success = true,
                Message = $"BTSTechnology with Id '{btsTechnologyPK}' successfully deleted.",
                Record = btsTechnology
            };
        }
    }
}
