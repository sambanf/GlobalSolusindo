using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Business.AsetHistori;
using Kairos.Imaging;
using Kairos.Linq;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace GlobalSolusindo.Business.Aset.Queries
{
    public class AsetQuery : QueryBase, IUniqueQuery
    {
        private const int deleted = (int)RecordStatus.Deleted;

        public int GetTotalRecords()
        {
            return GetQuery().Count();
        }

        public AsetQuery(GlobalSolusindoDb db) : base(db)
        {
        }

        public AsetQuery() : base(new GlobalSolusindoDb())
        {
        }

        public IQueryable<AsetDTO> GetQuery()
        {
            var query = from aset in Db.tblM_Aset
                        join asetKategori in Db.tblM_AsetKategori on aset.KategoriAset_FK equals asetKategori.AsetKategori_PK into asetKategoriTemp
                        from asetKategori in asetKategoriTemp.DefaultIfEmpty()
                        where
                        aset.Status_FK != deleted
                        select new AsetDTO
                        {
                            Aset_PK = aset.Aset_PK,
                            KategoriAset_FK = aset.KategoriAset_FK,
                            KategoriAsetName = asetKategori.Title,
                            AsetID = aset.AsetID,
                            Name = aset.Name,
                            Status = (from asetHistori in Db.tblT_AsetHistori
                                      where asetHistori.Aset_FK == aset.Aset_PK
                                      && asetHistori.TglSelesai == null
                                      select new AsetHistoriDTO
                                      {
                                          AsetHistori_PK = asetHistori.AsetHistori_PK,
                                          User_FK = asetHistori.User_FK,
                                          Aset_FK = asetHistori.Aset_FK,
                                          AsetID = aset.AsetID,
                                          AsetName = aset.Name,
                                          AsetKategoriTitle = asetKategori.Title,
                                          TglMulai = asetHistori.TglMulai,
                                          TglSelesai = asetHistori.TglSelesai,
                                          CreatedBy = asetHistori.CreatedBy,
                                          CreatedDate = asetHistori.CreatedDate,
                                          UpdatedBy = asetHistori.UpdatedBy,
                                          UpdatedDate = asetHistori.UpdatedDate,
                                          Status_FK = asetHistori.Status_FK,
                                          Description = asetHistori.Description

                                      }).ToList(),
                            Description = aset.Description,
                            Remark = (from asetHistori in Db.tblT_AsetHistori
                                      where asetHistori.Aset_FK == aset.Aset_PK
                                      select new List<string>
                                      {
                                          asetHistori.Description
                                      }).FirstOrDefault().ToList(),
                            CreatedBy = aset.CreatedBy,
                            CreatedDate = aset.CreatedDate,
                            UpdatedBy = aset.UpdatedBy,
                            UpdatedDate = aset.UpdatedDate,
                            Status_FK = aset.Status_FK
                        };

            return query;
        }

        public IQueryable<AsetDTO> GetQueryAvaible()
        {
            var DataAset = Db.GetAsetAvaible().ToList();

            var query = from aset in DataAset
                        select new AsetDTO
                        {
                            Aset_PK = aset.Aset_PK,
                            KategoriAset_FK = aset.KategoriAset_FK,
                            KategoriAsetName = aset.Title,
                            AsetID = aset.AsetID,
                            Name = aset.Name,
                            Description = aset.Description,
                            CreatedBy = aset.CreatedBy,
                            CreatedDate = aset.CreatedDate,
                            UpdatedBy = aset.UpdatedBy,
                            UpdatedDate = aset.UpdatedDate,
                            Status_FK = aset.Status_FK
                        };

            return query.AsQueryable();
        }

        private void GetPhoto(AsetDTO record)
        {
            if (record != null)
            {
                var aset = Db.tblM_Aset.Find(record.Aset_PK);
                if (aset != null)
                    record.FilePhotoInBase64 = new WebImageConverter().GetBase64FromBytes(aset.FilePhoto);
            }
        }

        public AsetDTO GetByPrimaryKey(int primaryKey)
        {
            AsetDTO record = GetQuery().FirstOrDefault(aset => aset.Aset_PK == primaryKey);
            GetPhoto(record);

            return record;
        }

        #region IUniqueQuery Member
        public object GetByPrimaryKey(params object[] primaryKeys)
        {
            int primaryKey = Convert.ToInt32(primaryKeys[0]);
            return GetQuery().FirstOrDefault(x => x.Aset_PK == primaryKey);
        }

        public int CountBy(string fieldName, string value)
        {
            string sql = $"SELECT TOP 1 * FROM tblM_Aset WHERE Status_FK != {deleted} AND {fieldName} = @value";
            SqlParameter sqlParameter = new SqlParameter("@value", value);
            return Db.tblM_Aset.SqlQuery(sql, sqlParameter).Count();
        }
        #endregion
    }
}
