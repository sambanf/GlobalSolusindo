using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.Project;
using GlobalSolusindo.Business.SOWAssign;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.Business.Technology;
using GlobalSolusindo.Business.Technology.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.User;
using GlobalSolusindo.Identity.User.Queries;
using Kairos;
using Kairos.UI;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Business.SOW.EntryForm
{
    public class SOWEntryFormData
    {

        [JsonProperty("sownames")]
        public List<SOWNameDTO> sownames { get; set; } = new List<SOWNameDTO>();

        [JsonProperty("btses")]
        public List<BTSDTO> BTSes { get; set; } = new List<BTSDTO>();

        [JsonProperty("projects")]
        public List<ProjectDTO> Projects { get; set; } = new List<ProjectDTO>();

        [JsonProperty("users")]
        public List<UserDTO> Users { get; set; } = new List<UserDTO>();

        [JsonProperty("technologies")]
        public List<TechnologyDTO> Technologies { get; set; } = new List<TechnologyDTO>();
    }

    public class SOWEntryModel
    {
        [JsonProperty("formData")]
        public SOWEntryFormData FormData { get; set; } = new SOWEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public SOWDTO Model { get; set; }
    }

    public class SOWEntryDataProvider : FactoryBase
    {
        private SOWQuery sowQuery;
        private AccessControl accessControl;

        public SOWEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, SOWQuery sowQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.sowQuery = sowQuery;
        }

        private List<Control> CreateFormControls(int sowPK)
        {
            SOWEntryControlBuilder controlBuilder = new SOWEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (sowPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }


        private SOWEntryFormData CreateFormData(SOWDTO sowDTO)
        {
            if (sowDTO == null)
                return new SOWEntryFormData();

            SOWEntryFormData formData = new SOWEntryFormData();

            List<SOWNameDTO> sowname = new SOWQuery(this.Db).GetSOWName().ToList();
            foreach (var name in sowname)
            {
                formData.sownames.Add(name);
            }
            var project = new ProjectQuery(this.Db).GetByPrimaryKey(sowDTO.Project_FK);
            if (project != null)
                formData.Projects.Add(project);

            var bts = new BTSQuery(this.Db).GetByPrimaryKey(sowDTO.BTS_FK);
            if (bts != null)
                formData.BTSes.Add(bts);


            foreach (var assign in sowDTO.SOWAssigns)
            {
                var user = new UserQuery(Db).GetByPrimaryKey(assign.User_FK);
                if (user != null)
                    formData.Users.Add(user);
            }

            foreach (var track in sowDTO.SOWTracks)
            {
                sowDTO.Technology_FK = track.TipePekerjaan_FK;
                var technology = new TechnologyQuery(this.Db).GetByPrimaryKey((int)track.TipePekerjaan_FK);
                if (technology != null)
                    formData.Technologies.Add(technology);
            }

            return formData;
        }

        private SOWDTO CreateModel(int pk)
        {
            var jabatanQuery = new KategoriJabatanQuery(Db);
            var now = DateTime.Now;
            if (pk > 0)
            {
                SOWDTO sow = sowQuery.GetByPrimaryKey(pk);
                if (sow != null)
                {
                    var unOrderedassigns = new SOWAssignQuery(Db).GetWithSP_BySOW_FK(pk);

                    var orderedAssigns = new List<SOWAssignDTO>();
                    var teamLead = unOrderedassigns.FirstOrDefault(x => x.KategoriJabatan_FK == 1);
                    var rno = unOrderedassigns.FirstOrDefault(x => x.KategoriJabatan_FK == 6);
                    rno.KategoriJabatanTitle = "RNO";
                    var rf = unOrderedassigns.FirstOrDefault(x => x.KategoriJabatan_FK == 5);
                    var dt = unOrderedassigns.FirstOrDefault(x => x.KategoriJabatan_FK == 2);
                    var rigger = unOrderedassigns.FirstOrDefault(x => x.KategoriJabatan_FK == 3);

                    orderedAssigns.Add(teamLead);
                    orderedAssigns.Add(rno);
                    orderedAssigns.Add(rf);
                    orderedAssigns.Add(dt);
                    orderedAssigns.Add(rigger);

                    sow.SOWAssigns = orderedAssigns;
                }
                return sow;
            }
            SOWDTO sowDTO = new SOWDTO()
            {
                TglMulai = now,
                //TglSelesai = now
            };

            List<SOWAssignDTO> sowAssigns = new List<SOWAssignDTO>();

            //Team leader
            sowAssigns.Add(new SOWAssignDTO()
            {
                SOWAssign_PK = 0,
                SOW_FK = sowDTO.SOW_PK,
                SOWName = sowDTO.SOWName,
                KategoriJabatanTitle = jabatanQuery.GetByPrimaryKey(1).Title,
                KategoriJabatan_FK = 1,
                User_FK = 0,
                UserName = "",
                TglMulai = now,
            });

            //RNO
            sowAssigns.Add(new SOWAssignDTO()
            {
                SOWAssign_PK = 0,
                SOW_FK = sowDTO.SOW_PK,
                SOWName = sowDTO.SOWName,
                KategoriJabatanTitle = "RNO",//jabatanQuery.GetByPrimaryKey(6).Title,
                KategoriJabatan_FK = 6,
                User_FK = 0,
                UserName = "",
                TglMulai = now,
            });

            //RF
            sowAssigns.Add(new SOWAssignDTO()
            {
                SOWAssign_PK = 0,
                SOW_FK = sowDTO.SOW_PK,
                SOWName = sowDTO.SOWName,
                KategoriJabatanTitle = jabatanQuery.GetByPrimaryKey(5).Title,
                KategoriJabatan_FK = 5,
                User_FK = 0,
                UserName = "",
                TglMulai = now,
            });

            //DT
            sowAssigns.Add(new SOWAssignDTO()
            {
                SOWAssign_PK = 0,
                SOW_FK = sowDTO.SOW_PK,
                SOWName = sowDTO.SOWName,
                KategoriJabatanTitle = jabatanQuery.GetByPrimaryKey(2).Title,
                KategoriJabatan_FK = 2,
                User_FK = 0,
                UserName = "",
                TglMulai = now,
            });

            //Rigger
            sowAssigns.Add(new SOWAssignDTO()
            {
                SOWAssign_PK = 0,
                SOW_FK = sowDTO.SOW_PK,
                SOWName = sowDTO.SOWName,
                KategoriJabatanTitle = jabatanQuery.GetByPrimaryKey(3).Title,
                KategoriJabatan_FK = 3,
                User_FK = 0,
                UserName = "",
                TglMulai = now,
            });


            sowDTO.SOWAssigns = sowAssigns;

            return sowDTO;
        }


        private SOWEntryModel GetCreateStateModel()
        {
            SOWEntryFormData formData = CreateFormData(null);

            List<SOWNameDTO> sowname = new SOWQuery(this.Db).GetSOWName().ToList();
            foreach (var name in sowname)
            {
                formData.sownames.Add(name);
            }
            List<Control> formControls = CreateFormControls(0);
            var model = CreateModel(0);
            return new SOWEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = model
            };
        }

        private SOWEntryModel GetUpdateStateModel(int sowPK)
        {
            List<Control> formControls = CreateFormControls(sowPK);
            SOWDTO sowDTO = CreateModel(sowPK);

            if (sowDTO == null)
                throw new KairosException($"Record with primary key '{sowDTO.SOW_PK}' is not found.");

            SOWEntryFormData formData = CreateFormData(sowDTO);

            return new SOWEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = sowDTO,
            };
        }

        public SOWEntryModel Get(int sowPK)
        {
            if (sowPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(sowPK);
        }
    }
}
