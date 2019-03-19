using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.Position.Queries;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.Position.EntryForm
{
    public class PositionEntryDataProvider : FactoryBase
    {
        private PositionQuery positionQuery;
        private AccessControl accessControl;

        public PositionEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, PositionQuery positionQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.positionQuery = positionQuery;
        }

        private List<Control> CreateFormControls(int positionPK)
        {
            PositionEntryControlBuilder controlBuilder = new PositionEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (positionPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private PositionEntryModel GetCreateStateModel()
        {
            PositionEntryFormData formData = new PositionEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            PositionDTO positionDTO = new PositionDTO();
            return new PositionEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new PositionDTO(),
            };
        }

        private PositionEntryModel GetUpdateStateModel(int positionPK)
        {
            PositionEntryFormData formData = new PositionEntryFormData();
            List<Control> formControls = CreateFormControls(positionPK);
            PositionDTO positionDTO = positionQuery.GetByPrimaryKey(positionPK);

            if (positionDTO == null)
                throw new KairosException($"Record with primary key '{positionDTO.Position_PK}' is not found.");

            return new PositionEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = positionDTO,
            };
        }

        public PositionEntryModel Get(int positionPK)
        {
            if (positionPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(positionPK);
        }
    }
}
