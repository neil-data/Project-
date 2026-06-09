import { motion } from "motion/react";

export default function ServicesSection() {
  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Exact row items corresponding to Screenshot 4
  const services = [
    {
      id: 1,
      left: "Office of multiple interest content",
      center: "Colaborative & partnership",
      hasSticker: false,
    },
    {
      id: 2,
      left: "The hanger US Air force digital experimental",
      center: "We talk about our weight",
      hasSticker: false,
    },
    {
      id: 3,
      left: "Delta faucet content, social, digital",
      center: "Piloting digital confidence",
      hasSticker: true,
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full bg-white px-6 py-16 md:px-12 md:py-24 lg:px-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Area */}
        <div id="services-header-wrapper" className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <motion.div
            id="services-heading-block"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-start text-left"
          >
            <h2
              id="services-title"
              className="font-sans font-extrabold text-[#1A1A2E] text-4xl sm:text-5xl md:text-[54px] leading-[1.1] tracking-tight"
            >
              What we{" "}
              <span className="bg-[#C6F1D6] px-5 py-1.5 rounded-full font-bold inline-block shadow-xs mr-2 relative -bottom-1">
                can
              </span>{" "}
              <br className="hidden md:block" />
              <span id="offer-wrap" className="relative inline-block pr-1">
                offer
                <span className="absolute left-0 -bottom-2 w-full h-3">
                  {/* Hand-drawn yellow underline under offer */}
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
              you!
            </h2>
          </motion.div>

          {/* Red squiggly line representing dynamic hand-drawn connector flow */}
          <div className="w-[180px] h-[30px] hidden md:block select-none pointer-events-none mb-4 self-end">
            <svg
              id="squiggly-svg-services"
              width="100%"
              height="100%"
              viewBox="0 0 180 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                id="services-squiggly-path"
                d="M 0 15 C 20 5, 40 25, 60 15 C 80 5, 100 25, 120 15 C 140 5, 160 25, 180 15"
                stroke="#E84545"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </div>

        {/* Services Rows List */}
        <motion.div
          id="services-rows-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="border-t border-gray-100 flex flex-col"
        >
          {services.map((service) => (
            <motion.div
              id={`service-row-${service.id}`}
              key={service.id}
              variants={rowVariants}
              whileHover={{ backgroundColor: "rgba(250, 250, 250, 1)" }}
              className="group border-b border-gray-100 py-8 md:py-10 px-4 md:px-0 transition-all duration-200 cursor-pointer relative"
            >
              <div
                id={`service-row-grid-${service.id}`}
                className="grid grid-cols-1 md:grid-cols-[30%_52%_18%] gap-4 md:gap-0 items-center justify-between"
              >
                {/* Left Description / Context (DM Sans, matching Screenshot 4 exactly) */}
                <div
                  id={`service-row-left-${service.id}`}
                  className="font-sans text-gray-400 text-[13px] sm:text-sm tracking-wide leading-relaxed pr-6"
                >
                  {service.left}
                </div>

                {/* Center Main Service Title (DM Sans bold, matching Screenshot 4) */}
                <div
                  id={`service-row-center-${service.id}`}
                  className="font-sans font-extrabold text-[#1A1A2E] text-lg sm:text-xl md:text-2xl tracking-tight text-left relative flex items-center gap-4"
                >
                  <span className="relative z-10">{service.center}</span>

                  {/* Overlapping yellow vintage confidence circular badge/sticker for Service 3 */}
                  {service.hasSticker && (
                    <motion.div
                      id="confidence-stamp-sticker"
                      className="inline-flex shrink-0 h-14 w-14 rounded-full bg-[#F5E03A] text-black border-[2px] border-black text-[8px] font-mono font-black uppercase text-center items-center justify-center p-1 shadow-md select-none pointer-events-none rotate-12"
                      animate={{ rotate: [12, 18, 12] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <span className="leading-none text-[7px]">CONFIDENCE</span>
                        <span className="text-[10px] font-sans font-black">100%</span>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Right Arrow (Elegant, wide, shifting beautifully on row hover) */}
                <div
                  id={`service-row-right-${service.id}`}
                  className="flex items-center md:justify-end text-right"
                >
                  <span
                    id={`service-arrow-${service.id}`}
                    className="text-[#1A1A2E]/30 font-extrabold text-2xl md:text-3xl transition-all duration-300 group-hover:text-coral transform group-hover:translate-x-3 inline-block"
                  >
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
