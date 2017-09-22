using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HCContract;
using System.Data.Entity;

namespace HCRepository
{
    public class PatientRepository
    {
        HealthCareEntities healthCareDbContext;
        public PatientRepository()
        {
        }

        public IQueryable<HCContract.Patient> GetAllPatient()
        {
            healthCareDbContext = new HealthCareEntities();
            return from pat in healthCareDbContext.Patients
                   select new HCContract.Patient
                   {
                       PatientId = pat.id,
                       FirstName = pat.FirstName,
                       LastName = pat.LastName
                   };
        }

        public bool AddPatient(HCContract.Patient patient)
        {
            Patient pat = new Patient
            {
                FirstName = patient.FirstName,
                LastName = patient.LastName
            };
            using (var healthCareDbContext = new HealthCareEntities())
            {
                healthCareDbContext.Patients.Add(pat);
                healthCareDbContext.SaveChanges();
                return true;
            }

        }

        public bool UpdatePatient(int patientId, HCContract.Patient patient)
        {
            using (var healthCareDbContext = new HealthCareEntities())
            {
                Patient updatePatient = (from pat in healthCareDbContext.Patients
                                        where pat.id == patientId
                                        select pat).FirstOrDefault();
                updatePatient.FirstName = patient.FirstName;
                updatePatient.LastName = patient.LastName;
                healthCareDbContext.SaveChanges();
                return true;
            }
            
        }

        /// <summary>
        /// Delete the Patient 
        /// </summary>
        /// <param name="patientId"></param>
        /// <returns>Success/Failure</returns>

        public bool DeletePatient(int patientId)
        {
            using (healthCareDbContext = new HealthCareEntities())
            {
                Patient patDelete = new Patient
                {
                    id = patientId
                };
                //healthCareDbContext.Patients.Remove(patDelete);
                //healthCareDbContext.SaveChanges();

                // Above two lines will not work as the epatDelete is noot attached

                healthCareDbContext.Entry(patDelete).State = EntityState.Deleted;
                healthCareDbContext.SaveChanges();
                return true;
            }
        }

    }
}
