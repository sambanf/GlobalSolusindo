using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Aset.EntryForm;
using GlobalSolusindo.Business.Aset.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.Aset.DML
{
    public class AsetCreateHandler : CreateOperation
    {
        private AsetValidator asetValidator;
        private AsetFactory asetFactory;
        private AsetQuery asetQuery;
        private AsetEntryDataProvider asetEntryDataProvider;

        public AsetCreateHandler(GlobalSolusindoDb db, tblM_User user, AsetValidator asetValidator, AsetFactory asetFactory, AsetQuery asetQuery, AccessControl accessControl) : base(db, user)
        {
            this.asetValidator = asetValidator;
            this.asetFactory = asetFactory;
            this.asetQuery = asetQuery;
            this.asetEntryDataProvider = new AsetEntryDataProvider(db, user, accessControl, asetQuery);
        }

        public tblM_Aset Insert(AsetDTO asetDTO, DateTime dateStamp)
        {
            if (asetDTO == null)
                throw new ArgumentNullException("Aset model is null.");
            tblM_Aset aset = asetFactory.CreateFromDTO(asetDTO, dateStamp);
            return Db.tblM_Aset.Add(aset);
        }

        public SaveResult<AsetEntryModel> Save(AsetDTO asetDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = asetValidator.Validate(asetDTO);
            bool success = false;
            AsetEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblM_Aset aset = Insert(asetDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = asetEntryDataProvider.Get(aset.Aset_PK);
            }

            return new SaveResult<AsetEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
