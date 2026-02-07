import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Solutions } from './pages/Solutions';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Faq } from './pages/Faq';
import { StaffingServices } from './pages/StaffingServices';
import { InfrastructureServices } from './pages/InfrastructureServices';
import { ProfessionalServices } from './pages/ProfessionalServices';
import { AiMlVrInnovations } from './pages/AiMlVrInnovations';
import { SecuritySolutions } from './pages/SecuritySolutions';
import {CloudSolutions} from './pages/CloudSolutions';
import {Networking} from './pages/Networking';

// Small component to handle scroll-to-top (lives INSIDE Router)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      {/* Add this – fixes scroll on route change */}
      <ScrollToTop />

      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/services/staffing" element={<StaffingServices />} />
          <Route path="/services/infrastructure" element={<InfrastructureServices />} />
          <Route path="/services/professional" element={<ProfessionalServices />} />
          <Route path="/services/ai-ml-vr" element={<AiMlVrInnovations />} />
          <Route path="/solutions/security" element={<SecuritySolutions />} />
          <Route path="/solutions/cloud" element={<CloudSolutions />} />
          <Route path="/solutions/networking" element={<Networking />} />
        </Routes>
      </div>
    </Router>
  );
}