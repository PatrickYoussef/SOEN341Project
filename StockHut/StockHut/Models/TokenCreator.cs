using StockHut.Interfaces;
using Stream;
using System.Collections.Generic;


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
            string token = client.CreateUserSessionToken(user.FeedId);
            var userData = new Dictionary<string, object>()
            {
                {"name", user.Username },
                {"occupation", ""},
                {"gender", ""},
            };
            client.Users.Add(user.FeedId, userData, true);
            var userFeed1 = client.Feed("timeline", user.FeedId);
           
            return token;
        }

    }
}
