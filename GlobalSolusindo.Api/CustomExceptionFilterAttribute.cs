using Kairos;
using System;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Validation;
using System.Data.SqlClient;
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
                var modelValidationResult = ex.ConvertToModelValidationResult();
                var errorMessage = modelValidationResult.Errors.Count > 0 ? modelValidationResult.Errors[0].Message : "Validation error occured.";

                response = new ErrorResponse(ServiceStatusCode.ValidationError, modelValidationResult, errorMessage);

                httpResponseMessage.Content = new ObjectContent(type, response, jsonFormatter);
                context.Response = httpResponseMessage;
                return;
            }

            if (context.Exception is DbUpdateException)
            {
                var ex = context.Exception as DbUpdateException;
                var innerEx = ExInnerExceptionHelper.GetInnerException(ex);

                if (innerEx is SqlException)
                {
                    var sqlEx = innerEx as SqlException;
                    if (sqlEx.Number == 2627 && sqlEx.Message.Contains("duplicate"))
                    {
                        response = new ErrorResponse(ServiceStatusCode.UnhandledException, null, "Duplicate entry.");

                        httpResponseMessage.Content = new ObjectContent(type, response, jsonFormatter);
                        context.Response = httpResponseMessage;
                        return; 
                    }
                }

                response = new ErrorResponse(ServiceStatusCode.UnhandledException, null, ExMessageHelper.GetInnerestErrorMessage(ex));

                httpResponseMessage.Content = new ObjectContent(type, response, jsonFormatter);
                context.Response = httpResponseMessage;
                return;
            }

            var innerException = ExInnerExceptionHelper.GetInnerException(context.Exception);

            var unhandledException = innerException;
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

    public class ExInnerExceptionHelper
    {
        public static Exception GetInnerException(Exception exception)
        {
            var ex = exception;
            if (exception.InnerException != null)
                ex = GetInnerException(exception.InnerException);

            return ex;
        }
    }
}