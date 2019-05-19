using GlobalSolusindo.Base;
using GlobalSolusindo.Business.IzinCuti.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity;
using GlobalSolusindo.Identity.User.Queries;
using Kairos;
using Kairos.UI;
using System;
using System.Collections.Generic;

namespace GlobalSolusindo.Business.IzinCuti.EntryForm
{
    public class IzinCutiEntryDataProvider : FactoryBase
    {
        private IzinCutiQuery izinCutiQuery;
        private AccessControl accessControl;

        public IzinCutiEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, IzinCutiQuery izinCutiQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.izinCutiQuery = izinCutiQuery;
        }

        private List<Control> CreateFormControls(int izinCutiPK)
        {
            IzinCutiEntryControlBuilder controlBuilder = new IzinCutiEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (izinCutiPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private IzinCutiEntryModel GetCreateStateModel()
        {
            IzinCutiEntryFormData formData = new IzinCutiEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            var now = DateTime.Now;

            IzinCutiDTO izinCutiDTO = new IzinCutiDTO
            {
                User_FK = User.User_PK,
                TglMulai = now,
                TglSelesai = now.AddDays(7)
            };

            var user = new UserQuery(this.Db).GetByPrimaryKey(User.User_PK);
            if (user != null)
            {
                izinCutiDTO.UserIzinCutiJabatanTitle = user.KategoriJabatanTitle;
                izinCutiDTO.UserIzinCutiName = user.Name;
            }

            return new IzinCutiEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = izinCutiDTO,
            };
        }

        private IzinCutiEntryModel GetUpdateStateModel(int izinCutiPK)
        {
            IzinCutiEntryFormData formData = new IzinCutiEntryFormData();
            List<Control> formControls = CreateFormControls(izinCutiPK);
            IzinCutiDTO izinCutiDTO = izinCutiQuery.GetByPrimaryKey(izinCutiPK);

            if (izinCutiDTO == null)
                throw new KairosException($"Record with primary key '{izinCutiDTO.IzinCuti_PK}' is not found.");

            return new IzinCutiEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = izinCutiDTO,
            };
        }

        public IzinCutiEntryModel Get(int izinCutiPK)
        {
            if (izinCutiPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(izinCutiPK);
        }
    }
}
