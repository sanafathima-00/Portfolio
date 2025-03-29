import "../styles/Projects.css";
import React from "react";
import newsImg from "./../assets/news.png";
import codequestImg from "./../assets/codequest.png";
import securityImg from "./../assets/security.png";
import addressImg from "./../assets/address.jpg";
import textutilsImg from "./../assets/textutils.png";
function Projects() {
  const projects = [
    {
      title: "News Today",
      description: `<span>What I built?</span>
      Developed News Today, a dynamic news application that fetches and displays top news articles from multiple sources. The application also integrates real-time weather updates and stock market data, providing users with a comprehensive news and financial overview.
      
      <span>How I built it?</span>
      ◈ Built using ReactJS for an interactive user interface.
      ◈ Implemented category filters for browsing news by topics.
      ◈ Designed an intuitive UI with a clean and responsive layout.
      ◈ Integrated REST APIs to fetch news, weather, and stock data.
      
      <span>Impact</span>
      Combined news, finance, and weather updates in one platform. Gained expertise in React, API handling, and real-time data fetching.`,
      image: newsImg,
    },
    {
      title: "CodeQuest",
      description: `<span>What I built?</span>
      Designed and developed CodeQuest, a Q&A platform for programmers to post questions, answer queries, and vote on responses. The platform fosters a collaborative knowledge-sharing system for developers.
      
      <span>How I built it?</span>
      ◈ Developed using ReactJS for the frontend.
      ◈ Used MongoDB for authentication.
      ◈ Implemented a Node.js & Express.js backend API.
      ◈ Added voting functionality for ranking the best answers.
      
      <span>Impact</span>
      Created an engaging developer platform. Gained full-stack experience (React, MongoDB, REST APIs) and improved API/database handling skills.`,
      image: codequestImg,
    },
    {
      title: "AI Cyber Threat Detection System",
      description: `<span>What I built?</span>
      Designed an AI-Powered Cyber Threat Detection System that identifies phishing scams and malicious activities online. It performs real-time website and link analysis to detect potential threats.
      
      <span>How I built it?</span>
      ◈ An application to scan and flag suspicious links.
      ◈ Integrated Machine Learning models for URL analysis.
      ◈ Used NLP to analyze text patterns in emails/messages.
      ◈ Ensured on-device processing for privacy (no data collection).
      
      <span>Impact</span>
      Provided real-time security against online scams. Gained expertise in AI, Machine Learning, and cybersecurity.`,
      image: securityImg,
    },
    {
      title: "IP Address Tracker",
      description: `<span>What I built?</span>
      Developed an IP Address Tracker, a web application that allows users to track and locate any given IP address on a map. This tool helps users gather geographical insights about an IP, such as location, timezone, and ISP details.
      
      <span>How I built it?</span>
      ◈ Built using HTML, CSS, and JS for a clean, responsive UI.
      ◈ Used an IP Geolocation API to fetch real-time data.
      ◈ Integrated Leaflet.js to display the IP’s location on a map.
      ◈ Implemented input validation to ensure correct IP format.
      
      <span>Impact</span>
      Provided users with an easy way to track IP addresses in real time. Strengthened API integration, JavaScript, and frontend development skills. Gained experience in working with geolocation services and interactive maps.`,
      image: addressImg,
    },
    {
      title: "TextUtils",
      description: `<span>What I built?</span>
      Created TextUtils, a ReactJS-based text manipulation tool that allows users to format and manage textual content efficiently.
      
      <span>How I built it?</span>
      ◈ Built using ReactJS for a smooth user experience.
      ◈ Used React Hooksfor real-time updates.
      ◈ Implemented dark mode/light mode toggle.
      ◈ Added a copy-to-clipboard feature.
      ◈ Optimized text transformations for speed and efficiency.
      
      <span>Impact</span>
      Simplified text formatting for users. Strengthened skills in ReactJS and state management. Enhanced UX design understanding.`,
      image: textutilsImg,
    }
  ];

  return (
    <div className="projects-container">
      <h1 className="section-title"><i>My Projects</i></h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-details">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
