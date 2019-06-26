using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.Menu
{
    public class MenuFactory : FactoryBase
    {
        public MenuFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_Menu CreateFromDTO(MenuDTO menuDTO, DateTime dateStamp)
        {
            if (menuDTO == null)
                throw new ArgumentNullException("Menu model is null.");
            menuDTO.Status_FK = (int)RecordStatus.Active;
            menuDTO.CreatedBy = User.Username;
            menuDTO.CreatedDate = dateStamp;
            menuDTO.UpdatedBy = User.Username;
            menuDTO.UpdatedDate = dateStamp;
            tblM_Menu menu = menuDTO.ToObject<tblM_Menu>();
            return menu;
        }

        public tblM_Menu CreateFromDbAndUpdateFromDTO(MenuDTO menuDTO, DateTime dateStamp)
        {
            tblM_Menu menu;

            if (menuDTO == null)
                throw new ArgumentNullException("Menu model is null.");
            menu = Db.tblM_Menu.Find(menuDTO.Menu_PK);
            if (menu == null)
                throw new KairosException($"Record with key '{menuDTO.Menu_PK}' is not found.");

            menu.UpdateValueFrom(menuDTO, "Menu_PK", "Status_FK");
            menuDTO.CreatedBy = menu.CreatedBy;
            menuDTO.CreatedDate = menu.CreatedDate;
            menu.UpdatedBy = menuDTO.UpdatedBy = User.Username;
            menu.UpdatedDate = menuDTO.UpdatedDate = dateStamp;

            return menu;
        }
    }
}
