import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ITokenStats {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  estimatedCost: number;
}

export interface IChatSession extends Document {
  userId: string;
  title: string;
  messages: IMessage[];
  stats: ITokenStats;
  createdAt: Date;
  updatedAt: Date;
}

const messageSchema = new Schema<IMessage>({
  id: String,
  role: {
    type: String,
    enum: ['user', 'assistant'],
    required: true,
  },
  content: String,
  timestamp: Date,
});

const tokenStatsSchema = new Schema<ITokenStats>({
  promptTokens: { type: Number, default: 0 },
  completionTokens: { type: Number, default: 0 },
  totalTokens: { type: Number, default: 0 },
  estimatedCost: { type: Number, default: 0 },
});

const chatSessionSchema = new Schema<IChatSession>(
  {
    userId: {
      type: String,
      required: true,
      index: true,
    },
    title: {
      type: String,
      default: 'New Chat',
    },
    messages: [messageSchema],
    stats: tokenStatsSchema,
  },
  { timestamps: true }
);

export default mongoose.models.ChatSession ||
  mongoose.model<IChatSession>('ChatSession', chatSessionSchema);
