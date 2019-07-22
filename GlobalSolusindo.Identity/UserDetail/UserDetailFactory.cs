using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User;
using Kairos;
using Kairos.Data;
using Kairos.Imaging;
using System;

namespace GlobalSolusindo.Identity.UserDetail
{
    public class UserDetailFactory : FactoryBase
    {
        public UserDetailFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_UserDetail CreateFromDTO(UserDetailDTO userDetailDTO, DateTime dateStamp)
        {
            if (userDetailDTO == null)
                throw new ArgumentNullException("UserDetail model is null.");
            userDetailDTO.Status_FK = (int)RecordStatus.Active;
            userDetailDTO.CreatedBy = User.Username;
            userDetailDTO.CreatedDate = dateStamp;
            userDetailDTO.UpdatedBy = User.Username;
            userDetailDTO.UpdatedDate = dateStamp;

            tblM_UserDetail userDetail = userDetailDTO.ToObject<tblM_UserDetail>();

            if (!string.IsNullOrEmpty(userDetailDTO.FilePhotoInBase64))
                userDetail.FilePhoto = new WebImageConverter().GetBytesFromBase64(userDetailDTO.FilePhotoInBase64);

            return userDetail;
        }

        public tblM_UserDetail CreateFromUserDTO(UserDTO userDTO, DateTime dateStamp)
        {
            if (userDTO == null)
                throw new ArgumentNullException("User model is null.");
            userDTO.Status_FK = (int)RecordStatus.Active;
            userDTO.CreatedBy = User.Username;
            userDTO.CreatedDate = dateStamp;
            userDTO.UpdatedBy = User.Username;
            userDTO.UpdatedDate = dateStamp;
            tblM_UserDetail userDetail = userDTO.ToObject<tblM_UserDetail>();
            if (!string.IsNullOrEmpty(userDTO.FilePhotoInBase64))
                userDetail.FilePhoto = new WebImageConverter().GetBytesFromBase64(userDTO.FilePhotoInBase64);
            return userDetail;
        }

        public tblM_UserDetail CreateFromDbAndUpdateFromDTO(UserDetailDTO userDetailDTO, DateTime dateStamp)
        {
            tblM_UserDetail userDetail;

            if (userDetailDTO == null)
                throw new ArgumentNullException("UserDetail model is null.");
            userDetail = Db.tblM_UserDetail.Find(userDetailDTO.UserDetail_PK);
            if (userDetail == null)
                throw new KairosException($"Record with key '{userDetailDTO.UserDetail_PK}' is not found.");

            //userDetail.UpdateValueFrom(userDetailDTO, "UserDetail_PK", "Status_FK");
            userDetail.UpdateValueFrom(userDetailDTO, "UserDetail_PK");

            if (!string.IsNullOrEmpty(userDetailDTO.FilePhotoInBase64))
                userDetail.FilePhoto = new WebImageConverter().GetBytesFromBase64(userDetailDTO.FilePhotoInBase64);

            userDetailDTO.CreatedBy = userDetail.CreatedBy;
            userDetailDTO.CreatedDate = userDetail.CreatedDate;
            userDetail.Project = userDetailDTO.Project;
            userDetail.UpdatedBy = userDetailDTO.UpdatedBy = User.Username;
            userDetail.UpdatedDate = userDetailDTO.UpdatedDate = dateStamp;

            return userDetail;
        }
    }
}
