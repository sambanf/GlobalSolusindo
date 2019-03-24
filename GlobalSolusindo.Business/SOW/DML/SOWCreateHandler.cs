using GlobalSolusindo.Base;
using GlobalSolusindo.Business.SOW.EntryForm;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Business.SOWAssign;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.SOW.DML
{
    public class SOWCreateHandler : CreateOperation
    {
        private SOWValidator sowValidator;
        private SOWFactory sowFactory;
        private SOWQuery sowQuery;
        private SOWEntryDataProvider sowEntryDataProvider;
        private SOWAssignFactory sowAssignFactory;

        public SOWCreateHandler(GlobalSolusindoDb db, tblM_User user, SOWValidator sowValidator, SOWFactory sowFactory, SOWAssignFactory sowAssignFactory, SOWQuery sowQuery, AccessControl accessControl) : base(db, user)
        {
            this.sowValidator = sowValidator;
            this.sowFactory = sowFactory;
            this.sowQuery = sowQuery;
            this.sowAssignFactory = sowAssignFactory;
            this.sowEntryDataProvider = new SOWEntryDataProvider(db, user, accessControl, sowQuery);
        }

        public tblT_SOW Insert(SOWDTO sowDTO, DateTime dateStamp)
        {
            if (sowDTO == null)
                throw new ArgumentNullException("SOW model is null.");
            tblT_SOW sow = sowFactory.CreateFromDTO(sowDTO, dateStamp);
            sowDTO.SOW_PK = sow.SOW_PK;
            return Db.tblT_SOW.Add(sow);
        }

        private void InsertSowAssign(SOWDTO sowDTO, DateTime dateStamp)
        {
            if (sowDTO == null)
                throw new ArgumentNullException("SOW model is null.");

            foreach (var sowAssignDTO in sowDTO.SOWAssigns)
            {
                sowAssignDTO.SOW_FK = sowDTO.SOW_PK;
                tblT_SOWAssign sowAssign = sowAssignFactory.CreateFromDTO(sowAssignDTO, dateStamp);
                Db.tblT_SOWAssign.Add(sowAssign);
            }
        }

        public SaveResult<SOWEntryModel> Save(SOWDTO sowDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = sowValidator.Validate(sowDTO);
            bool success = false;
            SOWEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_SOW sow = Insert(sowDTO, dateStamp);
                SaveChanges();
                sowDTO.SOW_PK = sow.SOW_PK;
                InsertSowAssign(sowDTO, dateStamp);
                SaveChanges();

                success = true;
                model = sowEntryDataProvider.Get(sow.SOW_PK);
            }

            return new SaveResult<SOWEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
