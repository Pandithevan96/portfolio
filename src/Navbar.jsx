import {
    Close,
    Menu
} from "@mui/icons-material";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    Typography
} from "@mui/material";
import { keyframes } from "@mui/system";
import { useState } from "react";
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
const navItems = [
  "Home",
  "About",
  "Education",
  "Skills",
  "Projects",
  "Contact",
];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Add this function
  const handleNavClick = (sectionName) => {
    // Close mobile menu
    setOpen(false);
    
    // Convert section name to ID selector
    const sectionId = `#${sectionName.toLowerCase()}`;
    
    // Smooth scroll implementation
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      
      // Update URL hash without jumping
      window.history.pushState({}, "", sectionId);
    }
  };

  const toggleDrawer = () => setOpen(!open);
  return (
    <div>
      <Box>
        {/* Mobile/Tablet Menu - Enhanced with Glass Morphism and Animations */}
        <div className="flex justify-end md:hidden">
          <IconButton
            onClick={toggleDrawer}
            sx={{
              zIndex: 1200,
              color: "#F2B705",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                transform: "rotate(90deg)",
                color: "#BF2C38",
                background: "rgba(242, 183, 5, 0.1)",
              },
            }}
          >
            <Menu
              sx={{
                fontSize: "2.8rem",
                filter: "drop-shadow(0 2px 4px rgba(242,183,5,0.3))",
              }}
            />
          </IconButton>

          <Drawer
            anchor="left"
            open={open}
            onClose={toggleDrawer}
            sx={{
              "& .MuiDrawer-paper": {
                width: { xs: "100%", sm: "400px" },
                background: "rgba(18, 18, 18, 0.95)",
                backdropFilter: "blur(24px)",
                boxShadow: "0 8px 32px rgba(242, 183, 5, 0.2)",
                borderRight: "1px solid rgba(242, 183, 5, 0.1)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: "100%",
                overflow: "hidden",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(45deg, 
            transparent 40%,
            rgba(242, 183, 5, 0.05) 50%,
            transparent 60%)`,
                  animation: "shine 8s infinite",
                  "@keyframes shine": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                  },
                },
              }}
            >
              <IconButton
                onClick={toggleDrawer}
                sx={{
                  position: "absolute",
                  zIndex: 20,
                  top: 24,
                  right: 24,
                  color: "#F2B705",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "rotate(90deg) scale(1.1)",
                    color: "#BF2C38",
                    background: "rgba(242, 183, 5, 0.1)",
                  },
                }}
              >
                <Close
                  sx={{
                    fontSize: "2.8rem",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
                  }}
                />
              </IconButton>

              <List
                sx={{
                  padding: "40px",
                  marginTop: "80px",
                  position: "relative",
                  zIndex: 10,
                }}
              >
                {[
                  "Home",
                  "About",
                  "Education",
                  "Skills",
                  "Projects",
                  "Contact",
                ].map((text, index) => (
                  <ListItem
                    key={text}
                    sx={{
                      height: "90px",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      textAlign: "center",
                      fontFamily: "Inter, sans-serif",
                      color: "rgba(255,255,255,0.9)",
                      padding: "20px",
                      margin: "12px 0",
                      borderRadius: "12px",
                      overflow: "hidden",
                      position: "relative",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      background: "rgba(255,255,255,0.03)",
                      "&:hover": {
                        transform: "translateX(20px)",
                        background: "rgba(242, 183, 5, 0.1)",
                        boxShadow: "0 4px 20px rgba(242, 183, 5, 0.1)",
                        "& .nav-highlight": {
                          width: "100%",
                          opacity: 1,
                        },
                      },
                      animation: `${fadeIn} 0.5s ease-out ${index * 0.1}s both`,
                    }}
                    onClick={() => handleNavClick(text)}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        width: "0%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, rgba(242,183,5,0.1), transparent)",
                        transition: "all 0.4s ease",
                        className: "nav-highlight",
                      }}
                    />

                    <Typography
                      variant="h5"
                      component="span"
                      sx={{
                        position: "relative",
                        zIndex: 2,
                        background:
                          "linear-gradient(45deg, #F2B705 30%, #BF2C38 70%)",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                        fontWeight: 800,
                        letterSpacing: "1px",
                      }}
                    >
                      {text}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </div>

        {/* Desktop Navigation - Modern Gradient Design */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            padding: { md: "20px 40px", lg: "20px 80px" },
            position: "fixed",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "90%",
            zIndex: 1000,
            background: "rgba(18, 18, 18, 0.85)",
            backdropFilter: "blur(16px)",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transition: "all 0.3s ease",
            "&:hover": {
              boxShadow: "0 8px 32px rgba(242, 183, 5, 0.15)",
              borderColor: "rgba(242, 183, 5, 0.2)",
            },
          }}
        >
          <Box
            sx={{
              "&:hover": {
                "& h1": {
                  backgroundPosition: "100% 50%",
                  textShadow: "0 0 20px rgba(242, 183, 5, 0.4)",
                },
              },
            }}
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#F2B705] via-[#BF2C38] to-[#F2B705] bg-size-200 animate-gradient-shine text-transparent bg-clip-text">
              Portfolio
            </h1>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: { md: "20px", lg: "40px" },
              alignItems: "center",
              fontFamily: "Inter, sans-serif",
            }}
          >
            {navItems.map((text) => (
              <Box
                key={text}
                sx={{
                  position: "relative",
                  padding: "12px 24px",
                  color: "rgba(255,255,255,0.8)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    bottom: -4,
                    left: 0,
                    width: "100%",
                    height: "2px",
                    background: "linear-gradient(90deg, #F2B705, #BF2C38)",
                    transform: "scaleX(0)",
                    transformOrigin: "right",
                    transition: "transform 0.3s ease",
                  },
                  "&:hover": {
                    color: "white",
                    transform: "translateY(-2px)",
                    "&::before": {
                      transform: "scaleX(1)",
                    },
                  },
                  "&.active": {
                    color: "#F2B705",
                    "&::before": {
                      transform: "scaleX(1)",
                    },
                  },
                }}
                onClick={() => handleNavClick(text)}
              >
                {text}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "8px",
                    background:
                      "radial-gradient(circle at center, rgba(242,183,5,0.1) 0%, transparent 70%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
