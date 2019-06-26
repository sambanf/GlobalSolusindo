using GlobalSolusindo.Base;
using GlobalSolusindo.Identity.Menu.EntryForm;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.Menu
{
    public class MenuUpdateHandler : UpdateOperation
    {
        private MenuValidator menuValidator;
        private MenuFactory menuFactory;
        private MenuQuery menuQuery;
        private MenuEntryDataProvider menuEntryDataProvider;

        public MenuUpdateHandler(GlobalSolusindoDb db, tblM_User user, MenuValidator menuValidator, MenuFactory menuFactory, MenuQuery menuQuery, AccessControl accessControl) : base(db, user)
        {
            this.menuValidator = menuValidator;
            this.menuFactory = menuFactory;
            this.menuQuery = menuQuery;
            this.menuEntryDataProvider = new MenuEntryDataProvider(db, user, accessControl, menuQuery);
        }

        private void Initialize(MenuValidator menuValidator, MenuFactory menuFactory)
        {
            this.menuValidator = menuValidator;
            this.menuFactory = menuFactory;
        }

        public void UpdateMenu(MenuDTO menuDTO, DateTime dateStamp)
        {
            if (menuDTO == null)
                throw new ArgumentNullException("Menu model is null.");
            tblM_Menu menu = menuFactory.CreateFromDbAndUpdateFromDTO(menuDTO, dateStamp);
        }

        public SaveResult<MenuEntryModel> Save(MenuDTO menuDTO, DateTime dateStamp)
        {
            ModelValidationResult validationResult = menuValidator.Validate(menuDTO);
            bool success = false;
            MenuEntryModel model = null;

            if (validationResult.IsValid)
            {
                success = true;
                UpdateMenu(menuDTO, dateStamp);
                Db.SaveChanges();
                model = menuEntryDataProvider.Get(menuDTO.Menu_PK);
            }

            return new SaveResult<MenuEntryModel>
            {
                Success = success,
                Message = validationResult.IsValid ? "Data successfully updated." : "Validation error occured.",
                Model = model,
                ValidationResult = validationResult
            };
        }
    }
}
