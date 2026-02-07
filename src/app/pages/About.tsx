import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Settings, Layers, ShieldCheck, TrendingUp, CheckCircle, BarChart3, Handshake } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';

export function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: valuesProgress } = useScroll({
    target: valuesRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(headerProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(headerProgress, [0, 1], [1, 0]);
  const storyY = useTransform(storyProgress, [0, 1], [100, -50]);
  const valuesY = useTransform(valuesProgress, [0, 1], [50, -50]);

  const clientLogos = [
    { src: "/assets/clients/abu-dhabi-airports.png", alt: "Abu Dhabi Airports Company" },
    { src: "/assets/clients/family-care-authority.png", alt: "Family Care Authority" },
    { src: "/assets/clients/gcaa.png", alt: "General Civil Aviation Authority" },
    { src: "/assets/clients/ministry-of-education.png", alt: "Ministry of Education" },
    { src: "/assets/clients/sinyar-enterprises.png", alt: "Sinyar Enterprises Sole Proprietorship LLC" },
    { src: "/assets/clients/bunduq-oil.png", alt: "Bunduq Oil Company Ltd." },
    { src: "/assets/clients/falcon-associates.png", alt: "Falcon & Associates Dubai" },
    { src: "/assets/clients/purecs-healthcare.png", alt: "PureCS Healthcare" },
  ];

  return (
    <div className="bg-white">
      {/* Header Section with Parallax – now responsive */}
      <div ref={headerRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/80 z-10" />
          <ImageWithFallback
            src="/assets/innovation.jpg"
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
          className="relative z-20 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl"
          >
            About HashXpert
          </motion.h1>
          <motion.p
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/95 font-light drop-shadow-lg max-w-3xl mx-auto"
          >
            Empowering Innovation and Growth
          </motion.p>
        </motion.div>
      </div>

      {/* Restored & Enhanced Our Story Section */}
      <section ref={storyRef} className="py-20 md:py-28 px-6 lg:px-8 relative overflow-hidden bg-white">
        {/* Parallax background elements */}
        <motion.div
          style={{ y: storyY }}
          className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(storyProgress, [0, 1], [-80, 80]) }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text – improved spacing & readability */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-6 order-2 md:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                HashXpert develop a roadmap for your vision, turning concepts into practical designs. Our approach ensures your ideas are transformed into actionable plans. We focus on creating designs that are both feasible and impactful. From inception to execution, we bring your vision to life. Our expertise ensures effective implementation every step of the way.
              </p>
              <ul className="list-disc pl-6 md:pl-8 space-y-4 text-lg text-gray-700">
                <li>We provide end-to-end implementation and rollout of new infrastructure, including hardware setup and installation.</li>
                <li>We offer Proof-of-Concepts (POCs) to evaluate the viability of solutions, ensuring they integrate seamlessly and function as expected within your existing infrastructure.</li>
                <li>We place a strong emphasis on providing continuous support after the sale, ensuring that you receive the assistance you need throughout every stage of your journey.</li>
                <li>We are dedicated to addressing your questions and supporting you throughout the entire purchasing journey, offering more than just marketing insights to ensure you make informed decisions.</li>
              </ul>
            </motion.div>

            {/* Right: Colab Image with rotated gradient overlay */}
            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative order-1 md:order-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 to-blue-600/50 rounded-3xl transform rotate-3 shadow-2xl" />
              <ImageWithFallback
                src="/assets/Colab.jpg"
                alt="Our team collaboration"
                className="
                  relative rounded-3xl shadow-2xl w-full 
                  max-h-[500px] md:max-h-[600px] lg:max-h-[700px]   /* optional max height limit */
                  object-cover border-4 border-white/30
                "
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thin gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-200/60 to-transparent max-w-5xl mx-auto my-8" />

      {/* New Section: Our Purpose */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtle parallax blobs – matching style */}
        <motion.div
          style={{ y: useTransform(valuesProgress, [0, 1], [80, -80]) }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(valuesProgress, [0, 1], [-60, 60]) }}
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
              Our Purpose
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our goal is to be a customer-centric company, offering flexibility in solutions and services. We prioritize security while ensuring competitive pricing. Customer needs drive our tailored and secure options. We focus on delivering reliable and innovative solutions. Our commitment is to provide seamless and secure experiences. We strive to exceed expectations with high-quality services. Empowering customers with value remains our core mission. Trust and satisfaction are at the heart of our approach. We are dedicated to creating lasting customer relationships.
            </p>
          </motion.div>

          {/* Key points as cards – aligned with rest of UI */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Customer-Centric Flexibility",
                text: "We offer flexibility in solutions and services while prioritizing security and competitive pricing."
              },
              {
                title: "Tailored & Secure Solutions",
                text: "Customer needs drive our tailored and secure options, ensuring reliable and innovative results."
              },
              {
                title: "Seamless & High-Quality Delivery",
                text: "Our commitment is to provide seamless and secure experiences while exceeding expectations with high-quality services."
              },
              {
                title: "Empowering Trust & Relationships",
                text: "Empowering customers with value remains our core mission. Trust, satisfaction, and lasting relationships are at the heart of our approach."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section ref={valuesRef} className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <motion.div
          style={{ y: valuesY }}
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
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core principles guide every decision and action we take
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Settings,
                title: 'Top-Quality Tailored Solutions',
                description: 'We provide top-quality IT solutions tailored to customer needs with exceptional service and reliable support.'
              },
              {
                icon: Layers,
                title: 'Diverse & Flexible Choices',
                description: 'A diverse range of solutions ensures flexibility and choice while delivering innovative and efficient IT services.'
              },
              {
                icon: ShieldCheck,
                title: 'Customer Satisfaction & Security',
                description: 'Customer satisfaction is at the core of our approach. Security is integrated into every solution we offer.'
              },
              {
                icon: TrendingUp,
                title: 'Trust, Reliability & Business Success',
                description: 'We prioritize trust, reliability, and seamless experiences. Our goal is to enhance business success with technology.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-blue-100"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-white" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Metrics Section – fresh design */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Parallax blobs – consistent with page */}
        <motion.div
          style={{ y: useTransform(valuesProgress, [0, 1], [100, -100]) }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-50/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(valuesProgress, [0, 1], [-80, 80]) }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100/20 rounded-full blur-3xl"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Compliance Metrics
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our unwavering commitment to regulatory excellence and operational integrity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                number: "01",
                icon: CheckCircle,
                title: "Comprehensive Audits",
                text: "Our audits cover all customers, ensuring strict compliance across operations. We meticulously follow all regulatory requirements without exceptions. Every process is evaluated to maintain the highest standards. Compliance is at the core of our operational framework. By adhering to regulations, we reinforce trust and credibility. This commitment strengthens our reputation in the market."
              },
              {
                number: "02",
                icon: BarChart3,
                title: "100% Compliance Achievement",
                text: "We have consistently showcased our strong commitment to regulatory standards. Our dedication to operational excellence remains unwavering. We have maintained a track record of 100% compliance. Every audit conducted has reinforced our adherence to standards. We continuously strive to exceed regulatory expectations. Our commitment ensures excellence in every aspect of operations."
              },
              {
                number: "03",
                icon: Handshake,
                title: "Building Reliability and Trust",
                text: "By maintaining strict compliance standards, we ensure reliability in every interaction. Trust is the foundation of our client relationships, strengthening bonds through consistent integrity. Our commitment fosters long-term partnerships, driving customer loyalty and business growth."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.04, boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)" }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-500 hover:border-indigo-500 transition-all duration-300 relative"
              >
                {/* Number badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-lg shadow-sm">
                  {item.number}
                </div>

                {/* Centered icon */}
                <div className="pt-10 pb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <item.icon className="text-white" size={40} />
                  </div>
                </div>

                {/* Content */}
                <div className="px-8 pb-10 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section – Updated with new content */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
        {/* Subtle animated background overlays */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              {
                number: "100",
                label: "Fortune Clients",
                subtext: "Trusted by global enterprises for critical IT solutions."
              },
              {
                number: "3",
                label: "Global Regions",
                subtext: "Local execution with worldwide expertise and reach."
              },
              {
                number: "100%",
                label: "Innovation-Driven",
                subtext: "Cutting-edge AI & cloud solutions for modern businesses."
              },
              {
                number: "24/7",
                label: "IT Management",
                subtext: "Comprehensive end-to-end services and support."
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="text-center text-white group"
              >
                {/* Number – prominent but balanced */}
                <div className="text-3xl md:text-5xl font-semibold mb-2 tracking-tight drop-shadow-lg">
                  {stat.number}
                </div>

                {/* Main label */}
                <div className="text-xl md:text-2xl font-semibold mb-2">
                  {stat.label}
                </div>

                {/* Subtext – clean & readable */}
                <div className="text-base md:text-lg text-white/90 max-w-xs mx-auto leading-relaxed">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Marquee – continuous right-to-left loop */}
      <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="text-center mb-10 px-4">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
          Trusted By Industry Leaders
        </h3>
        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
          Partnering with leading organizations across the UAE and beyond
        </p>
      </div>

      <div className="relative">
        {/* Main marquee track */}
        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {/* First set */}
          {clientLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 mx-6 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="marquee-logo h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}

          {/* Duplicate set – makes it seamless */}
          {clientLogos.map((logo, idx) => (
            <div
              key={`dup-${idx}`}
              className="flex-shrink-0 mx-6 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20"
              aria-hidden="true"
            >
              <img
                src={logo.src}
                alt=""
                className="marquee-logo h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Optional: subtle gradient fade on edges (very common in modern designs) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
      {/* CTA Footer */}
      <CtaFooter />
    </div>
  );
}