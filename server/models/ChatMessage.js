import mongoose from 'mongoose';

const meChatMessageSchema = new mongoose.Schema({
  user: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const ChatMessage = mongoose.model('meChatMessage', meChatMessageSchema);

export default ChatMessage;
