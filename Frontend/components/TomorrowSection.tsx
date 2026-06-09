import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function TomorrowSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const textVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -60, y: isMobile ? 24 : 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : 60, y: isMobile ? 24 : 0, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="studio"
      className="relative w-full bg-white px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-28 overflow-hidden"
    >
      {/* Decorative connecting red flowing curve SVG line from top-left to middle-right */}
      <div className="absolute left-[-5%] top-[-10%] w-[110%] h-[120%] pointer-events-none select-none hidden lg:block z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M -10 100 C 500 200, 100 600, 1500 200"
            stroke="#ffcccc"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center justify-center relative z-10">
        {/* Left Column: Text Content conforming precisely to Screenshot 7 */}
        <motion.div
          id="tomorrow-left-col"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-start text-left max-w-xl"
        >
          <span
            id="tomorrow-label"
            className="text-gray-400 font-sans font-bold text-sm tracking-widest uppercase mb-4"
          >
            Tomorrow should
          </span>
          <h2
            id="tomorrow-heading"
            className="font-sans font-extrabold text-[#1A1A2E] text-4xl sm:text-5xl md:text-[54px] leading-[1.1] tracking-tight mb-8"
          >
            be{" "}
            <span id="better-wrap" className="relative inline-block pr-1">
              better
              <span className="absolute left-0 -bottom-2 w-full h-3">
                {/* Hand-drawn yellow underline under better */}
                <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <path
                    d="M1,5 C30,9 60,8 99,3 C60,5 30,6 1,7"
                    fill="none"
                    stroke="#F5E03A"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>{" "}
            than{" "}
            <span className="bg-[#C6F1D6] px-5 py-1.5 rounded-full font-bold inline-block shadow-xs">
              today
            </span>
          </h2>

          <p
            id="tomorrow-description"
            className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed tracking-wide mb-10 select-text"
          >
            We are a team of strategists, designers communicators, researchers.
            Together, we belive that progress only happens when you refuse to
            play things safe.
          </p>

          {/* Read more with dynamic line arrow */}
          <a
            id="tomorrow-read-more"
            href="#services"
            className="group flex items-center justify-between w-full sm:w-[320px] text-coral font-sans font-bold text-base transition-all duration-300 gap-4"
          >
            <span className="shrink-0">Read more</span>
            {/* Long thin horizontal rule */}
            <div className="h-[2px] bg-coral/10 group-hover:bg-coral w-full transition-all duration-300 origin-left transform scale-x-90 group-hover:scale-x-100" />
            <span
              id="tomorrow-arrow"
              className="inline-block transition-transform duration-300 group-hover:translate-x-[6px] shrink-0 font-bold"
            >
              →
            </span>
          </a>
        </motion.div>

        {/* Right Column: Circular Image & Yellow Offset Border & Red triangle */}
        <motion.div
          id="tomorrow-right-col"
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative flex justify-center items-center py-10 lg:py-0"
        >
          {/* Main composition: circular meeting photo wrapped by offset yellow line border square */}
          <div id="tomorrow-comp-wrapper" className="relative p-6">
            
            {/* Yellow Outline Square offset background frame */}
            <div className="absolute top-0 left-0 w-full h-full border-4 border-[#F5E03A] rounded-[24px] pointer-events-none select-none z-0 transform translate-x-3 translate-y-3" />

            {/* The circular photo inside the square boundary container */}
            <div className="relative bg-white p-2 rounded-[24px] shadow-xl z-10">
              <img
                id="tomorrow-meeting-img"
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=500&fit=crop"
                alt="Creative agency meeting, tomorrow better today"
                className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full object-cover border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Red Solid Triangle on the top-right of image */}
            <motion.div
              id="tomorrow-triangle-decor"
              className="absolute -top-3 -right-3 z-20 pointer-events-none select-none"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Solid Coral red triangle */}
              <div className="triangle" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
