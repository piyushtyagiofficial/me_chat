import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import ChatMessage from './models/ChatMessage.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
// Middleware

app.use(cors({
    origin: 'https://me-chat-web-six.vercel.app/',
    methods: 'GET,POST',  
}));

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", async(req, res) => {
  res.json("Hii");
})
// Routes
app.get('/messages', async (req, res) => {
  try {
    const messages = await ChatMessage.find();
    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/messages', async (req, res) => {
  try {
    const { user, message } = req.body;

    if (!user || !message) {
      return res
        .status(400)
        .json({ error: 'User and message are required' });
    }

    const chatMessage = new ChatMessage({
      user,
      message,
    });

    await chatMessage.save();

    res.status(201).json(chatMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
