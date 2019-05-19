using GlobalSolusindo.DataAccess;

namespace GlobalSolusindo.Api
{
    public class GlobalSolusindoDbProvider
    {
        private static GlobalSolusindoDb instance;

        public static GlobalSolusindoDb GetInstance()
        {
            return new GlobalSolusindoDb();
        }

        public static GlobalSolusindoDb GetSingletonInstance()
        {
            if (instance == null)
            {
                instance = new GlobalSolusindoDb();
            }
            return instance;
        }

        public static GlobalSolusindoDb GetAccessControlDbContext()
        {
            return new GlobalSolusindoDb();
        }

        public static GlobalSolusindoDb GetValidatorDbContext()
        {
            return new GlobalSolusindoDb();
        }
    }
}