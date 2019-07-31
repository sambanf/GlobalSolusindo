using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.CategoryContract.Queries;
using GlobalSolusindo.Identity.Gender.Queries;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.MaritalStatus.Queries;
using GlobalSolusindo.Identity.Religion.Queries;
using GlobalSolusindo.Identity.User.Queries;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity.User.EntryForm
{
    public class UserEntryDataProvider : FactoryBase
    {
        private UserQuery userQuery;
        private AccessControl accessControl;

        public UserEntryDataProvider(GlobalSolusindoDb db, tblM_User user, AccessControl accessControl, UserQuery userQuery) : base(db, user)
        {
            this.accessControl = accessControl;
            this.userQuery = userQuery;
        }

        private List<Control> CreateFormControls(int userPK)
        {
            UserEntryControlBuilder controlBuilder = new UserEntryControlBuilder(Db, User, accessControl);
            List<Control> formControls;
            if (userPK == 0)
                formControls = controlBuilder.GetControls(EntryFormState.Create);
            else
            {
                formControls = controlBuilder.GetControls(EntryFormState.Update);
            }

            return formControls;
        }

        private UserEntryModel GetCreateStateModel()
        {
            UserEntryFormData formData = new UserEntryFormData();
            List<Control> formControls = CreateFormControls(0);
            UserDTO userDTO = new UserDTO();
            return new UserEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = new UserDTO(),
            };
        }

        private UserEntryModel GetUpdateStateModel(int userPK)
        {
            UserEntryFormData formData = new UserEntryFormData();
            List<Control> formControls = CreateFormControls(userPK);
            UserDTO userDTO = userQuery.GetByPrimaryKey(userPK);

            if (userDTO == null)
                throw new KairosException($"Record with primary key '{userDTO.User_PK}' is not found.");

            var kategoriJabatan = new KategoriJabatanQuery(this.Db).GetByPrimaryKey(userDTO.KategoriJabatan_FK);
            if (kategoriJabatan != null)
            {
                formData.KategoriJabatans.Add(kategoriJabatan);
            }

            var project = new ProjectQuery(Db).GetById(userDTO.Project);
            if (project != null)
            {
                formData.Projects.Add(project);
            }

            if (userDTO.Religion.HasValue)
            {
                var religion = new ReligionQuery(this.Db).GetByPrimaryKey(userDTO.Religion.Value);
                if (religion != null)
                {
                    formData.Religions.Add(religion);
                }
            }


            if (userDTO.CategoryContract.HasValue)
            {
                var categoryContract = new CategoryContractQuery(this.Db).GetByPrimaryKey(userDTO.CategoryContract.Value);
                if (categoryContract != null)
                {
                    formData.CategoryContracts.Add(categoryContract);
                }
            }

            if (userDTO.Gender.HasValue)
            {
                var gender = new GenderQuery(this.Db).GetByPrimaryKey(userDTO.Gender.Value);
                if (gender != null)
                {
                    formData.Genders.Add(gender);
                }
            }

            if (userDTO.MaritalStatus.HasValue)
            {
                var maritalStatus = new MaritalStatusQuery(this.Db).GetByPrimaryKey(userDTO.MaritalStatus.Value);
                if (maritalStatus != null)
                {
                    formData.MaritalStatuses.Add(maritalStatus);
                }
            }

            return new UserEntryModel()
            {
                FormData = formData,
                FormControls = formControls,
                Model = userDTO,
            };
        }

        public UserEntryModel Get(int userPK)
        {
            if (userPK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(userPK);
        }
    }
}
