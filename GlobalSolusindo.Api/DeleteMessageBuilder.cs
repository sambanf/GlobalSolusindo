using Kairos.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GlobalSolusindo.Api
{
    public class DeleteMessageBuilder
    {
        public static string BuildMessage<T>(List<DeleteResult<T>> deleteResults)
        {
            var deletedCount = 0;
            foreach (var result in deleteResults)
            {
                if (result.Success)
                {
                    deletedCount++; 
                }
            }
            return $"{deletedCount} record(s) deleted." ;
        } 
    }
}