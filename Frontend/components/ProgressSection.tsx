import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function ProgressSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    setIsMobile(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const imageContainerVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -60, y: isMobile ? 24 : 0, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : 60, y: isMobile ? 24 : 0 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="progress"
      className="relative w-full bg-white px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-28 overflow-hidden"
    >
      {/* Curved SVG connecting line curving from top-right to bottom-left */}
      <div className="absolute left-[-10%] top-[-10%] w-[120%] h-[120%] pointer-events-none select-none hidden lg:block z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M 1200 100 C 600, 300, 1000, 700, -50 900"
            stroke="#ffcccc"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center justify-center relative z-10">
        {/* Left Column: Image on Desktop, stacked first on mobile */}
        <motion.div
          id="progress-left-col"
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative flex justify-center items-center py-10 lg:py-0 order-2 lg:order-1"
        >
          {/* Main layout: circular image with red/pink triangles on corners and live cursor tag */}
          <div id="progress-image-relative-container" className="relative p-6">
            
            {/* Soft pink circle outline offset frame */}
            <div className="absolute top-0 left-0 w-full h-full border-4 border-dashed border-[#FFD0EC] rounded-[24px] pointer-events-none select-none z-0 transform -translate-x-3 -translate-y-3" />

            {/* Circular image wrapping container with nice shadows */}
            <div className="relative bg-white p-2 rounded-[24px] shadow-xl z-10">
              <img
                id="progress-main-image"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=500&fit=crop"
                alt="Creative designer workspace progress details"
                className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full object-cover border-4 border-white"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Red Solid Triangle on Top-Left of image */}
            <motion.div
              id="progress-triangle-decor-top"
              className="absolute -top-3 left-4 z-20 pointer-events-none select-none"
              animate={{ rotate: [10, -10, 10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="triangle" />
            </motion.div>

            {/* Soft Pink Triangle on Bottom-Right of image */}
            <motion.div
              id="progress-triangle-decor-bottom"
              className="absolute -bottom-3 right-4 z-20 pointer-events-none select-none"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-0 h-0 border-left-[15px] border-left-transparent border-right-[15px] border-right-transparent border-bottom-[26px] border-bottom-[#FFD0EC]" />
            </motion.div>

            {/* Interactive Figma Collaborator tag - 'Kunal Chaudhary' with Pink cursor indicator! */}
            <div className="absolute top-[15%] right-[-15%] xl:right-[-10%] z-30 pointer-events-none select-none hidden sm:block">
              {/* Custom hand cursor icon plus floating label */}
              <div className="flex items-center gap-1">
                {/* Pointer Arrow */}
                <svg className="w-5 h-5 text-pink-500 fill-current drop-shadow-sm filter" viewBox="0 0 24 24">
                  <path d="M7 2v14l3.5-3.5 3 6 2.5-1.5-3-5.5 5.5-1V2H7z" />
                </svg>
                {/* Label container */}
                <div className="bg-pink-500 text-white font-sans font-bold text-[11px] sm:text-[12px] px-2.5 py-1 rounded-[4px] shadow-md tracking-wide">
                  Kunal Chaudhary
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Text block with DM Sans Extrabold and swoop line */}
        <motion.div
          id="progress-right-col"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-start text-left max-w-xl order-1 lg:order-2"
        >
          <h2
            id="progress-heading"
            className="font-sans font-extrabold text-[#1A1A2E] text-4xl sm:text-5xl md:text-[54px] leading-[1.1] tracking-tight mb-8"
          >
            <span className="bg-[#C6F1D6] px-5 py-1.5 rounded-full font-bold inline-block shadow-xs mr-2 relative -bottom-1">
              See
            </span>{" "}
            how we can help you{" "}
            <span id="progress-wrap" className="relative inline-block pr-1">
              progress
              <span className="absolute left-0 -bottom-2 w-full h-3">
                {/* Hand-drawn yellow underline under progress */}
                <svg viewBox="0 0 100 10" preserveAspectRatio="none" className="w-full h-full overflow-visible">
                  <path
                    d="M1,5 C30,9 65,8 99,3 C60,5 30,6 1,7"
                    fill="none"
                    stroke="#F5E03A"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h2>

          <p
            id="progress-description"
            className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed tracking-wide mb-10 select-text"
          >
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand,
            design, digital, comms and social research.
          </p>

          {/* Read more with dynamic line arrow */}
          <a
            id="progress-read-more"
            href="#contact"
            className="group flex items-center justify-between w-full sm:w-[320px] text-coral font-sans font-bold text-base transition-all duration-300 gap-4"
          >
            <span className="shrink-0">Read more</span>
            {/* Long thin horizontal rule */}
            <div className="h-[2px] bg-coral/10 group-hover:bg-coral w-full transition-all duration-300 origin-left transform scale-x-90 group-hover:scale-x-100" />
            <span
              id="progress-arrow"
              className="inline-block transition-transform duration-300 group-hover:translate-x-[6px] shrink-0 font-bold"
            >
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
