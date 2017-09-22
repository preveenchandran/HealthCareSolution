using HCDTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HCManager;

namespace HCAPI.Controllers
{
    public class PatientController : ApiController
    {
        PatientManager mgrPatient = new PatientManager();
        public IHttpActionResult GetAllPatient()
        {
            List<HCContract.Patient> lstPatient = new List<HCContract.Patient>();
            lstPatient = mgrPatient.GetAllPatient();
            return Ok(lstPatient);
        }

        public IHttpActionResult GetPatient(int id)
        {
            HCContract.Patient patient = new HCContract.Patient();
            patient = mgrPatient.GetPatient(id);
            return Ok(patient);
        }

        public IHttpActionResult PostPatient(HCContract.Patient patient)
        {
            mgrPatient.AddPatient(patient);
            return Ok();
        }

        public IHttpActionResult PutPatient(int id, HCContract.Patient patient)
        {
            mgrPatient.UpdatePatient(id, patient);
            return Ok();
        }

        public IHttpActionResult DeletePatient(int id)
        {
            mgrPatient.DeletePatient(id);
            return Ok();
        }
    }
}
