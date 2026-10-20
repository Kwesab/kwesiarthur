import { useRef, useState, useMemo } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "motion/react";
import { ExternalLink, Music, Search, Filter } from "lucide-react";
import { allSongs, CATEGORY_LABELS } from "../data/discography";
import type { SongCategory } from "../data/discography";

const ease = [0.22, 1, 0.36, 1] as const;

const CATEGORIES: { key: SongCategory | "all"; label: string }[] = [
  { key: "all",       label: "All" },
  { key: "solo",      label: "Solo" },
  { key: "collab",    label: "Collabs" },
  { key: "feature",   label: "Features" },
  { key: "freestyle", label: "Freestyles" },
  { key: "interview", label: "Interviews" },
];

const CATEGORY_COLORS: Record<SongCategory, string> = {
  solo:      "text-bone/70",
  collab:    "text-[#e8566b]",
  feature:   "text-amber-400/80",
  freestyle: "text-emerald-400/80",
  interview: "text-sky-400/80",
  live:      "text-purple-400/80",
};

const CATEGORY_BADGES: Record<SongCategory, string> = {
  solo:      "border-bone/20 text-bone/50",
  collab:    "border-[#e8566b]/40 text-[#e8566b]",
  feature:   "border-amber-400/40 text-amber-400/80",
  freestyle: "border-emerald-400/40 text-emerald-400/80",
  interview: "border-sky-400/40 text-sky-400/80",
  live:      "border-purple-400/40 text-purple-400/80",
};

function SongRow({
  song,
  index,
}: {
  song: (typeof allSongs)[0];
  index: number;
}) {
  const ref    = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const reduce = useReducedMotion();

  return (
    <motion.li
      ref={ref}
      initial={reduce ? false : { opacity: 0, x: -12 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, ease, delay: (index % 10) * 0.03 }}
      className="group grid grid-cols-[32px_1fr_auto] md:grid-cols-[32px_1fr_120px_auto] gap-3 items-center border-b border-bone/8 py-3 hover:bg-bone/[.03] transition-colors px-2 -mx-2"
    >
      {/* Index */}
      <span className="text-[11px] tabular-nums text-bone/25 text-right">{String(index + 1).padStart(2, "0")}</span>

      {/* Title + meta */}
      <div className="min-w-0">
        <p className="text-sm font-medium text-bone truncate leading-snug">
          {song.artist ? (
            <span className="text-bone/50 text-xs mr-1">{song.artist} —</span>
          ) : null}
          {song.title}
          {song.featuring && (
            <span className="text-bone/40 text-xs ml-1.5">feat. {song.featuring}</span>
          )}
        </p>
        {song.note && (
          <p className="text-[10px] text-bone/35 mt-0.5 truncate">{song.note}</p>
        )}
      </div>

      {/* Year — hidden on mobile */}
      <span className="hidden md:block text-xs text-bone/35 text-right">{song.year}</span>

      {/* Links */}
      <div className="flex items-center gap-1.5">
        <span className={`hidden sm:inline border px-2 py-0.5 text-[9px] tracking-[.15em] uppercase ${CATEGORY_BADGES[song.category]}`}>
          {CATEGORY_LABELS[song.category]}
        </span>
        {song.appleMusicUrl && (
          <a
            href={song.appleMusicUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Listen to ${song.title} on Apple Music`}
            className="p-1.5 text-bone/30 hover:text-bone/70 transition-colors"
          >
            <Music size={13} aria-hidden />
          </a>
        )}
        <a
          href={song.youtubeSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Search ${song.title} on YouTube`}
          className="p-1.5 text-bone/30 hover:text-[#e8566b] transition-colors"
        >
          <ExternalLink size={13} aria-hidden />
        </a>
      </div>
    </motion.li>
  );
}

export default function FullDiscography() {
  const [activeCategory, setActiveCategory] = useState<SongCategory | "all">("all");
  const [query, setQuery] = useState("");
  const headingRef    = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const reduce        = useReducedMotion();

  const filtered = useMemo(() => {
    let list = activeCategory === "all"
      ? allSongs
      : allSongs.filter((s) => s.category === activeCategory);

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          (s.artist ?? "").toLowerCase().includes(q) ||
          (s.featuring ?? "").toLowerCase().includes(q) ||
          s.year.includes(q)
      );
    }
    return list;
  }, [activeCategory, query]);

  // Group by year for display
  const byYear = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    for (const s of filtered) {
      if (!map[s.year]) map[s.year] = [];
      map[s.year].push(s);
    }
    return Object.entries(map).sort(([a], [b]) => Number(b) - Number(a));
  }, [filtered]);

  return (
    <section
      id="catalogue"
      aria-labelledby="catalogue-heading"
      className="relative py-24 px-5 md:px-10 overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_60%_60%,rgba(155,28,46,.08),transparent)]" />

      {/* Header */}
      <motion.div
        ref={headingRef}
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, ease }}
        className="mb-12"
      >
        <p className="text-[11px] tracking-[.35em] uppercase text-[#e8566b] mb-3">Complete Catalogue</p>
        <h2 id="catalogue-heading" className="font-display text-6xl md:text-8xl uppercase leading-none">
          All Music
        </h2>
        <p className="mt-4 text-bone/60 max-w-xl leading-relaxed">
          Every solo track, collaboration, feature, freestyle, and interview — verified from Apple Music and YouTube.
        </p>
      </motion.div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 sticky top-[60px] z-20 bg-ink/90 backdrop-blur-sm py-3 -mx-5 px-5 md:-mx-10 md:px-10 border-b border-bone/10">
        {/* Category filters */}
        <div
          className="flex gap-2 flex-wrap"
          role="group"
          aria-label="Filter by category"
        >
          {CATEGORIES.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              aria-pressed={activeCategory === key}
              className={`px-4 py-1.5 text-[11px] tracking-[.2em] uppercase border transition-all ${
                activeCategory === key
                  ? "bg-crimson border-crimson text-bone"
                  : "border-bone/25 text-bone/60 hover:border-bone/50 hover:text-bone"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative sm:ml-auto">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-bone/30" aria-hidden />
          <input
            type="search"
            placeholder="Search title, artist, year…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search songs"
            className="bg-bone/5 border border-bone/20 pl-8 pr-4 py-1.5 text-xs text-bone placeholder:text-bone/30 w-full sm:w-56 focus:outline-none focus:border-[#e8566b] transition-colors"
          />
        </div>
      </div>

      {/* Result count */}
      <p className="text-[11px] text-bone/40 mb-6 tabular-nums" aria-live="polite">
        {filtered.length} track{filtered.length !== 1 ? "s" : ""}
        {query ? ` matching "${query}"` : ""}
      </p>

      {/* Song list grouped by year */}
      {byYear.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Filter size={32} className="text-bone/20 mb-4" aria-hidden />
          <p className="text-bone/40">No tracks match your search.</p>
        </div>
      ) : (
        <div className="space-y-10">
          {byYear.map(([year, songs]) => (
            <div key={year}>
              <h3 className="font-display text-3xl md:text-4xl text-bone/20 mb-3">{year}</h3>
              <ul aria-label={`Tracks from ${year}`}>
                {songs.map((song, i) => (
                  <SongRow key={song.id} song={song} index={i} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Category legend */}
      <div className="mt-12 pt-8 border-t border-bone/10 flex flex-wrap gap-4">
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <span key={key} className={`flex items-center gap-1.5 text-[10px] uppercase tracking-[.2em] ${CATEGORY_COLORS[key as SongCategory]}`}>
            <span className={`inline-block size-2 border ${CATEGORY_BADGES[key as SongCategory]}`} aria-hidden />
            {label}
          </span>
        ))}
      </div>

      <p className="mt-6 text-[10px] text-bone/30 leading-relaxed max-w-2xl">
        Catalogue sourced from iTunes Lookup API (GH store) and Apple Music artist page, October 2026.
        All Apple Music and YouTube links open official platforms in a new tab.
      </p>
    </section>
  );
}
