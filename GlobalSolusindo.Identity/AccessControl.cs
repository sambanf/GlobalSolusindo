using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using System;

namespace GlobalSolusindo.Identity
{
    public interface IAccessControl
    {
        bool CanAccess(string roleTitle);
    }

    public class AccessControl : DbOperation, IAccessControl
    {
        public tblM_User User { get; private set; }

        public AccessControl(GlobalSolusindoDb db, tblM_User user) : base(db)
        {
            this.User = user;
        }

        public bool CanAccess(string roleTitle)
        {
            throw new NotImplementedException();
        }
    }
}
