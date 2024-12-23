import Projects from "../components/projects_section/Projects";
import Skills from "../components/skills_section/Skills";
import AboutSec from "../components/about_section/About";
import Contact from "../components/contact_section/Contact";
import About from "../components/first_section_about/About";
const Home_page = () => {
    //  right now in the last videos we complete this page :))
    // dont forget to subscribe
  return (
    <>
      <About />
      <Projects />
      <Skills />
      <AboutSec />
      <Contact />
      <div className="fixed-whatsapp-container">
        <span className="blink-message">Contact me !</span>
        <a href="https://wa.me/9800425510" target="_blank" rel="noopener noreferrer" className="fixed-whatsapp">
          <img src={require("./imges/wp.webp")} alt="WhatsApp" className="whatsapp-logo" />
        </a>
      </div>
      <style jsx>{`
        .fixed-whatsapp-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          z-index: 1000;
        }
        .blink-message {
          margin-right: 10px;
          font-size: 16px;
          color: #ffffff;
          animation: blink 4s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 2; }
          50% { opacity: 0; }
        }
        .whatsapp-logo {
          width: 50px;
          height: 50px;
          background: transparent;
        }
      `}</style>
    </>
  );
};
export default Home_page;
