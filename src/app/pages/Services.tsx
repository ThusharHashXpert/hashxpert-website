import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, Server, Briefcase, Brain, Code2, Smartphone, Cloud, Database, Shield, Rocket, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';
import { Link } from 'react-router-dom';

export function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: processProgress } = useScroll({
    target: processRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(headerProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(headerProgress, [0, 1], [1, 0]);
  const servicesY = useTransform(servicesProgress, [0, 1], [100, -50]);
  const processY = useTransform(processProgress, [0, 1], [50, -50]);

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies like React, Node.js, and modern frameworks.',
      features: ['Responsive Design', 'SEO Optimization', 'Progressive Web Apps', 'E-commerce Solutions'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Deployment'],
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['AWS & Azure', 'Cloud Migration', 'DevOps', 'Serverless Architecture'],
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Robust data solutions including database design, analytics, and big data processing.',
      features: ['Database Design', 'Data Analytics', 'Big Data', 'ETL Pipelines'],
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Monitoring'],
    },
    {
      icon: Rocket,
      title: 'Digital Transformation',
      description: 'Strategic consulting and implementation to modernize your business operations.',
      features: ['Strategy Consulting', 'Process Automation', 'Legacy Modernization', 'Change Management'],
    },
  ];

  const additionalServices = [
    {
      icon: Users,          // Staffing → people/team icon (import Users if not already)
      title: "Staffing Services",
      description:
        "Our Staffing Services provide highly skilled professionals to meet the industry demands. We ensure the efficient recruitment, training, and deployment of talent. Partner with us for reliable workforce solutions tailored to your needs.",
      link: "/services/staffing",
    },
    {
      icon: Server,         // Infrastructure → server/cloud icon (import Server from lucide-react)
      title: "Infrastructure Services",
      description:
        "Our infrastructure services provide scalable and secure solutions to support your business growth. We specialize in designing, deploying, and managing robust IT infrastructures that ensure optimal performance, reliability, and seamless operations.",
      link: "/services/infrastructure",
    },
    {
      icon: Briefcase,      // Professional Services → consulting/business icon (import Briefcase)
      title: "Professional Services",
      description:
        "Our professional services are designed to help you achieve your goals with tailored solutions that meet your specific needs. We offer expert guidance and support, leveraging cutting-edge technologies to drive efficiency and deliver exceptional results that elevate your business.",
      link: "/services/professional",
    },
    {
      icon: Brain,          // AI/ML/VR → brain/AI icon (import Brain or Cpu if better fit)
      title: "AI/ML/VR Innovations",
      description:
        "Harnessing the power of emerging technologies. Transforming businesses with intelligent solutions. Enhancing efficiency through automation and simulation. Shaping the future with cutting-edge innovation.",
      link: "/services/ai-ml-vr",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Section with Parallax */}
      <div ref={headerRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/80 z-10" />
          <ImageWithFallback
            src="/assets/Serives.jpg"
            alt="Team collaboration"
            className="
              w-full h-full 
              object-cover 
              aspect-[4/3] sm:aspect-[3/2] md:aspect-[16/9] lg:aspect-[21/9]
              brightness-90
            "
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-20 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-white/90"
          >
            Comprehensive technology solutions tailored to your needs
          </motion.p>
        </motion.div>
      </div>

      {/*Specialized Services */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Parallax blobs – matching style */}
        <motion.div
          style={{ y: useTransform(servicesProgress, [0, 1], [80, -80]) }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(servicesProgress, [0, 1], [-60, 60]) }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Specialized Expertise
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Beyond core development — comprehensive solutions to power your business forward
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white border border-blue-100 rounded-xl p-8 hover:shadow-2xl transition-all flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Read More Button */}
                <Link
                  to={service.link}
                  className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg group"
                >
                  Read More
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-24 px-4 relative overflow-hidden">
        {/* Parallax background elements */}
        <motion.div 
          style={{ y: servicesY }}
          className="absolute top-20 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(servicesProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white border border-blue-100 rounded-xl p-8 hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Execution & Support */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Parallax blobs – slightly adjusted for better spread */}
        <motion.div
          style={{ y: useTransform(servicesProgress, [0, 1], [120, -120]) }}
          className="absolute -top-20 left-10 w-[500px] h-[500px] bg-blue-50/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(servicesProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-100/15 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-5">
              Service Execution & Support
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our operational foundation ensures seamless delivery, full compliance, and lasting client success
            </p>
          </motion.div>

          {/* Grid with centered last row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center">
            {[
              { title: "Account Management", desc: "Effective account management ensures that client needs are met and services are tailored to specific requirements." },
              { title: "Dedicated Teams", desc: "Dedicated teams provide focused attention to each client, enhancing service quality and personalizing the support experience." },
              { title: "Service Execution", desc: "Service execution involves the systematic implementation of agreed-upon services, ensuring timely delivery and adherence to quality standards." },
              { title: "Executive Oversight", desc: "Executive oversight ensures strategic alignment and resource allocation, guiding teams to achieve service excellence." },
              { title: "Recruitment Processes", desc: "Recruitment processes focus on acquiring top talent necessary for delivering high-quality services, aligning skills with client demands." },
              { title: "Payroll and Billing", desc: "Efficient payroll and billing systems are crucial for maintaining operational flow and ensuring timely payments." },
              { title: "HR and Contract Management", desc: "HR and contract management streamline employee relations and contractual obligations, ensuring compliance and satisfaction." },
              { title: "Shared Services", desc: "Shared services provide centralized support functions, optimizing resources and enhancing service delivery across the organization." },
              { title: "Support Functions", desc: "Support functions are essential for addressing client inquiries and resolving issues, thus maintaining service integrity." },
              { title: "Care for Clients", desc: "Client care focuses on building long-term relationships through proactive engagement and responsiveness to client needs." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.7 }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
                className="w-full max-w-[340px] bg-white border border-blue-100/70 rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-400 flex flex-col"
              >
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow text-[15px] md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section with Animated Lines */}
      <section ref={processRef} className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Parallax background elements */}
        <motion.div 
          style={{ y: processY }}
          className="absolute top-10 left-10 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured, client-centric methodology that delivers reliable, secure, and scalable IT solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Desktop animated line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-1">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 origin-left"
              />
            </div>

            <div className="grid md:grid-cols-4 gap-6 md:gap-8 relative">
              {[
                {
                  step: '01',
                  title: 'Discovery & Consultation',
                  description: 'We deeply understand your business goals, challenges, current setup, and future vision.'
                },
                {
                  step: '02',
                  title: 'Strategy & Planning',
                  description: 'We build a tailored roadmap, select optimal technologies, and define clear timelines.'
                },
                {
                  step: '03',
                  title: 'Implementation & Execution',
                  description: 'Agile development, secure integration, rigorous testing, and smooth deployment.'
                },
                {
                  step: '04',
                  title: 'Support & Optimization',
                  description: 'Ongoing monitoring, 24/7 support, performance tuning, and continuous improvement.'
                },
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative h-full"
                >
                  {/* Animated circle for desktop */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    className="hidden md:flex absolute top-14 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-600 rounded-full items-center justify-center z-10 shadow-lg"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.3 }}
                      className="w-4 h-4 bg-blue-600 rounded-full"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-7 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-blue-100 h-full flex flex-col min-h-[260px] md:min-h-[280px]"
                  >
                    <div className="text-6xl font-bold text-blue-600/15 mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed flex-grow">
                      {phase.description}
                    </p>
                  </motion.div>

                  {/* Mobile connecting line */}
                  {index < 3 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
                      className="md:hidden w-1 h-10 bg-gradient-to-b from-blue-500 to-blue-600 mx-auto my-5 origin-top"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaFooter />
    </div>
  );
}