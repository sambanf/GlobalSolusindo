using GlobalSolusindo.Base;
using GlobalSolusindo.Business.PO;
using GlobalSolusindo.Business.PO.EntryForm;
using GlobalSolusindo.Business.PO.Queries;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.KategoriJabatan.Queries;
using GlobalSolusindo.Identity.User.Queries;
using Kairos;
using Kairos.UI;
using System.Collections.Generic;

namespace GlobalSolusindo.DataAccess.PO.EntryForm
{
    public class POEntryDataProvider : FactoryBase
    {
        private POQuery POQuery;

        public POEntryDataProvider(GlobalSolusindoDb db, tblM_User user,  POQuery pOQuery) : base(db, user)
        {
            this.POQuery = pOQuery;
        }

        
        private POEntryModel GetCreateStateModel()
        {
            POEntryFormData formData = new POEntryFormData();
            
            PODTO pODTO = new PODTO();
            return new POEntryModel()
            {
                FormData = formData,
                Model = new PODTO(),
            };
        }

        private POEntryModel GetUpdateStateModel(int po_PK)
        {
            POEntryFormData formData = new POEntryFormData();

            PODTO pODTO = POQuery.GetByPrimaryKey(po_PK);

            if (pODTO == null)
                throw new KairosException($"Record with primary key '{po_PK}' is not found.");

            

            return new POEntryModel()
            {
                FormData = formData,
                Model = pODTO
            };
        }

        public POEntryModel Get(int po_PK)
        {
            if (po_PK == 0)
            {
                return GetCreateStateModel();
            }
            return GetUpdateStateModel(po_PK);
        }
    }
}
