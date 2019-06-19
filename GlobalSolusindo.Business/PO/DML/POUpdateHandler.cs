using GlobalSolusindo.Base;
using GlobalSolusindo.Business.PO.EntryForm;
using GlobalSolusindo.Business.PO.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.DataAccess.PO.EntryForm;
using GlobalSolusindo.Identity.MappingUserToRoleGroup;
using GlobalSolusindo.Identity.MappingUserToRoleGroup.DML;
using GlobalSolusindo.Identity.User.EntryForm;
using GlobalSolusindo.Identity.User.Queries;
using GlobalSolusindo.Identity.UserDetail;
using GlobalSolusindo.Identity.UserDetail.DML;
using GlobalSolusindo.Identity.UserDetail.Queries;
using Kairos.Data;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Business.PO.DML
{
    public class POUpdateHandler : UpdateOperation
    {
        private readonly POValidator  pOValidator;
        private readonly POFactory  pOFactory;
        private readonly POQuery pOQuery;
        private readonly POEntryDataProvider  pOEntryDataProvider;

        public POUpdateHandler(GlobalSolusindoDb db, tblM_User user, POValidator pOValidator, POFactory pOFactory,
            POQuery pOQuery) : base(db, user)
        {
            this.pOValidator = pOValidator;
            this.pOFactory = pOFactory;
            this.pOQuery = pOQuery;
            this.pOEntryDataProvider = new POEntryDataProvider(db, user, pOQuery);

        }

        public void UpdatePO(PODTO  pODTO, DateTime dateStamp)
        {
            if (pODTO == null)
                throw new ArgumentNullException("PO model is null.");
            tblT_PO user = pOFactory.CreateFromDbAndUpdateFromDTO(pODTO, dateStamp);
        }

        
        public SaveResult<POEntryModel> Save(PODTO pODTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = pOValidator.Validate(pODTO);
            bool success = false;
            POEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                UpdatePO(pODTO, dateStamp);
                Db.SaveChanges();               
                model = pOEntryDataProvider.Get(pODTO.PO_PK);
            }

            return new SaveResult<POEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
