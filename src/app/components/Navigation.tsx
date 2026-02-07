import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'services' | 'solutions' | null>(null);
  const location = useLocation();

  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceSubLinks = [
    { name: 'Infrastructure Services', path: '/services/infrastructure' },
    { name: 'Staffing Services', path: '/services/staffing' },
    { name: 'Professional Services', path: '/services/professional' },
    { name: 'AI/ML/VR Innovations', path: '/services/ai-ml-vr' },
  ];

  const solutionSubLinks = [
    { name: 'Security Solutions', path: '/solutions/security' },
    { name: 'Cloud Solutions', path: '/solutions/cloud' },
    { name: 'Networking', path: '/solutions/networking' },
  ];

  const isServicesActive = location.pathname === '/services' || location.pathname.startsWith('/services/');
  const isSolutionsActive = location.pathname === '/solutions' || location.pathname.startsWith('/solutions/');

  // Desktop dropdown handlers
  const handleMouseEnter = (dropdown: 'services' | 'solutions') => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={isScrolled ? '/assets/logo-blue.png' : '/assets/logo-white.png'}
              alt="HashXpert Logo"
              className="h-10 md:h-12 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isServices = link.name === 'Services';
              const isSolutions = link.name === 'Solutions';
              const isActive =
                (isServices && isServicesActive) ||
                (isSolutions && isSolutionsActive) ||
                (!isServices && !isSolutions && location.pathname === link.path);

              if (isServices || isSolutions) {
                const dropdownKey = isServices ? 'services' : 'solutions';
                const subLinks = isServices ? serviceSubLinks : solutionSubLinks;

                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(dropdownKey)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 transition-colors ${
                        isActive
                          ? isScrolled
                            ? 'text-blue-600'
                            : 'text-white'
                          : isScrolled
                          ? 'text-gray-700 hover:text-blue-600'
                          : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          openDropdown === dropdownKey ? 'rotate-180' : ''
                        }`}
                      />
                    </Link>

                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{
                        opacity: openDropdown === dropdownKey ? 1 : 0,
                        y: openDropdown === dropdownKey ? 0 : 10,
                        scale: openDropdown === dropdownKey ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.45, ease: [0.4, 0.0, 0.2, 1] }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
                      style={{ pointerEvents: openDropdown === dropdownKey ? 'auto' : 'none' }}
                    >
                      {subLinks.map((subLink) => (
                        <Link
                          key={subLink.path}
                          to={subLink.path}
                          className={`block px-5 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                            location.pathname === subLink.path ? 'bg-blue-50 text-blue-600 font-medium' : ''
                          }`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                );
              }

              return (
                <Link key={link.path} to={link.path} className="relative group">
                  <span
                    className={`transition-colors ${
                      isActive
                        ? isScrolled
                          ? 'text-blue-600'
                          : 'text-white'
                        : isScrolled
                        ? 'text-gray-700 hover:text-blue-600'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </span>
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                        isScrolled ? 'bg-blue-600' : 'bg-white'
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu – FIXED */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg overflow-hidden"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => {
              const isServices = link.name === 'Services';
              const isSolutions = link.name === 'Solutions';

              if (isServices || isSolutions) {
                const dropdownKey = isServices ? 'services' : 'solutions';
                const isOpen = openDropdown === dropdownKey;
                const isActive = isServices ? isServicesActive : isSolutionsActive;

                return (
                  <div key={link.path} className="space-y-2">
                    <div
                      className={`flex justify-between items-center py-3 px-4 rounded-lg transition-colors ${
                        isActive ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {/* Navigates to main page */}
                      <Link
                        to={link.path}
                        className="flex-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>

                      {/* Arrow toggles dropdown */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents triggering parent navigation
                          setOpenDropdown(isOpen ? null : dropdownKey);
                        }}
                        className="p-2 -mr-2"
                      >
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                    </div>

                    {isOpen && (
                      <div className="pl-6 space-y-1">
                        {(isServices ? serviceSubLinks : solutionSubLinks).map((subLink) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block py-2 px-4 rounded-lg transition-colors ${
                              location.pathname === subLink.path
                                ? 'bg-blue-50 text-blue-600 font-medium'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}