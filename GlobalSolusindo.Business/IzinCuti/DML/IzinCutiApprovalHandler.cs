using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCuti.EntryForm;
using GlobalSolusindo.Business.IzinCuti.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using Newtonsoft.Json;
using System;

namespace GlobalSolusindo.Business.IzinCuti.DML
{
    public enum IzinCutiStatus
    {
        Approved = 1,
        Rejected = 2,
        Waiting = 3
    }

    public class IzinCutiApprovalModel
    {
        [JsonProperty("izinCuti_pk")]
        public int IzinCuti_PK { get; set; }

        [JsonProperty("izinCutiStatus")]
        public int IzinCutiStatus { get; set; }
    }

    public class IzinCutiApprovalHandler : UpdateOperation
    {
        private IzinCutiValidator izinCutiValidator;
        private IzinCutiFactory izinCutiFactory;
        private IzinCutiQuery izinCutiQuery;
        private IzinCutiEntryDataProvider izinCutiEntryDataProvider;

        private int approvedStatus = 1;
        private int rejectedStatus = 2;
        private int waitingStatus = 3;

        public IzinCutiApprovalHandler(GlobalSolusindoDb db, tblM_User user, IzinCutiValidator izinCutiValidator, IzinCutiFactory izinCutiFactory, IzinCutiQuery izinCutiQuery, AccessControl accessControl) : base(db, user)
        {
            this.izinCutiValidator = izinCutiValidator;
            this.izinCutiFactory = izinCutiFactory;
            this.izinCutiQuery = izinCutiQuery;
            this.izinCutiEntryDataProvider = new IzinCutiEntryDataProvider(db, user, accessControl, izinCutiQuery);
        }

        private void Initialize(IzinCutiValidator izinCutiValidator, IzinCutiFactory izinCutiFactory)
        {
            this.izinCutiValidator = izinCutiValidator;
            this.izinCutiFactory = izinCutiFactory;
        }

        public void Approve(int izinCutiPK, DateTime dateStamp)
        {
            tblT_IzinCuti izinCuti = Db.tblT_IzinCuti.Find(izinCutiPK);
            if (izinCuti == null)
                throw new ArgumentNullException("IzinCuti model is null.");
            izinCuti.ApprovalUserDetail_FK = User.UserDetail_FK;
            izinCuti.IzinCutiStatus_FK = approvedStatus;
        }

        public void Reject(int izinCutiPK, DateTime dateStamp)
        {
            tblT_IzinCuti izinCuti = Db.tblT_IzinCuti.Find(izinCutiPK);
            if (izinCuti == null)
                throw new ArgumentNullException("IzinCuti model is null.");
            izinCuti.ApprovalUserDetail_FK = User.UserDetail_FK;
            izinCuti.IzinCutiStatus_FK = rejectedStatus;
        }

        public void Wait(int izinCutiPK, DateTime dateStamp)
        {
            tblT_IzinCuti izinCuti = Db.tblT_IzinCuti.Find(izinCutiPK);
            if (izinCuti == null)
                throw new ArgumentNullException("IzinCuti model is null.");
            izinCuti.ApprovalUserDetail_FK = User.UserDetail_FK;
            izinCuti.IzinCutiStatus_FK = waitingStatus;
        }

        public SaveResult<IzinCutiEntryModel> Save(int izinCutiPK, IzinCutiStatus izinCutiStatus, DateTime dateStamp)
        {
            bool success = false;
            IzinCutiEntryModel model = null;
            success = true;

            switch (izinCutiStatus)
            {
                case IzinCutiStatus.Approved:
                    Approve(izinCutiPK, dateStamp);
                    break;
                case IzinCutiStatus.Rejected:
                    Reject(izinCutiPK, dateStamp);
                    break;
                case IzinCutiStatus.Waiting:
                    Wait(izinCutiPK, dateStamp);
                    break;
                default:
                    throw new Kairos.KairosException("Invalid izin status code.");
            }
            Db.SaveChanges();
            model = izinCutiEntryDataProvider.Get(izinCutiPK);

            return new SaveResult<IzinCutiEntryModel>
            {
                Success = success,
                Message = $"Data successfully {izinCutiStatus.ToString()}.",
                Model = model,
                ValidationResult = null
            };
        }
    }
}
