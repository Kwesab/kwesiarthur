import { useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Artist photos — rotating hero gallery
 * Local images provided by the project owner, stored in /public/kwesi/
 * Photos 1-12: various Kwesi Arthur promotional and performance images
 */
const ARTIST_PHOTOS = Array.from({ length: 12 }, (_, i) => ({
  src: `/kwesi/${i + 1}.jpeg`,
  alt: `Kwesi Arthur — promotional photo ${i + 1}`,
}));

const ROTATE_INTERVAL = 5000; // ms between photo rotations

function AnimatedLine({ text, index }: { text: string; index: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease, delay: 0.3 + index * 0.15 }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce              = useReducedMotion();
  const { scrollY }         = useScroll();
  const y                   = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 120]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoLoaded, setPhotoLoaded] = useState<boolean[]>(ARTIST_PHOTOS.map(() => false));
  const [photoErrored, setPhotoErrored] = useState<boolean[]>(ARTIST_PHOTOS.map(() => false));

  // Auto-rotate through photos
  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % ARTIST_PHOTOS.length);
    }, ROTATE_INTERVAL);
    return () => clearInterval(timer);
  }, [reduce]);

  const currentPhoto = ARTIST_PHOTOS[photoIndex];
  const anyLoaded    = photoLoaded.some(Boolean);

  const handleLoad  = (i: number) => setPhotoLoaded((prev) => { const n=[...prev]; n[i]=true; return n; });
  const handleError = (i: number) => setPhotoErrored((prev) => { const n=[...prev]; n[i]=true; return n; });

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden px-5 md:px-10 pb-16 pt-28"
    >
      {/* Parallax background */}
      <motion.div style={{ y }} aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_30%,rgba(155,28,46,.45),transparent)]" />
        <div className="absolute right-[-5%] top-[6%] font-display text-[38vw] leading-none text-bone/[.035] select-none">
          KA
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-bone/10 to-transparent" />
      </motion.div>

      {/* Rotating artist photos — full background on mobile, right side on desktop */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[45vw] lg:max-w-[600px] pointer-events-none overflow-hidden">
        {/* Gradient masks — stronger on mobile for text readability */}
        <div aria-hidden className="absolute inset-0 z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40 lg:bg-gradient-to-r lg:from-ink lg:via-ink/50 lg:to-transparent" />
        <div aria-hidden className="absolute inset-0 z-10 bg-gradient-to-b from-ink/60 via-transparent to-ink/90 lg:bg-gradient-to-t lg:from-ink lg:via-transparent lg:to-ink/60" />

        {/* Hidden preload images */}
        {ARTIST_PHOTOS.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt=""
            aria-hidden
            className="sr-only"
            onLoad={() => handleLoad(i)}
            onError={() => handleError(i)}
          />
        ))}

        {/* Animated photo crossfade */}
        <AnimatePresence mode="wait">
          {!photoErrored[photoIndex] && (
            <motion.img
              key={photoIndex}
              src={currentPhoto.src}
              alt={currentPhoto.alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: anyLoaded ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover object-center lg:object-top"
            />
          )}
        </AnimatePresence>

        {/* Photo dots */}
        {anyLoaded && (
          <div aria-hidden className="absolute bottom-6 right-6 z-20 flex gap-1.5">
            {ARTIST_PHOTOS.map((_, i) => (
              <button
                key={i}
                aria-hidden
                tabIndex={-1}
                onClick={() => setPhotoIndex(i)}
                className={`size-1.5 rounded-full transition-all duration-500 ${
                  i === photoIndex ? "bg-bone/70 scale-125" : "bg-bone/25"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Photo credit */}
      {anyLoaded && !photoErrored[photoIndex] && (
        <p aria-hidden className="absolute bottom-4 right-4 text-[9px] text-bone/20 z-20">
          Kwesi Arthur · fan project
        </p>
      )}

      {/* Content */}
      <motion.p
        className="text-[11px] tracking-[.35em] uppercase text-bone/60 mb-6 relative z-10"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        Ghana · Music · Culture
      </motion.p>

      <h1 className="font-display text-[16vw] md:text-[10vw] leading-[.88] uppercase relative z-10">
        <AnimatedLine text="More than music." index={0} />
        <span className="text-[#c4283d]">
          <AnimatedLine text="An entire experience." index={1} />
        </span>
      </h1>

      <motion.p
        className="max-w-md mt-6 text-bone/75 leading-relaxed relative z-10"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.7 }}
      >
        From Tema to the world — a fan-built journey through the records, story,
        and culture of Kwesi Arthur.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-3 mt-8 relative z-10"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.85 }}
      >
        <a href="#music" className="bg-crimson px-7 py-3 text-xs tracking-[.25em] uppercase hover:bg-[#b3243a] transition-colors">
          Explore Music
        </a>
        <a href="#story" className="border border-bone/40 px-7 py-3 text-xs tracking-[.25em] uppercase hover:bg-bone hover:text-ink transition-colors">
          Discover the Story
        </a>
      </motion.div>

      <a
        href="#story"
        aria-label="Scroll down to artist story"
        className="absolute right-5 md:right-10 bottom-10 hidden sm:flex flex-col items-center gap-2 text-bone/40 hover:text-bone/70 transition-colors z-10"
      >
        <span className="text-[9px] tracking-[.3em] uppercase" aria-hidden>Scroll</span>
        <ArrowDown size={18} className={reduce ? "" : "animate-bounce"} aria-hidden />
      </a>
    </section>
  );
}
