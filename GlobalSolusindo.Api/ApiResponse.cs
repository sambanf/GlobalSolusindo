using Newtonsoft.Json;
using System.Net;

namespace GlobalSolusindo.Api
{
    public enum ServiceStatusCode
    {
        OK = HttpStatusCode.OK,
        Unauthorized = HttpStatusCode.Unauthorized,
        ValidationException = 551,
        InvalidRequestBodyException = 552,
        UnhandledException = 553,
        ValidationError = 554,
        NullRequestBodyException = 555,
        PendException = 556,
        MissingParameterException = 557
    }

    public class ResponseBody
    {
        [JsonProperty("success")]
        public bool Success { get; set; }

        [JsonProperty("status")]
        public ServiceStatusCode Status { get; set; }

        [JsonProperty("message")]
        public string Message { get; set; }

        [JsonProperty("data")]
        public object Data { get; set; }
    }

    public class ErrorResponse : ResponseBody
    {
        public ErrorResponse(ServiceStatusCode status, object data, string message = "Error")
        {
            Success = false;
            Status = status;
            Message = message;
            Data = data;
        }
    }

    public class SuccessResponse : ResponseBody
    {
        public SuccessResponse(object data, string message = "Success")
        {
            Success = true;
            Status = ServiceStatusCode.OK;
            Message = message;
            Data = data;
        }
    }
}