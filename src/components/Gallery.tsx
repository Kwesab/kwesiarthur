import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ImageOff, ExternalLink } from "lucide-react";
import { galleryImages } from "../data/gallery";
import type { GalleryImage } from "../data/gallery";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Placeholder art (no real photo yet) ────────────────────────────── */
function PlaceholderArt({ image }: { image: GalleryImage }) {
  return (
    <div
      role="img"
      aria-label={image.alt}
      className="w-full h-full flex flex-col items-center justify-center gap-3 select-none"
      style={{
        background: `radial-gradient(70% 60% at 40% 35%, hsl(${image.hue} 55% 22%), #0b0a0a)`,
      }}
    >
      <ImageOff size={28} className="text-bone/20" aria-hidden />
      <p className="text-[10px] tracking-[.25em] uppercase text-bone/30 px-4 text-center">
        {image.caption ?? "Photo placeholder"}
      </p>
      {image.year && (
        <p className="text-[9px] tracking-widest text-bone/20 uppercase">{image.year}</p>
      )}
    </div>
  );
}

/* ── Thumbnail card ──────────────────────────────────────────────────── */
function GalleryThumb({
  image,
  index,
  onOpen,
}: {
  image: GalleryImage;
  index: number;
  onOpen: (i: number) => void;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, ease, delay: (index % 4) * 0.07 }}
    >
      <button
        className="group relative w-full aspect-square overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label={`View image: ${image.alt}`}
        onClick={() => onOpen(index)}
      >
        {image.placeholder || !image.src ? (
          <PlaceholderArt image={image} />
        ) : (
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}

        {/* Hover overlay */}
        <span
          aria-hidden
          className="absolute inset-0 bg-ink/50 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <ZoomIn size={28} className="text-bone/80" />
        </span>

        {/* Caption strip */}
        {image.caption && (
          <span
            aria-hidden
            className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/90 to-transparent px-3 pb-3 pt-8 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300"
          >
            <span className="block text-[11px] text-bone/80 leading-snug truncate">
              {image.caption}
            </span>
          </span>
        )}
      </button>
    </motion.div>
  );
}

/* ── Lightbox ────────────────────────────────────────────────────────── */
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const reduce   = useReducedMotion();
  const n        = images.length;
  const image    = images[current];

  const prev = useCallback(() => setCurrent((c) => (c - 1 + n) % n), [n]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % n), [n]);

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  /* Lock scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery: ${image.alt}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.25 }}
      className="fixed inset-0 z-[80] bg-ink/97 flex flex-col"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 md:px-10 py-4 border-b border-bone/10 shrink-0">
        <p className="text-xs tracking-[.2em] uppercase text-bone/50" aria-live="polite">
          {current + 1} / {n}
        </p>
        <button
          aria-label="Close gallery"
          onClick={onClose}
          autoFocus
          className="size-10 border border-bone/40 grid place-items-center hover:bg-bone hover:text-ink transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Main image area */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden px-16 py-6">
        {/* Prev button */}
        <button
          aria-label="Previous image"
          onClick={prev}
          className="absolute left-2 md:left-6 size-12 border border-bone/40 grid place-items-center hover:bg-bone hover:text-ink transition-colors z-10"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Image / placeholder */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3, ease }}
            className="max-w-3xl w-full max-h-full"
          >
            {image.placeholder || !image.src ? (
              <div className="aspect-[4/3] w-full">
                <PlaceholderArt image={image} />
              </div>
            ) : (
              <img
                src={image.src}
                alt={image.alt}
                className="max-w-full max-h-[70vh] object-contain mx-auto"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Next button */}
        <button
          aria-label="Next image"
          onClick={next}
          className="absolute right-2 md:right-6 size-12 border border-bone/40 grid place-items-center hover:bg-bone hover:text-ink transition-colors z-10"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Caption bar */}
      <div className="shrink-0 px-5 md:px-10 py-5 border-t border-bone/10 text-center">
        {image.caption && (
          <p className="text-sm text-bone/70 mb-1">{image.caption}</p>
        )}
        {image.credit && !image.placeholder && (
          <p className="text-[10px] text-bone/40 tracking-wide">
            Photo:{" "}
            <a
              href={image.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bone/60"
            >
              {image.credit}
            </a>
            {" · "}
            <a
              href={image.licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-bone/60"
            >
              {image.license}
            </a>
            {" · via Wikimedia Commons"}
          </p>
        )}
        {image.placeholder && (
          <p className="text-[10px] text-bone/30 italic mt-1">
            Placeholder — authorized photography not yet sourced
          </p>
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="shrink-0 flex gap-1.5 overflow-x-auto px-5 md:px-10 pb-5 scrollbar-none" role="tablist" aria-label="Gallery thumbnails">
        {images.map((img, i) => (
          <button
            key={img.id}
            role="tab"
            aria-selected={i === current}
            aria-label={img.alt}
            onClick={() => setCurrent(i)}
            className={`shrink-0 size-14 overflow-hidden border-2 transition-all ${
              i === current ? "border-crimson" : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            {img.placeholder || !img.src ? (
              <div
                className="w-full h-full"
                style={{
                  background: `radial-gradient(circle at 40% 40%, hsl(${img.hue} 55% 22%), #0b0a0a)`,
                }}
              />
            ) : (
              <img src={img.src} alt="" className="w-full h-full object-cover" aria-hidden />
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────────────────── */
export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const headingRef    = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const reduce        = useReducedMotion();

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="relative py-24 px-5 md:px-10 overflow-hidden"
    >
      {/* Background tint */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_70%_70%,rgba(155,28,46,.08),transparent)]"
      />

      {/* Header */}
      <motion.div
        ref={headingRef}
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease }}
        className="mb-14"
      >
        <p className="text-[11px] tracking-[.35em] uppercase text-[#e8566b] mb-3">
          Visuals
        </p>
        <h2
          id="gallery-heading"
          className="font-display text-6xl md:text-8xl uppercase leading-none"
        >
          Gallery
        </h2>
      </motion.div>

      {/* Rights notice */}
      <div className="mb-8 border-l-2 border-[#e8566b]/40 pl-4 max-w-xl">
        <p className="text-xs text-bone/50 leading-relaxed">
          Photos from the project owner's collection. This is an unofficial fan-made
          project — all artist images belong to their respective rights holders.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1.5 md:gap-2"
        role="list"
        aria-label="Photo gallery"
      >
        {galleryImages.map((img, i) => (
          <div key={img.id} role="listitem">
            <GalleryThumb image={img} index={i} onOpen={setLightboxIndex} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={galleryImages}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
