import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Sparkles, Globe, Target } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';

export function AiMlVrInnovations() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/80 z-10" />
          <ImageWithFallback
            src="/assets/ai-ml-vr-hero.jpg" // ← replace with your actual hero image (futuristic/AI/VR theme)
            alt="AI, ML and VR innovation"
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
            AI / ML / VR Innovations
          </motion.h1>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Driving the next wave of transformation with intelligent, immersive, and scalable technology
          </motion.p>
        </motion.div>
      </div>

      {/* Main Content */}
      <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Driving Innovation with Hashxpert */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Driving Innovation with Hashxpert
            </h2>
            <div className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed space-y-6">
              <p>
                In today's rapidly evolving digital world, businesses that embrace cutting-edge technology thrive. 
                At Hashxpert, we do not just follow trends — <span className="font-semibold text-blue-700">we shape them</span>.
              </p>
              <p>
                We are a passionate team of innovators, engineers, and visionaries, dedicated to empowering businesses like yours 
                with the transformative power of technology. Whether it is the immersive experiences of XR, the intelligent automation 
                of AI, the scalability of SaaS, or the limitless potential of the web, we deliver solutions that go beyond the ordinary.
              </p>
              <p>
                The journey began with a simple yet profound belief: that technology should empower, not complicate. 
                We have consistently proven this through our work, partnering with global leaders like Pfizer, Bosch Rexroth, 
                and GameIn to achieve remarkable results.
              </p>
            </div>
          </motion.div>

          {/* What sets us apart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
              What Sets Us Apart?
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: Sparkles,
                  title: 'Relentless Pursuit of Innovation',
                  desc: 'We embrace emerging technologies and explore their untapped potential.',
                },
                {
                  icon: Target,
                  title: 'Deep Understanding of Your Needs',
                  desc: 'We go beyond simply delivering solutions — we truly understand your unique challenges.',
                },
                {
                  icon: Globe,
                  title: 'Global Reach with Local Touch',
                  desc: 'Our presence spans continents, delivering world-class solutions with deep local market understanding.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Commitment to Excellence',
                  desc: 'We adhere to the highest quality standards, ensuring every project exceeds expectations.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.7 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white border border-blue-100 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center min-h-[240px]"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-base leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advantage Hashxpert */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-3xl p-10 md:p-14 text-center border border-blue-100 shadow-xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Advantage Hashxpert
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="space-y-3">
                <div className="text-5xl font-bold text-blue-700">XR • AI • SaaS • Web</div>
                <p className="text-gray-700 text-lg">
                  Revolutionizing industries with our expertise in immersive, intelligent, and scalable technologies.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-bold text-blue-700">Dedicated Teams</div>
                <p className="text-gray-700 text-lg">
                  Accelerate your projects and deliver exceptional results with our focused, expert teams.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-bold text-blue-700">Measurable Success</div>
                <p className="text-gray-700 text-lg">
                  Empowering businesses to achieve real, quantifiable outcomes through innovative solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaFooter />
    </div>
  );
}