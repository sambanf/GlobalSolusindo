﻿using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Newtonsoft.Json;
using System;
using System.Linq;
using GlobalSolusindo.Business.Report.TaskEngineer;

namespace GlobalSolusindo.Business.TaskEngineer.Queries
{
    public class TaskEngineerQuery : QueryBase
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public TaskEngineerQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public TaskEngineerQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<TaskEngineerDTO> GetQuery()
        {
            var query = from assign in Db.tblT_SOWAssign
                        join sow in Db.tblT_SOW on assign.SOW_FK equals sow.SOW_PK into sowTemp
                        from sow in sowTemp.DefaultIfEmpty()
                        join user in Db.tblM_User on assign.User_FK equals user.User_PK into userTemp
                        from user in userTemp.DefaultIfEmpty()
                        join userDetail in Db.tblM_UserDetail on user.UserDetail_FK equals userDetail.UserDetail_PK into userDetailTemp
                        from userDetail in userDetailTemp.DefaultIfEmpty()
                        join jabatan in Db.tblM_KategoriJabatan on user.KategoriJabatan_FK equals jabatan.KategoriJabatan_PK into jabatanTemp
                        from jabatan in jabatanTemp.DefaultIfEmpty()
                        join bts in Db.tblM_BTS on sow.BTS_FK equals bts.BTS_PK into btsTemp
                        from bts in btsTemp.DefaultIfEmpty()
                        join checkIn in Db.tblT_CheckIn on assign.SOWAssign_PK equals checkIn.SOWAssign_FK into checkInTemp
                        from checkIn in checkInTemp.DefaultIfEmpty()
                        join sowResult in Db.tblT_SOWResult on checkIn.CheckIn_PK equals sowResult.CheckIn_FK into sowResultTemp
                        from sowResult in sowResultTemp.DefaultIfEmpty()
                        where
                        assign.Status_FK != deleted
                        && assign.User_FK != 0
                        && assign.User_FK != null
                        && (user.KategoriJabatan_FK == 1 || user.KategoriJabatan_FK == 2 || user.KategoriJabatan_FK == 3 || user.KategoriJabatan_FK == 5 || user.KategoriJabatan_FK == 6)
                        select new TaskEngineerDTO
                        {
                            SOWAssign_FK = assign.SOWAssign_PK,
                            AssignNumber = "",
                            AssignTglMulai = assign.TglMulai,
                            AssignTglSelesai = assign.TglSelesai,
                            User_FK = assign.User_FK,
                            UserId = userDetail.UserCode,
                            UserName = userDetail.Name,
                            KategoriJabatanTitle = jabatan.Title,
                            BTS_FK = sow.BTS_FK,
                            BTSName = bts.Name,
                            TaskStatus = sowResult.IsApproved,
                            CreatedBy = assign.CreatedBy,
                            CreatedDate = assign.CreatedDate,
                            UpdatedBy = assign.UpdatedBy,
                            UpdatedDate = assign.UpdatedDate,
                            Status_FK = assign.Status_FK,
                            CheckIn_FK = checkIn.CheckIn_PK,
                            Project_FK = sow.Project_FK ?? 0
                        };

            return query;
        }

        public IQueryable<PeriodDTO> GetPeriod()
        {
            var period = Db.GetPeriodeTaskEngineer().ToList();
            var query = from Data in period
                        select new PeriodDTO
                        {
                            value = Data.Value,
                            name = Data.Name
                        };
            return query.AsQueryable();
        }
        
    }
}
