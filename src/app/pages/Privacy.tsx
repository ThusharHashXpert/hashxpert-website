import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useEffect } from 'react';
import CtaFooter from '../components/CtaFooter';

export function Privacy() {
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90"
          >
            This privacy notice was last reviewed or revised on February 14, 2025.
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
              At Hashxpert ("Company," "we," "our," or "us"), we are committed to protecting your privacy and ensuring compliance with applicable data protection laws. This Privacy Policy explains how we collect, use, disclose, and safeguard personal data when you interact with our company, services, and applications (collectively, "Services").
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              This Privacy Policy applies to:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Company Operations: Includes interactions with clients, business communications, marketing, and support services.</li>
              <li>Developed Applications: Covers applications we develop for clients and those we directly publish on platforms such as Google Play, the App Store, Oculus Store, and Steam.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8 italic">
              By using our Services, you acknowledge and agree to the practices described in this Privacy Policy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Scope of the Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This Privacy Policy governs
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Company Operations: We collect and process personal data in connection with our business activities...</li>
              <li>Applications Developed for Clients: For applications developed on behalf of clients, we adhere to their specific privacy requirements...</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We collect personal and non-personal data to operate and improve our Services. The type of data collected depends on the interaction with us and the functionality of the applications.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.1 Company Operations</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect and process the following types of data:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Contact Information: Name, email address, phone number, and company details.</li>
              <li>Project Information: Requirements, feedback, and communications related to our services.</li>
              <li>Payment Information: Billing and payment details, securely processed by third-party payment providers.</li>
              <li>Usage Data: Information regarding interactions with our website, emails, or other digital services.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">2.2 Applications Developed</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on the application’s functionality, we may collect:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Account Information: Name, email, username, and profile details.</li>
              <li>Device Information: Device model, OS, IP address, and unique identifiers.</li>
              <li>Usage Data: App interaction details, session activity, and preferences.</li>
              <li>Location Data: If necessary for app functionality, approximate or precise location data.</li>
              <li>Payment Information: In-app purchase or subscription details, processed by platform-specific payment systems (e.g., Google Play, App Store).</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use collected data to:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3.1 For Company Operations</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Service Delivery: Provide customized solutions based on client needs.</li>
              <li>Customer Support: Respond to inquiries and resolve technical or service-related issues.</li>
              <li>Analytics & Improvement: Enhance our services based on usage insights.</li>
              <li>Marketing & Communications: Send updates, newsletters, and promotional content (subject to user consent).</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">3.2 For Developed Applications</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>App Functionality: Enable core features such as authentication, gameplay, and transactions.</li>
              <li>Performance Optimization: Improve app efficiency, usability, and stability.</li>
              <li>Personalization: Customize user experience based on preferences.</li>
              <li>Compliance: Ensure adherence to platform guidelines and legal requirements, including parental consent where applicable.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">4. Sharing Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not sell or rent personal data. However, we may share information under the following circumstances:
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.1 For Company Operations</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Service Providers: Trusted third-party vendors providing cloud storage, payment processing, marketing, or analytics services.</li>
              <li>Legal Compliance: When required by law, government request, or legal proceedings.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">4.2 For Applications Developed</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Platform Providers: To enable features such as Google Play Games, Steam Achievements, or App Store services.</li>
              <li>Client-Specific Requirements: Data-sharing as per agreements with clients, subject to their privacy policies.</li>
              <li>Third-Party Tools & APIs: Integration with external analytics, advertising, or software services within the app.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8 italic">
              For client apps, data-sharing practices are defined by agreements with our customers, who may have their own privacy policies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement industry-standard security measures to protect personal data from unauthorized access, loss, misuse, or alteration. For applications developed for clients, data collection and sharing practices are governed by contractual agreements with the client, who may have their own data policies.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">5.1 Security Practices</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Encryption: Sensitive data is encrypted during storage and transmission using industry-standard protocols such as SSL/TLS.</li>
              <li>Access Control: Access to systems and data is restricted to authorized personnel only, with strict authentication and monitoring mechanisms.</li>
              <li>Regular Audits: We conduct periodic security assessments and vulnerability testing to identify and mitigate risks.</li>
              <li>Third-Party Compliance: Any third-party service providers engaged by us must adhere to recognized security standards, such as ISO 27001, SOC 2, or equivalent.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">5.2 Security Measures in Applications</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Secure Integration: All applications developed incorporate secure API integrations and comply with platform security requirements (e.g., Google Play, App Store, Oculus Store, Steam).</li>
              <li>Client-Specific Requirements: Data-sharing as per agreements with clients, subject to their privacy policies.</li>
              <li>Data Minimization: We collect only the data necessary for the app’s intended functionality and avoid excessive data retention.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">5.3 Limitations</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we employ robust security measures, no system can be completely immune to security breaches. In the event of a data breach, we will:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Take immediate steps to contain and mitigate the breach.</li>
              <li>Notify affected users and relevant authorities as required by applicable data protection laws.</li>
              <li>Implement corrective actions to prevent future occurrences.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">6. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We use cookies and similar tracking technologies to enhance user experience and improve our services.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.1 Use of Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies and tracking technologies may be used for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Session Management: To remember user sessions and preferences.</li>
              <li>Analytics: To analyze website and app performance, user engagement, and trends.</li>
              <li>Personalization: To deliver customized content, including personalized ads where applicable.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.2 Tracking Technologies in Applications</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For applications, we may utilize:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Device Identifiers: Unique device identifiers may be used for session tracking and app optimization.</li>
              <li>Analytics Tools: We may integrate third-party analytics services such as Google Analytics, Firebase, or similar platforms to gather insights for app performance and user experience improvements.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">6.3 Managing Cookies and Tracking</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Users have the ability to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Adjust browser or device settings to block or manage cookies.</li>
              <li>Opt out of tracking through in-app settings or platform preferences, such as App Tracking Transparency (ATT) on iOS or Google Play’s opt-out mechanisms.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">7. Children’s Privacy</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">7.1 General Policy</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our applications and services are not directed at children under the age of 13 (or the relevant minimum age in their jurisdiction) unless explicitly designed for them.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              If an application is intended for children, we ensure compliance with child protection laws and platform-specific requirements.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">7.2 Data Collection for Children</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Data collection is strictly limited to what is necessary for the app’s core functionality.</li>
              <li>No personal information is collected without verifiable parental consent where required by law.</li>
              <li>Behavioral advertising and tracking technologies are disabled in compliance with regulatory standards.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">7.3 Compliance for Client-Developed Applications</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When developing applications for clients targeting children, we ensure adherence to:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Google Play Families Policy: Ensuring apps meet the required standards for child-directed content and data handling.</li>
              <li>Apple App Store Guidelines: Compliance with child protection policies regarding data collection and storage.</li>
              <li>Oculus Store & Steam Requirements: Ensuring age-appropriate content and restrictions on data collection from minors.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">7.4 Reporting Concerns</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              If you believe that we have inadvertently collected a child’s personal data without appropriate consent, please contact us at privacy@hashxpert.com. We will promptly investigate and take the necessary action to delete such information.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">8. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We retain personal data only for as long as necessary to fulfill its intended purpose, comply with legal obligations, or meet contractual requirements.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">8.1 Data Retention for Company Operations</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Client Data: Retained for the duration of the business relationship and securely archived after project completion, unless otherwise requested by the client.</li>
              <li>Financial Records: Retained as required by applicable tax, accounting, and regulatory laws.</li>
              <li>Communication Data: Emails, support requests, and related correspondence may be stored for quality assurance, record-keeping, and dispute resolution purposes.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">8.2 Data Retention for Developed Applications</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>User Data: Retention periods vary based on the app’s functionality and platform-specific guidelines. Data is retained only as long as required for core features, such as saving user progress or preferences.</li>
              <li>Analytics Data: Aggregated and anonymized analytics data may be retained for performance optimization, security monitoring, and research purposes.</li>
              <li>User-Initiated Deletion: Users may request deletion of their personal data through in-app settings or by contacting the app’s support team.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">8.3 Data Deletion Policies</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>For applications developed for third-party clients, data deletion policies are governed by contractual agreements and compliance with applicable regulations (e.g., GDPR, CCPA).</li>
              <li>Users can request data deletion via app settings or by submitting a request through the designated support channels.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">9. Store Publishing Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We ensure that all applications published on major digital platforms, including Google Play, App Store, Oculus Store, and Steam, comply with their respective data privacy and security requirements.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">9.1 Google Play Compliance</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Adherence to Google’s User Data Policy, including mandatory disclosure of data collection and usage through the Data Safety section.</li>
              <li>Compliance with the Families Policy for apps targeting children, ensuring age-appropriate content and obtaining verifiable parental consent where required.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">9.2 App Store Compliance</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Full disclosure of data collection and usage practices via Privacy Nutrition Labels, including whether data is linked to individual users.</li>
              <li>Compliance with Apple’s App Tracking Transparency (ATT) framework, requiring explicit user consent for tracking activities.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">9.3 Oculus Store Compliance</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Collection of VR-related data (e.g., tracking, spatial data) follows Meta/Oculus privacy guidelines.</li>
              <li>Implementation of minimal data collection practices, ensuring users are clearly informed about how their data is processed.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">9.4 Steam Store Compliance</h3>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Compliance with Valve’s privacy and security standards for multiplayer games, in-game transactions, and community interactions.</li>
              <li>Transparent disclosures regarding data collection related to achievements, leaderboards, and other gameplay features.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">9.5 Platform-Specific Opt-Outs</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              {/* You had "9.5 Platform-Specific Opt-Outs" listed twice – assuming it's a typo, left empty or add content if needed */}
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">10. User Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Users have control over their data preferences and can adjust their settings via:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Google Account Preferences for limiting data sharing.</li>
              <li>iOS Privacy Settings to manage tracking permissions.</li>
              <li>Steam Privacy Controls for restricting data visibility.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">10.1 User Rights in Company Interactions</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Right to Access: Users may request a copy of the personal data we hold about them.</li>
              <li>Right to Correction: Users can request corrections to inaccurate or incomplete information.</li>
              <li>Right to Deletion: Users may request deletion of their personal data, subject to applicable legal and contractual obligations.</li>
              <li>Right to Data Portability: Users can request their data in a structured, commonly used format.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">10.2 Rights for Developed Applications</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Opt-out of tracking or personalized advertising.</li>
              <li>Request access, modification, or deletion of personal data.</li>
              <li>Withdraw consent for data processing, where applicable.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">10.3 How to Exercise Your Rights</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              To submit a request regarding personal data, users may contact us at privacy@hashxpert.com. Requests will be processed in accordance with applicable laws such as the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">11. Updates to the Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may update this Privacy Policy periodically to reflect changes in regulatory requirements, operational practices, or new features in our services and applications.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">11.1 Notification of Changes</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Updated versions of this Privacy Policy will be posted on our website and, where applicable, within the apps we develop.</li>
              <li>For significant updates affecting user rights or data processing, we will notify users via email or in-app notifications.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">11.2 Effective Date of Changes</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Each update to this Privacy Policy will include an Effective Date at the top of the document. Continued use of our services or applications after an update constitutes acceptance of the revised terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">12. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions, concerns, or requests related to this Privacy Policy or the handling of your data, please contact us at:
            </p>
            <ul className="list-none pl-0 mb-8 text-gray-700 space-y-3">
              <li><strong>Email:</strong> <a href="mailto:info@hashxpert.com" className="text-blue-600 hover:underline">info@hashxpert.com</a></li>
              <li><strong>Office Address:</strong> Bangalore, India</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">13. General Transparency Commitments</h2>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">13.1 Clear Communication</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We prioritize transparency in how we collect, use, and process data. Users can review privacy details through:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Google Play: “Data Safety” section.</li>
              <li>App Store: Privacy Nutrition Labels.</li>
              <li>Oculus Store: Data usage notifications.</li>
              <li>Steam Store: Privacy disclosures in app descriptions.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">13.2 Adherence to Platform-Specific Guidelines</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Each digital platform has unique privacy and security requirements. We ensure full compliance for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Internally published applications developed under our brand.</li>
              <li>Client applications where we align with their privacy policies and contractual obligations.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">13.3 Commitment to User Trust and Data Security</h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We are dedicated to:
            </p>
            <ul className="list-disc pl-6 mb-12 text-gray-700 space-y-2">
              <li>Safeguarding user privacy through robust data security measures.</li>
              <li>Ensuring compliance with global privacy regulations, including GDPR, CCPA, and other jurisdiction-specific laws.</li>
              <li>Continuously enhancing transparency by updating our privacy policies and security frameworks in line with industry best practices.</li>
            </ul>

            <p className="text-gray-600 italic border-t border-gray-200 pt-8 mt-12">
              This Privacy Policy is effective as of February 14, 2025.
            </p>
          </motion.div>
        </div>
      </section>

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
      <CtaFooter />
    </div>
  );
}