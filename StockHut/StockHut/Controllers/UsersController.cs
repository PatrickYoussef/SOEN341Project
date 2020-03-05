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
    public class UsersController : Controller
    {

        private readonly StockHutContext db = new StockHutContext();

        // GET: api/<controller>
        [HttpGet]
        public ActionResult<IEnumerable<Users>> Get()
        {
            return db.Users.ToList();
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public ActionResult<Users> Get(int id)
        {
            return db.Users.Where(user => user.Id == id).FirstOrDefault();
        }

        // POST api/<controller>
        [HttpPost]
        public ActionResult<Users> Post([FromBody] Users user)
        {
                db.Users.Add(user);
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
