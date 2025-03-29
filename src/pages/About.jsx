import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <div className="content-wrapper">
        {/* ✅ Left Side - About Me */}
        <div className="about-content">
          <h1>About Me</h1>
          <div className="about-card">
            <p>
              Hi! I'm Sana Fathima, a passionate and ambitious <span>Information Science Engineering</span> student based in Bangalore,
              currently pursuing my Bachelor's degree at Vemana Institute of Technology (Expected Graduation: 2026).
            </p>
            <br />
            <p>
              I have a keen interest in <span>software development, cybersecurity, and artificial intelligence</span>.
              I love building innovative solutions that solve real-world problems.
              My expertise spans across <span>ReactJS, JavaScript, Python, and C, with a strong foundation in
                data structures, algorithms, and API integrations.</span>
              From AI-driven news verification to cybersecurity threat detection, my projects reflect my commitment to technology and its impact on society.
            </p>
            <br />
            <p>
              Beyond coding, I enjoy <span>problem-solving, teamwork, and continuous learning</span>.
              I am always eager to explore new technologies and contribute to meaningful projects that push the boundaries of innovation.
            </p>
            <br />
            <p><i>Let’s connect and create something amazing together!</i></p>

          </div>
        </div>

        {/* ✅ Experience Section - Grid Layout */}
        <div className="experience-section">
          <h2>Experience</h2>
          <div className="experience-grid">
            {/* ✅ VaultOfCodes - Left */}
            <div className="experience-card">
              <div className="experience-content">
                <p className="company">Intern – VaultOfCodes</p>
                <p className="location">Bangalore, India | Remote</p>
                <br />
                <p>
                  During my internship at VaultOfCodes, I gained hands-on experience with Python programming and explored various Python libraries.
                  This role provided me with the opportunity to work on real-world applications, enhancing my problem-solving and software development skills.
                </p>
                <br />
                <p><i><b>Key Responsibilities & Learnings:</b></i></p>
                <ul>
                  <li>Developed proficiency in Python for building interactive and efficient applications.</li>
                  <li>Explored various Python libraries to enhance functionality and performance.</li>
                  <li>Gained experience in implementing secure coding practices and software optimization.</li>
                  <li>Strengthened my ability to design and develop full-fledged applications from scratch.</li>
                </ul>
                <br />
                <p><i><b>Major Project:</b></i> Chat Application</p>
                <ul>
                  <li>Developed a real-time chat application with a user-friendly interface.</li>
                  <li>Implemented message encryption techniques to ensure secure communication.</li>
                  <li>Explored socket programming and server-client interactions for seamless data exchange.</li>
                </ul>
                <br />
                <p><i><b>Internship Summary: </b></i></p>
                <p>
                  This internship helped me build a strong foundation in Python development and software security,
                  preparing me for advanced projects and real-world applications.
                </p>
              </div>
            </div>

            {/* ✅ IBM - Right */}
            <div className="experience-card">
              <div className="experience-content">
                <p className="company">Intern – IBM</p>
                <p className="location">Bangalore, India | Remote</p>
                <br />
                <p>
                  During my internship at IBM, I gained hands-on experience with Linux system administration, security, and troubleshooting.
                  This role allowed me to explore the core functionalities of Linux and understand its importance in enterprise environments.
                </p>
                <br />
                <p><i><b>Key Responsibilities & Learnings:</b></i></p>
                <ul>
                  <li>Developed proficiency in Linux commands for system administration, file management, and process control.</li>
                  <li>Gained insights into network security principles, including firewall configurations and access control.</li>
                  <li>Explored troubleshooting techniques for diagnosing system issues, performance optimization, and debugging errors.</li>
                </ul>
                <br />
                <p><i><b>Major Project:</b></i> Key Logger</p>
                <ul>
                  <li>Designed and implemented a Key Logger to monitor and log keystrokes on a system for security and analysis.</li>
                  <li>Applied cybersecurity concepts to understand potential vulnerabilities and mitigate unauthorized access risks.</li>
                  <li>Developed a secure logging mechanism while ensuring compliance with ethical hacking principles.</li>
                  <li>Learned about encryption techniques and data privacy, balancing security with responsible implementation.</li>
                </ul>
                <br />
                <p><i><b>Internship Summary: </b></i></p>
                <p>
                  This internship strengthened my foundation in system administration and cybersecurity,
                  equipping me with practical skills that are essential for software and security professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
