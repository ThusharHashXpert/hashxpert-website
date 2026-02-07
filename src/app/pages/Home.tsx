import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Eye, Lightbulb, Zap, Users, Target, Trophy, Clock, Award, } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';
import { motion, useScroll, useTransform } from 'framer-motion';


export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: featuresProgress } = useScroll({
    target: featuresRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(heroProgress, [0, 1], [1, 0]);
  const scale = useTransform(heroProgress, [0, 1], [1, 0.8]);
  const featuresY = useTransform(featuresProgress, [0, 1], [100, -100]);
  const ctaY = useTransform(ctaProgress, [0, 1], [50, -50]);

  const features = [
    {
      icon: Zap, // or Target, Lightbulb – Zap gives "top speed/energy" feel for "Best In Industry"
      title: "Best In Industry",
      description: "Providing top-notch industry-leading services and solutions.",
    },
    {
      icon: Trophy, 
      title: "Award Winning",
      description: "Recognized and awarded for our excellence and innovation.",
    },
    {
      icon: Users,
      title: "Professional Staff",
      description: "Experienced and dedicated professionals at your service.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Providing round-the-clock assistance for all your needs.",
    },
  ];

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
      {/* Hero Section with Parallax */}
      <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          style={{ scale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/85 z-10" />
          <ImageWithFallback
            src="/assets/hero-bg-tech-security.jpg"
            alt="Technology background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          style={{ y: useTransform(heroProgress, [0, 1], [0, -150]) }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(heroProgress, [0, 1], [0, -100]) }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
        />

        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="relative z-20 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            HashXpert 
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Deciphering the Future, Delivering the Now.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/services"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.9 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.3 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div className="w-1 h-2 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Parallax background elements – kept as is */}
        <motion.div 
          style={{ y: featuresY }}
          className="absolute top-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(featuresProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
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
              Why Choose HashXpert?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Delivering excellence with trust, innovation, and unwavering support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-blue-100 flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Subtle parallax background elements – matching features style */}
        <motion.div
          style={{ y: useTransform(featuresProgress, [0, 1], [80, -80]) }} // Reuse featuresProgress or create new if needed
          className="absolute top-0 left-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(featuresProgress, [0, 1], [-60, 60]) }}
          className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  {/* Updated icon component */}
                  <Eye className="text-white" size={28} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                To be a customer-centric company that empowers customers with the freedom to choose solutions and services that prioritize comprehensive security at the most competitive prices.
              </p>
            </motion.div>


            {/* Mission Card */}
            <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                {/* Icon updated below */}
                <Target className="text-white" size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              To deliver the highest-quality IT solutions to our customers, emphasizing exceptional service, a wide range of solution choices, and unwavering security.
            </p>
          </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Subtle parallax background elements */}
        <motion.div
          style={{ y: useTransform(featuresProgress, [0, 1], [60, -60]) }}
          className="absolute top-0 left-0 w-80 h-80 bg-blue-50/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(featuresProgress, [0, 1], [-40, 40]) }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About HashXpert
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Established by seasoned IT professionals • Headquartered in Dubai • Expanding in India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <p>
                HashXpert was established by seasoned professionals from the IT industry, bringing a wealth of expertise and a profound understanding of the ever-changing IT landscape.
              </p>
              <p>
                Headquartered in <span className="font-semibold text-blue-700">Dubai</span>, we are expanding our footprint in <span className="font-semibold text-blue-700">India</span> and the <span className="font-semibold text-blue-700">UK</span>, catering to businesses of all scales—from budding startups to large enterprises.
              </p>
              <p>
                The inception of HashXpert was driven by industry veterans with extensive knowledge of the latest trends shaping the IT sector and a strong on-the-ground presence in the UAE.
              </p>
            </motion.div>

            {/* Right Column – no image, balanced text only */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <p>
                As one of the leading <span className="font-semibold text-blue-700">System Integrators in the UAE</span>, we offer comprehensive, tailored IT solutions across diverse platforms and technologies for startups, SMEs, and large corporations.
              </p>
              <p>
                Our expanding team excels in product design, architecture, implementation, and deployment in key areas including <strong>Network</strong>, <strong>System</strong>, <strong>Security</strong>, and <strong>Services</strong>.
              </p>
              <p>
                We collaborate closely with clients to transform their visions into reliable, high-performing outcomes that drive real business value.
              </p>
            </motion.div>
          </div>

          {/* Our Commitment – full-width closing statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100/40 p-10 md:p-12 rounded-2xl border border-blue-200 shadow-xl text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
              Our Commitment
            </h3>
            <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
              We are dedicated to delivering high-quality, user-friendly, and easily maintainable solutions that perfectly meet client and end-user needs — all at the most competitive prices.
            </p>
          </motion.div>

          {/* Quick Highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Headquartered", value: "Dubai, UAE" },
              { label: "Presence", value: "Bengaluru, India" },
              { label: "Specialization", value: "System Integration" },
              { label: "Focus", value: "Security & Innovation" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-md border border-blue-100 text-center"
              >
                <p className="text-sm text-gray-600 mb-1">{item.label}</p>
                <p className="text-xl md:text-2xl font-bold text-blue-700">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Subtle parallax background elements – matching previous sections */}
        <motion.div
          style={{ y: useTransform(featuresProgress, [0, 1], [80, -80]) }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(featuresProgress, [0, 1], [-60, 60]) }}
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
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Tailored solutions to meet business needs, enhancing efficiency and scalability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Service 1: Tailored IT Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Code className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Tailored IT Solutions
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center flex-grow">
                Custom development and integration designed specifically for your business goals, delivering maximum efficiency and future-proof scalability.
              </p>
            </motion.div>

            {/* Service 2: Secure Cloud Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Secure & Scalable Cloud
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center flex-grow">
                Robust cloud infrastructure with top-tier security, seamless data storage, high availability, and effortless scaling for modern operations.
              </p>
            </motion.div>

            {/* Service 3: Intelligent Automation & Insights */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Intelligent Automation & Insights
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center flex-grow">
                AI-powered automation, data analytics, and actionable insights to drive smarter decisions, optimize processes, and unlock new opportunities.
              </p>
            </motion.div>
          </div>

          {/* Learn More Button – centered, prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More
              <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Solutions Teaser Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Subtle parallax background elements – consistent style */}
        <motion.div
          style={{ y: useTransform(featuresProgress, [0, 1], [80, -80]) }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(featuresProgress, [0, 1], [-60, 60]) }}
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
              Technology Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Driving innovation through enhanced efficiency, automation, and seamless connectivity across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1: AI-Powered Innovation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                AI-Powered Innovation
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center flex-grow">
                Harness artificial intelligence to automate processes, generate intelligent insights, and enable smarter, faster decision-making.
              </p>
            </motion.div>

            {/* Card 2: Cloud Computing Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Zap className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Cloud Computing Excellence
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center flex-grow">
                Secure, scalable cloud infrastructure that empowers seamless data management, high availability, and elastic growth for modern businesses.
              </p>
            </motion.div>

            {/* Card 3: IoT & Connected Ecosystems */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Users className="text-white" size={40} /> {/* Using Users as proxy for connectivity; or replace with a custom IoT icon if available */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                IoT & Connected Ecosystems
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center flex-grow">
                Build intelligent, interconnected systems with IoT to enhance real-time monitoring, operational efficiency, and industry-wide connectivity.
              </p>
            </motion.div>
          </div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link
              to="/solutions"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Solutions
              <ArrowRight size={24} />
            </Link>
          </motion.div>
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

      <CtaFooter />
    </div>
  );
}