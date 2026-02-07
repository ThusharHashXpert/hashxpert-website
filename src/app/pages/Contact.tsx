import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import CtaFooter from '../components/CtaFooter';

export function Contact() {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: headerProgress } = useScroll({
    target: headerRef,
    offset: ['start start', 'end start'],
  });

  const { scrollYProgress: formProgress } = useScroll({
    target: formRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(headerProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(headerProgress, [0, 1], [1, 0]);
  const formY = useTransform(formProgress, [0, 1], [50, -50]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent(`New Contact Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Company: ${formData.company}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:info@hashxpert.com?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;

    // Optional: Show success message
    alert('Thank you! Your message has been prepared in your email client. Please send it.');

    // Reset form
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      title: 'Dubai Office',
      address: 'HASHXPERT TECHNOLOGIES LLC\nNo 12, 2nd Floor, Czar Business Center, DIP 1\nDubai, UAE',
      mapEmbed: (
        <iframe
          title="Dubai Office - Czar Business Center"
          className="w-full h-64 rounded-xl border border-blue-200 shadow-sm"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          /* Using a search query 'q=' ensures a red location marker appears */
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.304904758163!2d55.17135161105598!3d25.101395235481437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b774d2f6251%3A0xd4c83b0054941de5!2sCzar%20Workspace%20Business%20Center!5e1!3m2!1sen!2sin!4v1770380019935!5m2!1sen!2sin"
        ></iframe>
      ),
    },
    {
      title: 'Bengaluru Office',
      address: 'Kempa Plaza, No 221, 100 Feet Ring Road\nBanashankari 3rd Stage, Bangalore 560085\nKarnataka, India',
      mapEmbed: (
        <iframe
          title="Bengaluru Office - Kempa Plaza"
          className="w-full h-64 rounded-xl border border-blue-200 shadow-sm"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          /* Updated with your correct location parameters */
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4106.431579010315!2d77.54599421081647!3d12.926696115808245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e31965f4d27%3A0xb3cc0c3ece662100!2sKempa%20Plaza%2C%203rd%20Phase%2C%20Banashankari%203rd%20Stage%2C%20Banashankari%2C%20Bengaluru%2C%20Karnataka%20560085!5e1!3m2!1sen!2sin!4v1770379795152!5m2!1sen!2sin"
        ></iframe>
      ),
    },
  ];


  return (
    <div className="bg-white">
      {/* Header Section with Parallax */}
      <div ref={headerRef} className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-blue-700/80 z-10" />
          <ImageWithFallback
            src="/assets/hero-bg-contact.jpg"
            alt="Contact us"
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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-white/90"
          >
            We're here to help transform your business. Reach out today!
          </motion.p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <section ref={formRef} className="py-24 px-4 relative overflow-hidden">
        <motion.div
          style={{ y: formY }}
          className="absolute top-20 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(formProgress, [0, 1], [-50, 50]) }}
          className="absolute bottom-20 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="+91 0000000000"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information & Offices */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reach out to us through any of the following channels. We're here to help!
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.a
                  href="mailto:info@hashxpert.com"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all group border border-blue-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@hashxpert.com</p>
                  </div>
                </motion.a>
              </div>

              {/* Office Locations */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Offices</h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {offices.map((office, index) => (
                    <motion.div
                      key={office.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      className="space-y-4"
                    >
                      <h4 className="text-xl font-semibold text-gray-900">{office.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                        {office.address}
                      </p>
                      {office.mapEmbed}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. Typically, small projects take 4-6 weeks, while larger enterprise solutions may take 3-6 months.',
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes, we provide comprehensive support and maintenance packages to ensure your solution continues to perform optimally.',
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We work with clients across various industries including healthcare, finance, e-commerce, education, and enterprise technology.',
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md border border-blue-100 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
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