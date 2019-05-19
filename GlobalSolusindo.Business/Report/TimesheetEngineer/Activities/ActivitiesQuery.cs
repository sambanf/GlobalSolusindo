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
            var sql = @"
--check in
select 
	SOWDetail.User_FK,
	WaktuCheckIn AS Tanggal,
	CONVERT(VARCHAR, WaktuCheckIn) AS Jam,
	CONVERT(VARCHAR, 'Chek In: ' + SOWDetail.SOWName) AS Aktifitas,
	'N/A' AS ApprovedBy
from 
	tblT_CheckIn CheckIn
	INNER JOIN
	(SELECT
		Assign.User_FK,
		SOW.SOWName,
		Assign.SOWAssign_PK
	FROM tblT_SOW SOW 
		 INNER JOIN tblM_Project Project ON SOW.Project_FK = Project.Project_PK
		 INNER JOIN tblT_SOWAssign Assign ON SOW.SOW_PK = Assign.SOW_FK 
	 ) SOWDetail ON CheckIn.SOWAssign_FK  = SOWDetail.SOWAssign_PK
WHERE 
	CheckIn.WaktuCheckOut IS NULL	 
	AND SOWDetail.User_FK  = @User_FK

UNION ALL
	
--Check out	
select 
	SOWDetail.User_FK,
	WaktuCheckOut AS Tanggal,
	CONVERT(VARCHAR, WaktuCheckOut) AS Jam,
	CONVERT(VARCHAR, 'Check out:' + SOWDetail.SOWName) AS Aktifitas,
	'N/A' AS ApprovedBy
from 
	tblT_CheckIn CheckIn
	INNER JOIN
	(SELECT
		Assign.User_FK,
		SOW.SOWName,
		Assign.SOWAssign_PK
	FROM tblT_SOW SOW 
		 INNER JOIN tblM_Project Project ON SOW.Project_FK = Project.Project_PK
		 INNER JOIN tblT_SOWAssign Assign ON SOW.SOW_PK = Assign.SOW_FK 
	 ) SOWDetail ON CheckIn.SOWAssign_FK  = SOWDetail.SOWAssign_PK
WHERE 
	CheckIn.WaktuCheckOut IS NOT NULL	 
	AND SOWDetail.User_FK  = @User_FK	
	
UNION ALL

-- CUTI	 
SELECT
	IzinCuti.User_FK,
	TglMulai AS Tanggal,
	'N/A' AS Jam,
	CONVERT(VARCHAR,   IzinCuti.Alasan) AS Aktifitas,
	UserDetail.Name AS ApprovedBy
FROM 
	tblT_IzinCuti IzinCuti
	INNER JOIN tblM_UserDetail UserDetail ON IzinCuti.ApprovalUserDetail_FK = UserDetail.UserDetail_PK
WHERE
	IzinCuti.IzinCutiStatus_FK = 1
	AND IzinCuti.User_FK = @User_FK
";

            var sqlParameter = new SqlParameter("@User_FK", userFK );
            var records = Db.Database.SqlQuery<ActivitiesDTO>(sql, sqlParameter);
            return records.ToList();
        }
  
    }
}
