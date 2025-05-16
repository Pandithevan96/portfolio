import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";
import React from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
} from "@mui/material";
import { SpeedDial, SpeedDialAction, Chip } from "@mui/material";
import {
  WhatsApp,
  Mail,
  LinkedIn,
  Link,
  Menu,
  Close,
  Translate,
  GitHub,
  Download,
  Public,
} from "@mui/icons-material";
import BlobAnimation from './BlobAnimation';
const Hero = () => {
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
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  return (
    <div>
           <section id="home" className="min-h-screen flex items-center ">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-morphism-background p-8 rounded-2xl backdrop-blur-xl bg-opacity-20 w-full"
          >
            <div className="flex flex-col lg:flex-row items-center justify-evenly">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative w-64 h-64 lg:w-96 lg:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30" />
                <BlobAnimation />
                <img
                  src="./models/dnbg.png"
                  alt="Profile"
                  className="absolute inset-[3px] bg-gray-900 rounded-full z-10"
                />
              </motion.div>

              <div className="text-center lg:text-left space-y-6 pt-20">
                <motion.h1 
                  className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#F2B705] via-[#BF2C38] to-[#F2B705] bg-size-200 animate-gradient-shine text-transparent bg-clip-text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Pandithevan G 
                </motion.h1>
                
                <motion.div
                  className="typewriter text-2xl lg:text-4xl font-mono text-gray-300"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  FullStack Developer
                </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative max-w-2xl"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#F2B705] via-[#BF2C38] to-[#F2B705] rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <p className="relative text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed italic">
            <span className="text-4xl text-purple-800 mr-2">“</span>
            Passionate and eager full-stack developer, blending
            <span className="bg-gradient-to-r from-[#F2B705]  to-[#BF2C38] bg-clip-text text-transparent font-bold">
              {" "}creativity and technical expertise{" "}
            </span>
            to craft innovative, seamless, and impactful digital solutions.
            <span className="text-4xl text-pink-800 ml-2">”</span>
          </p>
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-[#F2B705]  to-pink-500/50 animate-gradient-shine" />
        </motion.div>
                <div className="flex justify-center lg:justify-start gap-6">
                  {actions.map((action, index) => (
                    <motion.a
                      key={index}
                      href={action.link}
                      target="_blank"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all"
                    >
                      {React.cloneElement(action.icon, {
                        sx: { fontSize: "2.5rem", color: "#503F55" }
                      })}
                    </motion.a>
                  ))}
                  
                </div>
                   <motion.button
      whileHover={{ 
        scale: 1.05,
        rotate:1,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 10
      }}
      className="relative px-8 py-4 rounded-xl bg-gradient-to-br from-[#BF2C38] to-[#3d320a] overflow-hidden group"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="flex items-center gap-3 relative z-10">
        <motion.span
          animate={{ rotate: [0, 10, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Download sx={{ fontSize: 24, color: "white" }} />
        </motion.span>
<a
  href="https://drive.google.com/uc?export=download&id=1a9hRZ_eN37wIzpf9Kn6PALEWekWIrahl"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="font-semibold text-lg bg-gradient-to-r from-white/90 to-white/70 bg-clip-text text-transparent">
    Download CV
  </span>
</a>

      </div>

      {/* Border animation */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-12 -rotate-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-48 transition-all duration-700" />
      </div>
    </motion.button>
              </div>
            </div>
          </motion.div>
        </section>
    </div>
  );
};

export default Hero;
