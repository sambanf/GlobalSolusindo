using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.SOW;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.User.Queries;

namespace GlobalSolusindo.Business.TaskEngineerDetail
{
    public class TaskEngineerDetailDataProvider : FactoryBase
    { 
        private AccessControl accessControl;

        public TaskEngineerDetailDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl) : base(db, user)
        {
            this.accessControl = accessControl; 
        }

        public TaskEngineerDetailDTO Get(int sowAssignPK)
        {
            TaskEngineerDetailDTO model = new TaskEngineerDetailDTO();

            model.SOWAssign = new SOWAssignQuery(Db).GetByPrimaryKey(sowAssignPK);
            if (model.SOWAssign != null)
            {
                model.User = new UserQuery(Db).GetByPrimaryKey(model.SOWAssign.User_FK);
                var sow = new SOWQuery(Db).GetByPrimaryKey(model.SOWAssign.SOW_FK);
                if (sow != null)
                {
                    model.BTS = new BTSQuery(Db).GetByPrimaryKey(sow.BTS_FK);
                }
            }

            return model;
        }
    }
}
