import "../styles/Home.css";
import { useState, useEffect } from "react";
import homeBg from "../assets/Home_bg.jpg";
function Home() {
  const roles = ["a Web Developer.", "a Cybersecurity Enthusiast.", "a Tech Explorer."];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Typing speed in ms
  const deleteSpeed = 80; // Deleting speed in ms
  const delayBetweenWords = 1500; // Delay before switching words

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
      if (text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      timer = setTimeout(() => {
        setText((prev) => currentRole.slice(0, prev.length + 1));
      }, typingSpeed);
      if (text === currentRole) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="home-container" style={{ backgroundImage: `url(${homeBg})` }}>
      {/* ✅ Hero Section */}
      <div className="hero-section">
        <h1 className="hero-text">
          Bringing ideas to life with <br />
          <span> code, creativity, and innovation!</span>
        </h1>

        {/* ✅ Typing Effect */}
        <div className="profile">
          <p className="intro">
            Hello! <br />
            I'm Sana Fathima, <span className="changing-text">{text}</span>
          </p>
        </div>

        <div className="cta">
          <a
            href="https://www.linkedin.com/in/sana-fathima-2156792a9"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-button"
          >
            Let’s Connect →
          </a>

        </div>
      </div>
    </div>
  );
}

export default Home;
