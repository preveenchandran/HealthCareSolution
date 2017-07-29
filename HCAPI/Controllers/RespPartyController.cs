using HCDTO.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HCAPI.Controllers
{
    public class RespPartyController : ApiController
    {
        public IHttpActionResult GetAllRespParty()
        {
            List<RespParty> lstRespParty = new List<RespParty>();
            RespParty respParty = new RespParty
            {
                FirstName = "Preveen",
                LastName = "Chandran"
            };
            lstRespParty.Add(respParty);
            return Ok(lstRespParty);
        }
    }
}
