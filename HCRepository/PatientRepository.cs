using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HCContract;

namespace HCRepository
{
    public class PatientRepository
    {
        HealthCareEntities healthCareDbContext = new HealthCareEntities();
        public PatientRepository()
        {
        }

        public IQueryable<HCContract.Patient> GetAllPatient()
        {
                return from pat in healthCareDbContext.Patients
                       select new HCContract.Patient {FirstName=pat.FirstName, LastName=pat.LastName };
        }

        public bool AddPatient(HCContract.Patient patient)
        {
            Patient pat = new Patient {
                FirstName = patient.FirstName,
                LastName=patient.LastName
            };
            using (var healthCareDbContext = new HealthCareEntities())
            {
                healthCareDbContext.Patients.Add(pat);
                healthCareDbContext.SaveChanges();
            }
            return true;
        }
       
    }
}
