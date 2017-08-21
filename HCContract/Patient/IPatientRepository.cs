using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HCContract.Patient
{
    public interface IPatientRepository
    {
        ICollection<Patient> GetAllPatient();
    }
}
