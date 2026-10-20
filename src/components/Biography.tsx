import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { ChevronDown, ChevronUp, Award } from "lucide-react";
import biography from "../data/biography";

/**
 * Artist photo — local image from /public/kwesi/
 */
const ARTIST_PHOTO = "/kwesi/1.jpeg";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Biography() {
  const [expanded, setExpanded] = useState(false);

  // Show first 3 paragraphs by default; show all when expanded
  const visibleParagraphs = expanded
    ? biography.story
    : biography.story.slice(0, 3);

  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="relative py-24 px-5 md:px-10 overflow-hidden"
    >
      {/* Subtle section background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(50%_40%_at_20%_60%,rgba(155,28,46,.12),transparent)]"
      />

      {/* Section header */}
      <FadeIn className="mb-14">
        <p className="text-[11px] tracking-[.35em] uppercase text-[#e8566b] mb-3">
          The Journey
        </p>
        <h2
          id="story-heading"
          className="font-display text-6xl md:text-8xl uppercase leading-none"
        >
          Artist Story
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_400px] gap-16 items-start">
        {/* ── Left: story paragraphs ─────────────────────────────────── */}
        <div>
          {/* Quick-facts card */}
          <FadeIn delay={0.1} className="mb-10">
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-bone/15 bg-bone/15">
              {[
                ["Born", "18 Dec 1999"],
                ["Origin", "Tema, Ghana"],
                ["Genre", "Hip-hop / Afrobeats"],
                ["Active", "2017 – Present"],
              ].map(([label, value]) => (
                <div key={label} className="bg-ink px-4 py-4">
                  <dt className="text-[10px] tracking-[.3em] uppercase text-bone/50 mb-1">
                    {label}
                  </dt>
                  <dd className="text-sm font-medium text-bone">{value}</dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          {/* Story paragraphs */}
          <div className="space-y-5 text-bone/80 leading-relaxed">
            {visibleParagraphs.map((para, i) => (
              <FadeIn key={i} delay={0.05 * i}>
                <p>{para}</p>
              </FadeIn>
            ))}
          </div>

          {/* Read more / less toggle */}
          {biography.story.length > 3 && (
            <FadeIn className="mt-8">
              <button
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
                className="flex items-center gap-2 border border-bone/40 px-5 py-3 text-xs tracking-[.25em] uppercase hover:bg-bone hover:text-ink transition-colors"
              >
                {expanded ? (
                  <>
                    Read less <ChevronUp size={14} aria-hidden />
                  </>
                ) : (
                  <>
                    Read full story <ChevronDown size={14} aria-hidden />
                  </>
                )}
              </button>
            </FadeIn>
          )}
        </div>

        {/* ── Right: milestones + awards ─────────────────────────────── */}
        <aside aria-label="Career milestones and awards">
          {/* Artist photo */}
          <FadeIn delay={0.15} className="mb-10">
            <div className="relative aspect-[3/4] overflow-hidden border border-bone/10">
              <img
                src={ARTIST_PHOTO}
                alt="Kwesi Arthur performing live at Alliance Francais, Accra — 2018"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              {/* Gradient overlay at bottom for caption */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ink/90 to-transparent px-3 pt-8 pb-3">
                <p className="text-[9px] text-bone/40 leading-snug">
                  Kwesi Arthur · fan project collection
                </p>
              </div>
            </div>
          </FadeIn>
          {/* Timeline */}
          <FadeIn delay={0.2}>
            <h3 className="text-[11px] tracking-[.3em] uppercase text-bone/60 mb-6">
              Key Milestones
            </h3>
            <ol className="relative border-l border-bone/20 space-y-0">
              {biography.milestones.map((m, i) => (
                <li key={i} className="pl-6 pb-7 last:pb-0 relative">
                  {/* Timeline dot */}
                  <span
                    aria-hidden
                    className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-crimson border-2 border-ink"
                  />
                  <time
                    dateTime={m.year}
                    className="text-[10px] tracking-[.3em] text-[#e8566b] uppercase block mb-1"
                  >
                    {m.year}
                  </time>
                  <p className="text-sm text-bone/80 leading-snug">{m.event}</p>
                  {!m.verified && (
                    <p className="text-[10px] text-bone/40 mt-0.5 italic">
                      Source not independently confirmed
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </FadeIn>

          {/* Awards */}
          <FadeIn delay={0.3} className="mt-12">
            <h3 className="text-[11px] tracking-[.3em] uppercase text-bone/60 mb-5 flex items-center gap-2">
              <Award size={14} aria-hidden className="text-[#e8566b]" />
              Awards &amp; Nominations
            </h3>
            <ul className="space-y-2">
              {biography.awards.map((award, i) => (
                <li
                  key={i}
                  className="text-sm text-bone/75 pl-3 border-l border-bone/20 leading-snug"
                >
                  {award}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Labels */}
          <FadeIn delay={0.35} className="mt-12">
            <h3 className="text-[11px] tracking-[.3em] uppercase text-bone/60 mb-4">
              Labels
            </h3>
            <div className="flex flex-wrap gap-2">
              {biography.labels.map((label) => (
                <span
                  key={label}
                  className="border border-bone/25 px-3 py-1.5 text-xs text-bone/70 tracking-wide"
                >
                  {label}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Genres */}
          <FadeIn delay={0.4} className="mt-8">
            <h3 className="text-[11px] tracking-[.3em] uppercase text-bone/60 mb-4">
              Genres
            </h3>
            <div className="flex flex-wrap gap-2">
              {biography.genres.map((g) => (
                <span
                  key={g}
                  className="bg-bone/8 px-3 py-1.5 text-xs text-bone/70 tracking-wide"
                >
                  {g}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Content note */}
          <FadeIn delay={0.45} className="mt-10 pt-6 border-t border-bone/10">
            <p className="text-[10px] text-bone/35 leading-relaxed">
              Biography sourced from Wikipedia, Wonderland Magazine (Apr 2026),
              Pan-African Music, Genius, and yen.com.gh. Dates and facts
              independently verified where possible.
            </p>
          </FadeIn>
        </aside>
      </div>
    </section>
  );
}
