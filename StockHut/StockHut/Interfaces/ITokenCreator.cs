using Stream;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockHut.Interfaces
{
    public interface ITokenCreator
    {
        public StreamClient ConnectStream();
        public string CreateToken(Models.Users user);
        public void FollowUser(Models.Users user, IEnumerable<Models.Users> allUsers);
    }
}
