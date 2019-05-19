using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Kota.EntryForm;
using GlobalSolusindo.Business.Kota.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Kota.DML
{
    public class KotaCreateHandler : CreateOperation
    {
        private KotaValidator kotaValidator;
        private KotaFactory kotaFactory;
        private KotaQuery kotaQuery;
        private KotaEntryDataProvider kotaEntryDataProvider;

        public KotaCreateHandler(GlobalSolusindoDb db, tblM_User user, KotaValidator kotaValidator, KotaFactory kotaFactory, KotaQuery kotaQuery, AccessControl accessControl) : base(db, user)
        {
            this.kotaValidator = kotaValidator;
            this.kotaFactory = kotaFactory;
            this.kotaQuery = kotaQuery;
            this.kotaEntryDataProvider = new KotaEntryDataProvider(db, user, accessControl, kotaQuery);
        }

        public tblM_Kota Insert(KotaDTO kotaDTO, DateTime dateStamp)
        {
            if (kotaDTO == null)
                throw new ArgumentNullException("Kota model is null.");
            tblM_Kota kota = kotaFactory.CreateFromDTO(kotaDTO, dateStamp);
            return Db.tblM_Kota.Add(kota);
        }

        public SaveResult<KotaEntryModel> Save(KotaDTO kotaDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = kotaValidator.Validate(kotaDTO);
            bool success = false;
            KotaEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_Kota kota = Insert(kotaDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = kotaEntryDataProvider.Get(kota.Kota_PK);
            }

            return new SaveResult<KotaEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
