using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockHut.Models;

namespace StockHut.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SignInController : Controller
    {

        private readonly StockHutContext db = new StockHutContext();

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<IEnumerable<SignIn>> Get()
        {
            return db.SignIn.ToList();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public ActionResult<SignIn> Get(int id)
        {
            return db.SignIn.Where(user => user.Id == id).FirstOrDefault();
        }

        // POST api/<controller>
        [HttpPost]
        public ActionResult<SignIn> Post([FromBody] SignIn user)
        {
                db.SignIn.Add(user);
                db.SaveChanges();
                return user;
            

        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
