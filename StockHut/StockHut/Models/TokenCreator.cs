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

        public string CreateToken(int id)//*******add in tbale an id section :D
        {
            StreamClient client = ConnectStream();
            string token = client.CreateUserSessionToken(id+"");
            var userFeed1 = client.Feed("user", (id + ""));
            return token;
        }
    }
}
