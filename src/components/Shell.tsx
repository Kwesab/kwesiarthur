import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Instagram, Twitter, Youtube, Music2 } from "lucide-react";
import { socialLinks } from "../data/social";

const navLinks = [
  ["Home", "#home"],
  ["Story", "#story"],
  ["Music", "#music"],
  ["Videos", "#videos"],
  ["Catalogue", "#catalogue"],
  ["Shows", "#shows"],
  ["Gallery", "#gallery"],
] as const;

/* ── Social icon resolver ─────────────────────────────────────────────── */
function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "instagram": return <Instagram size={18} aria-hidden />;
    case "twitter":   return <Twitter   size={18} aria-hidden />;
    case "youtube":   return <Youtube   size={18} aria-hidden />;
    default:          return <Music2    size={18} aria-hidden />;
  }
}

/* ── Skip link ────────────────────────────────────────────────────────── */
export function SkipLink() {
  return (
    <a
      href="#home"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-crimson focus:text-bone focus:px-4 focus:py-2 focus:text-xs focus:tracking-widest focus:uppercase"
    >
      Skip to content
    </a>
  );
}

/* ── Navbar ───────────────────────────────────────────────────────────── */
export function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-sm border-b border-bone/10 py-3"
          : "py-4"
      } px-5 md:px-10 flex items-center justify-between`}
    >
      {/* Logo */}
      <a
        href="#home"
        className="font-display text-2xl tracking-widest hover:text-[#e8566b] transition-colors"
        aria-label="Kwesi Arthur — back to top"
      >
        KWESI ARTHUR
      </a>

      {/* Desktop nav */}
      <nav aria-label="Primary navigation" className="hidden md:flex gap-8 text-[11px] tracking-[.25em] uppercase">
        {navLinks.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="hover:text-[#e8566b] transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Desktop social icons */}
      <div className="hidden md:flex items-center gap-4">
        {socialLinks
          .filter((l) => ["instagram", "twitter", "youtube"].includes(l.id))
          .map((l) => (
            <a
              key={l.id}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${l.platform} — opens in new tab`}
              className="text-bone/60 hover:text-bone transition-colors"
            >
              <SocialIcon icon={l.icon} />
            </a>
          ))}
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 -mr-2 text-bone"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 bg-ink flex flex-col pt-24 px-8 pb-10 md:hidden overflow-y-auto"
          >
            {/* Close button inside overlay */}
            <button
              className="absolute top-4 right-5 p-2 text-bone"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={24} />
            </button>

            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="font-display text-[14vw] leading-tight uppercase hover:text-[#e8566b] transition-colors py-1"
              >
                {label}
              </a>
            ))}

            {/* Social row in mobile menu */}
            <div className="flex gap-5 mt-auto pt-8 border-t border-bone/15">
              {socialLinks.map((l) => (
                <a
                  key={l.id}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.platform}
                  className="text-bone/60 hover:text-bone transition-colors"
                >
                  <SocialIcon icon={l.icon} />
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ── Footer ───────────────────────────────────────────────────────────── */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bone/15 px-5 md:px-10 py-12 mt-4">
      {/* Top row */}
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start md:items-end mb-10">
        <div>
          <p className="font-display text-3xl tracking-widest mb-2">KWESI ARTHUR</p>
          <p className="text-xs text-bone/60 tracking-[.2em] uppercase">Tema, Ghana · Est. 1999</p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-8 gap-y-2 text-[11px] tracking-[.25em] uppercase text-bone/70">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-bone transition-colors">
              {label}
            </a>
          ))}
        </nav>
      </div>

      {/* Social + streaming */}
      <div className="flex flex-wrap gap-4 mb-10">
        {socialLinks.map((l) => (
          <a
            key={l.id}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${l.platform} — opens in new tab`}
            className="flex items-center gap-2 border border-bone/25 px-4 py-2 text-[11px] tracking-[.2em] uppercase text-bone/70 hover:border-bone/60 hover:text-bone transition-colors"
          >
            <SocialIcon icon={l.icon} />
            {l.platform}
          </a>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="border-t border-bone/10 pt-8 flex flex-col md:flex-row gap-4 justify-between text-[11px] text-bone/50 leading-relaxed">
        <p className="max-w-2xl">
          <strong className="text-bone/70">Unofficial fan-made project. Not affiliated with, endorsed by, or operated by
          Kwesi Arthur or his management.</strong> Artist names, imagery, and music
          belong to their respective owners. This site is part of "10 Days, 10 Artistes
          — Ghana", an independent software engineering and creative challenge, and is
          non-commercial in nature. A disclaimer alone does not grant permission to use
          protected material; all content has been selected in good faith.
        </p>
        <div className="flex flex-col items-start md:items-end gap-1 shrink-0">
          <a href="#home" className="underline underline-offset-2 hover:text-bone/70 transition-colors">
            Back to top
          </a>
          <p>© {year} Fan Project</p>
        </div>
      </div>
    </footer>
  );
}
