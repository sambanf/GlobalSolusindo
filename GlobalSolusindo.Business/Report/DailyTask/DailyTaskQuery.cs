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
            return GetQuery().Count();
        }

        public DailyTaskQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public DailyTaskQuery() : base(new GlobalSolusindoDb())
        {
        }

        public List<DailyTaskDTO> GetQuery()
        {
            var sql = @"
select 
	*,
	CASE 
		WHEN ISNULL(WaktuCheckIn, 0) != 0
			THEN 'Online' --1
		WHEN ISNULL(CutiTglMulai, 0 ) != 0
			THEN 'Cuti' --2
		WHEN ISNULL(AssignTglMulai, 0 ) = 0
			THEN 'Unassigned'  --3
		Else
			'Offline' --4
	END
		AS Status
 from ( 
SELECT	 
	tUser.User_PK AS User_FK,
	UserDetail.UserCode AS UserId,
	UserDetail.Name AS UserName,
	Assign.SOWAssign_PK,
	Assign.TglMulai AS AssignTglMulai,
	Assign.TglSelesai AS AssignTglSelesai,
	Cuti.IzinCuti_PK,
	cuti.TglMulai AS CutiTglMulai,
	Cuti.TglSelesai AS CutiTglSelesai,
	CheckIn.CheckIn_PK,
	CheckIn.WaktuCheckIn,
	CheckIn.WaktuCheckOut,
	Jabatan.Title AS KategoriJabatanTitle,
	RoleGroup.Title AS RoleTitle,
	row_number() over(partition by tUser.user_pk order by Assign.SOWAssign_PK, cuti.IzinCuti_PK, CheckIn.CheckIn_PK  desc) RowNumber
	
FROM 
	tblM_User tUser
	INNER JOIN tblM_UserDetail UserDetail ON tUser.UserDetail_FK = UserDetail.UserDetail_PK
	LEFT JOIN tblM_KategoriJabatan Jabatan ON tUser.KategoriJabatan_FK = Jabatan.KategoriJabatan_PK
	LEFT JOIN tblM_MappingUserToRoleGroup RoleMapping ON tUser.User_PK = RoleMapping.User_PK
	LEFT JOIN tblM_RoleGroup RoleGroup ON RoleMapping.RoleGroup_PK = RoleGroup.RoleGroup_PK
	left join (select * from tblT_SOWAssign where TglSelesai is  null) Assign  on tUser.User_PK  =Assign.User_FK
	left join (select * from tblT_IzinCuti where TglSelesai is  null) Cuti on tUser.User_PK  = Cuti.User_FK
	left join (select * from tblT_CheckIn where WaktuCheckOut is  null) CheckIn on Assign.SOWAssign_PK  = CheckIn.SOWAssign_FK
WHERE
	tUser.Status_FK != 3
	) as dailytask
	where RowNumber = 1
";
            var records = Db.Database.SqlQuery<DailyTaskDTO>(sql);
            return records.ToList();
        }
    }
}
