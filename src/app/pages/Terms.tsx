import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect } from 'react';
import CtaFooter from '../components/CtaFooter'; // ← Import your reusable CTA + footer component

export function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Banner – same style as Privacy page */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 py-20 px-4 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Terms of Use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            Last reviewed or revised on February 14, 2025
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-blue-100 prose prose-lg prose-blue max-w-none"
          >
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to Hashxpert ("Company," "we," "us," or "our"). By accessing or using our website at hashxpert.com (the "Website") or engaging with our services, you agree to abide by these Terms of Use ("Terms"). These Terms govern your use of the Website and all associated services provided by Hashxpert.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
              If you do not agree with these Terms, you must refrain from using our Website or services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing the Website or engaging with our Services, you confirm that:
            </p>
            <ol className="list-decimal pl-6 mb-8 text-gray-700 space-y-2">
              <li>You are at least 18 years old or of legal age in your jurisdiction.</li>
              <li>You have the authority to enter into this agreement on behalf of yourself or your organization.</li>
              <li>You will comply with all applicable laws, regulations, and these Terms while using our Website and Services.</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Services Provided</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Hashxpert specializes in cutting-edge technology solutions, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>XR and AI Development – Advanced immersive technologies and AI-driven solutions.</li>
              <li>SaaS Applications – Scalable software tailored to business needs.</li>
              <li>Offshore Team Management – Dedicated teams for technical and operational support.</li>
              <li>QA Testing & Technical Support – Comprehensive manual and automated testing.</li>
              <li>3D Design & Rendering – High-quality models, animations, and visual assets.</li>
              <li>Consultation Services – Strategic guidance on technology implementation.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8 italic">
              Certain Services may require separate agreements with additional terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Use of Website</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3.1 Permitted Use</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You may use the Website for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Exploring our services and expertise.</li>
              <li>Contacting us via provided forms or communication channels.</li>
              <li>Submitting inquiries regarding collaborations or projects.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3.2 Prohibited Activities</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              You may not:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Engage in unlawful, fraudulent, or deceptive activities.</li>
              <li>Copy, modify, or distribute any Website content without written permission.</li>
              <li>Attempt to disrupt, hack, or interfere with the Website’s functionality.</li>
              <li>Harvest or misuse personal data from the Website.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Intellectual Property</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.1 Ownership</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All content on Hashxpert.com, including but not limited to text, images, graphics, videos, software, and code, is the exclusive property of Hashxpert Labs or its licensors and is protected under intellectual property laws.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.2 Limited License</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We grant you a non-exclusive, non-transferable, revocable license to access and use the Website for personal or internal business use.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.3 Restrictions</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Without prior written consent, you may not:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Reproduce, distribute, or publicly display our content.</li>
              <li>Reverse-engineer, decompile, or modify the Website’s software.</li>
              <li>Use Hashxpert Labs' trademarks or branding for commercial purposes.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. User Accounts</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">5.1 Account Creation</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you create an account, you must:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Provide accurate and up-to-date information.</li>
              <li>Keep your login credentials confidential.</li>
              <li>Notify us immediately of any unauthorized access.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">5.2 Account Termination</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We may suspend or terminate your account if:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>You violate these Terms.</li>
              <li>We detect fraudulent, illegal, or harmful activities.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Disclaimer of Warranties</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.1 Website and Services</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              The Website and Services are provided "as is" and "as available" without any warranties, express or implied, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Fitness for a particular purpose.</li>
              <li>Non-infringement of intellectual property rights.</li>
              <li>Availability, accuracy, or reliability of services.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.2 External Links</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              The Website may contain links to third-party websites. We do not endorse or assume responsibility for their content, policies, or security.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Limitation of Liability</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">7.1 General Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              To the fullest extent permitted by law, Hashxpert shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Indirect, incidental, or consequential damages arising from Website use.</li>
              <li>Loss of revenue, data, or business opportunities due to technical issues.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">7.2 Total Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our total liability for any claim shall not exceed the amount paid by you (if applicable) in the 12 months prior to the claim.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">8. Privacy Policy Reference</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Your use of the Website is also governed by our Privacy Policy, detailing how we collect, use, and safeguard your data. By using the Website, you acknowledge that you have read and understood the Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">9. Third-Party Tools and Links</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">9.1 Third-Party Tools</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may integrate third-party tools (e.g., payment gateways, analytics). These are provided "as is" and governed by the respective providers' terms.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">9.2 External Links</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We may provide links to third-party websites for informational purposes. Accessing them is at your own risk.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">10. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">10.1 Governing Law & Dispute Resolution</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>These Terms are governed by the laws of India.</li>
              <li>Any disputes shall be resolved in the courts of Bangalore, Karnataka, India.</li>
              <li>By using the Website, you agree to submit to the jurisdiction of these courts.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">11. Changes to Terms</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">11.1 Right to Update</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify these Terms at any time. Updates will be reflected in the "Last Updated" date above.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">11.2 Notification of Changes</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              For significant updates, we may provide additional notice via:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Email notification (if applicable).</li>
              <li>Website announcement</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-8">
              Continued use of the Website after modifications constitutes acceptance of the revised Terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions, concerns, or requests related to these Terms of Use, please contact us at:
            </p>
            <ul className="list-none pl-0 mb-8 text-gray-700 space-y-3">
              <li><strong>Email:</strong> <a href="mailto:privacy@hashxpert.com" className="text-blue-600 hover:underline">privacy@hashxpert.com</a></li>
              <li><strong>Office Address:</strong> Bangalore, India</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">13. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              These Terms, along with our Privacy Policy, constitute the entire agreement between you and Hashxpert, superseding any prior agreements.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">14. Final Acknowledgment</h2>
            <p className="text-gray-700 leading-relaxed mb-12 italic">
              By accessing or using Hashxpert.com, you acknowledge that you have read, understood, and agreed to these Terms of Use.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reusable CTA + Mini Footer – added at bottom */}
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