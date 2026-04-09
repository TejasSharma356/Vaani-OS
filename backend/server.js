const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;
let db;

if (!uri) {
  console.error("Please provide a valid MONGODB_URI in the .env file.");
} else {
  try {
    const client = new MongoClient(uri);

    client.connect()
      .then(() => {
        console.log('Connected successfully to MongoDB Atlas');
        db = client.db('vaani_os');
      })
      .catch(err => {
        console.error('MongoDB connection error:', err.message);
      });
  } catch (err) {
    console.error('MongoDB Init error:', err.message);
  }
}

// Routes
app.post('/api/feedback', async (req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ error: "Database connection not established." });
    }

    const { name, email, message, type } = req.body;
    
    // Basic validation
    if (!name || !message) {
      return res.status(400).json({ error: "Name and message are required." });
    }

    const feedbacksCollection = db.collection('feedbacks');
    
    const newFeedback = {
      name,
      email,
      message,
      type: type || 'feedback', // 'query', 'feedback', 'review'
      createdAt: new Date(),
    };

    const result = await feedbacksCollection.insertOne(newFeedback);
    res.status(201).json({ success: true, message: "Feedback submitted successfully!", id: result.insertedId });
  } catch (err) {
    console.error('Error submitting feedback:', err);
    res.status(500).json({ error: "Failed to submit feedback." });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
