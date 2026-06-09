import { motion } from "motion/react";

export default function Testimonials() {
  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  // Surrounding floating avatars to frame the central feedback card elegantly
  const avatarConfigs = [
    {
      id: 11,
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      sizeClass: "w-14 h-14 sm:w-16 sm:h-16",
      posClass: "left-[5%] xl:left-[10%] top-[20%]",
      initX: -30,
      initY: -30,
      floatSpeed: 4,
    },
    {
      id: 12,
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      sizeClass: "w-16 h-16 sm:w-20 sm:h-20",
      posClass: "right-[5%] xl:right-[10%] top-[15%]",
      initX: 30,
      initY: -30,
      floatSpeed: 5,
    },
    {
      id: 13,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      sizeClass: "w-12 h-12 sm:w-14 sm:h-14",
      posClass: "left-[3%] xl:left-[8%] bottom-[25%]",
      initX: -30,
      initY: 30,
      floatSpeed: 4.5,
    },
    {
      id: 14,
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop",
      sizeClass: "w-18 h-18 sm:w-22 sm:h-22",
      posClass: "right-[4%] xl:right-[8%] bottom-[20%]",
      initX: 30,
      initY: 30,
      floatSpeed: 5.5,
    },
    {
      id: 15,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      sizeClass: "w-10 h-10 sm:w-12 sm:h-12",
      posClass: "left-[15%] xl:left-[20%] top-[45%]",
      initX: -20,
      initY: 0,
      floatSpeed: 3.8,
    },
    {
      id: 16,
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      sizeClass: "w-10 h-10 sm:w-12 sm:h-12",
      posClass: "right-[15%] xl:right-[18%] top-[50%]",
      initX: 20,
      initY: 0,
      floatSpeed: 4.2,
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#FCFCFC] px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-28 overflow-hidden text-center"
    >
      {/* Scattered floating client avatar portraits */}
      {avatarConfigs.map((avatar) => (
        <motion.img
          id={`avatar-testimonial-${avatar.id}`}
          key={avatar.id}
          src={avatar.img}
          alt={`Client thumbnail ${avatar.id}`}
          className={`absolute rounded-full object-cover border-4 border-white shadow-lg hidden md:block select-none pointer-events-none z-0 ${avatar.sizeClass} ${avatar.posClass}`}
          initial={{ x: avatar.initX, y: avatar.initY, opacity: 0 }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.7,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true, margin: "-100px" }}
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: avatar.floatSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          referrerPolicy="no-referrer"
        />
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Testimonials Header conforming visually to Screenshot 3 */}
        <motion.div
          id="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            id="testimonials-title"
            className="font-sans font-extrabold text-[#1A1A2E] text-4xl sm:text-5xl md:text-[54px] leading-[1.1] tracking-tight max-w-2xl mx-auto"
          >
            <span className="bg-[#C6F1D6] px-5 py-1.5 rounded-full font-bold inline-block shadow-xs mr-2 relative -bottom-1">
              What
            </span>{" "}
            our customer says <br />
            <span id="about-us-wrap" className="relative inline-block pr-1 mt-2">
              About Us
              <span className="absolute left-0 bottom-[-4px] w-full h-3">
                {/* Golden hand-drawn cursive swoop underline */}
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
        </motion.div>

        {/* Highlight Main Testimonial Statement Card */}
        <motion.div
          id="test-card-element"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="bg-white rounded-[32px] border border-gray-100 shadow-[0_12px_60px_rgba(0,0,0,0.04)] p-8 md:p-14 max-w-2xl mx-auto text-left relative transition-shadow duration-300 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
        >
          {/* Big opening decorative smart double quote */}
          <div
            id="open-quote-sym"
            className="font-serif font-black text-coral text-[96px] md:text-[110px] leading-none select-none h-8 -mt-4 text-left font-serif"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            “
          </div>

          {/* Testimonial Quote copying exactly verbatim representation in Screenshot 3 */}
          <p
            id="testimonial-quote-body"
            className="font-sans text-gray-500 text-base sm:text-lg leading-[1.8] tracking-wide my-6 select-text"
          >
            Elementum delivered the site with in the timeline as they requested.
            In the end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn't used, which have also proved to be
            easy to use and reliable.
          </p>

          {/* Big closing decorative smart double quote */}
          <div
            id="close-quote-sym"
            className="font-serif font-black text-coral text-[96px] md:text-[110px] leading-none select-none h-6 text-right font-serif flex justify-end"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            ”
          </div>

          {/* Real Author Details */}
          <div id="author-info-block" className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
            <div id="author-pict-placeholder" className="w-12 h-12 rounded-full bg-[#C6F1D6] flex items-center justify-center font-extrabold text-[#1A1A2E] text-sm">
              EL
            </div>
            <div>
              <h4 id="author-realname" className="font-sans font-bold text-[#1A1A2E] text-[15px]">Elizabeth Larry</h4>
              <p id="author-company" className="font-sans text-xs text-gray-400">Project Principal, Aero Group</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
