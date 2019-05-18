using GlobalSolusindo.Base;
using GlobalSolusindo.Business.BTSTechnology.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Business.BTSTechnology.EntryForm
{
    public class BTSTechnologyEntryDataProvider : FactoryBase
    {
        private BTSTechnologyQuery btsTechnologyQuery;
        private AccessControl accessControl;

        public BTSTechnologyEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, BTSTechnologyQuery btsTechnologyQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.btsTechnologyQuery = btsTechnologyQuery;
        }

        private List<Control> CreateFormControls(int btsTechnologyPK)
        {
            BTSTechnologyEntryControlBuilder controlBuilder = new BTSTechnologyEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (btsTechnologyPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private BTSTechnologyEntryModel GetCreateStateModel()
        {
            BTSTechnologyEntryFormData formData = new BTSTechnologyEntryFormData();
        
            List<Control> formControls = CreateFormControls(0);
            BTSTechnologyDTO btsTechnologyDTO = new BTSTechnologyDTO();
            return new BTSTechnologyEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = btsTechnologyDTO,
            };
        }

        private BTSTechnologyEntryModel GetUpdateStateModel(int btsTechnologyPK)
        {
            BTSTechnologyEntryFormData formData = new BTSTechnologyEntryFormData();
          
            List<Control> formControls = CreateFormControls(btsTechnologyPK);
            BTSTechnologyDTO btsTechnologyDTO = btsTechnologyQuery.GetByPrimaryKey(btsTechnologyPK);

            if (btsTechnologyDTO == null)
                throw new KairosException($"Record with primary key '{btsTechnologyDTO.BTSTechnology_PK}' is not found.");

            return new BTSTechnologyEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = btsTechnologyDTO,
            };
        }

        public BTSTechnologyEntryModel Get(int btsTechnologyPK)
        {
            if (btsTechnologyPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(btsTechnologyPK);
        }
    }
}
