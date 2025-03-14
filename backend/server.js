// Import required modules
const express = require("express");
const dotenv = require("dotenv");


// Load environment variables from .env file
dotenv.config();


// Create an Express app
const app = express();


// Middleware to parse JSON data
app.use(express.json());


// Define a simple route
app.get("/", (req, res) => {
  res.send("GLC E-Learning Platform API is Running...");
});



const mongoose = require('mongoose');

// MongoDB Connection URL (Corrected with URL encoding)
const MONGO_URI = "mongodb+srv://iceking:Zephyr%40651818@icekingscluster.dsucy.mongodb.net/glc_db?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB Atlas successfully!"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));




// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




