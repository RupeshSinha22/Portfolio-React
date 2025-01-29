import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Typed from 'typed.js';
import { useRef } from 'react';
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const App = () => {
  const typedRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Full Stack Developer",
        "Web Developer",
        "Backend Developer",
        "5 star Coder",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Contact section ref is not set.");
    }
  };
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all the fields!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_1x9lpil", 
        "template_lkf67yn", 
        {
          name: formData.name, 
          email: formData.email, 
          subject: formData.subject, 
          message: formData.message, 
        },
        "mQ5ZqSWQum_Ozy0BV" 
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.error("FAILED...", err);
          toast.error("Failed to send message. Please try again later.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };
  
  return (
    <div className="wrapper">
  <div className="container">
    <div className="navbar">
      <div className="logo-container">
        <img src="./images/v.png" className="logo" />
        <div className="logo-text">isionary Sitess</div>
      </div>
      <div className="nav-items">
        <div>
          <a href="#projects">Projects</a>
        </div>
        <div>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </div>
    <div className="hero-section">
      <div className="absolute faded-text">Visionary Sitess</div>
      <div className="hero-section-left">
        <div className="hero-section-heading">Hi! Visionary Sitess</div>
        <div className="hero-section-heading hero-section-sub-heading">
        We are <span ref={typedRef} className="role"></span>
        </div>
        <div className="hero-section-description">
        We are a team of software developers, and this is our portfolio website. Here, you can explore our journey in software development.
        </div>
        <div className="btn-pink" id="btn-bottom" onClick={scrollToContact}>
          Hire Us
        </div>
      </div>
      <div className="hero-section-right">
        <div className="absolute icons icon-dots">
          <img src="./images/dots.png" alt="" />
        </div>
        <div className="absolute icons icon-cube">
          <img src="./images/cube.png" alt="" />
        </div>
        <div className="absolute icons icon-circle">
          <img src="./images/circle.png" alt="" />
        </div>
        <div className="absolute icons icon-zigzag">
          <img src="./images/zigzags.png" alt="" />
        </div>
        <div className="absolute icons icon-plus">
          <img src="./images/plus.png" alt="" />
        </div>
        <div className="user-image">
          <img src="./images/user-image.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="project-section">
    <h2 className="page-header">Projects</h2>
    <div className="project-container" id="projects">
      <div className="project-card" id="project1">
        <div className="project-number project-number-right">01</div>
        <div className="project-content project-content-left">
          <div className="project-skills-container">
            <img
              className="project-skill"
              src="./images/stack/HTML.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/CSS.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Javascript.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Express.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/NextJsCircle.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Tailwind.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/NodeJs.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/MongoDB.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Redux.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Vercel.svg"
              alt=""
            />
          </div>
          <h2 className="project-heading">
            StudyNotion Online Education Platform
          </h2>
          <div className="project-subheading">
            StudyNotion is a fully functional ed-tech platform that enables
            users to create, consume, and rate educational content. The platform
            is built using the MERN stack, which includes ReactJS, NodeJS,
            MongoDB, and ExpressJS.
          </div>
          <div className="btn-grp">
            <button className="btn-pink btn-project">Read More</button>
            <a href="">
              <i title="GitHubLink" className="fa-brands fa-github icon" />
            </a>
            <a href="">
              <i title="Live Link" className="fa-solid fa-link icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="project-card" id="project2">
        <div className="project-number project-number-left">02</div>
        <div className="project-content project-content-right">
          <div className="project-skills-container">
            <img
              className="project-skill"
              src="./images/stack/HTML.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/CSS.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Javascript.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Express.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/NextJsCircle.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Tailwind.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/NodeJs.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/MongoDB.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Redux.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Vercel.svg"
              alt=""
            />
          </div>
          <h2 className="project-heading">
            StudyNotion Online Education Platform
          </h2>
          <div className="project-subheading">
            StudyNotion is a fully functional ed-tech platform that enables
            users to create, consume, and rate educational content. The platform
            is built using the MERN stack, which includes ReactJS, NodeJS,
            MongoDB, and ExpressJS.
          </div>
          <div className="btn-grp">
            <button className="btn-pink btn-project">Read More</button>
            <a href="">
              <i title="GitHubLink" className="fa-brands fa-github icon" />
            </a>
            <a href="">
              <i title="Live Link" className="fa-solid fa-link icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="project-card" id="project3">
        <div className="project-number project-number-right">03</div>
        <div className="project-content project-content-left">
          <div className="project-skills-container">
            <img
              className="project-skill"
              src="./images/stack/HTML.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/CSS.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Javascript.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Express.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/NextJsCircle.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Tailwind.png"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/NodeJs.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/MongoDB.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Redux.svg"
              alt=""
            />
            <img
              className="project-skill"
              src="./images/stack/Vercel.svg"
              alt=""
            />
          </div>
          <h2 className="project-heading">
            StudyNotion Online Education Platform
          </h2>
          <div className="project-subheading">
            StudyNotion is a fully functional ed-tech platform that enables
            users to create, consume, and rate educational content. The platform
            is built using the MERN stack, which includes ReactJS, NodeJS,
            MongoDB, and ExpressJS.
          </div>
          <div className="btn-grp">
            <button className="btn-pink btn-project">Read More</button>
            <a href="">
              <i title="GitHubLink" className="fa-brands fa-github icon" />
            </a>
            <a href="">
              <i title="Live Link" className="fa-solid fa-link icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="skills" className="container skills-container">
    <div className="skill-fade-text">Skills</div>
    <div className="skill-container-left">
      <h2 className="skill-heading">
        <span className="caps">W</span>e and
        <br />
        OurTechStack
      </h2>
      <div className="skill-subHeading">
        <p>
          We are a highly motivated team of Computer Science & Engineering professionals with a passion for technology and 
          its application in solving real-world problems. Our goal is to collaborate with organizations where we can apply our skills, 
          learn new technologies, and contribute to both the success of the organization and our own growth.
        </p>
        
      </div>
    </div>
    <div className="skill-container-right">
      <img
        src="./images/userAsset/blob vector.png"
        className="blob-style"
        alt=""
      />
      <img src="./images/stack/CSS.png" alt="" className="skills-logo" />
      <img src="./images/stack/Javascript.svg" alt="" className="skills-logo" />
      <img src="./images/stack/React.png" alt="" className="skills-logo" />
      <img src="./images/stack/NodeJs.svg" alt="" className="skills-logo" />
      <img src="./images/stack/Next.svg" alt="" className="skills-logo" />
      <img src="./images/stack/Redux.svg" alt="" className="skills-logo" />
      <img src="./images/stack/Tailwind.png" alt="" className="skills-logo" />
      <img src="./images/stack/Bootstrap.svg" alt="" className="skills-logo" />
      <img src="./images/stack/MaterialUI.svg" alt="" className="skills-logo" />
      <img src="./images/stack/Express.png" alt="" className="skills-logo" />
      <img src="./images/stack/Git.svg" alt="" className="skills-logo" />
      <img src="./images/stack/Github.svg" alt="" className="skills-logo" />
      <img src="./images/stack/Graphql.svg" alt="" className="skills-logo" />
      <img src="./images/stack/MongoDB.svg" alt="" className="skills-logo" />
      <img src="./images/stack/Vercel.svg" alt="" className="skills-logo" />
      <img src="./images/stack/ChartJs.svg" alt="" className="skills-logo" />
      <img src="./images/stack/Bash.svg" alt="" className="skills-logo" />
      <img src="./images/stack/Docker.svg" alt="" className="skills-logo" />
      <img src="./images/stack/K8s.svg" alt="" className="skills-logo" />
    </div>
  </div>
  <div className="contactus-form-container" ref={contactRef}>
    <div className="container">
      <h1 className="contactus-heading" id="contact">
        Contact us
      </h1>
      <h3 className="contactus-sub-heading">
        Questions, thoughts, or just want to say hello?
      </h3>
      <div className="contactus-form-container">
      <form className="form" onSubmit={handleSubmit}>
            <div className="formfield-container">
              <input
                className="formfield"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange} // Handle input change
              />
              <input
                className="formfield"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange} // Handle input change
              />
              <input
                className="formfield"
                type="text"
                name="subject"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={handleChange} // Handle input change
              />
              <textarea
                name="message"
                cols={30}
                rows={10}
                className="formfield formfield-textarea"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange} // Handle input change
              ></textarea>
            </div>
            <button type="submit" className="btn-pink" id="submit-btn">
              Send message <i className="submit-icon fa-solid fa-paper-plane" />
            </button>
          </form>
      </div>
    </div>
  </div>
  <footer>
    <div className="container">
      <div className="footer-wrapper">
        <div className="footer-faded-text">Visionary Sitess</div>
        <div className="link-wrapper">
          <div>
            <a href="#projects">Projects</a>
          </div>
          <div>
            <a href="#skills">Skills</a>
          </div>
          <div>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <div className="icon-wrapper">
          <a
            href="https://www.linkedin.com/in/rupesh-kumar-533a2723a/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin icon" />
          </a>
          <a
            href="https://x.com/Rupesh_Sinha22?t=wzvfxt_pxKWeaEpQsVR94w&s=08"
            target="_blank"
          >
            <i className="fa-brands fa-github icon" />
          </a>
          <a href="https://github.com/RupeshSinha22" target="_blank">
            <i className="fa-brands fa-twitter icon" />
          </a>
          <a
            href="https://www.instagram.com/rupesh_sinha13/?next=https%3A%2F%2Fwww.instagram.com%2Freels%2FCuHJ9aErYA4%2F%3F__coig_login%3D1"
            target="_blank"
          >
            <i className="fa-brands fa-instagram icon" />
          </a>
          <a href="mailto:rupuom7@gmail.com" target="_blank">
            <i className="fa-regular fa-envelope icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>

  );
};

export default App;
