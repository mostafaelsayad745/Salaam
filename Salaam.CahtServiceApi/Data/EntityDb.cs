using Salaam.CahtServiceApi.Models;
using System.Collections.Concurrent;

namespace Salaam.CahtServiceApi.Data
{
    public class EntityDb
    {
        private readonly ConcurrentDictionary<string, UserConnection> _connections = 
            new ConcurrentDictionary<string, UserConnection>();
        public ConcurrentDictionary<string, UserConnection> Connections => _connections;
    }
}
