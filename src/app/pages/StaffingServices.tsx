import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Users, Briefcase, CheckCircle, Clock, ShieldCheck, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';

export function StaffingServices() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);

  const processSteps = [
    { title: 'Assessing Client Needs', desc: 'Understanding specific requirements and expectations to tailor effective staffing solutions.' },
    { title: 'Preparation of Job Description', desc: 'Crafting detailed job descriptions with key responsibilities, skills, and qualifications.' },
    { title: 'Determining Requirements', desc: 'Identifying essential qualifications and experience for the perfect candidate fit.' },
    { title: 'Search Strategy Development', desc: 'Creating strategic approaches to source qualified candidates across multiple channels.' },
    { title: 'Technical & Non-Technical Tests', desc: 'Rigorous testing to evaluate candidates’ skills and competencies accurately.' },
    { title: 'Scheduling Candidate Meetings', desc: 'Coordinating interviews and meetings between clients and candidates efficiently.' },
    { title: 'Salary Negotiations', desc: 'Facilitating mutually agreeable salary terms between clients and candidates.' },
    { title: 'Conducting Reference Checks', desc: 'Thorough verification of candidates’ backgrounds and experiences for reliability.' },
  ];

  const metrics = [
    { icon: Clock, value: '30 Days', label: 'Average Placement Time' },
    { icon: BarChart3, value: '5%', label: 'Attrition Rate' },
    { icon: ShieldCheck, value: '100%', label: 'Compliance in Audits' },
    { icon: CheckCircle, value: '3+ Years', label: 'Industry Experience' },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/80 z-10" />
          <ImageWithFallback
            src="/assets/staffing-hero.jpg"
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
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Staffing Services
          </motion.h1>
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Connecting top talent with exceptional opportunities through expert recruitment and placement
          </motion.p>
        </motion.div>
      </div>

      {/* Process Steps */}
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
              Our Proven Staffing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, efficient methodology designed to deliver the right talent quickly and reliably
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="bg-white border border-blue-100 rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col min-h-[220px]"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-xl shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-[15px] leading-relaxed flex-grow">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics / Value Proposition */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
              Why Clients Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven results, low risk, and high-quality placements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100/40 rounded-2xl p-8 text-center border border-blue-100 shadow-md hover:shadow-xl transition-all"
              >
                <metric.icon className="mx-auto mb-5 text-blue-600" size={48} />
                <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-3">
                  {metric.value}
                </div>
                <p className="text-gray-700 font-medium">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional value proposition text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-16 text-center max-w-4xl mx-auto"
          >
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Our team brings <span className="font-semibold text-blue-700">over 3 years of specialized IT staffing experience</span>, delivering tech-evaluated profiles that significantly reduce time-to-hire and improve selection success rates.
            </p>
          </motion.div>
        </div>
      </section>

      <CtaFooter />
    </div>
  );
}