using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;

namespace GlobalSolusindo.Identity.Menu
{
    public class MenuDeleteHandler : DeleteOperation
    {
        public MenuDeleteHandler(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        private void HardDelete(tblM_Menu menu)
        {
            if (menu != null)
                Db.tblM_Menu.Remove(menu);
        }

        private void SoftDelete(tblM_Menu menu)
        {
            if (menu != null)
                menu.Status_FK = (int)RecordStatus.Deleted;
        }

        public DeleteResult<tblM_Menu> Execute(int menuPK, DeleteMethod deleteMethod)
        {
            tblM_Menu menu = Db.tblM_Menu.Find(menuPK); 
            if (menu == null)
            {
                return new DeleteResult<tblM_Menu>()
                {
                    Success = false,
                    Message = $"Id '{menuPK}' is not found.",
                    Record = null
                };
            }

            switch (deleteMethod)
            {
                case DeleteMethod.Soft:
                    SoftDelete(menu);
                    break;
                case DeleteMethod.Hard:
                    HardDelete(menu);
                    break;
                default:
                    break;
            }

            Db.SaveChanges(); 

            return new DeleteResult<tblM_Menu>()
            {
                Success = true,
                Message = $"Menu with Id '{menuPK}' successfully deleted.",
                Record = menu
            };
        }
    }
}
