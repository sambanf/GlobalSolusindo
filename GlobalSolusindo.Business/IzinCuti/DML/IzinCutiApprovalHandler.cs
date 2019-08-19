using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCuti.EntryForm;
using GlobalSolusindo.Business.IzinCuti.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.Data;
using Newtonsoft.Json;
using System;

namespace GlobalSolusindo.Business.IzinCuti.DML
{
    public enum IzinCutiStatus
    {
        Waiting = 1,
        Approved = 2,
        Rejected = 3
        
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

        public void SetApproval(IzinCutiApprovalModel izinCutiApproval, DateTime dateStamp)
        {
            if (izinCutiApproval == null)
                throw new ArgumentNullException("IzinCutiApprovalModel is null.");

            tblT_IzinCuti izinCuti = Db.tblT_IzinCuti.Find(izinCutiApproval.IzinCuti_PK);
            if (izinCutiApproval == null)
                throw new KairosException($"Id izin cuti: '{izinCutiApproval.IzinCuti_PK}' is not found.");

            izinCuti.ApprovalUserDetail_FK = User.UserDetail_FK;
            izinCuti.IzinCutiStatus_FK = izinCutiApproval.IzinCutiStatus;
            izinCuti.UpdatedBy = User.Username;
            izinCuti.UpdatedDate = dateStamp;
        }

        public SaveResult<IzinCutiEntryModel> Save(IzinCutiApprovalModel izinCutiApproval, DateTime dateStamp)
        {
            SetApproval(izinCutiApproval, dateStamp);

            Db.SaveChanges();
            IzinCutiEntryModel model = izinCutiEntryDataProvider.Get(izinCutiApproval.IzinCuti_PK);

            return new SaveResult<IzinCutiEntryModel>
            {
                Success = true,
                Message = $"Data successfully updated.",
                Model = model,
                ValidationResult = null
            };
        }
    }
}
