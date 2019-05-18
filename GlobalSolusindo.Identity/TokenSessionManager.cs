using GlobalSolusindo.Identity.User;
using System;
using System.Collections.Generic;

namespace GlobalSolusindo.Identity
{
    public class TokenSession
    {
        public DateTime LastActivity { get; set; }

        public UserDTO User { get; set; }
    }

    public class TokenSessionManager
    {
        private static readonly object padlock = new object();
        private const double timeOutLimit = 30;

        private static Dictionary<string, TokenSession> _sessions;

        public static Dictionary<string, TokenSession> Sessions
        {
            get
            {
                lock (padlock)
                {
                    if (_sessions == null)
                    {
                        _sessions = new Dictionary<string, TokenSession>();
                    }
                    else
                    { 
                        ClearExpiredToken();
                    }


                    return _sessions;
                }
            }
        }

        private static void ClearExpiredToken()
        {
            if (_sessions == null)
                return;
            var expiredTokens = new List<string>();
            var now = DateTime.UtcNow;
            foreach (var session in _sessions)
            {
                var lastActivity = session.Value.LastActivity;
                double duration = now.Subtract(lastActivity).Minutes;

                if (duration > timeOutLimit)
                {
                    expiredTokens.Add(session.Key);
                }
            }

            foreach (var key in expiredTokens)
            {
                _sessions.Remove(key);
            }
        }

        public static void RemoveUser(UserDTO user)
        {
            var keysToBeRemoved = new List<string>();

            foreach (var session in Sessions)
            {
                if (session.Value.User.Username == user.Username)
                    keysToBeRemoved.Add(session.Key);
            }

            foreach (var key in keysToBeRemoved)
            {
                Sessions.Remove(key);
            }
        }

        public static void Add(string token, UserDTO user)
        {
            var now = DateTime.UtcNow;

            TokenSession newSession = new TokenSession()
            {
                LastActivity = now,
                User = user
            };

            Sessions.Add(token, newSession);
        }

        public static void AddAndReplaceUser(string token, UserDTO user)
        {
            RemoveUser(user);
            Add(token, user);
        }

        public static void Remove(string token)
        {
            Sessions.Remove(token);
        }

        public static UserDTO GetUser(string token)
        {
            if (token == null)
                return null;

            TokenSession session;
            var sessionIsExist = Sessions.TryGetValue(token, out session);
            if (sessionIsExist)
            {
                UpdateLastActivity(token);
                return session.User;
            }
            return null;
        }

        private static void UpdateLastActivity(string token)
        {
            var now = DateTime.UtcNow;
            Sessions[token].LastActivity = now;
        }
    }
}
