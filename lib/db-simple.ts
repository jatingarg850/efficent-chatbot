// Simple in-memory database for testing without MongoDB
// Replace with MongoDB when ready

interface User {
  _id: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ChatSession {
  _id: string;
  userId: string;
  title: string;
  messages: any[];
  stats: any;
  createdAt: Date;
  updatedAt: Date;
}

let users: Map<string, User> = new Map();
let sessions: Map<string, ChatSession> = new Map();

export const db = {
  users: {
    findOne: async (query: any) => {
      for (const user of users.values()) {
        if (query.email && user.email === query.email) return user;
        if (query._id && user._id === query._id) return user;
      }
      return null;
    },
    create: async (data: any) => {
      const id = Date.now().toString();
      const user: User = {
        _id: id,
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      users.set(id, user);
      return user;
    },
  },
  sessions: {
    find: async (query: any) => {
      const results: ChatSession[] = [];
      for (const session of sessions.values()) {
        if (query.userId && session.userId === query.userId) {
          results.push(session);
        }
      }
      return results.sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());
    },
    findOne: async (query: any) => {
      for (const session of sessions.values()) {
        if (query._id && session._id === query._id) {
          if (!query.userId || session.userId === query.userId) {
            return session;
          }
        }
      }
      return null;
    },
    create: async (data: any) => {
      const id = Date.now().toString();
      const session: ChatSession = {
        _id: id,
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      sessions.set(id, session);
      return session;
    },
    findOneAndDelete: async (query: any) => {
      for (const [key, session] of sessions.entries()) {
        if (query._id && session._id === query._id) {
          if (!query.userId || session.userId === query.userId) {
            sessions.delete(key);
            return session;
          }
        }
      }
      return null;
    },
    save: async (session: ChatSession) => {
      sessions.set(session._id, session);
      return session;
    },
  },
};

export async function connectDB() {
  return { connection: { readyState: 1 } };
}
