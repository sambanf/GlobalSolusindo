using GlobalSolusindo.Base;
using GlobalSolusindo.Business.Operator.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.Operator.EntryForm
{
    public class OperatorEntryDataProvider : FactoryBase
    {
        private OperatorQuery _operatorQuery;
        private AccessControl accessControl;

        public OperatorEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, OperatorQuery _operatorQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this._operatorQuery = _operatorQuery;
        }

        private List<Control> CreateFormControls(int _operatorPK)
        {
            OperatorEntryControlBuilder controlBuilder = new OperatorEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (_operatorPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private OperatorEntryModel GetCreateStateModel()
        {
            OperatorEntryFormData formData = new OperatorEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            OperatorDTO _operatorDTO = new OperatorDTO();
            return new OperatorEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new OperatorDTO(),
            };
        }

        private OperatorEntryModel GetUpdateStateModel(int _operatorPK)
        {
            OperatorEntryFormData formData = new OperatorEntryFormData();
            List<Control> formControls = CreateFormControls(_operatorPK);
            OperatorDTO _operatorDTO = _operatorQuery.GetByPrimaryKey(_operatorPK);

            if (_operatorDTO == null)
                throw new KairosException($"Record with primary key '{_operatorDTO.Operator_PK}' is not found.");

            return new OperatorEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = _operatorDTO,
            };
        }

        public OperatorEntryModel Get(int _operatorPK)
        {
            if (_operatorPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(_operatorPK);
        }
    }
}
