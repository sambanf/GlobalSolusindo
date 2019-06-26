using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.Menu.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.Menu
{
    public class MenuCreateHandler : CreateOperation
    {
        private MenuValidator menuValidator;
        private MenuFactory menuFactory;
        private MenuQuery menuQuery;
        private MenuEntryDataProvider menuEntryDataProvider;

        public MenuCreateHandler(GlobalSolusindoDb db, tblM_User user, MenuValidator menuValidator, MenuFactory menuFactory, MenuQuery menuQuery, AccessControl accessControl) : base(db, user)
        {
            this.menuValidator = menuValidator;
            this.menuFactory = menuFactory;
            this.menuQuery = menuQuery;
            this.menuEntryDataProvider = new MenuEntryDataProvider(db, user, accessControl, menuQuery);
        }

        public tblM_Menu AddMenu(MenuDTO menuDTO, DateTime dateStamp)
        {
            if (menuDTO == null)
                throw new ArgumentNullException("Menu model is null.");
            tblM_Menu menu = menuFactory.CreateFromDTO(menuDTO, dateStamp);
            return Db.tblM_Menu.Add(menu);
        }

        public SaveResult<MenuEntryModel> Save(MenuDTO menuDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = menuValidator.Validate(menuDTO);
            bool success = false;
            MenuEntryModel model = null;
            if (!validationResult.IsValid)
            {
                return new SaveResult<MenuEntryModel>
                {
                    Success = success,
                    Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                    Model = model,
                    ValidationResult = validationResult
                };

            }
            tblM_Menu menu = AddMenu(menuDTO, dateStamp);
                Db.SaveChanges();

                success = true;
                model = menuEntryDataProvider.Get(menu.Menu_PK);

            return new SaveResult<MenuEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully created." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
