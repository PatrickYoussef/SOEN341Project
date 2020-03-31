﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StockHut.Interfaces;
using StockHut.Models;

namespace StockHut.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        readonly ITokenCreator TokenCreator;
        private readonly StockHutContext db = new StockHutContext();

        public UsersController(ITokenCreator tokenCreator)
        {
            TokenCreator = tokenCreator;
        }

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
            string feedId = Guid.NewGuid().ToString("N");
            user.FeedID = feedId;
            string token = TokenCreator.CreateToken(user);
            user.Token = token;
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
