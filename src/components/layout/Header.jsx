import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, ChevronDown } from "lucide-react";
import { NAV_LINKS, CAPABILITIES, COMPANY } from "@/lib/content";
import AmberButton from "@/components/ui/AmberButton";
import { cn } from "@/lib/utils";
import Logo from "@/assets/images/logo-light.webp";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) setMobileServicesOpen(true);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 pt-[3px] transition-all duration-300 border-b",
        scrolled ? "bg-carbon/80 backdrop-blur-xl border-white/10" : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="flex h-[77px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 focus-wire">
            <img src={Logo} alt="TEC Electric LLC" className="w-auto h-12" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.label === "Services" ? (
                <div key={link.label} className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-galvanized hover:text-white transition-colors focus-wire"
                  >
                    {link.label} <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {megaOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px]">
                      <div className="bg-carbon border border-white/10 backdrop-blur-xl p-2 grid grid-cols-1 shadow-2xl">
                        {CAPABILITIES.map((cap) => (
                          <Link
                            key={cap.slug}
                            to={`/services/${cap.slug}`}
                            className="group flex items-start gap-4 p-4 hover:bg-white/5 transition-colors focus-wire"
                          >
                            <div className="w-10 h-10 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-amber transition-colors">
                              <cap.icon className="w-5 h-5 text-amber" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-display font-semibold text-white text-sm">{cap.title}</span>
                                <span className="font-mono text-[10px] text-galvanized">{cap.code}</span>
                              </div>
                              <p className="text-xs text-galvanized mt-1 line-clamp-2">{cap.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.to}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors focus-wire",
                    location.pathname === link.to ? "text-amber" : "text-galvanized hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:block">
            <AmberButton to="/contact" arrow>Request a Quote</AmberButton>
          </div>

          <button
            type="button"
            className="lg:hidden text-white focus-wire p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden max-h-[calc(100dvh-80px)] overflow-y-auto bg-carbon border-t border-white/10 px-5 py-6 space-y-1">
          {NAV_LINKS.map((link) => link.label === "Services" ? (
            <div key={link.label} className="border-b border-white/5">
              <div className="flex items-center justify-between">
                <Link to={link.to} className="py-3 text-lg font-display font-medium text-white focus-wire">
                  {link.label}
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                  aria-label="Toggle Services submenu"
                  className="p-3 text-galvanized focus-wire"
                >
                  <ChevronDown className={cn("w-5 h-5 transition-transform", mobileServicesOpen && "rotate-180")} />
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="mb-3 ml-3 border-l border-white/10 pl-4">
                  {CAPABILITIES.map((cap) => (
                    <Link
                      key={cap.slug}
                      to={`/services/${cap.slug}`}
                      className="flex items-center gap-2 py-2 text-sm text-galvanized hover:text-white focus-wire"
                    >
                      <cap.icon className="h-4 w-4 shrink-0 text-amber" />
                      <span>{cap.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.label}
              to={link.to}
              className="block py-3 text-lg font-display font-medium text-white border-b border-white/5 focus-wire"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <AmberButton to="/contact" className="w-full" arrow>Request a Quote</AmberButton>
          </div>
          <a href={COMPANY.phoneHref} className="block pt-3 font-mono text-sm text-galvanized">{COMPANY.phone}</a>
        </div>
      )}
    </header>
  );
}