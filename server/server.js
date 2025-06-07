const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
console.log("MONGO_URI from .env =", process.env.MONGO_URI);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('CampusPulse Backend is Running!');
});

// Connect to MongoDB
mongoose.connect('mongodb+srv://anuragchaudhary2301:anurag123@cluster0.u1pmejw.mongodb.net/campuspulse?retryWrites=true&w=majority')

.then(() => {
  console.log('✅ MongoDB Connected');
  // Start server inside .then block
  app.listen(process.env.PORT || 5000, () => {
    console.log(`🚀 Server running on http://localhost:${process.env.PORT || 5000}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});
