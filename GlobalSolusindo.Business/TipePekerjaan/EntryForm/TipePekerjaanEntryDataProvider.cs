using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using Kairos;
using Kairos.UI;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.TipePekerjaan.EntryForm
{
    public class TipePekerjaanEntryModel
    {
        [JsonProperty("formData")]
        public TipePekerjaanEntryFormData FormData { get; set; } = new TipePekerjaanEntryFormData();

        [JsonProperty("formControls")]
        public List<Control> FormControls { get; set; }

        [JsonProperty("model")]
        public TipePekerjaanDTO Model { get; set; }
    }

    public class TipePekerjaanEntryFormData
    {
    }

    public class TipePekerjaanEntryDataProvider : FactoryBase
    {
        private TipePekerjaanQuery tipePekerjaanQuery;
        private AccessControl accessControl;

        public TipePekerjaanEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, TipePekerjaanQuery tipePekerjaanQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.tipePekerjaanQuery = tipePekerjaanQuery;
        }

        private List<Control> CreateFormControls(int tipePekerjaanPK)
        {
            TipePekerjaanEntryControlBuilder controlBuilder = new TipePekerjaanEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (tipePekerjaanPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private TipePekerjaanEntryModel GetCreateStateModel()
        {
            TipePekerjaanEntryFormData formData = new TipePekerjaanEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            TipePekerjaanDTO tipePekerjaanDTO = new TipePekerjaanDTO();
            return new TipePekerjaanEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = tipePekerjaanDTO,
            };
        }

        private TipePekerjaanEntryModel GetUpdateStateModel(int tipePekerjaanPK)
        {
            TipePekerjaanEntryFormData formData = new TipePekerjaanEntryFormData();
            List<Control> formControls = CreateFormControls(tipePekerjaanPK);
            TipePekerjaanDTO tipePekerjaanDTO = tipePekerjaanQuery.GetByPrimaryKey(tipePekerjaanPK);

            if (tipePekerjaanDTO == null)
                throw new KairosException($"Record with primary key '{tipePekerjaanDTO.TipePekerjaan_PK}' is not found.");

            return new TipePekerjaanEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = tipePekerjaanDTO,
            };
        }

        public TipePekerjaanEntryModel Get(int tipePekerjaanPK)
        {
            if (tipePekerjaanPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(tipePekerjaanPK);
        }
    }
}
