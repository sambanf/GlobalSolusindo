using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using System.Linq;

namespace GlobalSolusindo.Business.BTS.DML
{
    public class BTSDeleteHandler : DeleteOperation
    {
        public BTSDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void BTSHardDelete(tblM_BTS bts)
        {
            if (bts != null)
                Db.tblM_BTS.Remove(bts);
        } 

        private void BTSSoftDelete(tblM_BTS bts)
        {
            if (bts != null)
                bts.Status_FK = (int)RecordStatus.Deleted;
        }

        private void DeleteBTSTechnologies(int btsPK)
        {
            var btsTechnologies = Db.tblM_BTSTechnology.Where(x => x.BTS_FK == btsPK);
            foreach (var btsTechnology in btsTechnologies)
            {
                Db.tblM_BTSTechnology.Remove(btsTechnology);
            }
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

            DeleteBTSTechnologies(btsPK);

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    BTSSoftDelete(bts);
                    break;
                case DeleteMethod.Hard:
                    BTSHardDelete(bts);
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
