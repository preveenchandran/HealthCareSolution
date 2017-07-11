using HCDTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HCAPI.Controllers
{
    public class PatientController : ApiController
    {
        public IHttpActionResult GetAllPatient()
        {
            Patient patient = new Patient {
                 FirstName="Preveen",
                 LastName = "Chandran"
            };
            return Ok(patient);
        }
    }
}
