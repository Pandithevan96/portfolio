  import React, { useState, useEffect, useRef } from "react";

  const SkillProgress = ({ skill, color1, color2, label }) => {
    const radius = 50;
    const circleLength = 2 * Math.PI * radius;
    const [currentSkill, setCurrentSkill] = useState(0);
    const [strokeOffset, setStrokeOffset] = useState(circleLength);
    const [hasAnimated, setHasAnimated] = useState(false);
    const skillRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          const duration = 1500;
          const startValue = 0;
          const startTime = performance.now();
          
          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = progress * skill;
            
            // Update both values simultaneously
            setCurrentSkill(currentValue);
            setStrokeOffset(circleLength - (circleLength * currentValue) / 100);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCurrentSkill(skill); // Ensure final value is exact
              setStrokeOffset(circleLength - (circleLength * skill) / 100);
              setHasAnimated(true);
            }
          };
          
          requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.3 });
    if (skillRef.current) observer.observe(skillRef.current);

    return () => {
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, [skill, hasAnimated, circleLength]);


    return (
      <div
        ref={skillRef}
        className="skill-card group relative p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        style={{
          background: `radial-gradient(circle at top left, ${color1}20, transparent)`,
        }}
      >
        <div className="flex flex-col items-center">
          <svg width="140" height="140" viewBox="0 0 140 140">
            <defs>
              <linearGradient id={`gradient-${skill}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: color1 }} />
                <stop offset="100%" style={{ stopColor: color2 }} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="glow"/>
                <feMerge>
                  <feMergeNode in="glow"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Background circle */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="#2d3748"
              strokeWidth="10"
              fill="none"
            />
            
            {/* Progress circle */}
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke={`url(#gradient-${skill})`}
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              style={{
                strokeDasharray: circleLength,
                strokeDashoffset: strokeOffset,
                transition: "stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)",
                filter: "url(#glow)"
              }}
            />
            
            {/* Center text */}
            <text
              fill="white"
              fontSize="2em"
              fontWeight="600"
              x="50%"
              y="50%"
              textAnchor="middle"
              alignmentBaseline="middle"
              className="drop-shadow-md"
            >
              {Math.round(currentSkill)}%
            </text>
          </svg>
          
          {/* Skill label */}
          <h3 className="text-white text-xl mt-4 font-bold text-center uppercase tracking-wide">
            {label}
            <span className="block h-1 w-8 bg-current mt-2 mx-auto rounded-full opacity-50 group-hover:w-12 transition-all duration-300"></span>
          </h3>
        </div>
      </div>
    );
  };

  const SkillProgressContainer = () => {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8 my-5" id="skills">
        <div className="max-w-7xl mx-auto">
          <h5 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Core Competencies
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillProgress
              skill={85}
              color1="#60a5fa"
              color2="#818cf8"
              label="Creativity"
            />
            <SkillProgress
              skill={80}
              color1="#34d399"
              color2="#3b82f6"
              label="Adaptability"
            />
            <SkillProgress
              skill={90}
              color1="#f472b6"
              color2="#f87171"
              label="Collaboration"
            />
            <SkillProgress
              skill={85}
              color1="#f59e0b"
              color2="#ec4899"
              label="Growth"
            />
          </div>
        </div>
      </div>
    );
  };

  export default SkillProgressContainer;