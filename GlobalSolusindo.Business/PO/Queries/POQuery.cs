using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Imaging;
using Kairos.Linq;
using System;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.PO.Queries
{
    public class POQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public POQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public POQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<PODTO> GetQuery()
        {
            var query = from po in Db.tblT_PO
                        where
                        po.Status_FK != deleted
                        select new PODTO
                        {
                            PO_PK = po.PO_PK,
                            Account = po.Account,
                            ProjectCode = po.ProjectCode,
                            SiteIDImp = po.SiteIDImp,
                            SiteID = po.SiteID,
                            SiteName = po.SiteName,
                            DUID = po.DUID,
                            PMOUniq = po.PMOUniq,
                            SOWAct = po.SOWAct,
                            System = po.System,
                            SOWPO = po.SOWPO,
                            ItemDesc = po.ItemDesc,
                            PONo = po.PONo,
                            ShipmentNo = po.ShipmentNo,
                            Qty = po.Qty,
                            POStatus = po.POStatus,
                            PaymentTerm = po.PaymentTerm,
                            WorkStatus = po.WorkStatus,
                            EsarStatus1st = po.EsarStatus1st,
                            EsarStatus2nd = po.EsarStatus2nd,
                            EsarSubmit1st = po.EsarSubmit1st,
                            EsarSubmit2nd = po.EsarSubmit2nd,
                            InvoiceSubmit1st = po.InvoiceSubmit1st,
                            InvoiceSubmit2nd = po.InvoiceSubmit2nd,
                            PaidDate1st = po.PaidDate1st,
                            PaidDate2nd = po.PaidDate2nd,
                            Quantity1st = po.Quantity1st,
                            Quantity2nd = po.Quantity2nd,
                            Value = po.Value,
                            VsSubmit1st = po.VsSubmit1st,
                            VsSubmit2nd = po.VsSubmit2nd,
                            Remarks = po.Remarks,
                            CreatedBy = po.CreatedBy,
                            CreatedDate = po.CreatedDate,
                            UpdatedBy = po.UpdatedBy,
                            UpdatedDate = po.UpdatedDate,
                            Status_FK = po.Status_FK
                        };

            return query;
        }

        public PODTO GetByPrimaryKey(int primaryKey)
        {
            PODTO record = GetQuery().FirstOrDefault(user => user.PO_PK == primaryKey);

            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.PO_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblT_PO WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblT_PO.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
