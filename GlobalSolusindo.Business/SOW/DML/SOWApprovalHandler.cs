using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOW.EntryForm;
using GlobalSolusindo.Business.SOWAssign;
using GlobalSolusindo.Business.SOWStatus.Queries;
using GlobalSolusindo.Business.SOWTrack;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using Kairos.DataAnnotations;
using Newtonsoft.Json;
using System;
using System.Linq;

namespace GlobalSolusindo.Business.SOW.DML
{
    public class SOWApprovalDTO
    {
        [JsonProperty("sow_pk")]
        public int SOW_PK { get; set; }

        [JsonProperty("statusSow_fk")]
        [ForeignKey(typeof(SOWStatusQuery), "SOWStatus_PK", true)]
        public int? StatusSOW_FK { get; set; }
    }

    public class SOWApprovalHandler : UpdateOperation
    {
        private SOWValidator sowValidator;
        private SOWFactory sowFactory;
        private SOWQuery sowQuery;
        private SOWEntryDataProvider sowEntryDataProvider;
        private SOWAssignFactory sowAssignFactory;
        private SOWTrackFactory sowTrackFactory;

        public SOWApprovalHandler(GlobalSolusindoDb db, tblM_User user, SOWValidator sowValidator, SOWFactory sowFactory, SOWAssignFactory sowAssignFactory, SOWTrackFactory sowTrackFactory, SOWQuery sowQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowValidator = sowValidator;
            this.sowFactory = sowFactory;
            this.sowQuery = sowQuery;
            this.sowAssignFactory = sowAssignFactory;
            this.sowTrackFactory = sowTrackFactory;
            this.sowEntryDataProvider = new SOWEntryDataProvider(db, user, accessControl, sowQuery);
        }

        private void Initialize(SOWValidator sowValidator, SOWFactory sowFactory)
        {
            this.sowValidator = sowValidator;
            this.sowFactory = sowFactory;
        }

        private void UpdateSowAssign(SOWApprovalDTO sowApprovalDTO, DateTime dateStamp)
        {
            if (sowApprovalDTO == null)
                throw new ArgumentNullException("SOW model is null.");

            var sowAssigns = Db.tblT_SOWAssign.Where(x => x.SOW_FK == sowApprovalDTO.SOW_PK);

            foreach (var sowAssign in sowAssigns)
            {
                sowAssign.TglSelesai = dateStamp;
            }
        }

        public void UpdateSOW(SOWApprovalDTO sowApprovalDTO, DateTime dateStamp)
        {
            if (sowApprovalDTO == null)
                throw new ArgumentNullException("SOW model is null.");
            tblT_SOW sow = Db.tblT_SOW.Find(sowApprovalDTO.SOW_PK);
           
            if (sow != null)
            {
                //if (sow.TglSelesai != null)
                //{
                //    throw new Kairos.KairosException("Cannot make an approval because this SOW already has an approval.");
                //}

                sow.TglSelesai = dateStamp;
                sow.StatusSOW_FK = sowApprovalDTO.StatusSOW_FK;
            }
        }

        public SaveResult<SOWEntryModel> Save(SOWApprovalDTO sowApprovalDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowValidator.ValidateApprovalModel(sowApprovalDTO);
            bool success = false;
            SOWEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                UpdateSOW(sowApprovalDTO, dateStamp);
                UpdateSowAssign(sowApprovalDTO, dateStamp);
                SaveChanges();

                model = sowEntryDataProvider.Get(sowApprovalDTO.SOW_PK);
            }

            return new SaveResult<SOWEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
