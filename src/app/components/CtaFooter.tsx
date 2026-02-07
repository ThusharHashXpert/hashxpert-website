import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function CtaFooter() {
  const ctaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  });

  const ctaY = useTransform(ctaProgress, [0, 1], [50, -50]);

  return (
    <section ref={ctaRef} className="relative py-32 px-4 overflow-hidden">
      <motion.div
        style={{ y: ctaY }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 opacity-95 z-10" />
        <ImageWithFallback
          src="/assets/cta-bg-digital-security-blue.jpg"
          alt="Secure IT solutions background"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Main CTA Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-20 max-w-4xl mx-auto text-center text-white"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Let's collaborate to bring your vision to life
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          Contact Us
          <ArrowRight size={20} />
        </Link>
      </motion.div>

      {/* Mini Footer Links + Copyright */}
      <div className="absolute bottom-6 left-6 right-6 z-30 flex flex-col sm:flex-row items-center justify-between text-white/80 text-sm gap-4 sm:gap-0">
        {/* Left side: LinkedIn + Copyright */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/company/hashxpert-technologies-llc/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on LinkedIn"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Copyright symbol + text */}
          <span className="text-white/70">
            © HashXpert
          </span>
        </div>

        {/* Right side: Legal links */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link to="/privacy" className="hover:text-white hover:underline transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white hover:underline transition-colors">
            Terms of Service
          </Link>
          <Link to="/faq" className="hover:text-white hover:underline transition-colors">
            FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}