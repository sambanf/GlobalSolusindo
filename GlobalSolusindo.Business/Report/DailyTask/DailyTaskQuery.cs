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
                AssignTglMulai = x.AssignTglMulai,
                AssignTglSelesai = x.AssignTglSelesai,
                CheckIn_PK = x.CheckIn_PK,
                CutiTglMulai = x.CutiTglMulai,
                CutiTglSelesai = x.CutiTglSelesai,
                IzinCuti_PK = x.IzinCuti_PK,
                KategoriJabatanTitle = x.KategoriJabatanTitle,
                RoleTitle = x.RoleTitle,
                SOWAssign_PK = x.SOWAssign_PK,
                Status = x.Status,
                UserId = x.UserId,
                UserName = x.UserName,
                User_FK = x.User_FK,
                WaktuCheckIn = x.WaktuCheckIn,
                WaktuCheckOut = x.WaktuCheckOut 
            });
            return records.ToList();
        }
    }
}
