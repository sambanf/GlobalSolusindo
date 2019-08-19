using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos.Data;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Business.IzinCuti.Queries
{
    public class IzinCutiSearchFilter : SearchFilter
    {
        private int length;
        private int page;

        [JsonProperty("userID")]
        public int UserId { get; set; }

        [JsonProperty("length")]
        public int Length
        {
            get
            {
                return length;
            }
            set
            {
                length = value;
                PageSize = value;
            }
        }

        [JsonProperty("page")]
        public int Page
        {
            get
            {
                return page;
            }
            set
            {
                page = value;
                PageIndex = value;
            }
        }

        [JsonProperty("status")]
        public int? Status { get; set; }

        public tblM_User User { get; set; }
    }

    public class IzinCutiSearch : QueryBase
    {
        public IzinCutiSearch(GlobalSolusindoDb db) : base(db)
        {
        }

        private List<int> GetBODSubOrdinates()
        {
            var jabatans = Db.tblM_KategoriJabatan
                .Where(x => x.Title.ToLower().Contains("pm")
                || x.Title.ToLower().Contains("manager")
                );

            return jabatans.Select(x => x.KategoriJabatan_PK).ToList();
        }

        private List<int> GetPMSubOrdinates()
        {
            var jabatans = Db.tblM_KategoriJabatan
                .Where(x => !x.Title.ToLower().Contains("bod")
                || !x.Title.ToLower().Contains("direktur")
                || !x.Title.ToLower().Contains("pm")
                || !x.Title.ToLower().Contains("manager")
                );

            return jabatans.Select(x => x.KategoriJabatan_PK).ToList();
        }

        private List<int> GetTLSubOrdinates()
        {
            var jabatans = Db.tblM_KategoriJabatan
                .Where(x => !x.Title.ToLower().Contains("bod")
                || !x.Title.ToLower().Contains("direktur")
                || !x.Title.ToLower().Contains("pm")
                || !x.Title.ToLower().Contains("manager")
                || !x.Title.ToLower().Contains("tl")
                || !x.Title.ToLower().Contains("team lead")
                );

            return jabatans.Select(x => x.KategoriJabatan_PK).ToList();
        }

        private tblM_KategoriJabatan GetJabatan(tblM_User user)
        {
            var jabatan = Db.tblM_KategoriJabatan.Find(user.KategoriJabatan_FK);
            return jabatan;
        }

        private bool JabatanIsProjectManager(tblM_KategoriJabatan jabatan)
        {
            return jabatan.Title.ToLower().Contains("pm") ||
                jabatan.Title.ToLower().Contains("project manager");
        }

        private bool JabatanIsTeamLead(tblM_KategoriJabatan jabatan)
        {
            return jabatan.Title.ToLower().Contains("tl") ||
                jabatan.Title.ToLower().Contains("team lead");
        }

        private bool JabatanIsHRDorEssarorBOD(tblM_KategoriJabatan jabatan)
        {
            return jabatan.Title.ToLower().Contains("bod")
                || jabatan.Title.ToLower().Contains("direktur")
                || jabatan.Title.ToLower().Contains("hrd")
                || jabatan.Title.ToLower().Contains("essar");
        }

        public SearchResult<IzinCutiDTO> GetDataByFilter(IzinCutiSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "IzinCuti_PK";
            IzinCutiQuery izinCutiQuery = new IzinCutiQuery(this.Db);

            var filteredRecords =
                izinCutiQuery.GetQuery()
                .Where(izinCuti =>
                    izinCuti.UserIzinCutiName.Contains(filter.Keyword)
                    || izinCuti.ApprovedByUserName.Contains(filter.Keyword)
                    || izinCuti.Alasan.Contains(filter.Keyword)
                    || izinCuti.UserIzinCutiJabatanTitle.Contains(filter.Keyword)
                    );

            if (filter.UserId != 0)
            {
                filteredRecords = filteredRecords
                    .Where(x =>
                    x.User_FK == filter.UserId);
            }

            var subOrdinates = new List<int>();

            var jabatan = GetJabatan(filter.User);
            if (jabatan == null)
            {
                filteredRecords = new List<IzinCutiDTO>().AsQueryable();
            }
            else
            {
                if (JabatanIsHRDorEssarorBOD(jabatan))
                {
                    subOrdinates = GetBODSubOrdinates(); 
                }
                if (JabatanIsProjectManager(jabatan))
                {
                    subOrdinates = GetPMSubOrdinates(); 
                }
                if (JabatanIsTeamLead(jabatan))
                {
                    subOrdinates = GetTLSubOrdinates();
                }
              
                filteredRecords = filteredRecords.Where(x => subOrdinates.Contains(x.KategoriJabatan_FK));
            }

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<IzinCutiDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = izinCutiQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }

        public SearchResult<IzinCutiDTO> GetDataByFilterMobile(IzinCutiSearchFilter filter)
        {
            if (string.IsNullOrEmpty(filter.SortName))
                filter.SortName = "IzinCuti_PK";
            IzinCutiQuery izinCutiQuery = new IzinCutiQuery(this.Db);

            var filteredRecords =
                izinCutiQuery.GetQuery()
                .Where(izinCuti =>
                    izinCuti.UserIzinCutiName.Contains(filter.Keyword)
                    || izinCuti.ApprovedByUserName.Contains(filter.Keyword)
                    || izinCuti.Alasan.Contains(filter.Keyword)
                    || izinCuti.UserIzinCutiJabatanTitle.Contains(filter.Keyword)
                    );

            if (filter.UserId != 0)
            {
                filteredRecords = filteredRecords
                    .Where(x =>
                    x.User_FK == filter.UserId);
            }

            if (filter.Status != null || filter.Status != 0)
            {
                    filteredRecords = filteredRecords
                                     .Where(x =>
                                     x.IzinCutiStatus_FK == filter.Status);
            }

            var displayedRecords = filteredRecords.
                SortBy(filter.SortName, filter.SortDir)
                .Skip(filter.Skip)
                .Take(filter.PageSize)
                .ToList();

            var searchResult = new SearchResult<IzinCutiDTO>(filter);
            searchResult.Filter = filter;
            searchResult.Count.TotalRecords = izinCutiQuery.GetTotalRecords();
            searchResult.Count.TotalFiltered = filteredRecords.Count();
            searchResult.Count.TotalDisplayed = displayedRecords.Count();
            searchResult.Records = displayedRecords;

            return searchResult;
        }
    }
}
