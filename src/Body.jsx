import {
  motion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef, useState } from "react";

import { keyframes } from "@mui/system";
import TechnologySkills from "./TechSkills";

import {
  KeyboardArrowUp,
  Link,
  LinkedIn,
  Mail,
  WhatsApp
} from "@mui/icons-material";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import SkillProgressContainer from "./SkillProgress";
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Body = () => {
  const [expanded, setExpanded] = useState(false);
  const sectionRefs = useRef([]);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  // Smooth scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const actions = [
    {
      icon: <WhatsApp />,
      name: "WhatsApp",
      link: "https://web.whatsapp.com/send?phone=6369064948",
    },
    {
      icon: <Mail />,
      name: "Email",
      link: "mailto:dwaynedevaq96@gmail.com",
    },
    {
      icon: <LinkedIn />,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/pandithevan-g-309177220/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  return (
    <div className="relative overflow-hidden">
    <KeyboardArrowUp
      fontSize="large"
      color="warning"
      className="fixed right-7 bottom-20 border border-amber-600 z-20 cursor-pointer"
      onClick={handleScrollToTop}
    />
      <Navbar />
      <SpeedDial
        ariaLabel="SpeedDial example"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          "& .MuiSpeedDial-fab": {
  backgroundImage: "linear-gradient(90deg, rgba(242,183,5,0.9), rgba(191,44,56,0.9), rgba(242,183,5,0.9))",
  backgroundSize: "200% auto",
  animation: "gradient-shine 2s linear infinite",
  color: "#fff",
  transition: "background-image 0.3s ease-in-out",
  "&:hover": {
    backgroundImage: "linear-gradient(90deg, rgba(242,183,5,1), rgba(191,44,56,1), rgba(242,183,5,1))",
  },
},

        }}
        icon={<Link sx={{ color: "white" }} />}
        direction="left"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => window.open(action.link, "_blank")}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
            }}
          />
        ))}
      </SpeedDial>
      {" "}
      <motion.div
        style={{ scale, rotate }}
        className="fixed inset-0 -z-10 opacity-20"
      >
        <div id="torus-container" />
      </motion.div>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8  ">
        <Hero />

        <About />
        <SkillProgressContainer/>
        <TechnologySkills/>
        <Projects />
      </main>
      {/* Add floating particles */}
      <div className="particles-container">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
        <Contact />

    </div>
  );
};

export default Body;
