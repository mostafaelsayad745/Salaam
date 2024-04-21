using Microsoft.AspNetCore.SignalR;
using Salaam.CahtServiceApi.Data;
using Salaam.CahtServiceApi.Models;

namespace Salaam.CahtServiceApi.Hubs
{
    public class ChatHub : Hub
    {
        private readonly EntityDb _db;

        public ChatHub(EntityDb db)
        {
            _db = db;
        }
        public async Task JoinCaht(UserConnection userConnection)
        {
            await Clients.All.SendAsync("ReceiveMessage","Admin", $"{userConnection.UserName} has joined");
        }

        public async Task JoinSpecificChatRoom(UserConnection userConnection)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.ChatRoom);

            _db.Connections[Context.ConnectionId] = userConnection;
            await Clients.Group(userConnection.ChatRoom).
                SendAsync("JoinSpecificChatRoom", "Admin", $"{userConnection.UserName} has joined {userConnection.ChatRoom}");
        }


        public async Task SendMessage (string msg)
        {
            if(_db.Connections.TryGetValue(Context.ConnectionId, out var userConnection))
             { 
                await Clients.Group(userConnection.ChatRoom).SendAsync("ReceiveMessage", userConnection.UserName, msg);
             }
        }
    }
}
