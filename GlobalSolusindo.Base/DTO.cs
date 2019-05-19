using Newtonsoft.Json;
using System;

namespace GlobalSolusindo.Base
{
    public class DTO
    {
        [JsonProperty("createdBy")]
        public string CreatedBy { get; set; }
         
        [JsonProperty("createdDate")]
        public DateTime CreatedDate { get; set; }

        [JsonProperty("updatedBy")]
        public string UpdatedBy { get; set; } 

        [JsonProperty("updatedDate")]
        public DateTime UpdatedDate { get; set; }

        [JsonProperty("status_fk")]
        public int Status_FK { get; set; }

        ///// <summary>
        ///// Convert model to entity object 
        ///// </summary>
        ///// <param name="userId"></param>
        ///// <returns></returns>
        //public T ToEntity()
        //{
        //    return this.ToObject<T>();
        //}

        //public void SetCreateStamp(DateTime dateTime, User user)
        //{
        //    CreatedBy = user.Id;
        //    UpdatedBy = user.Id;
        //    CreatedDate = dateTime;
        //    UpdatedDate = dateTime;
        //}

        //public void SetUpdateStamp(DateTime dateTime, User user)
        //{
        //    UpdatedBy = user.Id;
        //    UpdatedDate = dateTime;
        //}
    }
}
