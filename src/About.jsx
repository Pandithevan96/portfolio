import {
    motion
} from "framer-motion";
import {
    Briefcase,
    FileBadge,
    GraduationCap,
    Sparkles
} from "lucide-react";
import React from "react";
const About = () => {
  return (
    <div>
      <section>
        <div id="about" className="w-full mx-auto p-5 ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex items-center mb-12 gap-4">
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
              <h5 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                About{" "}
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Me
                </span>
              </h5>
              <div className="h-1 flex-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
            </div>

            <div className="lg:flex gap-12 items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full max-w-md mx-auto mb-12 lg:mb-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
                <img
                  src="./models/web.png"
                  alt="Developer Illustration"
                  className="relative z-10 w-full h-auto rounded-3xl border-8 border-white/10 hover:rotate-2 transition-transform duration-300"
                />
              </motion.div>

              <div className="flex-1 space-y-8">
                <motion.h4
                  initial={{ x: -20 }}
                  whileInView={{ x: 0 }}
                  className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
                >
                  Crafting Digital Excellence
                </motion.h4>

                {[
                  "I'm a full-stack developer passionate about creating immersive web experiences. With a blend of technical expertise and creative vision, I build solutions that marry form and function.",
                  "My journey spans from complex backend architectures to pixel-perfect frontends. I specialize in transforming ideas into performant, scalable applications that leave lasting impressions.",
                  "When not coding, I'm exploring new tech trends or contributing to open-source projects. Every line of code is an opportunity to innovate and elevate user experiences.",
                ].map((text, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20 }}
                    whileInView={{  y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Sparkles className="text-white w-4 h-4" />
                      </div>
                      <p className="text-gray-500 leading-relaxed text-lg">
                        {text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div id="education" className="w-full mx-auto px-5 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-12 gap-4">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              <h5 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Education Journey
              </h5>
              <div className="h-1 flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-96 rounded-3xl overflow-hidden border border-white/10"
              >
                <div className="absolute" />
                <img
                  src="./models/edu.png"
                  alt="Education"
                  className="w-full h-full object-contain "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Knowledge Path
                  </h3>
                  <p className="text-gray-300">
                    Formal education meets hands-on experience
                  </p>
                </div>
              </motion.div>

              <div className="space-y-8">
                {[
                  {
                    type: "Degree",
                    title: "BE Mechanical Engineering",
                    institution:
                      "Mountzion College of Engineering & Technology",
                    icon: <GraduationCap />,
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    type: "Certification",
                    title: "Frontend Developer",
                    institution: "Login 360",
                    icon: <FileBadge />,
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    type: "Internship",
                    title: "Full Stack Developer",
                    institution: "Dynamic Liquids",
                    icon: <Briefcase />,
                    color: "from-orange-500 to-yellow-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`p-6 bg-gradient-to-br ${item.color} rounded-2xl relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                    <div className="relative z-10 flex gap-6 items-start">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}
                      >
                        {React.cloneElement(item.icon, {
                          className: "w-6 h-6 text-white",
                        })}
                      </div>
                      <div>
                        <h5 className="text-gray-300 font-medium mb-1">
                          {item.type}
                        </h5>
                        <h4 className="text-xl font-bold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-400">{item.institution}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
