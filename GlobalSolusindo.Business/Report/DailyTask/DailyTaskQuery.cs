using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Business.DailyTask.Queries
{
    public class DailyTaskQuery : QueryBase
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery("").Count();
        }

        public DailyTaskQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public DailyTaskQuery() : base(new GlobalSolusindoDb())
        {
        }

        public List<DailyTaskDTO> GetQuery(string keyword)
        {
            var records = Db.usp_GetDailyTask(keyword).Select(x => new DailyTaskDTO()
            {
                KategoriJabatanTitle = x.KategoriJabatanTitle, 
                Status = x.Status,
                UserId = x.UserId,
                UserName = x.UserName,
                User_FK = x.User_FK,
                Project_FK = x.Project_FK
            });
            return records.ToList();
        }
    }
}
