using StockHut.Interfaces;
using Stream;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace StockHut.Models
{
    public class TokenCreator : ITokenCreator
    {
        public StreamClient ConnectStream()
        {
            StreamClient client = new StreamClient("urzuchjm2333", "s5wct5ansnwt9d3yntnnf69t8ngy7ukcu7z8mtpdcpyhx5bnspskcs3dr53uefpb");
            return client;
        }

        public string CreateToken(Models.Users user)
        {
            StreamClient client = ConnectStream();
            string token = client.CreateUserSessionToken(user.FeedID);
            var userData = new Dictionary<string, object>()
            {
                {"name", user.Username },
                {"occupation", ""},
                {"gender", ""},
            };
            client.Users.Add(user.FeedID, userData, true);
            var userFeed1 = client.Feed("timeline", user.FeedID);
           
            return token;
        }

    }
}
