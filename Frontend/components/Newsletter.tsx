import { useState, FormEvent } from "react";
import { motion } from "motion/react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3500);
    }
  };

  return (
    <section
      id="newsletter"
      className="relative w-full bg-[#D7EED6] px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 text-center overflow-hidden"
    >
      {/* Decorative background spinning teardrop shape (purple crescent / partial shape) */}
      <div className="absolute right-[5%] md:right-[10%] top-[15%] hidden sm:block pointer-events-none select-none z-0">
        <motion.div
           className="w-[120px] h-[120px] rounded-full border-[16px] border-purple-400/20 border-r-transparent border-b-transparent"
           animate={{ rotate: 360 }}
           transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        />
      </div>

      {/* Decorative wavy hand-drawn curves pointing downward on the left */}
      <div className="absolute left-[5%] top-[15%] w-[120px] h-[120px] pointer-events-none select-none opacity-30 hidden md:block">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,10 Q40,30 20,60 T80,90" stroke="#E84545" strokeWidth="4" fill="none" strokeLinecap="round" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Heading: DM Sans Bold with correct pills and lines conforming to Screenshots */}
        <motion.h2
          id="newsletter-heading"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="font-sans font-extrabold text-[#1A1A2E] leading-[1.1] tracking-tight text-3xl sm:text-5xl md:text-[54px] mb-6 max-w-2xl text-center select-none"
        >
          <motion.span variants={wordVariants} className="bg-[#1A1A2E] text-white px-6 py-2 rounded-full font-bold inline-block shadow-sm mr-2 relative -bottom-1">
            Subscribe
          </motion.span>{" "}
          <motion.span variants={wordVariants} className="inline-block">to our</motion.span> <br className="sm:hidden" />
          <motion.span variants={wordVariants} id="newsletter-word-wrap" className="relative inline-block pr-1 mt-2">
            newsletter
            <span className="absolute left-0 bottom-[-4px] w-full h-3">
              {/* Hand-drawn yellow underline under newsletter */}
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
          </motion.span>
        </motion.h2>

        {/* Subtext copying Screenshot verbatim */}
        <motion.p
          id="newsletter-subtext"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-sans text-stone-600 text-sm sm:text-base md:text-lg max-w-lg mb-12"
        >
          To make your stay special and even more memorable
        </motion.p>

        {/* Input & Subscribe form block */}
        <div id="newsletter-form-container" className="w-full max-w-lg">
          {isSubmitted ? (
            <motion.div
              id="newsletter-success-toast"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-[#1A1A2E] text-white text-base font-sans font-bold px-8 py-5 rounded-[20px] shadow-2xl"
            >
              🎉 Success! You have successfully subscribed to Elementum.
            </motion.div>
          ) : (
            <form
              id="subscribe-form"
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
            >
              <input
                id="newsletter-email-input"
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 h-[60px] px-6 rounded-full border-none bg-white font-sans text-sm text-[#1A1A2E] placeholder-stone-400 focus:outline-hidden focus:ring-2 focus:ring-[#1A1A2E]/20 transition-all shadow-md"
              />

              <div id="btn-pulse-wrapping" className="relative w-full sm:w-auto shrink-0 animate-none">
                <motion.button
                  id="submit-news-btn"
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto h-[60px] px-10 bg-[#1A1A2E] hover:bg-black text-white rounded-full font-sans font-bold text-base cursor-pointer transition-colors shadow-md"
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
