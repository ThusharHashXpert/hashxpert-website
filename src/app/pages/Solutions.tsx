import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Building2, ShoppingCart, Heart, GraduationCap, Plane, DollarSign, ShieldCheck, Globe, Network, Users, Shield, Cloud, Award, Zap, Target, Lock, AlertTriangle} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';
import { Link } from 'react-router-dom';

export function Solutions() {
  const headerRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const caseStudyRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: solutionsProgress } = useScroll({
    target: solutionsRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: caseStudyProgress } = useScroll({
    target: caseStudyRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(headerProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(headerProgress, [0, 1], [1, 0]);
  const solutionsY = useTransform(solutionsProgress, [0, 1], [100, -50]);
  const caseStudyY = useTransform(caseStudyProgress, [0, 1], [50, -50]);
  
  const solutionFeatures = [
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Security solutions in IT are designed to protect systems, networks, and data from cyber threats such as hacking, malware, and data breaches. These solutions include firewalls, encryption, intrusion detection systems, and multi-factor authentication to ensure confidentiality, integrity, and availability. Implementing robust security measures helps safeguard critical business operations and customer data from evolving cyber risks.",
      link: "/solutions/security",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud solutions in IT provide scalable, on-demand access to computing resources like storage, processing power, and software through the internet. They offer flexibility, cost-efficiency, and the ability to easily scale up or down based on business needs. Cloud computing enables organizations to focus on innovation and growth while minimizing the need for physical infrastructure.",
      link: "/solutions/cloud",
    },
    {
      icon: Network,
      title: "Networking",
      description: "Networking in IT refers to the practice of connecting computers and devices to share resources, communicate, and transfer data. It involves protocols, hardware like routers and switches, and software to ensure secure and efficient communication. Proper networking enables seamless collaboration, internet access, and data sharing across systems.",
      link: "/solutions/networking",
    },
  ];

  const solutions = [
    {
      icon: Building2,
      title: 'Enterprise Solutions',
      description: 'Scalable platforms for large organizations with complex requirements.',
      benefits: [
        'Custom ERP Systems',
        'Workflow Automation',
        'Enterprise Integration',
        'Scalable Architecture',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Platforms',
      description: 'Powerful online stores with seamless shopping experiences.',
      benefits: [
        'Multi-channel Selling',
        'Payment Integration',
        'Inventory Management',
        'Analytics Dashboard',
      ],
    },
    {
      icon: Heart,
      title: 'Healthcare Solutions',
      description: 'HIPAA-compliant systems for modern healthcare providers.',
      benefits: [
        'Patient Management',
        'Telemedicine Platforms',
        'Medical Records',
        'Appointment Scheduling',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Education Technology',
      description: 'Interactive learning platforms for educational institutions.',
      benefits: [
        'LMS Platforms',
        'Virtual Classrooms',
        'Student Portals',
        'Assessment Tools',
      ],
    },
    {
      icon: Plane,
      title: 'Travel & Hospitality',
      description: 'Booking systems and management tools for travel industry.',
      benefits: [
        'Booking Engines',
        'Property Management',
        'Customer Portals',
        'Revenue Management',
      ],
    },
    {
      icon: DollarSign,
      title: 'Financial Services',
      description: 'Secure fintech solutions for modern financial institutions.',
      benefits: [
        'Payment Processing',
        'Portfolio Management',
        'Risk Analytics',
        'Compliance Tools',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Section with Parallax */}
      <div ref={headerRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/80 z-10" />
          <ImageWithFallback
            src="/assets/solution-hero.jpg"
            alt="Business solutions"
            className="w-full h-full object-cover"
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
            Industry Solutions
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-white/90"
          >
            Tailored solutions for every industry
          </motion.p>
        </motion.div>
      </div>

      <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to protect, scale, and connect your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden transition-all duration-300 flex flex-col hover:shadow-2xl group"
              >
                {/* Icon – now same size as other sections */}
                <div className="pt-8 pb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-md">
                    <feature.icon className="text-white" size={32} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-8 flex-grow">
                    {feature.description}
                  </p>

                  <Link
                    to={feature.link}
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mt-auto self-start"
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Excellence Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtle parallax blobs – consistent with other sections */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Security Excellence
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Advanced cybersecurity solutions built on global intelligence and 24/7 protection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: ShieldCheck,
                title: "Threat Intelligence",
                text: "HashXpert threat intelligence is powered by global cyber services, trusted partners, and government agencies, delivering cutting-edge defense insights."
              },
              {
                icon: Globe,
                title: "Global Security Operations",
                text: "Our global security operations centers deliver round-the-clock monitoring, management, and incident response to safeguard the world's top enterprises."
              },
              {
                icon: Network,
                title: "Secure Networking",
                text: "Proper networking enables seamless collaboration, internet access, and data sharing across systems while maintaining the highest security standards."
              },
              {
                icon: Users,
                title: "Expert-Led Security Services",
                text: "Over 100 security experts delivering advisory, managed services, and third-party tech solutions end-to-end with unwavering commitment to protection."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Icon + Title – left aligned, same as What Drives Us */}
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section ref={solutionsRef} className="py-24 px-4 relative overflow-hidden">
        {/* Parallax background elements */}
        <motion.div 
          style={{ y: solutionsY }}
          className="absolute top-20 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(solutionsProgress, [0, 1], [-80, 80]) }}
          className="absolute bottom-20 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
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
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-specific platforms designed to address unique challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
              >
                {/* Very light overlay on hover – does NOT hide content */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                {/* Content – stays visible */}
                <div className="relative z-20 p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6 transition-colors group-hover:from-blue-600 group-hover:to-blue-800">
                    <solution.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 mb-4 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-gray-800 mb-6 transition-colors">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors">
                        <div className="w-1.5 h-1.5 bg-blue-600 group-hover:bg-blue-700 rounded-full mr-3 transition-colors" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      

      {/* New Section: A Focus on Excellence */}
      <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              A Focus on Excellence
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our team of experts is dedicated to delivering high-quality solutions. We prioritize innovation to create cutting-edge technology. Our focus is on user-friendly and efficient product design. We develop solutions that enhance productivity and performance. Cost-effectiveness is a key aspect of our approach. Our products are designed for easy maintenance and longevity. We are committed to ensuring seamless system integration. Long-term usability is a cornerstone of our development process. Client satisfaction is our top priority in every project. We work closely with businesses to understand their needs. Our offerings are tailored to address unique challenges. We leverage the latest technology for optimal results. Reliability is at the heart of our service delivery. We continuously refine our processes for excellence. Exceptional value and service define our commitment. We foster strong relationships built on trust and transparency. Customer success is integral to our company’s vision.
            </p>
          </div>

          {/* Key Focus Points – Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: Award,
                title: "High-Quality & Innovative Solutions",
                text: "Our team delivers excellence through innovation, user-friendly design, and efficient performance-enhancing products."
              },
              {
                icon: DollarSign,
                title: "Cost-Effective & Long-Lasting",
                text: "We prioritize cost-effectiveness, easy maintenance, longevity, and seamless system integration for lasting value."
              },
              {
                icon: Users,
                title: "Client-Centric & Tailored Approach",
                text: "We work closely with clients to understand needs, tailor solutions, and build trust-based, long-term relationships."
              },
              {
                icon: Zap,
                title: "Reliability & Continuous Improvement",
                text: "Reliability drives our delivery. We continuously refine processes to exceed expectations with exceptional service."
              },
              {
                icon: Target,
                title: "Comprehensive IT Excellence",
                text: "As a leading system integrator in the UAE and expanding in India, we cover the full IT spectrum with ongoing support."
              },
            ].map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 transition-all duration-300 hover:shadow-2xl flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-md">
                  <point.icon className="text-white" size={32} />
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
        </motion.div>
      </section>

      {/* New Section: Fortifying Your Digital Defenses */}
      <section className="py-20 md:py-28 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Optional subtle parallax blobs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fortifying Your Digital Defenses
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Advanced protection layers built for today’s evolving threat landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              {
                icon: Shield,
                title: "Impenetrable Infrastructure & Network Security",
                description: "Cutting-edge firewalls, intelligent IDS, and zero-trust protocols to keep your data fortress secure."
              },
              {
                icon: Lock,
                title: "Uncompromising Data Security & Encryption",
                description: "Fortified secure storage, military-grade cryptography, and rock-solid regulatory compliance."
              },
              {
                icon: Users,
                title: "Airtight Identity & Access Management",
                description: "Role-based access, seamless SSO, and impenetrable MFA to keep your digital fortress impregnable."
              },
              {
                icon: AlertTriangle,
                title: "Bulletproof Security Testing & Risk Assessments",
                description: "Rigorous penetration testing, meticulous vulnerability audits, and comprehensive risk analysis to identify and eliminate weak points."
              },
            ].map((defense, index) => (
              <motion.div
                key={defense.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center transition-all duration-300 hover:shadow-2xl hover:border-blue-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
                  <defense.icon className="text-white" size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {defense.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {defense.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powered by Modern Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We leverage cutting-edge tools and frameworks
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          >
            {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 flex items-center justify-center hover:from-blue-100 hover:to-blue-200 transition-colors border border-blue-200"
              >
                <span className="font-semibold text-gray-900">{tech}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <CtaFooter />
    </div>
  );
}