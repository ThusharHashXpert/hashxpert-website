import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Cloud, Server, Database, ShieldCheck, RefreshCw, Lock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';

export function CloudSolutions() {
  const headerRef = useRef<HTMLDivElement>(null);
  const architectureRef = useRef<HTMLDivElement>(null);
  const modelsRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: archProgress } = useScroll({
    target: architectureRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: modelsProgress } = useScroll({
    target: modelsRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: securityProgress } = useScroll({
    target: securityRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(headerProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(headerProgress, [0, 1], [1, 0]);
  const archY = useTransform(archProgress, [0, 1], [80, -80]);
  const modelsY = useTransform(modelsProgress, [0, 1], [60, -60]);
  const securityY = useTransform(securityProgress, [0, 1], [50, -50]);

  return (
    <div className="bg-white">
      {/* Header with Parallax */}
      <div ref={headerRef} className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-800/70 z-10" />
          <ImageWithFallback
            src="/assets/cloud-hero.jpg"
            alt="Cloud Solutions"
            className="w-full h-full object-cover brightness-90 md:brightness-75"
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
            Cloud Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/95 font-light drop-shadow-lg max-w-3xl mx-auto"
          >
            Scalable, secure, and future-ready cloud infrastructure
          </motion.p>
        </motion.div>
      </div>

      {/* Cloud Architecture – slightly reduced bottom padding */}
      <section ref={architectureRef} className="py-20 md:py-24 pb-12 md:pb-16 px-4 md:px-6 lg:px-8 bg-white relative overflow-hidden">
        <motion.div
          style={{ y: archY }}
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
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cloud Architecture
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Hybrid & Multi-Cloud Implementations – AWS, Azure, Google Cloud.  
              Cloud Migration & Optimization – Seamless transition to cloud-native.  
              Cloud Compliance & Governance – Ensuring security & risk management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Models – reduced padding */}
      <section ref={modelsRef} className="py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <motion.div
          style={{ y: modelsY }}
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
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Service Models
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: Server,
                title: "IaaS – Infrastructure as a Service",
                description: "Infrastructure as a Service provides essential computing resources such as servers, storage, and networking on a pay-as-you-go basis, allowing businesses to scale easily without heavy capital expenditures."
              },
              {
                icon: Database,
                title: "PaaS – Platform as a Service",
                description: "Platform as a Service offers a framework for developers to create, deploy, and manage applications without dealing with the underlying infrastructure, speeding up development cycles."
              },
              {
                icon: Cloud,
                title: "SaaS – Software as a Service",
                description: "Software as a Service provides applications over the internet, hosted by a cloud provider. Users can access software without installation, ensuring seamless updates and maintenance."
              },
            ].map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center transition-all duration-300 hover:shadow-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                  <model.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {model.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {model.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Continuity */}
      <section ref={securityRef} className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-white relative overflow-hidden">
        <motion.div
          style={{ y: securityY }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-10 left-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
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
              Security & Continuity
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: ShieldCheck,
                title: "CASB and CSPM",
                description: "Cloud Access Security Brokers and Cloud Security Posture Management tools act as intermediaries, enhancing security by providing visibility and control over cloud services and data."
              },
              {
                icon: RefreshCw,
                title: "BaaS and DRaaS",
                description: "Backup as a Service and Disaster Recovery as a Service offer offsite data storage and recovery solutions, ensuring data integrity and availability in case of disasters or data loss."
              },
              {
                icon: Lock,
                title: "Identity & Access Management",
                description: "Identity & Access Management for Cloud – SSO, MFA, encrypted access to ensure secure and controlled usage of cloud resources."
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center transition-all duration-300 hover:shadow-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
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

      <CtaFooter />
    </div>
  );
}