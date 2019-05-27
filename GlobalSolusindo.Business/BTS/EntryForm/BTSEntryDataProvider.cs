using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Area;
using GlobalSolusindo.Business.BTS.Queries;
using GlobalSolusindo.Business.BTSStatus.Queries;
using GlobalSolusindo.Business.Cabang.Queries;
using GlobalSolusindo.Business.Kota.Queries;
using GlobalSolusindo.Business.Operator.Queries;
using GlobalSolusindo.Business.Technology.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;
using System.Linq;

namespace GlobalSolusindo.Business.BTS.EntryForm
{
    public class BTSEntryDataProvider : FactoryBase
    {
        private BTSQuery btsQuery;
        private AccessControl accessControl;

        public BTSEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, BTSQuery btsQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.btsQuery = btsQuery;
        }

        private List<Control> CreateFormControls(int btsPK)
        {
            BTSEntryControlBuilder controlBuilder = new BTSEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (btsPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private BTSEntryFormData CreateFormData(BTSDTO btsDTO)
        {
            if (btsDTO == null)
                return new BTSEntryFormData();

            BTSEntryFormData formData = new BTSEntryFormData();
            formData.Technologies = new TechnologyQuery(Db).GetQuery().ToList();
            var _operator = new OperatorQuery(this.Db).GetByPrimaryKey(btsDTO.Operator_FK);
            if (_operator != null)
                formData.Operators.Add(_operator);

            var btsStatusFK = btsDTO.StatusBTS_FK != null ? btsDTO.StatusBTS_FK.Value : 0;
            //var btsStatus = new BTSStatusQuery(this.Db).GetByPrimaryKey(btsStatusFK);
            // var btsStatus = new BTSStatusQuery(this.Db).GetByPrimaryKey(btsStatusFK);
            formData.BTSStatuses = new BTSStatusQuery(this.Db).GetQuery().ToList();


            var area = new AreaQuery(this.Db).GetByPrimaryKey(btsDTO.Area_FK);
            if (area != null)
                formData.Areas.Add(area);

            return formData;
        }

        private BTSEntryModel GetCreateStateModel()
        {
            List<Control> formControls = CreateFormControls(0);
            BTSDTO btsDTO = new BTSDTO();

            btsDTO.StatusBTS_FK = 1;//default aktif

            BTSEntryFormData formData = new BTSEntryFormData();
            formData.Technologies = new TechnologyQuery(Db).GetQuery().ToList();
            formData.BTSStatuses = new BTSStatusQuery(this.Db).GetQuery().ToList();
            return new BTSEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new BTSDTO(),
            };
        }

        private BTSEntryModel GetUpdateStateModel(int btsPK)
        {
            List<Control> formControls = CreateFormControls(btsPK);
            BTSDTO btsDTO = btsQuery.GetByPrimaryKey(btsPK);

            if (btsDTO == null)
                throw new KairosException($"Record with primary key '{btsDTO.BTS_PK}' is not found.");

            BTSEntryFormData formData = CreateFormData(btsDTO);

            return new BTSEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = btsDTO,
            };
        }

        public BTSEntryModel Get(int btsPK)
        {
            if (btsPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(btsPK);
        }
    }
}
