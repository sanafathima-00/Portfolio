const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// Define Contact Schema & Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model("Contact", contactSchema);

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // Use `true` for port 465, `false` for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Contact Form API Route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save message to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email (where you receive messages)
      subject: "New Contact Form Submission",
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error processing contact form:", error);
    res.status(500).json({ success: false, message: "An error occurred. Please try again." });
  }
});

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
