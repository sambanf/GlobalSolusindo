using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Data;
using System;

namespace GlobalSolusindo.Identity.MappingUserToAuthParam
{
    public class MappingUserToAuthParamFactory : FactoryBase
    {
        public MappingUserToAuthParamFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_MappingUserToAuthParam CreateFromDTO(MappingUserToAuthParamDTO mappingUserToAuthParamDTO, DateTime dateStamp)
        {
            if (mappingUserToAuthParamDTO == null)
                throw new ArgumentNullException("MappingUserToAuthParam model is null.");
            mappingUserToAuthParamDTO.Status_FK = (int)RecordStatus.Active;
            mappingUserToAuthParamDTO.CreatedBy = User.Username;
            mappingUserToAuthParamDTO.CreatedDate = dateStamp;
            mappingUserToAuthParamDTO.UpdatedBy = User.Username;
            mappingUserToAuthParamDTO.UpdatedDate = dateStamp;
            tblM_MappingUserToAuthParam mappingUserToAuthParam = mappingUserToAuthParamDTO.ToObject<tblM_MappingUserToAuthParam>();
            return mappingUserToAuthParam;
        }

        public tblM_MappingUserToAuthParam CreateFromDbAndUpdateFromDTO(MappingUserToAuthParamDTO mappingUserToAuthParamDTO, DateTime dateStamp)
        {
            tblM_MappingUserToAuthParam mappingUserToAuthParam;

            if (mappingUserToAuthParamDTO == null)
                throw new ArgumentNullException("MappingUserToAuthParam model is null.");
            mappingUserToAuthParam = Db.tblM_MappingUserToAuthParam.Find(mappingUserToAuthParamDTO.User_PK, mappingUserToAuthParamDTO.AuthParam_PK);
            if (mappingUserToAuthParam == null)
                throw new KairosException($"Record with key '{mappingUserToAuthParamDTO.User_PK}' and '{mappingUserToAuthParamDTO.AuthParam_PK}' is not found.");

            mappingUserToAuthParam.UpdateValueFrom(mappingUserToAuthParamDTO, "Status_FK");
            mappingUserToAuthParamDTO.CreatedBy = mappingUserToAuthParam.CreatedBy;
            mappingUserToAuthParamDTO.CreatedDate = mappingUserToAuthParam.CreatedDate;
            mappingUserToAuthParam.UpdatedBy = mappingUserToAuthParamDTO.UpdatedBy = User.Username;
            mappingUserToAuthParam.UpdatedDate = mappingUserToAuthParamDTO.UpdatedDate = dateStamp;

            return mappingUserToAuthParam;
        }
    }
}
