import { useEffect, useRef, useState } from "react";
// Ensure all icon imports are correctly pathed
import ReactSVG from "./assets/ReactSVG.svg";
import bootstrap from "./assets/bootstrap.svg";
import express from "./assets/express.svg";
import firebase from "./assets/firebase.svg";
import github from "./assets/github.svg";
import laravel from "./assets/laravel.svg";
import mongoDB from "./assets/mongoDB.svg";
import mui from "./assets/mui.svg";
import mysql from "./assets/mysql.svg";
import nodeJS from "./assets/nodeJS.svg";
import php from "./assets/php.svg";
import tailwind from "./assets/tailwind.svg";
const technologies = [
  { name: "React", icon: ReactSVG, progress: 85 },
  { name: "Express", icon: express, progress: 70 },
  { name: "MongoDB", icon: mongoDB, progress: 75 },
  { name: "NodeJS", icon: nodeJS, progress: 70 },
  { name: "Bootstrap", icon: bootstrap, progress: 80 },
  { name: "Material UI", icon: mui, progress: 85 },
  { name: "Tailwind CSS", icon: tailwind, progress: 90 },
  { name: "Firebase", icon: firebase, progress: 80 },
  { name: "PHP", icon: php, progress: 75 },
  { name: "Laravel", icon: laravel, progress: 75 },
  { name: "MySQL", icon: mysql, progress: 80 },
  { name: "GitHub", icon: github, progress: 70 },
];

const TechnologySkills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechProgress key={index} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TechProgress = ({ tech }) => {
  const [width, setWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const techRef = useRef(null);

  useEffect(() => {
    const animateProgress = () => {
      const startTime = Date.now();
      const duration = 1500; // 1.5 seconds

      const updateWidth = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setWidth(Math.round(tech.progress * progress));

        if (progress < 1) {
          requestAnimationFrame(updateWidth);
        }
      };

      requestAnimationFrame(updateWidth);
    };

    const onIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateProgress();
          setHasAnimated(true);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(onIntersection, {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    });

    if (techRef.current) observer.observe(techRef.current);

    return () => {
      if (techRef.current) observer.unobserve(techRef.current);
    };
  }, [tech.progress, hasAnimated]);

  return (
    <div
      ref={techRef}
      className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-400/30 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-purple-500/20"
    >
      <div className="flex items-start space-x-4">
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-12 h-12 p-2.5 bg-gray-700/50 rounded-lg border border-gray-600 group-hover:border-purple-400/50 transition-colors"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {tech.name}
            </h3>
            <span className="text-lg font-semibold text-purple-400">
              {width}%
            </span>
          </div>

          <div className="mt-4 relative">
            <div className="h-3 bg-gray-700/80 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full relative transition-all duration-1000 ease-out"
                style={{
                  width: `${width}%`,
                  background: `linear-gradient(90deg, #60a5fa 0%, #c084fc 100%)`,
                  boxShadow: "0 2px 8px -1px rgba(139, 92, 246, 0.25)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent w-1/3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySkills;
