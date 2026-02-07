import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Lock, Database, AlertTriangle, Users, FileCheck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';

export function SecuritySolutions() {
  const headerRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const complianceRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: featuresProgress } = useScroll({
    target: featuresRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: complianceProgress } = useScroll({
    target: complianceRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(headerProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(headerProgress, [0, 1], [1, 0]);
  const featuresY = useTransform(featuresProgress, [0, 1], [80, -80]);
  const complianceY = useTransform(complianceProgress, [0, 1], [50, -50]);

  const securityFeatures = [
    {
      icon: Shield,
      title: "Endpoint Security",
      description: "Secure endpoints or entry points of end-user devices such as desktops, laptops, and mobile devices from being exploited by malicious actors and campaigns.",
    },
    {
      icon: Lock,
      title: "Network Security",
      description: "Protect the usability and integrity of your network and data.",
    },
    {
      icon: Database,
      title: "Data Security",
      description: "Protecting corporate data and preventing data loss through unauthorized access.",
    },
    {
      icon: AlertTriangle,
      title: "Detection and Response Solutions",
      description: "Solution for obtaining full visibility to both known and unknown threats that cross your network.",
    },
    {
      icon: Users,
      title: "Access Management",
      description: "Effectively managing the flow of people and restricting access where there is a need.",
    },
    {
      icon: FileCheck,
      title: "Cybersecurity Solutions",
      description: "Protecting applications, networks & data with comprehensive security approaches.",
    },
  ];

  const compliancePoints = [
    { number: "1", title: "End-to-End Strategy", text: "Protecting applications, networks & data with comprehensive security approaches." },
    { number: "2", title: "Threat Intelligence", text: "Preventing, detecting, and responding to threats with proactive security measures." },
    { number: "3", title: "Compliance-Driven", text: "Adhering to GDPR, ISO 27001, SOC2 standards for regulatory compliance." },
  ];

  return (
    <div className="bg-white">
      {/* Header with Parallax */}
      <div ref={headerRef} className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-800/70 z-10" />
          <ImageWithFallback
            src="/assets/security-hero.jpg" // ← change to your actual security hero image
            alt="Cybersecurity protection"
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
            Security Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/95 font-light drop-shadow-lg max-w-3xl mx-auto"
          >
            Advanced protection for your digital world
          </motion.p>
        </motion.div>
      </div>

      {/* Main Security Features */}
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
              Comprehensive Security Features
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Protecting every layer of your digital infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <feature.icon className="text-white" size={32} />
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

      {/* Compliance & Strategy Highlights */}
      <section ref={complianceRef} className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <motion.div
          style={{ y: complianceY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-100/20 rounded-full blur-3xl" />
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
              Our Security Approach
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Built on strategy, intelligence, and compliance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {compliancePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center transition-all duration-300 hover:shadow-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white text-2xl font-bold">{point.number}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {point.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {point.text}
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
            Trusted Security Partners
            </h3>
            <p className="mt-3 text-lg text-gray-600">
            Collaborating with leading organizations to deliver world-class protection
            </p>
        </div>

        {/* Marquee wrapper */}
        <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap will-change-transform">
            {/* First set */}
            {Array.from({ length: 14 }).map((_, i) => (
                <div
                key={i}
                className="mx-8 md:mx-12 lg:mx-16 flex-shrink-0"
                >
                <img
                    src={`/assets/Securitypartners/partner-${i + 1}.png`} // ← change path & naming pattern
                    alt={`Security Partner ${i + 1}`}
                    className="marquee-logo h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain transition-all duration-300"
                    loading="lazy"
                />
                </div>
            ))}

            {/* Exact duplicate for seamless infinite loop */}
            {Array.from({ length: 14 }).map((_, i) => (
                <div
                key={`dup-${i}`}
                className="mx-8 md:mx-12 lg:mx-16 flex-shrink-0"
                >
                <img
                    src={`/assets/Securitypartners/partner-${i + 1}.png`}
                    alt={`Security Partner ${i + 1}`}
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