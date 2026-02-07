import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Router, Wifi, Activity } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';

export function Networking() {
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: featuresProgress } = useScroll({
    target: featuresRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(headerProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(headerProgress, [0, 1], [1, 0]);
  const featuresY = useTransform(featuresProgress, [0, 1], [80, -80]);

  const networkingFeatures = [
    {
      icon: Router,
      title: "Switching and Routing",
      description: "End to end Networking and Routing Solutions designed to enhance data flow and connectivity efficiency within your organization.",
    },
    {
      icon: Wifi,
      title: "Wireless and Networking",
      description: "Wireless and Mobile networking solutions that support flexible and scalable access for users on the go, ensuring uninterrupted connectivity.",
    },
    {
      icon: Activity,
      title: "Network Performance Monitoring",
      description: "Visualize, monitor, optimize, troubleshoot and report on the health and availability of your network to ensure optimal operation and performance.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Header with Parallax */}
      <div ref={headerRef} className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-800/70 z-10" />
          <ImageWithFallback
            src="/assets/networking-hero.jpg" // ← replace with your actual networking hero image
            alt="Networking Solutions"
            className="w-full h-full object-cover brightness-75"
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl"
          >
            Networking
          </motion.h1>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/95 font-light drop-shadow-lg max-w-3xl mx-auto"
          >
            Connecting people, devices, and data securely and efficiently
          </motion.p>
        </motion.div>
      </div>

      {/* Core Networking Features */}
      <section ref={featuresRef} className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-white relative overflow-hidden">
        <motion.div
          style={{ y: featuresY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Networking Capabilities
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Building the foundation for secure, high-performance connectivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {networkingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center transition-all duration-300 hover:shadow-2xl"
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                  <feature.icon className="text-white" size={40} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Logos – Infinite right-to-left marquee */}
      <section className="py-16 md:py-20 bg-white overflow-hidden border-t border-gray-100">
        <div className="text-center mb-10 md:mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted Networking Partners
          </h3>
          <p className="mt-3 text-lg text-gray-600">
            Collaborating with leading brands to deliver reliable connectivity
          </p>
        </div>

        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap will-change-transform">
            {/* First set of 6 logos */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="mx-8 md:mx-12 lg:mx-16 flex-shrink-0">
                <img
                  src={`/assets/Networkingpartners/partner-${i + 1}.png`} // ← update path & file names
                  alt={`Networking Partner ${i + 1}`}
                  className="marquee-logo h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`dup-${i}`} className="mx-8 md:mx-12 lg:mx-16 flex-shrink-0">
                <img
                  src={`/assets/Networkingpartners/partner-${i + 1}.png`}
                  alt={`Networking Partner ${i + 1}`}
                  className="marquee-logo h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFooter />
    </div>
  );
}