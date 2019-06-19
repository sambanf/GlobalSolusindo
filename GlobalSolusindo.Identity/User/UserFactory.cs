using GlobalSolusindo.Base;
using GlobalSolusindo.DataAccess;
using Kairos;
using Kairos.Cryptography;
using Kairos.Data;
using System;
using System.Linq;

namespace GlobalSolusindo.Identity.User
{ 
    //if someday hashing implementation will be changed.
    public interface IPasswordHasher
    {
        string Hash(string password);
    }

    public class MD5PasswordHasher : IPasswordHasher
    {
        public string Hash(string password)
        {
            return MD5Encryptor.Encrypt(password);
        }
    }

    public class UserFactory : FactoryBase
    {
        public UserFactory(GlobalSolusindoDb db, tblM_User user) : base(db, user)
        {
        }

        public tblM_User CreateFromDTO(UserDTO userDTO, DateTime dateStamp)
        {
            if (userDTO == null)
                throw new ArgumentNullException("User model is null.");
            userDTO.Status_FK = (int)RecordStatus.Active;
            userDTO.CreatedBy = User.Username;
            userDTO.CreatedDate = dateStamp;
            userDTO.UpdatedBy = User.Username;
            userDTO.UpdatedDate = dateStamp;

            tblM_User user = userDTO.ToObject<tblM_User>();

            user.Password = new MD5PasswordHasher().Hash(user.Password);

            return user;
        }

        public tblM_User CreateFromDbAndUpdateFromDTO(UserDTO userDTO, DateTime dateStamp)
        {
            tblM_User user;

            if (userDTO == null)
                throw new ArgumentNullException("User model is null.");
            user = Db.tblM_User.Find(userDTO.User_PK);
            if (user == null)
                throw new KairosException($"Record with key '{userDTO.User_PK}' is not found.");

            user.UpdateValueFrom(userDTO, "User_PK", "Password");

            if (!string.IsNullOrEmpty(userDTO.Password))
            {
                user.Password = new MD5PasswordHasher().Hash(userDTO.Password);
            }
            else
            {
                userDTO.Password = "Not changed"; //Skip validator
            }

            userDTO.CreatedBy = user.CreatedBy;
            userDTO.CreatedDate = user.CreatedDate;
            user.UpdatedBy = userDTO.UpdatedBy = User.Username;
            user.UpdatedDate = userDTO.UpdatedDate = dateStamp;

            return user;
        }
    }
}
