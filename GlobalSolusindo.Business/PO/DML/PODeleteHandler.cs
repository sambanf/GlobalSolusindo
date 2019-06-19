using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.UserDetail.DML;
using Kairos.Data;

namespace GlobalSolusindo.Business.PO.DML
{
    public class PODeleteHandler : DeleteOperation
    {
        public PODeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblT_PO po)
        {
            if (po != null)
                Db.tblT_PO.Remove(po);
        }

        private void SoftDelete(tblT_PO po)
        {
            if (po != null)
                po.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<int> Execute(int po_PK, DeleteMethod deleteMethod)
        {
            tblT_PO po = Db.tblT_PO.Find(po_PK);
            if (po == null)
            {
                return new DeleteResult<int>()
                {
                    Success = false,
                    Message = $"Id '{po_PK}' is not found.",
                    Record = po.PO_PK
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(po);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(po);
                    break;
                default:
                    break;
            }
            Db.SaveChanges();


            return new DeleteResult<int>()
            {
                Success = true,
                Message = $"PO with Id '{po_PK}' successfully deleted.",
                Record = po.PO_PK
            };
        }
    }
}
