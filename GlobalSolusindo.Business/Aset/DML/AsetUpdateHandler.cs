using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Aset.EntryForm;
using GlobalSolusindo.Business.Aset.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Aset.DML
{
    public class AsetUpdateHandler : UpdateOperation
    {
        private AsetValidator asetValidator;
        private AsetFactory asetFactory;
        private AsetQuery asetQuery;
        private AsetEntryDataProvider asetEntryDataProvider;

        public AsetUpdateHandler(GlobalSolusindoDb db, tblM_User user, AsetValidator asetValidator, AsetFactory asetFactory, AsetQuery asetQuery, AccessControl accessControl) : base(db, user)
        {
            this.asetValidator = asetValidator;
            this.asetFactory = asetFactory;
            this.asetQuery = asetQuery;
            this.asetEntryDataProvider = new AsetEntryDataProvider(db, user, accessControl, asetQuery);
        }

        private void Initialize(AsetValidator asetValidator, AsetFactory asetFactory)
        {
            this.asetValidator = asetValidator;
            this.asetFactory = asetFactory;
        }

        public void Update(AsetDTO asetDTO, DateTime dateStamp)
        {
            if (asetDTO == null)
                throw new ArgumentNullException("Aset model is null.");
            tblM_Aset aset = asetFactory.CreateFromDbAndUpdateFromDTO(asetDTO, dateStamp);  
        }

        public SaveResult<AsetEntryModel> Save(AsetDTO asetDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = asetValidator.Validate(asetDTO);
            bool success = false;
            AsetEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(asetDTO, dateStamp); 
                Db.SaveChanges();
                model = asetEntryDataProvider.Get(asetDTO.Aset_PK);
            }

            return new SaveResult<AsetEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
