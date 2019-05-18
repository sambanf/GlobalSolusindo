using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.TimesheetDetail.Queries
{
    public class TimesheetDetailQuery : QueryBase
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords(int userFK)
        {
            return GetQuery(userFK).Count();
        }

        public TimesheetDetailQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public TimesheetDetailQuery() : base(new GlobalSolusindoDb())
        {
        }

        public List<TimesheetDetailDTO> GetQuery(int userFk)
        {
            var sql = @"
SELECT DISTINCT * FROM (
--check in
select 
	SOWDetail.User_FK,
	MONTH(WaktuCheckIn) AS Bulan,
	CASE MONTH(WaktuCheckIn) 
	WHEN 1
		THEN 'Januari' 
	WHEN 2
		THEN 'Februari' 
	WHEN 3
		THEN 'Maret' 
	WHEN 4
		THEN 'April' 
	WHEN 5
		THEN 'Mei' 
	WHEN 6
		THEN 'Juni' 
	WHEN 7
		THEN 'Juli' 
	WHEN 8
		THEN 'Agustus' 
	WHEN 9
		THEN 'September' 
	WHEN 10
		THEN 'Oktober' 
	WHEN 11
		THEN 'November' 
	WHEN 12
		THEN 'Desember' 
	END 
		AS BulanName,
	YEAR(WaktuCheckIn) AS Tahun
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
	MONTH(WaktuCheckOut) AS Bulan,
	CASE MONTH(WaktuCheckOut) 
	WHEN 1
		THEN 'Januari' 
	WHEN 2
		THEN 'Februari' 
	WHEN 3
		THEN 'Maret' 
	WHEN 4
		THEN 'April' 
	WHEN 5
		THEN 'Mei' 
	WHEN 6
		THEN 'Juni' 
	WHEN 7
		THEN 'Juli' 
	WHEN 8
		THEN 'Agustus' 
	WHEN 9
		THEN 'September' 
	WHEN 10
		THEN 'Oktober' 
	WHEN 11
		THEN 'November' 
	WHEN 12
		THEN 'Desember' 
	END 
		AS BulanName,
	YEAR(WaktuCheckOut) AS Tahun
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
	MONTH(TglMulai) AS Bulan,
	CASE MONTH(TglMulai) 
	WHEN 1
		THEN 'Januari' 
	WHEN 2
		THEN 'Februari' 
	WHEN 3
		THEN 'Maret' 
	WHEN 4
		THEN 'April' 
	WHEN 5
		THEN 'Mei' 
	WHEN 6
		THEN 'Juni' 
	WHEN 7
		THEN 'Juli' 
	WHEN 8
		THEN 'Agustus' 
	WHEN 9
		THEN 'September' 
	WHEN 10
		THEN 'Oktober' 
	WHEN 11
		THEN 'November' 
	WHEN 12
		THEN 'Desember' 
	END 
		AS BulanName,
	YEAR(TglMulai) AS Tahun
FROM 
	tblT_IzinCuti IzinCuti
	INNER JOIN tblM_UserDetail UserDetail ON IzinCuti.ApprovalUserDetail_FK = UserDetail.UserDetail_PK
WHERE
	IzinCuti.IzinCutiStatus_FK = 1
	AND IzinCuti.User_FK = @User_FK
) AS Activities";

            var sqlParameter = new SqlParameter("@User_FK", userFk);
            var records = Db.Database.SqlQuery<TimesheetDetailDTO>(sql, sqlParameter).ToList();
            return records;
        } 
    }
}
