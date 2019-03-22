using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Kota.EntryForm;
using GlobalSolusindo.Business.Kota.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Kota.DML
{
    public class KotaUpdateHandler : UpdateOperation
    {
        private KotaValidator kotaValidator;
        private KotaFactory kotaFactory;
        private KotaQuery kotaQuery;
        private KotaEntryDataProvider kotaEntryDataProvider;

        public KotaUpdateHandler(GlobalSolusindoDb db, tblM_User user, KotaValidator kotaValidator, KotaFactory kotaFactory, KotaQuery kotaQuery, AccessControl accessControl) : base(db, user)
        {
            this.kotaValidator = kotaValidator;
            this.kotaFactory = kotaFactory;
            this.kotaQuery = kotaQuery;
            this.kotaEntryDataProvider = new KotaEntryDataProvider(db, user, accessControl, kotaQuery);
        }

        private void Initialize(KotaValidator kotaValidator, KotaFactory kotaFactory)
        {
            this.kotaValidator = kotaValidator;
            this.kotaFactory = kotaFactory;
        }

        public void Update(KotaDTO kotaDTO, DateTime dateStamp)
        {
            if (kotaDTO == null)
                throw new ArgumentNullException("Kota model is null.");
            tblM_Kota kota = kotaFactory.CreateFromDbAndUpdateFromDTO(kotaDTO, dateStamp);  
        }

        public SaveResult<KotaEntryModel> Save(KotaDTO kotaDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = kotaValidator.Validate(kotaDTO);
            bool success = false;
            KotaEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                  Update(kotaDTO, dateStamp); 
                Db.SaveChanges();
                model = kotaEntryDataProvider.Get(kotaDTO.Kota_PK);
            }

            return new SaveResult<KotaEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
