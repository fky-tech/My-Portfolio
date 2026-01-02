import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HomePage = () => {
  // Data arrays
  const skillsData = [
    { name: "WordPress", icon: <i className="fab fa-wordpress text-3xl text-primary-400"></i>, level: 70 },
    { name: "HTML5", icon: <i className="fab fa-html5 text-3xl text-primary-400"></i>, level: 95 },
    { name: "CSS3", icon: <i className="fab fa-css3-alt text-3xl text-primary-400"></i>, level: 90 },
    { name: "JavaScript", icon: <i className="fab fa-js text-3xl text-primary-400"></i>, level: 85 },
    { name: "React", icon: <i className="fab fa-react text-3xl text-primary-400"></i>, level: 80 },
    { name: "Node.js", icon: <i className="fab fa-node-js text-3xl text-primary-400"></i>, level: 75 },
    { name: "MongoDB", icon: <i className="fas fa-database text-3xl text-primary-400"></i>, level: 70 },
    { name: "Python", icon: <i className="fab fa-python text-3xl text-primary-400"></i>, level: 65 },
    { name: "Tailwind CSS", icon: <i className="fab fa-css3-alt text-3xl text-primary-400"></i>, level: 90 },
    { name: "MySQL", icon: <i className="fas fa-database text-3xl text-primary-400"></i>, level: 75 },
    { name: "Express.js", icon: <i className="fas fa-server text-3xl text-primary-400"></i>, level: 70 },
  ];

  const projectsData = [
    // {
    //   title: "A Restaurant Business Website",
    //   image: "ethiorestaurant.png",
    //   tech: ["WordPress", "Elementor", "Astra", "Starter Templates", "Yoast SEO"],
    //   description: "A visually appealing WordPress website designed for a restaurant to showcase its menu, atmosphere, and unique dining experience. The site highlights the restaurant’s brand and helps visitors easily learn about its offerings and story.",
    //   link: "https://ethiorestaurant.free.nf",
    //   gitHubLink: "",
    // },
    // {
    //   title: "E-commerce Shopping Site",
    //   image: "ecommerce shopping.png",
    //   tech: ["WordPress", "Elementor", "Woocommerce", "Astra", "Starter Templates", "Yoast SEO"],
    //   description: "A clean and modern WordPress website for an online shopping business, presenting products in an organized and user-friendly way. The site emphasizes the brand and makes it easy for visitors to browse and explore products.",
    //   link: "https://ecommerce-shopping.infinityfreeapp.com",
    //   gitHubLink: "",
    // },
    // {
    //   title: "E-commerce Clothing Site",
    //   image: "ethioclothing.png",
    //   tech: ["WordPress", "Elementor", "Woocommerce", "Astra", "Starter Templates", "Yoast SEO"],
    //   description: "A stylish WordPress website for a clothing brand, showcasing collections and fashion items. The site focuses on presenting the brand’s aesthetic while allowing visitors to explore the products effortlessly.",
    //   link: "https://ethioclothing.free.nf",
    //   gitHubLink: "",
    // },
    // {
    //   title: "Consultant Business Site",
    //   image: "businessnano.png",
    //   tech: ["WordPress", "Elementor", "Astra", "Starter Templates", "Yoast SEO"],
    //   description: "A professional WordPress website for a consulting business, highlighting services, expertise, and the company’s value proposition. The site is designed to convey trust and professionalism to potential clients.",
    //   link: "https://businessnano.wuaze.com",
    //   gitHubLink: "",
    // },
    // {
    //   title: "Real Estate Website",
    //   image: "realstatever.png",
    //   tech: ["WordPress", "Elementor", "Astra", "Starter Templates", "Yoast SEO"],
    //   description: "A WordPress website for a real estate business, featuring property listings and company information. The site provides visitors with a clear view of available properties and builds confidence in the agency’s expertise.",
    //   link: "https://realestatever.gt.tc",
    //   gitHubLink: "",
    // },
    // {
    //   title: "Fashion Design Website",
    //   image: "fashiodesigns.png",
    //   tech: ["WordPress", "Elementor", "Astra", "Starter Templates", "Yoast SEO"],
    //   description: "A creative WordPress website for a fashion designer, showcasing portfolios, collections, and design philosophy. The site emphasizes the designer’s unique style and brand identity.",
    //   link: "https://fashionio.42web.io",
    //   gitHubLink: "",
    // },
    // {
    //   title: "Portfolio Site for Designer",
    //   image: "andrewsPortfolio.png",
    //   tech: ["WordPress", "Elementor", "Astra", "Starter Templates", "Yoast SEO"],
    //   description: "A portfolio site for a designer using wordpress starter templates",
    //   link: "https://meportfolio.page.gd",
    //   gitHubLink: "",
    // },
    {
      title: "Red Harvest Honey",
      image: "RedHarvestHoney.png",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
      description: "A responsive website for Red Harvest Honey, an Ethiopian-based honey company.",
      link: "https://redharvesthoney.com/",
      gitHubLink: "https://github.com/fky-tech/RED-HARVEST",
    },
    {
      title: "Hanos Engraving",
      image: "HanosWebImg.png",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
      description: "A fully responsive website for Hanos Engraving",
      link: "https://hanosengravin.vercel.app/",
      gitHubLink: "https://github.com/fky-tech/Hanos-Engraving",
    },
    // {
    //   title: "Eastside Agro Industry",
    //   image: "EastSide.png",
    //   tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    //   description: "A fully responsive, multilingual website for Eastside Agro Industry",
    //   link: "https://eastside-nine.vercel.app/",
    //   gitHubLink: "https://github.com/fky-tech/Eastside",
    // },
    {
      title: "Yeadah Gemstone PLC",
      image: "YadahGemstone.png",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
      description: "A fully responsive website for Yadah Gemstone PLC",
      link: "https://yadah-gemstone.vercel.app/",
      gitHubLink: "https://github.com/fky-tech/Yadah-Gemstone",
    },
    {
      title: "Alpha Medonus",
      image: "AlphaMedonus.png",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
      description: "A fully responsive website for Alpha Medonus",
      link: "https://alpha-medonus-coffee.vercel.app/",
      gitHubLink: "https://github.com/fky-tech/Alpha_Medonus_Coffee",
    },
    {
      title: "Orca Advertising",
      image: "OrcaAdvert.png",
      tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
      description: "A fully responsive website for Orca Advertising",
      link: "https://orca-advertising.vercel.app/",
      gitHubLink: "https://github.com/fky-tech/Orca-Advertising",
    },
    {
      title: "Portfolio Website",
      image: "PortfolioImg.png",
      tech: ["React", "Tailwind CSS"],
      description: "A fully responsive portfolio website to showcase my skills and projects",
      link: "/#home",
      gitHubLink: "https://github.com/fky-tech/My-Portfolio",
    },
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "linkedin-in", link: "https://www.linkedin.com/in/fky-tech" },
    { name: "GitHub", icon: "github", link: "https://github.com/fky-tech" },
    { name: "Twitter", icon: "twitter", link: "https://x.com/Fikreyoh?s=09" },
    { name: "Instagram", icon: "instagram", link: "https://www.instagram.com/fkr.brk/" }
  ];

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(2);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + (projectsData.length-2));
  }

  const viewLess = () => {
    setVisibleProjects(2);
  }

  const displayProjects = projectsData.slice(0, visibleProjects);

  // Track mouse position for cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      // const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const sections = ['home', 'about', 'skills', 'projects'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('nav');
      if (mobileMenuOpen && nav && !nav.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleSubmit =  async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }

    const response = await fetch('https://formspree.io/f/mzzvrlpb', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData) 
    })

    if (response.ok) {
      alert("Success");
      e.target.reset();
    } else {
      alert("Invalid Input");
    }
  }

  return (
    <div className="min-h-screen bg-dark-900 text-gray-200 font-sans overflow-x-hidden">
      {/* Animated Cursor */}
      <div 
        className={`fixed z-50 w-8 h-8 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ${
          isHovering 
            ? 'bg-primary-500/30 scale-150' 
            : 'border-2 border-primary-500/50 scale-100'
        }`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          mixBlendMode: 'difference'
        }}
      />
      
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-400/20"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white fixed top-0 left-0 w-full z-50 bg-dark-900/90 backdrop-blur-md border-b border-dark-700"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-wide font-heading bg-gradient-to-r from-primary-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Fikreyohannes
          </motion.div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-base font-medium">
            {/* {['home', 'about', 'skills', 'projects', 'contact'].map((item) => ( */}
            {['home', 'about', 'skills', 'projects'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item}`}
                  className={`relative py-1 transition-all duration-300 ${
                    activeSection === item 
                      ? 'text-primary-400' 
                      : 'text-gray-300 hover:text-primary-400'
                  }`}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeSection === item && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-cyan-400"
                      layoutId="activeSection"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <i className="fas fa-times text-xl"></i>
            ) : (
              <i className="fas fa-bars text-xl"></i>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-dark-800/95 backdrop-blur-sm overflow-hidden"
            >
              <ul className="flex flex-col space-y-4 px-6 py-4 items-center">
                {/* {['home', 'about', 'skills', 'projects', 'contact'].map((item) => ( */}
                {['home', 'about', 'skills', 'projects'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item}`}
                      className={`block py-2 transition-all duration-300 ${
                        activeSection === item 
                          ? 'text-primary-400' 
                          : 'text-gray-300 hover:text-primary-400'
                      }`}
                      onClick={handleNavClick}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-10"
      >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/90 to-dark-900"></div>
        
        {/* Animated Background Image */}
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')] bg-cover bg-center opacity-20"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Code Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary-400/10 font-mono text-xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: Math.random() * 360
            }}
            animate={{
              y: [0, -100, -200, -300],
              x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 2 === 0 ? "<Code/>" : "<Dev/>"}
          </motion.div>
        ))}
        
        {/* Animated Grid Pattern */}
        <motion.div 
          className="absolute inset-0 bg-grid-small-primary-900/[0.04]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Pulsing Blobs */}
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-primary-500/10 to-cyan-500/10 filter blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-primary-500/10 filter blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            delay: 2,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-400/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: [0, -window.innerHeight],
              x: [0, Math.random() * 200 - 100],
              opacity: [0.8, 0],
              scale: [1, 1.2, 0.8]
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
          />
        ))}
      </div>
      
      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="inline-block bg-dark-800/50 backdrop-blur-sm px-4 py-1 rounded-lg mb-6 border border-primary-700/30"
        >
          <div className="text-primary-400 font-medium text-lg min-h-[28px]">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'Front End Developer', 'Back End Developer'],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                cursor: '|',
              }}
            />
          </div>
        </motion.div>
        
        <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 font-heading tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className=" bg-gradient-to-r from-white via-cyan-200 to-primary-400 bg-clip-text text-transparent">
              Fikreyohannes Biruk
            </span>
          </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Crafting digital experiences with clean code and intuitive design
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {/* <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            href="#contact" 
            className="px-8 py-3.5 bg-gradient-to-r from-primary-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/30 transition-all duration-300"
          >
            Contact Me
          </motion.a> */}
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            href="#projects" 
            className="px-8 py-3.5 border border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-all duration-300"
          >
            View Projects
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-xs mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center"
        >
          <a 
            href="#about" 
            className="w-10 h-14 flex flex-col items-center justify-start"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <motion.div
              className="w-6 h-6 mb-1 flex items-center justify-center"
              animate={{ 
                y: [0, 8, 0],
                opacity: [1, 0.7, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
            {/* <div className="text-xs text-primary-400 font-medium">Scroll</div> */}
          </a>
        </motion.div>
      </div>
    </section>
      
      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">About Me</span>
            </h2>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div 
              className="relative md:w-2/5 flex justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="w-60 h-60 md:w-72 md:h-72 rounded-lg overflow-hidden border-4 border-dark-700 relative z-10">
                  <img 
                    src="AboutImg.png" 
                    alt="Fikreyohannes Biruk" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full opacity-10 blur-xl"></div>
              </div>
            </motion.div>
            
            {/* About Text */}
            <motion.div 
              className="md:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">I transform ideas into digital reality</h3>
              
              <AnimatePresence>
                <motion.p 
                  className="text-lg leading-relaxed text-gray-300 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  I'm <span className="text-primary-400 font-semibold">Fikreyohannes Biruk</span>, a Computer Science student at St. Mary's University. I work in both frontend and backend development, with a strong focus on the <span className="text-primary-400 font-semibold">MERN stack</span> MongoDB, Express, React, and Node.js.
                </motion.p>
                
                <motion.p 
                  className="text-lg leading-relaxed text-gray-300 mb-8 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  I love crafting responsive interfaces, optimizing user experiences, and writing clean, scalable code. My passion lies in bridging the gap between design and functionality, and I'm always excited to collaborate, learn, and contribute to meaningful projects.
                </motion.p>
              </AnimatePresence>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-graduation-cap text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-sm text-gray-400">Computer Science Undergraduate Student</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-dark-800 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Skills & Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Technologies and languages I've mastered through my projects and studies</p>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/* Skill Cards with staggered animation */}
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:border-primary-500/50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.div 
                  className="skill-icon w-16 h-16 rounded-full bg-primary-900/20 flex items-center justify-center mb-4 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-lg font-semibold">{skill.name}</span>
                <div className="mt-2 w-full bg-dark-600 h-1.5 rounded-full">
                  <motion.div 
                    className="bg-primary-500 h-1.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent work showcasing my technical skills</p>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Cards with staggered animation */}
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card rounded-2xl p-6 border border-dark-700 bg-gradient-to-b from-dark-800 to-dark-900"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, boxShadow: "0 20px 30px -10px rgba(0,0,0,0.3)" }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
              <div 
                className="relative mb-6 h-48 rounded-xl overflow-hidden"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                {hoveredProject === index && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center"
                  >
                    <motion.i 
                      className="fas fa-eye text-3xl text-primary-400 hover:text-yellow-400 transition duration-300"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    />
                  </motion.a>
                )}
                </div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex space-x-3">
                    <a 
                      href={project.gitHubLink} 
                      className="text-gray-400 hover:text-primary-400 transition"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    {/* <a 
                      href="#" 
                      className="text-gray-400 hover:text-primary-400 transition"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a> */}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-primary-900/40 text-primary-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {visibleProjects <= 2 ? (
              <button
                onClick={loadMoreProjects}
                className="inline-block border border-primary-500 text-primary-400 hover:bg-primary-500/10 font-medium px-8 py-3.5 rounded-lg transition-all duration-300"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                View All Projects
              </button>
            ) : <button
                  onClick={viewLess}
                  className="inline-block border border-primary-500 text-primary-400 hover:bg-primary-500/10 font-medium px-8 py-3.5 rounded-lg transition-all duration-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  View Less
                </button>}
          </motion.div>
        </div>
      </section>
      
      {/* Contact Section */}
      {/* <section id="contact" className="py-20 px-6 bg-dark-800 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-400">Get In Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Have a project in mind or want to discuss opportunities? I'd love to hear from you!</p>
            <motion.div 
              className="w-20 h-1 bg-gradient-to-r from-primary-500 to-cyan-500 mx-auto rounded-full mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm available for freelance projects, collaborations, and contract work. Let's build something meaningful together.
              </p>
              
              <ul className="space-y-6">
                <motion.li 
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:fikreyohannesbiruk@gmail.com" className="text-gray-400 hover:text-primary-400 transition">fikreyohannesbiruk@gmail.com</a>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+251961942689" className="text-gray-400 hover:text-primary-400 transition">+251 961 942 689</a>
                  </div>
                </motion.li>
                
                <motion.li 
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-primary-400"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-gray-400">Addis Ababa, Ethiopia</p>
                  </div>
                </motion.li>
              </ul>
              
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <h4 className="font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.link}
                      className="w-12 h-12 rounded-full bg-dark-700 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-primary-900/20 transition"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      <i className={`fab fa-${social.icon} text-lg`}></i>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
            
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="Your name" 
                    className="w-full bg-dark-700 border border-dark-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    name="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Your email" 
                    className="w-full bg-dark-700 border border-dark-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                    name="email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Subject" 
                  className="w-full bg-dark-700 border border-dark-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  name="subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Your message" 
                  className="w-full bg-dark-700 border border-dark-600 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                  name="message"
                ></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white font-semibold px-6 py-3.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section> */}
      
      {/* Footer */}
      <footer className="bg-dark-900 border-t border-dark-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* <div className="flex flex-col md:flex-row justify-between items-center"> */}
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold font-heading">Fikreyohannes Biruk</h3>
              {/* <p className="text-gray-500">Full Stack Developer</p> */}
              <p className="text-gray-500 text-center">Full Stack Developer</p>
            </div>
            
            {/* <div className="flex space-x-6">
              {socialLinks.map(social => (
                <a 
                  key={social.name}
                  href={social.link} 
                  className="text-gray-500 hover:text-primary-400 transition"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div> */}
          </div>
          
          <div className="border-t border-dark-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2025 Fikreyohannes Biruk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;