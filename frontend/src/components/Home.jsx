import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, ExternalLink } from 'lucide-react';
import '../styles/styles.css';
import  ContactForm  from "../components/contact.jsx";

//logos
import blobVector from "../assets/remix.jpeg";
import htmlLogo from"../images/stack/HTML.png";
import cssLogo from "../images/stack/CSS.png";
import jsLogo from "../images/stack/JS.png";
import reactLogo from "../images/stack/RJS.jpeg";
import cLogo from "../assets/remix.jpeg";
import cppLogo from "../images/stack/cpp.png";
import c from "../images/stack/c.png";
import tailwindLogo from "../images/stack/TSS.jpeg";
import bootstrapLogo from "../images/stack/boot.jpeg";
import materialUILogo from "../assets/remix.jpeg";
import gitLogo from "../images/stack/git.png";
import remixLogo from "../assets/remix.jpeg";
import githubLogo from "../assets/remix.jpeg";
import solidity from "../images/stack/sol.png";
import vercelLogo from "../images/stack/vercel.png";
import hardhat from "../images/stack/hardhat.jpeg";
import nodeLogo from "../images/stack/node.png";
import pythonLogo from "../images/stack/py.png";
import mongo from "../images/stack/mongo.png";
import resume from "../assets/resume.pdf";
import a1 from "../assets/leetcode100.gif"
import a2 from "../assets/error404.png"


//logos end

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      id: 1,
      number: "01",
      title: "JobPortal",
      description:
        "A full-stack job portal enabling secure job listings, applications, and user authentication with MongoDB, React.js, and Express.js.",
      skills: [
        htmlLogo,
        cssLogo,
        jsLogo,
        tailwindLogo,
        gitLogo,
        nodeLogo
        
      ],
      appLink: "https://github.com/kushalswami20/job-portal-web-app",
      githubLink: "https://github.com/kushalswami20/job-portal-web-app",
    },
    {
      id: 2,
      number: "02",
      title: "Ideathon",
      description:
        "An IDEATHON is a collaborative event where participants brainstorm innovative ideas to solve real-world problems within a set time frame.",
      skills: [
        htmlLogo,
        cssLogo,
        jsLogo,
        tailwindLogo,
        gitLogo,
        nodeLogo
      ],
      appLink: "https://github.com/kushalswami20/ideathon",
      githubLink: "https://github.com/kushalswami20/ideathon",
    },
    {
      id: 3,
      number: "03",
      title: "SnapInsure",
      description:
        "SnapInsure is a full-stack platform integrating machine learning and blockchain for seamless insurance claim management and user interaction.",
      skills: [
        htmlLogo,
        cssLogo,
        jsLogo,
        tailwindLogo,
        gitLogo,
        remixLogo,
        hardhat,
        solidity

      ],
      appLink: "https://github.com/kushalswami20/USSR",
      githubLink: "https://github.com/kushalswami20/USSR",
    },
  ];


  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full glass-nav z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold gradient-text">Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a>
              <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a>
              <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="nav-link block px-3 py-2">Home</a>
              <a href="#projects" className="nav-link block px-3 py-2">Projects</a>
              <a href="#contact" className="nav-link block px-3 py-2">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-10 animate-fadeIn">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm</span>
              <span className="block gradient-text">Kushal Arogya Swami</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Full Stack Developer | Machine Learning  | Problem Solver
            </p>
          </div>
        </div>
      </section>
      <section className="brief-description">
  <p>
  Hi, I'm Kushal Arogyaswami, a passionate Full-Stack Web Developer, Blockchain Enthusiast, and AI/ML Explorer. With expertise in technologies like React.js, Node.js, Solidity, and Python, I work on building innovative solutions that bridge the gap between cutting-edge tech and real-world applications. Explore my work, learn more about my projects, and feel free to reach out for collaborations, opportunities, or any questions you may have. Thanks for visiting!

</p>
  <a href={resume} className="cv-button" download>Download CV</a>
</section>

      {/* Projects Section */}
      <section id="projects" className="projectSection">
      <h1 className="text-center text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block gradient-text">Projects</span>
            </h1>
      <div className="projectContainer">
        {projects.map((project) => (
          <div className="projectCard" key={project.id} id={`project${project.id}`}>
            <div
              className={`projectNumber ${
                project.id % 2 === 0 ? "leftNumber" : "rightNumber"
              }`}
            >
              {project.number}
            </div>
            <div
              className={`projectContent ${
                project.id % 2 === 0 ? "rightProjectContent" : "leftProjectContent"
              }`}
            >
              <div className="projectSkillsContainer">
                {project.skills.map((skill, index) => (
                  <img className="projectSkill" src={skill} alt="Skills" key={index} />
                ))}
              </div>
              <h2 className="projectHeading">{project.title}</h2>
              <p className="projectSubHeading">{project.description}</p>
              <div className="btnGroup">
                <a href={project.appLink} className="btn btnProject" target="_blank" rel="noreferrer">
                  Visit App
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer">
                  <i className="fa fa-github" style={{ fontSize: "45px" }}></i>
                </a>
                <a href={project.appLink} target="_blank" rel="noreferrer">
                  <i className="fa fa-link" style={{ fontSize: "36px", color: "red" }}></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    {/* skill Section */}
    <section className="skillContainer" id="skills">
      <div className="skillFadedText absolute">Skills</div>
      <div className="leftSkillContainer">
      <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block gradient-text">Me and</span><span className="block gradient-text">MyTech Stack</span>
        </h1>
    
        <div className="skillSubHeading">
          <p>
            Hi! I'm Kushal Arogya Swami, a second-year B.Tech student in Information Technology at Delhi Technological University(DTU). I
            completed my 10th and 12th under the CBSE board in Delhi. As a full-stack web developer with a strong focus on blockchain technologies, machine learning, and AI integration. I am proficient in using modern frontend frameworks like React.js, leveraging Vite for fast development and efficient builds. My expertise extends to styling and component libraries such as ShadCN UI for dynamic template rendering. MY backend development skills are centered around Node.js and Express.js, where I builds scalable APIs and manages databases using PostgreSQL and MongoDB.
          </p>
          <p>
         I am exploring Artificial Intelligence (AI), Machine Learning (ML), and Deep Learning (DL) to expand my skills. I have gained foundational experience with scikit-learn for building predictive models and am now diving into deep learning to optimize neural networks. My aim is to integrate AI and ML with my blockchain expertise for solutions in predictive analytics, AI-powered diagnostics, and automation. I'm excited to explore advanced topics like reinforcement learning, natural language processing (NLP), and computer vision.
          </p>
          <p>
            I enjoy solving complex problems and collaborating on innovative projects. Staying updated with new trends
            keeps me motivated to improve and deliver impactful, creative digital solutions.
          </p>
        </div>
      </div>

      <div className="rightSkillContainer">
        {/* <img src={blobVector} className="blobStyle" alt="" />/ */}

        <img src={htmlLogo} alt="HTML Logo" className="skillsLogo" />
        <img src={cssLogo} alt="CSS Logo" className="skillsLogo" />
        <img src={jsLogo} alt="JavaScript Logo" className="skillsLogo" />
        <img src={reactLogo} alt="React Logo" className="skillsLogo" />
        <img src={c} alt="C Logo" className="skillsLogo" />
        <img src={cppLogo} alt="C++ Logo" className="skillsLogo" />
        <img src={bootstrapLogo} alt="bootstrapLogo" className="skillsLogo" />
        <img src={tailwindLogo} alt="Tailwind Logo" className="skillsLogo" />
        <img src={hardhat} alt="Bootstrap Logo" className="skillsLogo" />
        <img src={nodeLogo} alt="Material UI Logo" className="skillsLogo" />
        <img src={gitLogo} alt="Git Logo" className="skillsLogo" />
        <img src={vercelLogo} alt="vercelLogo " className="skillsLogo" />
        <img src={githubLogo} alt="Github Logo" className="skillsLogo" />
        <img src={mongo} alt="GraphQL Logo" className="skillsLogo" />
        <img src={solidity} alt="Vercel Logo" className="skillsLogo" />
        <img src={pythonLogo} alt="Python Logo" className="skillsLogo" />
      </div>
    </section>

    {/* experience Section */}
    <div className="row about-expertise ss-animated" data-animate-block="">
      <div className="column lg-12">
        <h2 className="text-pretitle" data-animate-el="" style={{ opacity: 1, transform: 'translateY(0px)' }}>
          Expertise
        </h2>
        <ul className="skills-list h1" data-animate-el="" style={{ opacity: 1, transform: 'translateY(0px)' }}>
          <li>Full-stack Development,</li>
          <li>Blockchain,</li>
          <li>Machine Learning,</li>
          <li>AI,</li>
          <li>Problem Solving,</li>
          <li>Illustration</li>
        </ul>
      </div>
    </div>

    <div className="row about-timelines ss-animated" data-animate-block="">
      <div className="column lg-6 tab-12">
        <h2
          className="text-pretitle"
          data-animate-el=""
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          Experience
        </h2>

        <div
          className="timeline"
          data-animate-el=""
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          <div className="timeline__block">
            <div className="timeline__bullet"></div>
            <div className="timeline__header">
              <h4 className="timeline__title">NULL CLASS</h4>
              <h5 className="timeline__meta">Web Development Intern</h5>
              <p className="timeline__timeframe">December 2024 - Present</p>
            </div>
            <div className="timeline__desc">
              <p>
              Designed and developed a full-stack CodeqQuest platform featuring Google authentication, video question
              uploads with validation and time-based restrictions, and comprehensive login tracking with browser.
              </p>
            </div>
          </div>

          <div className="timeline__block">
            <div className="timeline__bullet"></div>
            <div className="timeline__header">
              <h4 className="timeline__title">Paryavarnam</h4>
              <h5 className="timeline__meta">Web Developer Lead </h5>
              <p className="timeline__timeframe">October 2024- December 2024</p>
            </div>
            <div className="timeline__desc">
              <p>
              Managed project lifecycles and implemented coding best practices, resulting in timely delivery and improved
              team collaboration.
              </p>
            </div>
          </div>
        </div> {/* end timeline */}
      </div> {/* end column */}

      <div className="column lg-6 tab-12">
        <h2
          className="text-pretitle"
          data-animate-el=""
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          Education
        </h2>

        <div
          className="timeline"
          data-animate-el=""
          style={{ opacity: 1, transform: 'translateY(0px)' }}
        >
          <div className="timeline__block">
            <div className="timeline__bullet"></div>
            <div className="timeline__header">
              <h4 className="timeline__title">Delhi Technological University</h4>
              <h5 className="timeline__meta">B.TECH in Information Technology</h5>
              <p className="timeline__timeframe">August 2023</p>
            </div>
            <div className="timeline__desc">
              <p>
              This program provides a comprehensive education in technology, covering areas such as computer science, software development, networking, databases, algorithms, and data structures. It equips students with the technical skills and knowledge necessary for a career in the rapidly evolving IT industry.              </p>
            </div>
          </div>

          <div className="timeline__block">
            <div className="timeline__bullet"></div>
            <div className="timeline__header">
              <h4 className="timeline__title">NC Jindal Public Scholl</h4>
              <h5 className="timeline__meta">12<sup>th</sup>  & 10 <sup>th</sup> CBSE</h5>
              <p className="timeline__timeframe">Passed out March 2023</p>
            </div>
            <div className="timeline__desc">
              <p>
              High School (12TH) with a score of 87.2%
2022-2023
Senior Secondary School (10TH) with a score of 92%
              </p>
            </div>
          </div>
        </div> {/* end timeline */}
      </div> {/* end column */}
    </div>



      

      {/* achievments */}
      <h1 className="text-center text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block gradient-text">Achievements</span>
            </h1>
      <div className="achievements-container flex justify-center items-center gap-8 p-8">
      <article className="card-ac w-150 relative overflow-hidden rounded-lg transform transition-transform hover:scale-105">
        <img 
          className="card__background w-full h-64 object-cover"
          src={a2}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        />
        <div className="card__content absolute bottom-0 left-0 right-0 p-6 bg-black/70 text-white">
          <div className="card__content--container">
            <h2 className="card__title text-2xl font-bold mb-2">ERROR404 HAKFEST</h2>
            <p className="card__description">
              I was a runner-up in the Error404 Hackfest for my innovative project
            </p>
          </div>
        </div>
      </article>

      <article className="card-ac w-96 relative overflow-hidden rounded-lg transform transition-transform hover:scale-105">
        <img 
          className="card__background w-full h-64 object-cover"
          src={a1}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
        />
        <div className="card__content absolute bottom-0 left-0 right-0 p-6 bg-black/70 text-white">
          <div className="card__content--container">
            <h2 className="card__title text-2xl font-bold mb-2">LEETCODE</h2>
            <p className="card__description">
              I achieved a top 4.2% rank on LeetCode by consistently solving complex algorithmic and data structure problems, demonstrating strong problem-solving and coding skills
            </p>
          </div>
        </div>
      </article>
    </div>
      
{/* Contact Section */}
<ContactForm />
    
{/* <!-- Foooter --> */}
<section className="bg-#141516 ">
    <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8 ">

        <nav className="flex flex-wrap justify-center -mx-5 -my-2 ">
            <div className="px-5 py-2 ">
                <a href="#" className="text-base leading-6 text-#5b5b5c hover:text-gray-900">
                    About
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-#5b5b5c hover:text-gray-900">
                    Blog
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-#5b5b5c hover:text-gray-900">
                    Team
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-#5b5b5c hover:text-gray-900">
                    Pricing
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-#5b5b5c hover:text-gray-900">
                    Contact
                </a>
            </div>
            <div className="px-5 py-2">
                <a href="#" className="text-base leading-6 text-#5b5b5c hover:text-gray-900">
                    Terms
                </a>
            </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Dribbble</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 KUSHAL AROGYA SWAMI, Inc. All rights reserved.
        </p>
        </div>
    
</section>
    </div>
  );


};

export default Home;