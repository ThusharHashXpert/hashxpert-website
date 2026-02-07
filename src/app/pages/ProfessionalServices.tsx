import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Settings, 
  Rocket, 
  Lightbulb, 
  Headphones, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';

export function ProfessionalServices() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  const services = [
    {
      icon: Settings,
      title: 'Solutions Design',
      description:
        'We create a blueprint for your vision, translating ideas into a feasible design and implementing them effectively.',
    },
    {
      icon: Rocket,
      title: 'Deployment Support',
      description:
        'Our services encompass the complete implementation and rollout of new infrastructure, including hardware configuration and installation.',
    },
    {
      icon: Lightbulb,
      title: 'Proof of Concept (POC)',
      description:
        'We provide Proof-of-Concepts (POCs) to assess the feasibility of solutions, ensuring they function as intended within your infrastructure.',
    },
    {
      icon: Headphones,
      title: 'Pre-sales Support',
      description:
        'We focus on addressing your inquiries and guiding you through the buying process, providing more than just marketing insights.',
    },
    {
      icon: ShieldCheck,
      title: 'Post-sales Support',
      description:
        'We prioritize ongoing assistance after the sale, ensuring you have the support you need at every stage.',
    },
    {
      icon: Clock,
      title: 'Annual Maintenance Contracts',
      description:
        'Ongoing protection with seamless renewals. Ensuring uninterrupted service and security. Stay covered without gaps or delays, with hassle-free, automatic extensions.',
    },
    {
      icon: Clock,
      title: 'Managed Services',
      description:
        'Round-the-clock operations with active oversight. Ensuring seamless performance day and night. Proactive monitoring to detect issues fast, keeping systems secure and running at last.',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/80 z-10" />
          <ImageWithFallback
            src="/assets/professional-services-hero.jpg" // Replace with your actual hero image
            alt="Professional IT consulting and support"
            className="w-full h-full object-cover brightness-90"
          />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Professional Services
          </motion.h1>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Expert guidance, implementation, and ongoing support to bring your IT vision to life
          </motion.p>
        </motion.div>
      </div>

      {/* What We Stand For – Services Grid */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering end-to-end professional expertise to ensure your success at every stage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white border border-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col min-h-[260px]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {service.description}
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