using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.AuthParam
{
    public class AuthParamFactory : FactoryBase
    {
        public AuthParamFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_AuthParam CreateFromDTO(AuthParamDTO authParamDTO, DateTime dateStamp)
        {
            if (authParamDTO == null)
                throw new ArgumentNullException("AuthParam model is null.");
            authParamDTO.Status_FK = (int)RecordStatus.Active;
            authParamDTO.CreatedBy = User.Username;
            authParamDTO.CreatedDate = dateStamp;
            authParamDTO.UpdatedBy = User.Username;
            authParamDTO.UpdatedDate = dateStamp;
            tblM_AuthParam authParam = authParamDTO.ToObject<tblM_AuthParam>();
            return authParam;
        }

        public tblM_AuthParam CreateFromDbAndUpdateFromDTO(AuthParamDTO authParamDTO, DateTime dateStamp)
        {
            tblM_AuthParam authParam;

            if (authParamDTO == null)
                throw new ArgumentNullException("AuthParam model is null.");
            authParam = Db.tblM_AuthParam.Find(authParamDTO.AuthParam_PK);
            if (authParam == null)
                throw new KairosException($"Record with key '{authParamDTO.AuthParam_PK}' is not found.");

            authParam.UpdateValueFrom(authParamDTO, "AuthParam_PK", "Status_FK");
            authParamDTO.CreatedBy = authParam.CreatedBy;
            authParamDTO.CreatedDate = authParam.CreatedDate;
            authParam.UpdatedBy = authParamDTO.UpdatedBy = User.Username;
            authParam.UpdatedDate = authParamDTO.UpdatedDate = dateStamp;

            return authParam;
        }
    }
}
