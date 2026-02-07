import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Server, Database, Shield, Cloud, HardDrive } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';

export function InfrastructureServices() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  const services = [
    {
      icon: Database,
      title: 'Data Center Services',
      description:
        'We design and build custom data center environments to optimize your operations. Our services ensure your infrastructure is organized for maximum efficiency and reliability.',
    },
    {
      icon: Server,
      title: 'Servers and Storage',
      description:
        'We implement server and storage consolidation strategies alongside virtualization to enhance performance, improve resource utilization, and reduce costs and complexity.',
    },
    {
      icon: Shield,
      title: 'Data Security',
      description:
        'Protecting corporate data and preventing data loss through unauthorized access.',
    },
    {
      icon: Cloud,
      title: 'SDDC (Software-Defined Data Center)',
      description:
        'We utilize Hyperconverged Infrastructure integrated with Software-Defined Networking to deliver flexibility, scalability, and improved management of your IT resources.',
    },
    {
      icon: HardDrive,
      title: 'Data Protection Solutions',
      description:
        'We ensure data availability and rapid recovery through user-friendly management tools while effectively safeguarding your data across complex hybrid infrastructures.',
    },
  ];

  const infrastructureImages = [
    { src: '/assets/Infra/Hauwei.jpg' },
    { src: '/assets/Infra/Netapp.jpg' },
    { src: '/assets/Infra/Nuta.jpg' },
    { src: '/assets/Infra/Pure.jpg' },
    { src: '/assets/Infra/Veem.jpg' },
    { src: '/assets/Infra/Vmware.jpg' },
    { src: '/assets/Infra/Arc.jpg' },
    { src: '/assets/Infra/CommonVallet.jpg' },
    { src: '/assets/Infra/Dell.jpg' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/80 z-10" />
          <ImageWithFallback
            src="/assets/infrastructure-hero.jpg"
            alt="Modern IT infrastructure and data center"
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
            Infrastructure Services
          </motion.h1>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Building secure, scalable, and future-ready IT foundations for your business
          </motion.p>
        </motion.div>
      </div>

      {/* Core Services Grid */}
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
              Our Infrastructure Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive services to design, secure, and optimize your physical and virtual infrastructure
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

      {/* Infrastructure Partners Marquee – Smaller logos, no card structure */}
        <section className="py-16 bg-gray-50 overflow-hidden border-t border-gray-100">
        <div className="text-center mb-10 px-6">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Infrastructure Partners
            </h3>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            Collaborating with world-class technology leaders to deliver reliable, high-performance solutions
            </p>
        </div>

        <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap will-change-transform min-w-max">
            {/* First set */}
            {infrastructureImages.map((img, idx) => (
                <div
                key={idx}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 px-1"
                >
                <img
                    src={img.src}
                    alt={`Infrastructure partner ${idx + 1}`}
                    className="marquee-logo h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain transition-all duration-300"
                    loading="lazy"
                />
                </div>
            ))}

            {/* Duplicate set */}
            {infrastructureImages.map((img, idx) => (
                <div
                key={`dup-${idx}`}
                className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12 px-1"
                aria-hidden="true"
                >
                <img
                    src={img.src}
                    alt=""
                    className="marquee-logo h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain transition-all duration-300"
                    loading="lazy"
                />
                </div>
            ))}
            </div>

            {/* Edge fades – slightly wider for smoother look */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10" />
        </div>
        </section>

      <CtaFooter />
    </div>
  );
}