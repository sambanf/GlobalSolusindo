using GlobalSolusindo.DataAccess;
using GlobalSolusindo.Identity.User.Queries;
using Kairos.Data;
using Kairos.Imaging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Transactions;

namespace GlobalSolusindo.Identity.User.DML
{
    public class UserImportDTO
    {
        [JsonProperty("file")]
        public string File { get; set; }
    }

    public class UserImportCsv
    {
        private tblM_User user;
        private GlobalSolusindoDb db;
        public UserImportCsv(GlobalSolusindoDb db, tblM_User user)
        {
            this.db = db;
            this.user = user;
        }

        public List<SaveResult<UserDTO>> Import(UserImportDTO userImportDTO)
        {
            using (var userCreateHandler = new UserCreateHandler(db, user, new UserValidator(), new UserFactory(db, user), new UserQuery(db), new AccessControl(user)))
            {
                using (var transaction = new TransactionScope())
                {
                    List<SaveResult<UserDTO>> saveResults = new List<SaveResult<UserDTO>>();

                    var stream = new CSVConverter().GetStreamFromBase64(userImportDTO.File);
                    using (var reader = new StreamReader(stream))
                    {
                        int current = 0;
                        var jabatanQuery = new KategoriJabatan.Queries.KategoriJabatanQuery(db);
                        while (!reader.EndOfStream)
                        { 
                            var line = reader.ReadLine();
                            if (current == 0)
                            {
                                current++;
                                continue;
                            }
                            var values = line.Split(';');
                            UserDTO userDTO = CreateUserDTO(jabatanQuery, values);

                            var saveResult = userCreateHandler.Save(userDTO: userDTO, dateStamp: DateTime.UtcNow);
                            saveResults.Add(new SaveResult<UserDTO>()
                            {
                                Message = saveResult.Message,
                                Model = saveResult.Model?.Model,
                                Success = saveResult.Success,
                                ValidationResult = saveResult.ValidationResult
                            });
                            current++;
                        }
                    }
                    transaction.Complete();

                    return saveResults;
                }
            }
        }

        private static UserDTO CreateUserDTO(KategoriJabatan.Queries.KategoriJabatanQuery jabatanQuery, string[] values)
        {
            var name = values[0];
            var positionName = values[1];
            var positionId = jabatanQuery.GetByTitle(positionName).KategoriJabatan_PK;
            var phoneNumber = values[2];
            var email = values[3];
            var ktp = values[4];
            var username = values[5];
            var password = values[6];
            var address = values[7];

            var userDTO = new UserDTO()
            {
                Name = name,
                KategoriJabatan_FK = positionId,
                NoHP = phoneNumber,
                Email = email,
                NoKTP = ktp,
                Username = username,
                UserCode = username,
                Password = password,
                Address = address
            };
            return userDTO;
        }
    }
}
