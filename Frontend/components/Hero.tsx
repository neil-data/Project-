import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Star, Sparkles, ArrowUpRight, Play, Users, Globe } from "lucide-react";

export default function Hero() {
  const line1 = ["The", "thinkers", "and"];
  const line2 = ["doers", "were", "changing"];
  const line3 = ["the", "status", "Quo", "with"];

  // Handle subtle live stats updates or active counters to add vitality
  const [activeUsers, setActiveUsers] = useState(14);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers((prev) => {
        const offset = Math.random() > 0.5 ? 1 : -1;
        const next = prev + offset;
        return next > 25 ? 24 : next < 8 ? 9 : next;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Framer Motion variants for staggered letter/word appearance
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.55,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // 7 Overlapping Avatars layout for the bottom ribbon with cursor collab badges (Preserved exactly)
  const collaboratorAvatars = [
    {
      id: 1,
      name: "Pranav",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      badge: "P",
      badgeColor: "bg-blue-500",
      tagColor: "bg-blue-500 text-white",
      arrowColor: "#3B82F6",
      offsetClass: "translate-y-4",
    },
    {
      id: 2,
      name: "Valerie",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      badge: "V",
      badgeColor: "bg-purple-500 animate-pulse",
      tagColor: "bg-purple-500 text-white",
      arrowColor: "#A855F7",
      offsetClass: "-translate-y-2",
    },
    {
      id: 3,
      name: "Sam",
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop",
      badge: "S",
      badgeColor: "bg-[#E84545]",
      tagColor: "bg-[#E84545] text-white",
      arrowColor: "#E84545",
      offsetClass: "-translate-y-6 md:-translate-y-8",
    },
    {
      id: 4,
      name: "Felix",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
      badge: "FX",
      badgeColor: "bg-emerald-500",
      tagColor: "bg-emerald-500 text-white",
      arrowColor: "#10B981",
      offsetClass: "translate-y-2",
    },
    {
      id: 5,
      name: "Leo",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      badge: "L",
      badgeColor: "bg-[#F5E03A] text-black font-bold",
      tagColor: "bg-[#F5E03A] text-black",
      arrowColor: "#F5E03A",
      offsetClass: "-translate-y-4",
    },
    {
      id: 6,
      name: "Aero",
      img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=150&h=150&fit=crop",
      badge: "⭐",
      badgeColor: "bg-indigo-600",
      tagColor: "bg-indigo-600 text-white",
      arrowColor: "#4F46E5",
      offsetClass: "translate-y-3",
    },
    {
      id: 7,
      name: "Jack",
      img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=150&h=150&fit=crop",
      badge: "J",
      badgeColor: "bg-amber-500",
      tagColor: "bg-amber-500 text-white",
      arrowColor: "#F59E0B",
      offsetClass: "translate-y-1",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between items-center bg-[#FAF8F5] overflow-hidden pt-28 pb-12 px-4 md:px-12 select-none"
    >
      
      {/* ================= BACKGROUND GRADIENT MESH EFFECT ================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Peach/Blush Light leak */}
        <div className="absolute top-[-10%] left-[-15%] w-[450px] md:w-[700px] h-[450px] md:h-[700px] bg-rose-200/35 rounded-full filter blur-[100px] sm:blur-[140px]" />
        
        {/* Soft Mint/Green Light leak */}
        <div className="absolute top-[-15%] right-[-10%] w-[450px] md:w-[700px] h-[450px] md:h-[700px] bg-emerald-100/30 rounded-full filter blur-[110px] sm:blur-[140px]" />
        
        {/* Warm Gold/Amber Light leak */}
        <div className="absolute bottom-[20%] left-[15%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-amber-100/30 rounded-full filter blur-[110px]" />

        {/* Soft Sky Blue leak for high-contrast chromatic richness */}
        <div className="absolute bottom-[5%] right-[5%] w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-sky-100/30 rounded-full filter blur-[100px]" />

        {/* Diagonal dot grid background matrices for industrial blueprint vibe */}
        <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#1A1A2E_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      {/* ================= UNIQUE FLOATING SHAPES ================= */}
      
      {/* Floating 1: Continuous rotating sunburst/asterisk shape (Top-Right) */}
      <motion.div
        className="absolute right-[5%] top-[18%] hidden lg:block pointer-events-none select-none z-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 0V64M0 32H64M9.37 9.37L54.63 54.63M9.37 54.63L54.63 9.37" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="32" cy="32" r="6" fill="#F5E03A" stroke="#1A1A2E" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Floating 2: Left Margin Handdrawn Spring Loop Coil */}
      <div className="absolute left-[3%] md:left-[5%] top-[30%] w-[90px] md:w-[130px] h-[220px] pointer-events-none select-none hidden sm:block z-10">
        <svg width="100%" height="100%" viewBox="0 0 100 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Base wave shadow path */}
          <path
            d="M20 10 C 90 50, -10 110, 80 150 C 130 180, 10 210, 50 235"
            stroke="#1A1A2E"
            strokeWidth="1.5"
            strokeOpacity="0.1"
            strokeLinecap="round"
          />
          {/* Main animated color hand-drawn flow track */}
          <motion.path
            d="M20 10 C 90 50, -10 110, 80 150 C 130 180, 10 210, 50 235"
            stroke="#1A1A2E"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Floating 3: Teardrop (original shape) modernized with gradient & outline shadows */}
      <motion.div
        className="absolute right-[8%] sm:right-[15%] top-[12%] hidden md:block select-none pointer-events-none z-10"
        animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      >
        <div className="relative">
          <div className="teardrop bg-purple animate-pulse" />
          <div className="absolute -inset-1 border border-black/10 rounded-full scale-110 pointer-events-none" />
        </div>
      </motion.div>

      {/* Floating 4: Figma Cursor Badge visual leaks to enhance agency canvas theme */}
      <motion.div
        className="absolute left-[10%] bottom-[35%] hidden xl:flex items-center gap-1.5 pointer-events-none select-none z-10"
        animate={{ y: [0, 8, -8, 0], x: [0, -6, 6, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <svg className="w-5 h-5 text-[#E84545] fill-current drop-shadow-md" viewBox="0 0 24 24">
          <path d="M7 2v14l3.5-3.5 3 6 2.5-1.5-3-5.5 5.5-1V2H7z" />
        </svg>
        <div className="bg-[#E84545] text-white font-sans font-bold text-xs px-2 py-0.5 rounded-[4px] shadow-lg">
          Kunal C. (Active)
        </div>
      </motion.div>

      {/* Floating 5: Creative Score Floating Mini-card Widget (Top Left) */}
      <motion.div
        id="creative-score-card"
        className="absolute left-[6%] top-[18%] hidden lg:flex items-center gap-3 bg-white/70 backdrop-blur-md rounded-2xl border border-black/5 p-3 shadow-lg hover:scale-105 transition-transform duration-300 z-10 cursor-pointer"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ y: -3 }}
      >
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-[#D4EBC8] flex items-center justify-center text-emerald-700">
            <Users className="w-5 h-5" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </span>
        </div>
        <div className="text-left font-sans">
          <div className="text-xs text-stone-400 font-medium">Remote Collabs</div>
          <div className="text-sm font-extrabold text-[#1A1A2E] flex items-center gap-1 leading-none mt-0.5">
            {activeUsers} Live Creators <span className="text-[10px] text-emerald-500">• Ready</span>
          </div>
        </div>
      </motion.div>

      {/* ================= MAIN HERO CONTAINER ================= */}
      <div id="hero-content-wrapper" className="max-w-4xl mx-auto text-center flex flex-col items-center mt-6 md:mt-12 z-20">
        
        {/* Award Trust Badge floating at the top of Hero */}
        <motion.div
          id="hero-award-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 bg-white border border-black/5 rounded-full py-2 px-4 shadow-[0_4px_16px_rgba(0,0,0,0.03)] mb-6 cursor-pointer"
        >
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F5E03A] text-black">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <span className="text-[10px] md:text-[11px] font-sans font-extrabold text-[#1A1A2E] tracking-widest uppercase">
            Aero Collective • Studio of the year 2026 Nominee
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
        </motion.div>

        {/* Large DM Sans / Sans-Serif Heading conforming tightly to user rules, reducing trailing/font spacing */}
        <motion.h1
          id="hero-heading"
          className="font-sans font-extrabold text-[#1A1A2E] leading-[1.02] mb-6 tracking-[-0.035em] md:tracking-[-0.045em] text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl select-none"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Line 1: 'The thinkers and' with hand-drawn yellow underline swoop under 'thinkers' */}
          <div id="hero-line1" className="flex flex-wrap justify-center items-center gap-x-1.5 sm:gap-x-2.5 mb-1 sm:mb-2">
            {line1.map((word, idx) => {
              const isThinkers = word.toLowerCase() === "thinkers";
              return (
                <motion.span
                  id={`word-1-${idx}`}
                  key={idx}
                  variants={wordVariants}
                  className={`relative inline-block ${isThinkers ? "text-navy pr-1 font-extrabold" : ""}`}
                >
                  {word}
                  {isThinkers && (
                    <span className="absolute left-0 -bottom-2 w-full h-3">
                      {/* Artistic cursive hand-drawn swoop underline */}
                      <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                        <path
                          d="M2,6 C35,10 65,8 98,3 C60,6 30,7 2,8"
                          fill="none"
                          stroke="#F5E03A"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  )}
                </motion.span>
              );
            })}
          </div>

          {/* Line 2: 'doers were changing' with changing inside a soft pink capsule pill */}
          <div id="hero-line2" className="flex flex-wrap justify-center items-center gap-x-1.5 sm:gap-x-2.5 mb-1 sm:mb-2">
            {line2.map((word, idx) => {
              const isChanging = word.toLowerCase() === "changing";
              return (
                <motion.span
                  id={`word-2-${idx}`}
                  key={idx}
                  variants={wordVariants}
                  className="inline-block"
                >
                  {isChanging ? (
                    <span className="bg-[#FFD0EC] text-[#1A1A2E] px-4 sm:px-6 py-0.5 sm:py-1 rounded-full font-sans font-extrabold italic tracking-tight inline-block shadow-sm">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              );
            })}
          </div>

          {/* Line 3: 'the status Quo with' with status inside a soft mint green capsule pill */}
          <div id="hero-line3" className="flex flex-wrap justify-center items-center gap-x-1.5 sm:gap-x-2.5">
            {line3.map((word, idx) => {
              const isStatus = word.toLowerCase() === "status";
              return (
                <motion.span
                  id={`word-3-${idx}`}
                  key={idx}
                  variants={wordVariants}
                  className="inline-block"
                >
                  {isStatus ? (
                    <span className="bg-[#C6F1D6] text-[#1A1A2E] px-4 sm:px-6 py-0.5 sm:py-1 rounded-full font-sans font-extrabold tracking-tight inline-block shadow-sm">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </motion.span>
              );
            })}
          </div>
        </motion.h1>

        {/* Subtitle / Description - Copy verbatim from Screenshot 1 */}
        <motion.p
          id="hero-subtitle"
          className="font-sans text-stone-500 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed tracking-wide mb-8 text-center px-4"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          We are a team of strategists, designers communicators, researchers.
          Together, we belive that progress only happens when you refuse to play
          things safe.
        </motion.p>

        {/* Brand New Interative Dual Call-to-Actions (CTAs) to decrease empty space */}
        <motion.div
          id="hero-cta-group"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full px-4"
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
        >
          <a
            id="hero-cta-primary"
            href="#contact"
            className="group w-full sm:w-auto h-[54px] px-8 bg-[#1A1A2E] hover:bg-black text-white rounded-full font-sans font-bold text-sm inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg transition-transform hover:scale-[1.03]"
          >
            <span>Let's Collaborate</span>
            <ArrowUpRight className="w-4 h-4 text-[#F5E03A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            id="hero-cta-secondary"
            href="#studio"
            className="w-full sm:w-auto h-[54px] px-8 bg-white hover:bg-stone-50 text-[#1A1A2E] border border-black/5 rounded-full font-sans font-semibold text-sm inline-flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors"
          >
            <Play className="w-3.5 h-3.5 text-stone-400 fill-current" />
            <span>Explore Studio</span>
          </a>
        </motion.div>
      </div>

      {/* Floating dynamic avatars at the bottom of the landing page */}
      <div id="collab-avatars-row" className="w-full max-w-5xl mx-auto mt-6 md:mt-12 flex justify-center items-center gap-2 sm:gap-4 md:gap-5 px-4 z-20">
        {collaboratorAvatars.map((collab, index) => (
          <motion.div
            id={`avatar-container-${collab.id}`}
            key={collab.id}
            className={`relative flex flex-col items-center ${collab.offsetClass}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2 + index * 0.08,
            }}
          >
            {/* Avatar block */}
            <div className="relative group cursor-pointer">
              <img
                id={`avatar-pic-${collab.id}`}
                src={collab.img}
                alt={collab.name}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full object-cover border-2 sm:border-3 border-white shadow-md hover:scale-105 transition-transform duration-200"
                referrerPolicy="no-referrer"
              />

              {/* Status Indicator bubble / Figma collaborator pointer indicator */}
              <span className={`absolute -top-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 ${collab.badgeColor} text-[8px] sm:text-[10px] text-white flex items-center justify-center rounded-full border-2 border-white font-sans font-bold shadow-xs`}>
                {collab.badge}
              </span>

              {/* Live Figma tag annotation (e.g., user cursor tooltips for all avatars) */}
              <div 
                className={`absolute -bottom-8 left-1/2 -translate-x-1/2 ${collab.tagColor} text-[9px] sm:text-[11px] font-sans font-bold py-0.5 px-2.5 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-30`}
              >
                <span className="relative block">
                  {collab.name}
                  <span 
                    className="absolute -top-[12px] left-[4px] border-solid border-b-4 border-x-transparent border-x-4 border-t-0" 
                    style={{ borderBottomColor: collab.arrowColor }} 
                  />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Sleek Scrolling Trust Partner Logos Grid */}
      <motion.div
        id="hero-partners-block"
        className="w-full max-w-5xl mx-auto border-t border-[#1A1A2E]/5 mt-16 md:mt-24 pt-8 flex flex-col items-center gap-4 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
      >
        <span className="text-[10px] font-sans font-bold text-stone-400 tracking-[0.16em] uppercase">
          Trusted by the most ambitious brand builders globally
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-40 hover:opacity-60 transition-opacity duration-300">
          <span className="font-sans font-black text-sm tracking-widest text-[#1A1A2E] lg:text-base">SLACK</span>
          <span className="text-[#1A1A2E]/25">•</span>
          <span className="font-sans font-extrabold text-sm tracking-widest text-[#1A1A2E] lg:text-base">STRIPE</span>
          <span className="text-[#1A1A2E]/25">•</span>
          <span className="font-sans font-black italic text-sm tracking-wide text-[#1A1A2E] lg:text-base">NIKE</span>
          <span className="text-[#1A1A2E]/25">•</span>
          <span className="font-sans font-extrabold text-sm tracking-wider text-[#1A1A2E] lg:text-base">GOOGLE</span>
          <span className="text-[#1A1A2E]/25">•</span>
          <span className="font-sans font-black text-sm tracking-tight text-[#1A1A2E] lg:text-base">FIGMA</span>
        </div>
      </motion.div>

    </section>
  );
}
