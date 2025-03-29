import React, { useState } from "react";
import "./../styles/Contact.css"; // Ensure CSS is properly linked

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          placeholder="Your Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          placeholder="Your Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message:</label>
        <textarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
