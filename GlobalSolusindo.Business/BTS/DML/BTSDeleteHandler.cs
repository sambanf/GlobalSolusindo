using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Business.BTS.DML
{
    public class BTSDeleteHandler : DeleteOperation
    {
        public BTSDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_BTS bts)
        {
            if (bts != null)
                Db.tblM_BTS.Remove(bts);
        }

        private void SoftDelete(tblM_BTS bts)
        {
            if (bts != null)
                bts.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_BTS> Execute(int btsPK, DeleteMethod deleteMethod)
        {
            tblM_BTS bts = Db.tblM_BTS.Find(btsPK); 
            if (bts == null)
            {
                return new DeleteResult<tblM_BTS>()
                {
                    Success = false,
                    Message = $"Id '{btsPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(bts);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(bts);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_BTS>()
            {
                Success = true,
                Message = $"BTS with Id '{btsPK}' successfully deleted.",
                Record = bts
            };
        }
    }
}
