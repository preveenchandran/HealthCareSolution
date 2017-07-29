using HealthCareUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace HealthCareUI.Controllers
{
    public class PatientController : Controller
    {
        //Hosted web API REST Service base url  
        string Baseurl = "http://localhost:9000/";

        // GET: Patient
        public async Task<ActionResult> GetAllPatients()
        {
            List<Patient> allPatients = new List<Patient>();

            using (var client = new HttpClient())
            {
                //Passing service base url  
                client.BaseAddress = new Uri(Baseurl);

                client.DefaultRequestHeaders.Clear();
                //Define request data format  
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                //Sending request to find web api REST service resource GetAllEmployees using HttpClient  
                HttpResponseMessage respAllPatient = await client.GetAsync("api/Patient");

                //Checking the response is successful or not which is sent using HttpClient  
                if (respAllPatient.IsSuccessStatusCode)
                {
                    //Storing the response details recieved from web api   
                    var allPatientResponse = respAllPatient.Content.ReadAsStringAsync().Result;

                    //Deserializing the response recieved from web api and storing into the Employee list  
                    allPatients = Newtonsoft.Json.JsonConvert.DeserializeObject<List<Patient>>(allPatientResponse);

                }
                //returning the employee list to view  
                
            }
            return View(allPatients);
        }
    }
}