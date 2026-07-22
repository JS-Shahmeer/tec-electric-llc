import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/logo.webp";

const services = [
  { label: "General Contracting", path: "/services/general-contracting" },
  { label: "Electrical Contracting", path: "/services/electrical-contracting" },
  { label: "Commercial Lighting", path: "/services/commercial-lighting" },
  { label: "Subcontracting", path: "/services/subcontracting" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services", children: services },
  { label: "Industries", path: "/industries" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={Logo}
                alt="TEC Electric logo"
                className={`h-9 w-auto object-contain transition duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.children ? (
                    <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${location.pathname.startsWith("/services") ? "text-voltage" : scrolled ? "text-obsidian hover:text-voltage" : "text-silver hover:text-white"}`}>
                      {link.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${location.pathname === link.path ? "text-voltage" : scrolled ? "text-obsidian hover:text-voltage" : "text-silver hover:text-white"}`}
                    >
                      {link.label}
                    </Link>
                  )}
                  {link.children && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-obsidian/95 backdrop-blur-md border border-white/10 rounded-sm p-2 min-w-[220px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-4 py-2.5 text-sm text-silver hover:text-white hover:bg-white/5 rounded-sm transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:7043945097" className={`flex items-center gap-2 text-sm transition-colors ${scrolled ? "text-obsidian hover:text-voltage" : "text-silver hover:text-white"}`}>
                <Phone className="w-4 h-4" />
                <span className="font-mono text-xs">704-394-5097</span>
              </a>
              <Link
                to="/contact"
                className="bg-voltage text-obsidian px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-amber-400 transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className={`lg:hidden p-2 transition-colors ${scrolled ? "text-obsidian" : "text-white"}`}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-obsidian pt-16"
          >
            <div className="p-6 space-y-1 overflow-y-auto h-full pb-32">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full py-3 text-lg font-heading text-white uppercase"
                      >
                        {link.label}
                        <ChevronDown className={`w-5 h-5 text-silver transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="block py-2.5 text-silver hover:text-voltage transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      className="block py-3 text-lg font-heading text-white uppercase"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-6 space-y-3">
                <a href="tel:7043945097" className="flex items-center gap-3 text-silver">
                  <Phone className="w-5 h-5" />
                  <span className="font-mono">704-394-5097</span>
                </a>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-voltage text-obsidian py-4 font-bold uppercase tracking-wider text-lg"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-obsidian/95 backdrop-blur-md border-t border-white/10 p-3 flex gap-2">
        <a href="tel:7043945097" className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white py-3 font-bold text-sm uppercase tracking-wider">
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <Link to="/contact" className="flex-1 flex items-center justify-center gap-2 bg-voltage text-obsidian py-3 font-bold text-sm uppercase tracking-wider">
          <Zap className="w-4 h-4" />
          Get Quote
        </Link>
      </div>
    </>
  );
}