import { motion } from "motion/react";

export default function Footer() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer
      id="contact"
      className="bg-[#D7EED6] px-6 py-16 md:px-12 md:py-24 lg:p-24 text-[#1A1A2E] overflow-hidden relative border-t border-[#1A1A2E]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* 4-column balanced layout matching updated navbar structure */}
        <motion.div
          id="footer-columns-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >
          {/* Column 1: Navigation Menu */}
          <motion.div
            id="footer-col-1"
            variants={columnVariants}
            className="flex flex-col gap-6"
          >
            <div
              id="footer-logo"
              className="font-sans font-extrabold text-2xl tracking-tight text-[#1A1A2E] mb-2"
            >
              Elementum
            </div>
            <div id="footer-col-1-links" className="flex flex-col gap-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Studio", href: "#studio" },
                { name: "Services", href: "#services" },
                { name: "Contact", href: "#contact" },
                { name: "FAQs", href: "#testimonials" },
              ].map((link) => (
                <a
                  id={`footer-nav-${link.name.toLowerCase()}`}
                  key={link.name}
                  href={link.href}
                  className="font-sans text-sm text-stone-600 hover:text-black hover:underline transition-all duration-200 self-start"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Terms & Policies */}
          <motion.div
            id="footer-col-2"
            variants={columnVariants}
            className="flex flex-col gap-6"
          >
            <h4
              id="terms-policies-header"
              className="font-sans font-bold text-xs tracking-widest text-[#1A1A2E]/60 uppercase"
            >
              Terms & Policies
            </h4>
            <div id="footer-col-2-links" className="flex flex-col gap-3">
              {[
                { name: "Privacy Policy", href: "#" },
                { name: "Terms & Conditions", href: "#" },
                { name: "Careers", href: "#" },
                { name: "Events", href: "# cursor" },
                { name: "Alumni", href: "#" },
              ].map((item) => (
                <a
                  id={`footer-policy-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                  key={item.name}
                  href={item.href}
                  className="font-sans text-sm text-stone-600 hover:text-black hover:underline transition-all duration-200 self-start"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Follow Us */}
          <motion.div
            id="footer-col-3"
            variants={columnVariants}
            className="flex flex-col gap-6"
          >
            <h4
              id="follow-us-header"
              className="font-sans font-bold text-xs tracking-widest text-[#1A1A2E]/60 uppercase"
            >
              Follow Us
            </h4>
            <div id="footer-col-3-links" className="flex flex-col gap-3">
              {["Instagram", "LinkedIn", "Twitter", "Twitch"].map((social) => (
                <a
                  id={`footer-social-${social.toLowerCase()}`}
                  key={social}
                  href={`https://${social.toLowerCase()}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-stone-600 hover:text-black hover:underline transition-all duration-200 self-start"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 4: Terms & Policies (Address & Info as shown in Screenshot 2) */}
          <motion.div
            id="footer-col-4"
            variants={columnVariants}
            className="flex flex-col gap-6 text-left"
          >
            <h4
              id="scoop-contact-header"
              className="font-sans font-bold text-xs tracking-widest text-[#1A1A2E]/60 uppercase"
            >
              Terms & Policies
            </h4>
            <div id="footer-col-4-info" className="flex flex-col gap-4 font-sans text-sm text-stone-600">
              <p id="footer-address" className="leading-relaxed">
                Ahmedabad Digital 986, <br />
                D Street, G-1000
              </p>
              <p id="footer-phone" className="hover:text-black transition-colors">
                <a href="tel:+374000000000">+374 (000) 000 00 00</a>
              </p>
              <p id="footer-email" className="hover:text-black transition-colors">
                <a href="mailto:info@elementum.com">info@elementum.com</a>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom copyright row with clean rules */}
        <div
          id="footer-copyright-row"
          className="pt-8 border-t border-[#1A1A2E]/10 text-center flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div
            id="copyright-text"
            className="font-sans text-sm text-stone-500"
          >
            © 2026 Elementum. All rights reserved.
          </div>
          <div id="author-credit" className="font-sans text-xs text-stone-400 hidden md:block select-none pointer-events-none">
            Crafted for premium digital agencies and design thinkers.
          </div>
        </div>
      </div>
    </footer>
  );
}
