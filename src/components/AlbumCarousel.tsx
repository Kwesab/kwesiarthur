import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, X, ExternalLink, Music, CheckCircle2, Circle } from "lucide-react";
import { releases } from "../data/releases";
import type { Release } from "../data/releases";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Cover art / placeholder ─────────────────────────────────────────── */
function Cover({ r, big }: { r: Release; big?: boolean }) {
  const [errored, setErrored] = useState(false);

  if (r.cover && !errored) {
    return (
      <img
        src={r.cover}
        alt={`${r.title} cover art`}
        className="w-full h-full object-cover"
        onError={() => setErrored(true)}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={`${r.title} — placeholder artwork`}
      className="w-full h-full relative flex flex-col justify-between p-4 border border-bone/20 select-none"
      style={{
        background: `radial-gradient(90% 70% at 30% 20%, hsl(${r.hue} 70% 28%), #0b0a0a)`,
      }}
    >
      <span className="text-[10px] tracking-[.3em] uppercase text-bone/60">Kwesi Arthur</span>
      <div>
        {r.label && (
          <span className="text-[9px] tracking-[.2em] uppercase text-bone/35 block mb-2">
            {r.label}
          </span>
        )}
        <span
          className={`font-display uppercase leading-[.9] text-left block ${
            big ? "text-4xl md:text-5xl" : "text-xl md:text-2xl"
          }`}
        >
          {r.title}
        </span>
        <span className="text-[10px] tracking-[.2em] uppercase text-[#e8566b] mt-2 block">
          {r.type} · {r.date ? r.date.slice(0, 4) : r.year}
        </span>
      </div>
    </div>
  );
}

/* ── Streaming link button ───────────────────────────────────────────── */
function StreamBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (opens in new tab)`}
      className="border border-bone/40 px-5 py-3 text-xs tracking-[.2em] uppercase inline-flex gap-2 items-center hover:bg-bone hover:text-ink transition-colors"
    >
      {children}
      <ExternalLink size={13} aria-hidden />
    </a>
  );
}

/* ── Detail modal ────────────────────────────────────────────────────── */
function DetailModal({
  r,
  onClose,
}: {
  r: Release;
  onClose: () => void;
}) {
  const reduce    = useReducedMotion();
  const closeRef  = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const allVerified = r.tracks.every((t) => t.verified);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Release details: ${r.title}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.3 }}
      className="fixed inset-0 z-[70] bg-ink/97 overflow-y-auto"
    >
      {/* Close */}
      <button
        ref={closeRef}
        aria-label="Close release details"
        onClick={onClose}
        className="fixed top-4 right-4 z-10 size-12 border border-bone/40 grid place-items-center hover:bg-bone hover:text-ink transition-colors"
      >
        <X size={20} />
      </button>

      <div className="max-w-5xl mx-auto px-5 md:px-10 py-16 grid md:grid-cols-2 gap-10 md:gap-14">
        {/* Cover */}
        <div className="aspect-square sticky top-16 self-start">
          <Cover r={r} big />
        </div>

        {/* Info */}
        <div>
          <p className="text-[11px] tracking-[.3em] uppercase text-[#e8566b] mb-1">
            {r.type}
          </p>
          <h3 className="font-display text-5xl md:text-6xl uppercase leading-none">
            {r.title}
          </h3>

          {/* Release date */}
          <p className="mt-3 text-bone/60 text-sm">
            {r.date
              ? `Released ${new Date(r.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}`
              : `Released ${r.year} (exact date unverified)`}
          </p>

          {/* Label */}
          {r.label && (
            <p className="text-[11px] tracking-[.2em] uppercase text-bone/40 mt-1">
              {r.label}
            </p>
          )}

          {/* Notes */}
          <p className="mt-5 text-bone/75 leading-relaxed">{r.notes}</p>

          {/* Tracklist */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[11px] tracking-[.25em] uppercase text-bone/60 flex items-center gap-2">
                <Music size={13} aria-hidden className="text-[#e8566b]" />
                Tracklist
              </h4>
              {!allVerified && r.tracks.length > 0 && (
                <span className="text-[10px] text-bone/35 italic">
                  Some tracks from secondary sources
                </span>
              )}
            </div>

            {r.tracks.length === 0 ? (
              <p className="text-bone/40 text-sm italic py-3 border-y border-bone/10">
                Tracklist not yet available from verified sources.
              </p>
            ) : (
              <ol className="divide-y divide-bone/10 border-y border-bone/10">
                {r.tracks.map((track, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 py-2.5"
                  >
                    <span className="text-[11px] text-bone/35 w-5 tabular-nums shrink-0 pt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-sm">
                      {track.title}
                      {track.featuring && (
                        <span className="text-bone/50 ml-1">
                          feat. {track.featuring}
                        </span>
                      )}
                    </span>
                    {track.verified ? (
                      <CheckCircle2
                        size={13}
                        className="text-bone/25 shrink-0 mt-0.5"
                        aria-label="Verified"
                      />
                    ) : (
                      <Circle
                        size={13}
                        className="text-bone/15 shrink-0 mt-0.5"
                        aria-label="Source unconfirmed"
                      />
                    )}
                  </li>
                ))}
              </ol>
            )}

            {r.tracks.length > 0 && (
              <p className="text-[10px] text-bone/30 mt-2 flex gap-3">
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={10} aria-hidden /> verified track
                </span>
                <span className="flex items-center gap-1">
                  <Circle size={10} aria-hidden /> secondary source
                </span>
              </p>
            )}
          </div>

          {/* Streaming links */}
          <div className="mt-8">
            <h4 className="text-[11px] tracking-[.25em] uppercase text-bone/60 mb-4">
              Listen
            </h4>
            <div className="flex flex-wrap gap-3">
              {r.streaming.spotify && (
                <StreamBtn href={r.streaming.spotify} label={`Listen to ${r.title} on Spotify`}>
                  Spotify
                </StreamBtn>
              )}
              {r.streaming.appleMusic && (
                <StreamBtn href={r.streaming.appleMusic} label={`Listen to ${r.title} on Apple Music`}>
                  Apple Music
                </StreamBtn>
              )}
              {r.streaming.youtube && (
                <StreamBtn href={r.streaming.youtube} label={`Listen to ${r.title} on YouTube`}>
                  YouTube
                </StreamBtn>
              )}
            </div>
            <p className="text-[10px] text-bone/30 mt-3 italic leading-relaxed">
              Links open the official streaming platform. Some may use search
              pages where direct album links are unavailable.
            </p>
          </div>

          {/* Source note */}
          <p className="mt-8 pt-6 border-t border-bone/10 text-[10px] text-bone/30 leading-relaxed">
            Source: {r.contentSource}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main carousel ───────────────────────────────────────────────────── */
export default function AlbumCarousel() {
  const [activeIndex, setActiveIndex] = useState(
    releases.findIndex((r) => r.id === "rv") !== -1
      ? releases.findIndex((r) => r.id === "rv")
      : 0
  );
  const [detailOpen, setDetailOpen] = useState(false);
  const reduce = useReducedMotion();
  const n      = releases.length;
  const r      = releases[activeIndex];

  const go = useCallback(
    (dir: number) => setActiveIndex((v) => (v + dir + n) % n),
    [n]
  );

  /* Keyboard navigation */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (detailOpen) return; // detail modal handles its own keys
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft")  go(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go, detailOpen]);

  /* Touch / drag state */
  const dragStartX = useRef<number>(0);

  return (
    <section
      id="music"
      aria-roledescription="carousel"
      aria-label="Discography — album selector"
      className="relative py-24 overflow-hidden"
    >
      {/* Dynamic background halo */}
      <AnimatePresence mode="wait">
        <motion.div
          aria-hidden
          key={r.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background: `radial-gradient(60% 60% at 50% 40%, hsl(${r.hue} 70% 20% / .7), transparent)`,
          }}
        />
      </AnimatePresence>

      {/* Section header */}
      <div className="px-5 md:px-10 flex items-end justify-between mb-10">
        <h2 className="font-display text-6xl md:text-8xl uppercase">Discography</h2>
        <p
          className="font-display text-3xl tabular-nums"
          aria-live="polite"
          aria-atomic="true"
        >
          {String(activeIndex + 1).padStart(2, "0")}{" "}
          <span className="text-bone/40">/ {String(n).padStart(2, "0")}</span>
        </p>
      </div>

      {/* ── 3-D carousel stage ────────────────────────────────────── */}
      <div
        className="relative h-[min(78vw,460px)] touch-pan-y select-none"
        style={{ perspective: 1200 }}
        /* Touch swipe */
        onTouchStart={(e) => { dragStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const delta = e.changedTouches[0].clientX - dragStartX.current;
          if (delta < -50) go(1);
          else if (delta > 50) go(-1);
        }}
        /* Mouse drag */
        onMouseDown={(e) => { dragStartX.current = e.clientX; }}
        onMouseUp={(e) => {
          const delta = e.clientX - dragStartX.current;
          if (Math.abs(delta) > 50) delta < 0 ? go(1) : go(-1);
        }}
      >
        {releases.map((rel, idx) => {
          let offset = idx - activeIndex;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const absOffset = Math.abs(offset);
          const isActive  = absOffset === 0;

          return (
            <motion.button
              key={rel.id}
              aria-label={
                isActive ? `Open details for ${rel.title}` : `Select ${rel.title}`
              }
              aria-current={isActive ? "true" : undefined}
              onClick={() => (isActive ? setDetailOpen(true) : setActiveIndex(idx))}
              className="absolute left-1/2 top-0 h-full aspect-square cursor-pointer -ml-[min(39vw,230px)] w-[min(78vw,460px)]"
              animate={{
                x:        `${offset * 62}%`,
                scale:    1 - absOffset * 0.18,
                opacity:  absOffset > 2 ? 0 : 1 - absOffset * 0.38,
                rotateY:  offset * -18,
                zIndex:   10 - absOffset,
              }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.7, ease }
              }
              style={{ pointerEvents: absOffset > 2 ? "none" : "auto" }}
            >
              <Cover r={rel} big />
            </motion.button>
          );
        })}
      </div>

      {/* ── Info + controls ────────────────────────────────────────── */}
      <div className="px-5 md:px-10 mt-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 text-center md:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-[11px] tracking-[.3em] uppercase text-[#e8566b]">
              {r.type} ·{" "}
              {r.date
                ? new Date(r.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : r.year}
            </p>
            <h3 className="font-display text-4xl md:text-6xl uppercase mt-1 leading-none">
              {r.title}
            </h3>
            <p className="text-bone/70 max-w-md mt-2 leading-relaxed text-sm">
              {r.notes}
            </p>
            {r.tracks.length > 0 && (
              <p className="text-[11px] text-bone/45 mt-2">
                {r.tracks.length} track{r.tracks.length !== 1 ? "s" : ""} listed
              </p>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-3 shrink-0">
          <button
            aria-label="Previous release"
            onClick={() => go(-1)}
            className="size-12 border border-bone/40 grid place-items-center hover:bg-bone hover:text-ink transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setDetailOpen(true)}
            className="bg-crimson px-6 h-12 text-xs tracking-[.25em] uppercase hover:bg-[#b3243a] transition-colors"
            aria-label={`Explore release: ${r.title}`}
          >
            Explore release
          </button>
          <button
            aria-label="Next release"
            onClick={() => go(1)}
            className="size-12 border border-bone/40 grid place-items-center hover:bg-bone hover:text-ink transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* ── Dot indicators ─────────────────────────────────────────── */}
      <div
        className="flex justify-center gap-2 mt-8 flex-wrap px-5"
        role="tablist"
        aria-label="Select release"
      >
        {releases.map((x, k) => (
          <button
            key={x.id}
            role="tab"
            aria-selected={k === activeIndex}
            aria-label={x.title}
            onClick={() => setActiveIndex(k)}
            className={`h-1 rounded-sm transition-all duration-300 ${
              k === activeIndex ? "w-10 bg-crimson" : "w-5 bg-bone/30 hover:bg-bone/50"
            }`}
          />
        ))}
      </div>

      {/* ── Release detail modal ────────────────────────────────────── */}
      <AnimatePresence>
        {detailOpen && (
          <DetailModal r={r} onClose={() => setDetailOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
