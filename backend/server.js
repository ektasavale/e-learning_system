// server.js

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to allow CORS (frontend-backend connection)
app.use(cors());
const courseRoutes = require("./routes/courseRoutes");
app.use("/api/courses", courseRoutes);
app.use(express.json());
// Basic route (for testing)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Connect to MongoDB
const connectDB = require("./config/db");
connectDB();

// Define PORT
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
