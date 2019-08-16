using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Activities.Queries
{
    public class ActivitiesQuery : QueryBase
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords(int userFk)
        {
            return GetQuery(userFk).Count();
        }

        public ActivitiesQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public ActivitiesQuery() : base(new GlobalSolusindoDb())
        {
        }

        public List<ActivitiesDTO> GetQuery(int userFK)
        {
            var records = Db.usp_GetActivities(userFK).Select(x => new ActivitiesDTO
            {
                Aktifitas = x.Aktifitas,
                ApprovedBy = x.ApprovedBy,
                CheckInTime = x.CheckInTime,
                CheckOutTime = x.CheckOutTime,
                Tanggal = x.Tanggal,
                User_FK = x.User_FK
            });
            return records.ToList();
        }

    }
}
