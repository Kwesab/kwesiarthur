import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "motion/react";
import { Play, X, ExternalLink, AlertCircle, Music } from "lucide-react";
import { getOfficialVideos, youtubeEmbed, youtubeWatch, youtubeThumbnail } from "../data/videos";
import type { MusicVideo } from "../data/videos";

const ease = [0.22, 1, 0.36, 1] as const;
const videos = getOfficialVideos();

/* ── Lazy thumbnail with error fallback ──────────────────────────────── */
function Thumbnail({ video }: { video: MusicVideo }) {
  const [ytErrored, setYtErrored] = useState(false);
  const [artErrored, setArtErrored] = useState(false);
  const hasYtId  = !!video.youtubeId;
  const hasArt   = !!video.artworkUrl;

  // Choose primary image source: YouTube thumbnail → Apple Music artwork → placeholder
  const showYt  = hasYtId && !ytErrored;
  const showArt = !showYt && hasArt && !artErrored;

  return (
    <div className="relative w-full aspect-video bg-char overflow-hidden">
      {showYt ? (
        <img
          src={youtubeThumbnail(video.youtubeId!)}
          alt={`${video.title}${video.featuring ? ` feat. ${video.featuring}` : ""} — video thumbnail`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setYtErrored(true)}
        />
      ) : showArt ? (
        <img
          src={video.artworkUrl!}
          alt={`${video.title}${video.featuring ? ` feat. ${video.featuring}` : ""} — cover art`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setArtErrored(true)}
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center gap-2"
          style={{ background: "radial-gradient(80% 70% at 50% 50%, hsl(350 50% 18%), #161414)" }}
        >
          <AlertCircle size={24} className="text-bone/30" aria-hidden />
          <p className="text-[10px] text-bone/40 tracking-widest uppercase text-center px-4">
            Open on streaming platform
          </p>
        </div>
      )}

      {/* Play overlay */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center bg-ink/30 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"
      >
        <span className="size-14 rounded-full bg-crimson/90 flex items-center justify-center">
          <Play size={22} className="translate-x-0.5" />
        </span>
      </div>

      {/* Year badge */}
      <span className="absolute top-3 left-3 bg-ink/80 px-2 py-1 text-[10px] tracking-[.2em] uppercase text-bone/70">
        {video.year}
      </span>
    </div>
  );
}

/* ── Video modal ─────────────────────────────────────────────────────── */
function VideoModal({
  video,
  onClose,
}: {
  video: MusicVideo;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Trap scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Now playing: ${video.title}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.25 }}
      className="fixed inset-0 z-[80] bg-ink/97 flex flex-col items-center justify-center p-4 md:p-10"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Close */}
      <button
        aria-label="Close video player"
        onClick={onClose}
        className="fixed top-4 right-4 size-12 border border-bone/40 grid place-items-center hover:bg-bone hover:text-ink transition-colors z-10"
        autoFocus
      >
        <X size={20} />
      </button>

      <div className="w-full max-w-4xl">
        {/* Embed — only shown when YouTube ID is available */}
        {video.youtubeId ? (
          <div className="relative aspect-video bg-char mb-6">
            <iframe
              src={youtubeEmbed(video.youtubeId)}
              title={`${video.title}${video.featuring ? ` feat. ${video.featuring}` : ""}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="aspect-video bg-char mb-6 flex flex-col items-center justify-center gap-4 border border-bone/15">
            <AlertCircle size={36} className="text-bone/20" aria-hidden />
            <p className="text-sm text-bone/50 text-center max-w-xs">
              Embed unavailable — watch on streaming platforms below.
            </p>
          </div>
        )}

        {/* Meta */}
        <div className="flex flex-col sm:flex-row gap-4 sm:items-end justify-between">
          <div>
            {video.featuring && (
              <p className="text-[11px] tracking-[.3em] uppercase text-[#e8566b] mb-1">
                feat. {video.featuring}
              </p>
            )}
            <h3 className="font-display text-3xl md:text-4xl uppercase">
              {video.title}
            </h3>
            <p className="mt-2 text-bone/65 text-sm leading-relaxed max-w-xl">
              {video.description}
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-2 shrink-0">
            {video.youtubeId && (
              <a
                href={youtubeWatch(video.youtubeId)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-bone/40 px-5 py-3 text-xs tracking-[.2em] uppercase hover:bg-bone hover:text-ink transition-colors"
              >
                YouTube <ExternalLink size={12} aria-hidden />
              </a>
            )}
            {video.appleMusicUrl && (
              <a
                href={video.appleMusicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-bone/40 px-5 py-3 text-xs tracking-[.2em] uppercase hover:bg-bone hover:text-ink transition-colors"
              >
                Apple Music <Music size={12} aria-hidden />
              </a>
            )}
            {!video.verified && (
              <a
                href={video.youtubeSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[11px] text-bone/45 hover:text-bone transition-colors"
              >
                Search on YouTube <ExternalLink size={10} aria-hidden />
              </a>
            )}
          </div>
        </div>

        {video.youtubeId && !video.verified && (
          <p className="mt-4 text-[10px] text-bone/35 italic flex items-center gap-1.5">
            <AlertCircle size={11} aria-hidden />
            YouTube ID not confirmed on official channel — if the video doesn't load, use the search link above.
          </p>
        )}
      </div>
    </motion.div>
  );
}

/* ── Video card ──────────────────────────────────────────────────────── */
function VideoCard({
  video,
  onPlay,
}: {
  video: MusicVideo;
  onPlay: (v: MusicVideo) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease }}
    >
      <article
        className="group cursor-pointer"
        onClick={() => onPlay(video)}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onPlay(video); }}}
        role="button"
        tabIndex={0}
        aria-label={`${video.youtubeId ? "Play" : "View"} ${video.title}${video.featuring ? ` feat. ${video.featuring}` : ""}`}
      >
        <Thumbnail video={video} />
        <div className="pt-4">
          {video.featuring && (
            <p className="text-[10px] tracking-[.25em] uppercase text-[#e8566b] mb-1">
              feat. {video.featuring}
            </p>
          )}
          <h3 className="font-display text-xl uppercase group-hover:text-[#e8566b] transition-colors">
            {video.title}
          </h3>
          <p className="text-xs text-bone/55 mt-1 line-clamp-2 leading-relaxed">
            {video.description}
          </p>
        </div>
      </article>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────────────────── */
export default function Videos() {
  const [active, setActive] = useState<MusicVideo | null>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  const handleClose = useCallback(() => setActive(null), []);

  return (
    <section
      id="videos"
      aria-labelledby="videos-heading"
      className="relative py-24 px-5 md:px-10 overflow-hidden"
    >
      {/* Background tint */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(40%_50%_at_80%_30%,rgba(155,28,46,.09),transparent)]"
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
          Watch
        </p>
        <h2
          id="videos-heading"
          className="font-display text-6xl md:text-8xl uppercase leading-none"
        >
          Music Videos
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {videos.map((v) => (
          <VideoCard key={v.id} video={v} onPlay={setActive} />
        ))}
      </div>

      {/* Channel link + disclaimer */}
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
        <p className="text-[10px] text-bone/35 max-w-xl leading-relaxed">
          Videos are embedded from YouTube. IDs marked unconfirmed should be
          checked against the official channel before publishing. All content
          belongs to respective rights holders.
        </p>
        <a
          href="https://www.youtube.com/@kwesiarthur_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-bone/30 px-5 py-2.5 text-xs tracking-[.2em] uppercase hover:bg-bone hover:text-ink transition-colors shrink-0"
        >
          All videos on YouTube <ExternalLink size={11} aria-hidden />
        </a>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <VideoModal video={active} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
