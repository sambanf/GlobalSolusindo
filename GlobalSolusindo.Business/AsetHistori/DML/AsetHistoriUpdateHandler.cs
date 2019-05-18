using GlobalSolusindo.Base;
using GlobalSolusindo.Business.AsetHistori.EntryForm;
using GlobalSolusindo.Business.AsetHistori.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.AsetHistori.DML
{
    public class AsetHistoriUpdateHandler : UpdateOperation
    {
        private AsetHistoriValidator asetHistoriValidator;
        private AsetHistoriFactory asetHistoriFactory;
        private AsetHistoriQuery asetHistoriQuery;
        private AsetHistoriEntryDataProvider asetHistoriEntryDataProvider;

        public AsetHistoriUpdateHandler(GlobalSolusindoDb db, tblM_User user, AsetHistoriValidator asetHistoriValidator, AsetHistoriFactory asetHistoriFactory, AsetHistoriQuery asetHistoriQuery, AccessControl accessControl) : base(db, user)
        {
            this.asetHistoriValidator = asetHistoriValidator;
            this.asetHistoriFactory = asetHistoriFactory;
            this.asetHistoriQuery = asetHistoriQuery;
            this.asetHistoriEntryDataProvider = new AsetHistoriEntryDataProvider(db, user, accessControl, asetHistoriQuery);
        }

        private void Initialize(AsetHistoriValidator asetHistoriValidator, AsetHistoriFactory asetHistoriFactory)
        {
            this.asetHistoriValidator = asetHistoriValidator;
            this.asetHistoriFactory = asetHistoriFactory;
        }

        public void Update(AsetHistoriDTO asetHistoriDTO, DateTime dateStamp)
        {
            if (asetHistoriDTO == null)
                throw new ArgumentNullException("AsetHistori model is null.");
            tblT_AsetHistori asetHistori = asetHistoriFactory.CreateFromDbAndUpdateFromDTO(asetHistoriDTO, dateStamp);  
        }

        public SaveResult<AsetHistoriEntryModel> Save(AsetHistoriDTO asetHistoriDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = asetHistoriValidator.Validate(asetHistoriDTO);
            bool success = false;
            AsetHistoriEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(asetHistoriDTO, dateStamp); 
                Db.SaveChanges();
                model = asetHistoriEntryDataProvider.Get(asetHistoriDTO.AsetHistori_PK);
            }

            return new SaveResult<AsetHistoriEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
