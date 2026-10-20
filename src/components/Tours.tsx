import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { CalendarX, MapPin, Calendar, ExternalLink, Clock } from "lucide-react";
import { getUpcomingEvents, getPastEvents } from "../data/events";
import type { LiveEvent } from "../data/events";

const ease = [0.22, 1, 0.36, 1] as const;

/* ── Date formatter ──────────────────────────────────────────────────── */
function formatDate(isoDate: string): string {
  const d = new Date(isoDate);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function formatDateShort(isoDate: string): { day: string; month: string; year: string } {
  const d = new Date(isoDate);
  return {
    day:   d.toLocaleDateString("en-GB", { day: "2-digit" }),
    month: d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
    year:  d.toLocaleDateString("en-GB", { year: "numeric" }),
  };
}

/* ── Status badge ────────────────────────────────────────────────────── */
function StatusBadge({ status }: { status: LiveEvent["status"] }) {
  const map = {
    upcoming:   { label: "Upcoming",   classes: "bg-emerald-900/40 text-emerald-400 border-emerald-700/50" },
    past:       { label: "Past",       classes: "bg-bone/10 text-bone/50 border-bone/20" },
    cancelled:  { label: "Cancelled",  classes: "bg-red-900/40 text-red-400 border-red-700/50" },
    postponed:  { label: "Postponed",  classes: "bg-amber-900/40 text-amber-400 border-amber-700/50" },
  };
  const { label, classes } = map[status];
  return (
    <span className={`border px-2.5 py-0.5 text-[10px] tracking-[.2em] uppercase ${classes}`}>
      {label}
    </span>
  );
}

/* ── Event row ───────────────────────────────────────────────────────── */
function EventRow({ event, index }: { event: LiveEvent; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const { day, month, year } = formatDateShort(event.date);

  return (
    <motion.li
      ref={ref}
      initial={reduce ? false : { opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, ease, delay: index * 0.06 }}
      className="grid grid-cols-[64px_1fr_auto] md:grid-cols-[80px_1fr_auto] gap-4 md:gap-6 items-center border-b border-bone/10 py-5 group"
    >
      {/* Date block */}
      <div className="text-center" aria-hidden>
        <p className="font-display text-3xl leading-none text-bone/90">{day}</p>
        <p className="text-[10px] tracking-[.2em] uppercase text-[#e8566b] mt-0.5">{month}</p>
        <p className="text-[10px] text-bone/40 mt-0.5">{year}</p>
      </div>

      {/* Event info */}
      <div>
        <p className="font-medium text-sm md:text-base text-bone group-hover:text-[#e8566b] transition-colors leading-snug">
          {event.name}
        </p>
        <p className="flex items-center gap-1.5 mt-1 text-xs text-bone/55">
          <MapPin size={11} aria-hidden />
          {event.venue} · {event.city}, {event.country}
        </p>
        {event.notes && (
          <p className="mt-1.5 text-[11px] text-bone/45 leading-snug max-w-md">{event.notes}</p>
        )}

        {/* Accessibility: full date for screen readers */}
        <time dateTime={event.date} className="sr-only">
          {formatDate(event.date)}
        </time>
      </div>

      {/* Right: status + ticket */}
      <div className="flex flex-col items-end gap-2">
        <StatusBadge status={event.status} />
        {event.status === "upcoming" && event.ticketUrl && (
          <a
            href={event.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-crimson px-4 py-2 text-[11px] tracking-[.2em] uppercase hover:bg-[#b3243a] transition-colors"
          >
            Tickets <ExternalLink size={11} aria-hidden />
          </a>
        )}
        {event.eventUrl && (
          <a
            href={event.eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] text-bone/50 hover:text-bone transition-colors"
            aria-label={`View event details for ${event.name} (opens in new tab)`}
          >
            Event info <ExternalLink size={11} aria-hidden />
          </a>
        )}
      </div>
    </motion.li>
  );
}

/* ── Empty state ─────────────────────────────────────────────────────── */
function EmptyUpcoming() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center border border-bone/15 border-dashed">
      <CalendarX size={36} className="text-bone/25 mb-4" aria-hidden />
      <p className="font-display text-2xl uppercase text-bone/40 mb-2">
        No Upcoming Shows
      </p>
      <p className="text-sm text-bone/45 max-w-sm leading-relaxed mb-6">
        No upcoming performances are currently confirmed. Check official channels
        for the latest announcements.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="https://www.instagram.com/kwesiarthur_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-bone/30 px-5 py-2.5 text-xs tracking-[.2em] uppercase hover:bg-bone hover:text-ink transition-colors"
        >
          Instagram <ExternalLink size={11} aria-hidden />
        </a>
        <a
          href="https://twitter.com/kwesiarthur_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-bone/30 px-5 py-2.5 text-xs tracking-[.2em] uppercase hover:bg-bone hover:text-ink transition-colors"
        >
          X / Twitter <ExternalLink size={11} aria-hidden />
        </a>
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────────────── */
export default function Tours() {
  const upcoming = getUpcomingEvents();
  const past     = getPastEvents();

  const headingRef    = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const reduce        = useReducedMotion();

  return (
    <section
      id="shows"
      aria-labelledby="shows-heading"
      className="relative py-24 px-5 md:px-10 overflow-hidden"
    >
      {/* Background tint */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_10%_50%,rgba(155,28,46,.1),transparent)]"
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
          Live
        </p>
        <h2
          id="shows-heading"
          className="font-display text-6xl md:text-8xl uppercase leading-none"
        >
          Shows &amp; Tours
        </h2>
      </motion.div>

      {/* ── Upcoming ───────────────────────────────────────────────── */}
      <div className="mb-16">
        <h3 className="flex items-center gap-2 text-[11px] tracking-[.3em] uppercase text-bone/60 mb-6">
          <Calendar size={13} aria-hidden className="text-[#e8566b]" />
          Upcoming Shows
        </h3>
        {upcoming.length === 0 ? (
          <EmptyUpcoming />
        ) : (
          <ul aria-label="Upcoming shows" className="divide-y divide-bone/10">
            {upcoming.map((event, i) => (
              <EventRow key={event.id} event={event} index={i} />
            ))}
          </ul>
        )}
      </div>

      {/* ── Past events ────────────────────────────────────────────── */}
      {past.length > 0 && (
        <div>
          <h3 className="flex items-center gap-2 text-[11px] tracking-[.3em] uppercase text-bone/60 mb-6">
            <Clock size={13} aria-hidden className="text-bone/40" />
            Past Performances
          </h3>
          <ul aria-label="Past performances" className="divide-y divide-bone/10">
            {past.map((event, i) => (
              <EventRow key={event.id} event={event} index={i} />
            ))}
          </ul>
        </div>
      )}

      {/* Data disclaimer */}
      <p className="mt-12 text-[10px] text-bone/35 max-w-xl leading-relaxed">
        Event data is manually maintained and verified from official sources.
        Last checked: October 2026. For live ticket availability, always
        confirm directly with the official event organiser.
      </p>
    </section>
  );
}
