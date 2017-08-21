using HCRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
            return patientRepository.GetAllPatient().ToList();
        }
    }
}
