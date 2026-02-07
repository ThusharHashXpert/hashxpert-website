import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect } from 'react';
import CtaFooter from '../components/CtaFooter'; // Adjust path if needed

export function Faq() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 py-20 px-4 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Got questions? We’ve got answers. Explore our FAQs to discover how Hashxpert delivers next-gen XR, AI, and SaaS solutions to power your business.
          </motion.p>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-blue-100 prose prose-lg prose-blue max-w-none"
          >
            {/* Intro Categories */}
            <p className="text-gray-700 leading-relaxed mb-8 text-center font-medium">
              FAQ Categories
            </p>
            <ul className="list-none pl-0 mb-12 text-center flex flex-wrap justify-center gap-4 md:gap-6">
              <li className="bg-blue-50 px-5 py-2 rounded-full text-blue-700 font-medium">General Questions</li>
              <li className="bg-blue-50 px-5 py-2 rounded-full text-blue-700 font-medium">Pricing & Project Timelines</li>
              <li className="bg-blue-50 px-5 py-2 rounded-full text-blue-700 font-medium">Services and Expertise</li>
              <li className="bg-blue-50 px-5 py-2 rounded-full text-blue-700 font-medium">Technical Support</li>
              <li className="bg-blue-50 px-5 py-2 rounded-full text-blue-700 font-medium">Offshore Team Management</li>
              <li className="bg-blue-50 px-5 py-2 rounded-full text-blue-700 font-medium">Partnerships and Collaboration</li>
            </ul>

            {/* 1. General Questions */}
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. General Questions</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q1. What is Hashxpert, and what do you specialize in?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hashxpert is a global tech powerhouse, pioneering solutions in XR (AR/VR/MR), AI, SaaS development, QA testing, offshore team management, and 3D design.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              260+ successful projects delivered across 20+ countries, trusted by top brands.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q2. Which industries do you serve?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We bring disruptive innovation to industries like:
            </p>
            <p className="text-blue-700 font-medium mb-8">
              Healthcare | Retail | Manufacturing | Real Estate | Aviation | Gaming | Education
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q3. Where are your offices located?</h3>
            <p className="text-gray-700 leading-relaxed mb-12">
              <strong>India:</strong> Bangalore<br />
              <strong>Global Partners:</strong> UAE | USA | Canada | South Korea
            </p>

            {/* 2. Services and Expertise */}
            <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">2. Services and Expertise</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q1. What is XR, and how can it benefit my business?</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              XR (Extended Reality) includes VR (Virtual Reality), AR (Augmented Reality), and MR (Mixed Reality).
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              It enhances training, product showcases, remote collaboration, and customer engagement through hyper-immersive experiences.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q2. Can you develop custom AI solutions?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Yes! We build AI-powered chatbots, predictive analytics, NLP tools, and generative AI models for automation and data-driven decision-making.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q3. What types of SaaS platforms do you develop?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Scalable, cloud-native SaaS solutions, including:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>E-commerce platforms</li>
              <li>Learning Management Systems (LMS)</li>
              <li>ERP & CRM software</li>
              <li>AI-driven automation tools</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q4. Do you provide 3D design and rendering services?</h3>
            <p className="text-gray-700 leading-relaxed mb-12">
              Yes! Our photo-realistic 3D modeling, animation, and rendering services power gaming, real estate, and product visualization.
            </p>

            {/* 3. Technical Support */}
            <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">3. Technical Support</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q1. What technical support services do you offer?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              24/7 tech support for web, mobile, AI, and XR platforms. L1 & L2 troubleshooting, proactive maintenance, and performance optimization.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q2. How can I contact your technical support team?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              <strong>Email:</strong> support@hashxpert.com<br />
              Get in touch
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q3. Do you offer support for XR devices?</h3>
            <p className="text-gray-700 leading-relaxed mb-12">
              Yes! We provide customized support for VR headsets, AR glasses, and MR environments to optimize performance and compatibility.
            </p>

            {/* 4. Offshore Team Management */}
            <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">4. Offshore Team Management</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q1. What is offshore team management, and how does it work?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We help businesses scale efficiently by building and managing dedicated remote teams, handling: Talent acquisition & onboarding, Training & upskilling, Performance monitoring & payroll.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q2. What roles can you provide through offshore teams?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We offer highly skilled professionals, including:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>XR Developers</li>
              <li>AI Engineers</li>
              <li>QA Testers</li>
              <li>3D Designers</li>
              <li>Technical Support Specialists</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q3. How do you ensure the quality of offshore teams?</h3>
            <p className="text-gray-700 leading-relaxed mb-12">
              Industry-leading hiring standards, ongoing training, and rigorous quality checks ensure that your remote team delivers excellence.
            </p>

            {/* 5. Partnerships and Collaboration */}
            <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">5. Partnerships and Collaboration</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q1. Can we collaborate on a project if my company is not in your location?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Yes! We specialize in remote project execution, using secure, real-time collaboration tools for seamless communication.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q2. How do we support our international partners?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We offer localized support via our global partners in UAE, USA, Canada, and South Korea for smoother service delivery.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q3. Are you open to long-term partnerships?</h3>
            <p className="text-gray-700 leading-relaxed mb-12">
              Absolutely! We prioritize long-term collaborations and are committed to becoming your trusted tech partner.
            </p>

            {/* 6. Pricing & Project Timelines */}
            <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">6. Pricing and Project Duration</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q1. How do you determine the cost of a project?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Pricing depends on scope, complexity, technology stack, and delivery timeline. After an initial consultation, we provide a detailed project proposal.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q2. Do you offer flexible pricing models?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Yes! We provide:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li><strong>Fixed Price:</strong> For well-defined project scopes.</li>
              <li><strong>Time & Material:</strong> Ideal for evolving requirements.</li>
              <li><strong>Dedicated Team:</strong> A fully managed team working exclusively on your project.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q3. Are there any hidden charges?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              No, our pricing is transparent. All costs are outlined in the project proposal, and any additional changes are discussed upfront before implementation.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q4. How long does it take to complete a project?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Project duration varies by complexity:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Small Projects: 4–6 weeks (Website, MVPs, basic apps).</li>
              <li>Medium Projects: 2–4 months (SaaS platforms, XR modules).</li>
              <li>Large Projects: 6+ months (Enterprise solutions, AI-powered platforms).</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q5. Can you expedite project timelines?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Yes! We fast-track delivery by scaling resources and prioritizing key milestones (Additional cost applies).
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q6. Do you offer a free consultation or project estimate?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Yes! Schedule a free consultation to discuss your project & get a custom quote.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q7. How do I pay for your services?</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We accept:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Credit Card</li>
              <li>Wire Transfer</li>
              <li>Digital Payment Platforms</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Q8. Is there any post-project support included in the cost?</h3>
            <p className="text-gray-700 leading-relaxed mb-12">
              Yes! Every project includes a defined post-launch support period, with optional long-term maintenance plans.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reusable CTA + Mini Footer */}
      <CtaFooter />

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}