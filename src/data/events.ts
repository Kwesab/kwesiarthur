/**
 * Kwesi Arthur — Live Events
 * Sources: iTunes Apple Music concert listings, official artist channels.
 * Last verified: October 2026
 *
 * NOTE: Apple Music showed two upcoming concerts on the artist page (Oct 2026):
 *  - Atlanta Vinyl · Fri 27 Nov [2026]
 *  - London Electric Brixton · Sat 30 Jan [2027]
 * These are listed as upcoming pending independent confirmation of exact details.
 */

export type EventStatus = "upcoming" | "past" | "cancelled" | "postponed";

export interface LiveEvent {
  id: string;
  name: string;
  date: string;
  venue: string;
  city: string;
  country: string;
  status: EventStatus;
  ticketUrl?: string;
  eventUrl?: string;
  lastVerified: string;
  notes?: string;
}

export const events: LiveEvent[] = [
  // ── UPCOMING (from Apple Music artist page, Oct 2026) ─────────────────
  {
    id: "atlanta-vinyl-nov-2026",
    name: "Kwesi Arthur Live",
    date: "2026-11-27",
    venue: "Vinyl",
    city: "Atlanta",
    country: "United States",
    status: "upcoming",
    lastVerified: "2026-10-19",
    notes: "Confirmed on Apple Music artist page. Exact event name and ticket link not independently verified — check official channels for booking details.",
  },
  {
    id: "london-electric-brixton-jan-2027",
    name: "Kwesi Arthur Live",
    date: "2027-01-30",
    venue: "Electric Brixton",
    city: "London",
    country: "United Kingdom",
    status: "upcoming",
    lastVerified: "2026-10-19",
    notes: "Confirmed on Apple Music artist page. Exact event name and ticket link not independently verified — check official channels for booking details.",
  },

  // ── PAST ──────────────────────────────────────────────────────────────
  {
    id: "rv-block-party-accra-2026",
    name: "Redemption Valley Block Party",
    date: "2026-02-10",
    venue: "Accra",
    city: "Accra",
    country: "Ghana",
    status: "past",
    lastVerified: "2026-10-19",
    notes: "Block party event celebrating the Redemption Valley album launch. Confirmed via @kwesiarthur_ YouTube video 'REDEMPTION VALLEY BLOCK PARTY ACCRA'.",
    eventUrl: "https://www.youtube.com/watch?v=aizhGKtAApA",
  },
  {
    id: "rv-launch-2026",
    name: "Redemption Valley Album Launch",
    date: "2026-02-06",
    venue: "Accra",
    city: "Accra",
    country: "Ghana",
    status: "past",
    lastVerified: "2026-10-19",
    notes: "Album launch event for Redemption Valley (6 February 2026).",
  },
  {
    id: "soj-launch-2022",
    name: "Son of Jacob Album Launch",
    date: "2022-04-22",
    venue: "Accra",
    city: "Accra",
    country: "Ghana",
    status: "past",
    lastVerified: "2026-10-19",
    notes: "Launch coinciding with the Son of Jacob release date, 22 April 2022.",
  },
  {
    id: "bet-cypher-2020",
    name: "BET Hip Hop Awards Cypher",
    date: "2020-10-20",
    venue: "BET Networks (Virtual)",
    city: "Atlanta",
    country: "United States",
    status: "past",
    lastVerified: "2026-10-19",
    notes: "Second Ghanaian rapper to appear in the BET Hip Hop Awards Cypher, after Sarkodie in 2019.",
  },
  {
    id: "bet-awards-2018",
    name: "BET Awards — Viewer's Choice Nominee",
    date: "2018-06-24",
    venue: "Microsoft Theater",
    city: "Los Angeles",
    country: "United States",
    status: "past",
    lastVerified: "2026-10-19",
    notes: "Nominated for Viewer's Choice Best International Act — one of the first Ghanaian artists of his generation to reach the BET Awards stage.",
  },
];

export function getUpcomingEvents(): LiveEvent[] {
  const now = new Date();
  return events.filter(
    (e) => e.status === "upcoming" && new Date(e.date) > now
  );
}

export function getPastEvents(): LiveEvent[] {
  return events
    .filter((e) => e.status === "past")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
