using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.Project.Queries;
using GlobalSolusindo.Business.SOW.Queries;
using GlobalSolusindo.Business.SOWAssign;
using GlobalSolusindo.Business.SOWAssign.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.User.Queries;
using Kairos;
using Kairos.UI;
using System;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Business.SOW.EntryForm
{
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

            return formData;
        }

        private SOWDTO CreateModel(int pk)
        {
            var now = DateTime.Now;
            if (pk > 0)
            {
                SOWDTO sow = sowQuery.GetByPrimaryKey(pk);
                sow.SOWAssigns = new SOWAssignQuery(Db).GetBySOW_FK(pk).ToList();
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
                KategoriJabatanTitle = "Team Leader",
                KategoriJabatan_FK = 1,
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
                KategoriJabatanTitle = "RF",
                KategoriJabatan_FK = 5,
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
                KategoriJabatanTitle = "RNO",
                KategoriJabatan_FK = 6,
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
                KategoriJabatanTitle = "Rigger",
                KategoriJabatan_FK = 3,
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
                KategoriJabatanTitle = "Drive Tester",
                KategoriJabatan_FK = 2,
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
