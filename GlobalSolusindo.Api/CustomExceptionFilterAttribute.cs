using Kairos;
using System;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http.Filters;

namespace GlobalSolusindo.Api
{
    public class CustomExceptionFilterAttribute : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            var type = typeof(ResponseBody);
            var response = new ResponseBody();
            var jsonFormatter = new JsonMediaTypeFormatter();
            HttpResponseMessage httpResponseMessage = new HttpResponseMessage();

            if (context.Exception is AccessException)
            {
                var ex = context.Exception as AccessException;
                response = new ErrorResponse(ServiceStatusCode.Unauthorized, null, ex.Message);
                var content = new ObjectContent(type, response, jsonFormatter);

                context.Response = new HttpResponseMessage()
                {
                    Content = content
                };

                return;
            }

            if (context.Exception is ModelValidationException)
            {
                var ex = context.Exception as ModelValidationException;
                response = new ErrorResponse(ServiceStatusCode.ValidationError, ex.ValidationResult, ex.Message);
                var content = new ObjectContent(type, response, jsonFormatter);

                context.Response = new HttpResponseMessage()
                {
                    Content = content
                };

                return;
            }

            if (context.Exception is KairosException)
            {
                var ex = context.Exception as KairosException;
                response = new ErrorResponse(ServiceStatusCode.PendException, null, ex.Message);
                var content = new ObjectContent(type, response, jsonFormatter);

                context.Response = new HttpResponseMessage()
                {
                    Content = content
                };

                return;
            }

            if (context.Exception is DbEntityValidationException)
            {
                var ex = context.Exception as DbEntityValidationException;
                response = new ErrorResponse(ServiceStatusCode.UnhandledException, ex.EntityValidationErrors, ExMessageHelper.GetInnerestErrorMessage(ex));

                httpResponseMessage.Content = new ObjectContent(type, response, jsonFormatter);
                context.Response = httpResponseMessage;
                return;
            }

            if (context.Exception is DbUpdateException)
            {
                var ex = context.Exception as DbUpdateException;
                response = new ErrorResponse(ServiceStatusCode.UnhandledException, null, ExMessageHelper.GetInnerestErrorMessage(ex));

                httpResponseMessage.Content = new ObjectContent(type, response, jsonFormatter);
                context.Response = httpResponseMessage;
                return;
            }

            var unhandledException = context.Exception;
            //var otherResponse = new ErrorResponse(ServiceStatusCode.UnhandledException, null, "Something error occurs.");
            var otherResponse = new ErrorResponse(ServiceStatusCode.UnhandledException, null, unhandledException.Message);
            var otherContent = new ObjectContent(type, otherResponse, jsonFormatter);

            context.Response = new HttpResponseMessage()
            {
                Content = otherContent
            };
        }
    }

    public class ExMessageHelper
    {
        public static string GetInnerestErrorMessage(Exception exception)
        {
            var message = exception.Message;
            if (exception.InnerException != null)
                message = GetInnerestErrorMessage(exception.InnerException);

            return message;
        }
    }
}