using HCRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HCContract;

namespace HCManager
{
    public class PatientManager
    {
        PatientRepository patientRepository = new PatientRepository();

        public bool AddPatient(HCContract.Patient patient)
        {
            return patientRepository.AddPatient(patient);
        }

        public List<HCContract.Patient> GetAllPatient()
        {
            return patientRepository.GetAllPatient().OrderBy(x => x.FirstName).ToList();
        }

        public HCContract.Patient GetPatient(int patientId)
        {
            return patientRepository.GetAllPatient().Where(x => x.PatientId == patientId).FirstOrDefault();
        }

        public bool DeletePatient(int patientId)
        {
            return patientRepository.DeletePatient(patientId);
        }

        public bool UpdatePatient(int patientId, HCContract.Patient patient)
        {
            return patientRepository.UpdatePatient(patientId, patient);
        }
    }
}
