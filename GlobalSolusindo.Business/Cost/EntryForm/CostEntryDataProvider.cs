using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Cost.Queries;
using GlobalSolusindo.Business.CostKategori.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Cost.EntryForm
{
    public class CostEntryDataProvider : FactoryBase
    {
        private CostQuery costQuery;
        private AccessControl accessControl;

        public CostEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, CostQuery costQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.costQuery = costQuery;
        }

        private List<Control> CreateFormControls(int costPK)
        {
            CostEntryControlBuilder controlBuilder = new CostEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (costPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private CostEntryModel GetCreateStateModel()
        {
            CostEntryFormData formData = new CostEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            CostDTO costDTO = new CostDTO()
            {
                Tanggal = DateTime.Now
            };
            return new CostEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = costDTO,
            };
        }

        private CostEntryModel GetUpdateStateModel(int costPK)
        {
            CostEntryFormData formData = new CostEntryFormData();
            
            List<Control> formControls = CreateFormControls(costPK);
            CostDTO costDTO = costQuery.GetByPrimaryKey(costPK);

            if (costDTO == null)
                throw new KairosException($"Record with primary key '{costPK}' is not found.");

            var costKategori = new CostKategoriQuery(Db).GetByPrimaryKey(costDTO.KategoriCost_FK);
            if (costKategori != null)
            {
                formData.CostKategoris.Add(costKategori);
            }
            

            return new CostEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = costDTO,
            };
        }

        public CostEntryModel Get(int costPK)
        {
            if (costPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(costPK);
        }
    }
}
