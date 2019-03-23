using GlobalSolusindo.DataAccess;
using System;

namespace GlobalSolusindo.Base
{
    public class DbOperation : IDisposable
    {
        public GlobalSolusindoDb Db { get; private set; }

        public DbOperation()
        {
            Db = new GlobalSolusindoDb();
            Db.Configuration.LazyLoadingEnabled = false;
        }

        public DbOperation(GlobalSolusindoDb db)
        {
            Db = db;
            Db.Configuration.LazyLoadingEnabled = false;
        }

        public int SaveChanges()
        {
            return Db.SaveChanges();
        }

        #region IDisposable Member
        // Flag: Has Dispose already been called?
        bool disposed = false;

        // Public implementation of Dispose pattern callable by consumers.
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        // Protected implementation of Dispose pattern.
        protected virtual void Dispose(bool disposing)
        {
            if (disposed)
                return;

            if (disposing)
            {
                Db.Dispose();
                //User = null;
                // Free any other managed objects here.
                //
            }
            disposed = true;
        }
        #endregion
    }

    public class CreateOperation : DbOperation
    {
        public tblM_User User { get; private set; }

        public CreateOperation(GlobalSolusindoDb db, tblM_User user) : base(db)
        {
            this.User = user;
        }

        public void SaveLog(string moduleName, string actionName, string data)
        {
        }
    }

    public class UpdateOperation : DbOperation
    {
        public tblM_User User { get; private set; }

        public UpdateOperation(GlobalSolusindoDb db, tblM_User user) : base(db)
        {
            this.User = user;
        }

        public void SaveLog(string moduleName, string actionName, string data)
        {
        }
    }

    public class DeleteOperation : DbOperation
    {
        public tblM_User User { get; private set; }

        public DeleteOperation(GlobalSolusindoDb db, tblM_User user) : base(db)
        {
            this.User = user;
        }

        public void SaveLog(string moduleName, string actionName, string data)
        {
        }
    }

    public class DMLBase : DbOperation
    {
        public tblM_User User { get; private set; }

        public DMLBase(GlobalSolusindoDb db, tblM_User user) : base(db)
        {
            this.User = user;
        }

        public void SaveLog(string moduleName, string actionName, string data)
        {
        }
    }

    public class QueryBase : DbOperation
    {
        public QueryBase(GlobalSolusindoDb db) : base(db)
        {
        }
    }

    public class FactoryBase : DbOperation
    {
        public tblM_User User { get; private set; }

        public FactoryBase(GlobalSolusindoDb db, tblM_User user) : base(db)
        {
            this.User = user;
        }
    }

    public class BuilderBase : DbOperation
    {
        public tblM_User User { get; private set; }

        public BuilderBase(GlobalSolusindoDb db, tblM_User user) : base(db)
        {
            this.User = user;
        }
    }

}
