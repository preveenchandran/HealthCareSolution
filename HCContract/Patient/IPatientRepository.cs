using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HCContract
{
    public interface IPatientRepository
    {
        ICollection<Patient> GetAllPatient();
    }
}
