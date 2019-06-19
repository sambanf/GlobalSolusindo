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
    public class POCreateHandler : CreateOperation
    {
        private POValidator POValidator;
        private POFactory POFactory;
        private POQuery POQuery;
        private POEntryDataProvider POEntryDataProvider;
        public POCreateHandler(GlobalSolusindoDb db, tblM_User user, POValidator  pOValidator, POFactory  pOFactory
            , POQuery  pOQuery) : base(db, user)
        {
            this.POValidator = pOValidator;
            this.POFactory = pOFactory;
            this.POQuery = pOQuery;
            this.POEntryDataProvider = new POEntryDataProvider(db, user, pOQuery);
        }

   

        public tblT_PO Insert(PODTO  pODTO, DateTime dateStamp)
        {
            if (pODTO == null)
                throw new ArgumentNullException("User model is null.");
            tblT_PO pO = POFactory.CreateFromDTO(pODTO, dateStamp);
            return Db.tblT_PO.Add(pO);
        }

        public SaveResult<POEntryModel> Save(PODTO  pODTO, DateTime dateStamp)
        {
            if (pODTO.Status_FK == 0)
                pODTO.Status_FK = 1;

            ModelValidationResult validationResult = POValidator.Validate(pODTO);
            bool success = false;
            POEntryModel model = null;
            if (validationResult.IsValid)
            {                              
                    tblT_PO po = Insert(pODTO, dateStamp);
                    Db.SaveChanges();
                    pODTO.PO_PK = po.PO_PK;

                    success = true;
                    model = POEntryDataProvider.Get(pODTO.PO_PK);
               
            }

            return new SaveResult<POEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
