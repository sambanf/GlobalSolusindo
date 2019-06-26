using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;

namespace GlobalSolusindo.Identity.Menu.ListForm
{
    public class MenuListFormData
    {
    }

    public class MenuListModel
    {
        [JsonProperty("formData")]
        public MenuListFormData FormData { get; set; } = new MenuListFormData();

        [JsonProperty("searchResult")]
        public SearchResult<MenuDTO> SearchResult { get; set; }
    }

    public class MenuListDataProvider : FactoryBase
    {
        private MenuQuery menuQuery;

        public MenuListDataProvider(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public MenuListDataProvider(GlobalSolusindoDb db, tblM_User user, MenuQuery menuQuery) : base(db, user)
        {
            this.menuQuery = menuQuery;
        }

        public MenuListModel Get(MenuSearchFilter searchFilter)
        {
            MenuListFormData formData = new MenuListFormData();
            SearchResult<MenuDTO> searchResult = menuQuery.Search(searchFilter);
            return new MenuListModel()
            {
                FormData = formData,
                SearchResult = searchResult
            };
        }
    }
}
