import { useRef, useState } from "react";
import TechnologySkills from "./TechSkills";
import {
  KeyboardArrowUp,
  Link,
  LinkedIn,
  Mail,
  WhatsApp,
} from "@mui/icons-material";
import { SpeedDial, SpeedDialAction } from "@mui/material";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import SkillProgressContainer from "./SkillProgress";

const Body = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
      {/* Scroll to top button */}
      <div className="fixed right-7 bottom-20 z-20 cursor-pointer">
        <KeyboardArrowUp
          fontSize="large"
          color="warning"
          className="border border-amber-600 rounded-full"
          onClick={handleScrollToTop}
        />
      </div>

      <Navbar />

      {/* Speed Dial */}
      <SpeedDial
        ariaLabel="SpeedDial example"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          "& .MuiSpeedDial-fab": {
            backgroundImage:
              "linear-gradient(90deg, rgba(242,183,5,0.9), rgba(191,44,56,0.9), rgba(242,183,5,0.9))",
            color: "#fff",
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

      {/* Background container */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div id="torus-container" />
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <SkillProgressContainer />
        <TechnologySkills />
        <Projects />
      </main>

      {/* Particles */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      <Contact />
    </div>
  );
};

export default Body;
