using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.SOW;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.User.Queries;
using GlobalSolusindo.Business.CheckIn.Queries;
using GlobalSolusindo.Business.CheckIn;
using GlobalSolusindo.Business.SOWIssue.Queries;
using GlobalSolusindo.Business.IssueType.Queries;

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
            CheckInDTO modelCheckin = new CheckInDTO();

            model.SOWAssign = new SOWAssignQuery(Db).GetByPrimaryKey(sowAssignPK);
            if (model.SOWAssign != null)
            {

                model.User = new UserQuery(Db).GetByPrimaryKey(model.SOWAssign.User_FK);
                var sow = new SOWQuery(Db).GetByPrimaryKey(model.SOWAssign.SOW_FK);
                if (sow != null)
                {
                    model.BTS = new BTSQuery(Db).GetByPrimaryKey(sow.BTS_FK);
                    modelCheckin = new CheckInQuery(Db).GetBySOWAssign(sowAssignPK);

                    model.sOWIssue = new SOWIssueQuery(Db).GetBySOWAssignFK(sowAssignPK);
                    if (model.sOWIssue != null)
                    {
                        int pk = model.sOWIssue.IssueType_FK?? default(int);
                        model.sOWIssue.Issuename = new IssueTypeQuery(Db).GetByPrimaryKey(pk).Title;
                        model.CellIDStatus = null;
                        if (model.BTS.CellID != "" && model.BTS.CellID != null)
                        {
                            model.CellIDStatus = false;
                            string[] bts = model.BTS.CellID.Split(',');

                            for (int i = 0; i < bts.Length; i++)
                            {
                                if (modelCheckin.CellIDCheckIn == bts[i])
                                {
                                    model.CellIDStatus = true;
                                    break;
                                }

                            }
                        }
                    }
                }
            }


            return model;
        }
    }
}
