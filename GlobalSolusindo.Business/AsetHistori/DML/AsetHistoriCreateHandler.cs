using GlobalSolusindo.Base;
using GlobalSolusindo.Business.AsetHistori.EntryForm;
using GlobalSolusindo.Business.AsetHistori.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Business.AsetHistori.DML
{
    public class AsetHistoriCreateHandler : CreateOperation
    {
        private AsetHistoriValidator asetHistoriValidator;
        private AsetHistoriFactory asetHistoriFactory;
        private AsetHistoriQuery asetHistoriQuery;
        private AsetHistoriEntryDataProvider asetHistoriEntryDataProvider;

        public AsetHistoriCreateHandler(GlobalSolusindoDb db, tblM_User user, AsetHistoriValidator asetHistoriValidator, AsetHistoriFactory asetHistoriFactory, AsetHistoriQuery asetHistoriQuery, AccessControl accessControl) : base(db, user)
        {
            this.asetHistoriValidator = asetHistoriValidator;
            this.asetHistoriFactory = asetHistoriFactory;
            this.asetHistoriQuery = asetHistoriQuery;
            this.asetHistoriEntryDataProvider = new AsetHistoriEntryDataProvider(db, user, accessControl, asetHistoriQuery);
        }

        public tblT_AsetHistori Insert(AsetHistoriDTO asetHistoriDTO, DateTime dateStamp)
        {
            if (asetHistoriDTO == null)
                throw new ArgumentNullException("AsetHistori model is null.");
            tblT_AsetHistori asetHistori = asetHistoriFactory.CreateFromDTO(asetHistoriDTO, dateStamp);
            return Db.tblT_AsetHistori.Add(asetHistori);
        }

        public SaveResult<AsetHistoriEntryModel> Save(AsetHistoriDTO asetHistoriDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = asetHistoriValidator.Validate(asetHistoriDTO);
            bool success = false;
            AsetHistoriEntryModel model = null;
            if (validationResult.IsValid)
            {
                tblT_AsetHistori asetHistori = Insert(asetHistoriDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = asetHistoriEntryDataProvider.Get(asetHistori.AsetHistori_PK);
            }

            return new SaveResult<AsetHistoriEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
