using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Http.Cors;

namespace TestWebAPI.Controllers
{
    public class PdfController : ApiController
    {
        [HttpPost]
        [Route("api/FileUploading/UploadFile")]
        public async Task<string> UploadFile()
        {
            // To save in Server path
            //string path = WebConfigurationManager.AppSettings["ServerMapPath"];
            //var ctx = HttpContext.Current;
            //var root = ctx.Server.MapPath(path);

            // To Save in Network path
            string path = WebConfigurationManager.AppSettings["SharedServerMapPath"];
            var root = path;

            var provider = new MultipartFormDataStreamProvider(root);

            //var provider2 = new MultipartFileStreamProvider(root);

            try
            {
                await Request.Content.ReadAsMultipartAsync(provider);

                foreach(var file in provider.FileData)
                {
                    var name = file.Headers
                        .ContentDisposition
                        .FileName;

                    // remove double quotes from string
                    name = name.Trim('"');

                    var localFIleName = file.LocalFileName;

                    var filePath = Path.Combine(root, name);

                    // If File exists, remove file
                    if (File.Exists(filePath))
                    {
                        File.Delete(filePath);
                    }

                    // Replace file
                    File.Move(localFIleName, filePath);
                }

            }

            catch (Exception ex)
            {

                return $"Error: {ex.Message}";
            }

            return "File uploaded";
        }
    }
}
