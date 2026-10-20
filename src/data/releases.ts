/**
 * Kwesi Arthur — Discography
 * Primary source: iTunes Lookup API (apple.com/gh storefront) — October 2026
 * Secondary sources: Wikipedia, MyJoyOnline, Wonderland Magazine (Apr 2026)
 *
 * Conventions:
 *  - `date` only present when confirmed from a primary source (iTunes release date used).
 *  - `tracks` all marked verified:true where sourced directly from iTunes API track listing.
 *  - `cover` URLs from iTunes public CDN (is1-ssl.mzstatic.com) — no auth needed.
 *  - `streaming.appleMusic` uses verified Apple Music album IDs.
 */

export type ReleaseType = "Album" | "EP" | "Mixtape" | "Project";

export interface Track {
  title: string; 
  featuring?: string;
  verified: boolean;
}

export interface StreamingLinks {
  spotify?: string;
  appleMusic?: string;
  youtube?: string;
}

export interface Release {
  id: string;
  slug: string;
  title: string;
  type: ReleaseType;
  year: string;
  date?: string;
  notes: string;
  tracks: Track[];
  hue: number;
  cover?: string;
  streaming: StreamingLinks;
  label?: string;
  contentSource: string;
}

export const releases: Release[] = [
  {
    id: "lfnk",
    slug: "live-from-nkrumah-krom",
    title: "Live From Nkrumah Krom",
    type: "EP",
    year: "2017",
    date: "2017-04-23",
    label: "GroundUp Chale Records",
    notes:
      "Debut 5-track EP released 23 April 2017. Home to breakout single \"Grind Day\", which earned a co-sign from Sarkodie and Medikal and launched Kwesi Arthur onto the national stage. Released through GroundUp Chale Records.",
    tracks: [
      { title: "Ade Akye", verified: true },
      { title: "Free", verified: true },
      { title: "Grind Day", verified: true },
      { title: "Back on the Wall", verified: true },
      { title: "Devil Knocking", verified: true },
    ],
    hue: 350,
    // iTunes Lookup API: collectionId 1229290143 (GH store), verified Oct 2026
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/86/7a/03/867a0380-5741-507e-c1f7-f44aa705a4ed/859720727977_cover.jpg/600x600bb.jpg",
    streaming: {
      spotify:
        "https://open.spotify.com/search/Live%20From%20Nkrumah%20Krom%20Kwesi%20Arthur",
      appleMusic:
        "https://music.apple.com/gh/album/live-from-nkrumah-krom-ep/1229290143",
      youtube:
        "https://www.youtube.com/results?search_query=Kwesi+Arthur+Live+From+Nkrumah+Krom",
    },
    contentSource:
      "iTunes Lookup API collectionId 1229290143 (GH), tracklist verified, Wikipedia, MyJoyOnline",
  },

  {
    id: "tint1",
    slug: "this-is-not-the-tape-sorry-4-the-wait",
    title: "This Is Not The Tape, Sorry 4 The Wait",
    type: "Mixtape",
    year: "2019",
    date: "2019-01-01",
    notes:
      "First instalment of the TINT series. A 3-track collaborative project featuring GroundUp artists.",
    tracks: [
      { title: "Live or Die", verified: true },
      { title: "Chill", verified: true },
      { title: "Don't Keep Me Waiting, Pt. II", verified: true },
    ],
    hue: 20,
    // iTunes Lookup API: collectionId 1448714017 (GH store), verified Oct 2026
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/b3/f2/86/b3f286ff-c4d9-43c9-21a7-375ebb25e2f9/859730275482_cover.jpg/600x600bb.jpg",
    streaming: {
      spotify:
        "https://open.spotify.com/search/This%20Is%20Not%20The%20Tape%20Sorry%204%20The%20Wait%20Kwesi%20Arthur",
      appleMusic:
        "https://music.apple.com/gh/album/this-is-not-the-tape-sorry-4-the-wait-single/1448714017",
      youtube:
        "https://www.youtube.com/results?search_query=Kwesi+Arthur+This+Is+Not+The+Tape+Sorry+4+The+Wait",
    },
    contentSource:
      "iTunes Lookup API collectionId 1448714017 (GH), tracklist verified Oct 2026",
  },

  {
    id: "lfnk2",
    slug: "live-from-nkrumah-krom-vol-2",
    title: "Live From Nkrumah Krom Vol. II: Home Run",
    type: "EP",
    year: "2019",
    date: "2019-04-26",
    notes:
      "Sophomore EP released 26 April 2019. Accumulated over 2 million streams in its first week. Features Stonebwoy, Shatta Wale, Mr Eazi, Sarkodie, Santi, and Nasty C.",
    tracks: [
      { title: "Pray for Me", verified: true },
      { title: "Radio", featuring: "Stonebwoy", verified: true },
      { title: "African Girl", featuring: "Shatta Wale", verified: true },
      { title: "Nobody", featuring: "Mr Eazi", verified: true },
      { title: "Kill My Spirit", featuring: "Sarkodie & Santi", verified: true },
      { title: "See No Evil", verified: true },
      { title: "Sometimes (Va Midzo)", verified: true },
      { title: "Walk", featuring: "Nasty C", verified: true },
      { title: "Colours", verified: true },
    ],
    hue: 10,
    // iTunes Lookup API: collectionId 1459237345 (GH store), verified Oct 2026
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/f7/b5/67/f7b56749-843f-ddaf-c158-9f6e44b6c44b/5060450068604.png/600x600bb.jpg",
    streaming: {
      spotify:
        "https://open.spotify.com/search/Live%20From%20Nkrumah%20Krom%20Vol%202%20Home%20Run%20Kwesi%20Arthur",
      appleMusic:
        "https://music.apple.com/gh/album/live-from-nkrumah-krom-vol-ii-home-run/1459237345",
      youtube:
        "https://www.youtube.com/results?search_query=Kwesi+Arthur+Live+From+Nkrumah+Krom+Vol+2+Home+Run",
    },
    contentSource:
      "iTunes Lookup API collectionId 1459237345 (GH), full tracklist verified Oct 2026, Wikipedia",
  },

  {
    id: "tint2",
    slug: "this-is-not-the-tape-sorry-4-the-wait-ii",
    title: "This Is Not The Tape, Sorry 4 The Wait II",
    type: "Mixtape",
    year: "2020",
    date: "2020-09-01",
    notes:
      "Three-track follow-up released September 2020. Features the anthemic \"Live From 233\", which became one of the most-streamed African songs on Apple Music in 2020.",
    tracks: [
      { title: "Live From 233", verified: true },
      { title: "Baajo", featuring: "Joeboy", verified: true },
      { title: "Turn On The Lights", verified: true },
    ],
    hue: 340,
    // iTunes Lookup API: collectionId 1528572597 (GH store), verified Oct 2026
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/b5/d4/6e/b5d46e83-0176-4f34-905e-57d3c1ed7c70/5059449001449.png/600x600bb.jpg",
    streaming: {
      spotify:
        "https://open.spotify.com/search/This%20Is%20Not%20The%20Tape%20Sorry%204%20The%20Wait%20II%20Kwesi%20Arthur",
      appleMusic:
        "https://music.apple.com/gh/album/this-is-not-the-tape-sorry-4-the-wait-ii-single/1528572597",
      youtube:
        "https://www.youtube.com/results?search_query=Kwesi+Arthur+This+Is+Not+The+Tape+Sorry+4+The+Wait+II",
    },
    contentSource:
      "iTunes Lookup API collectionId 1528572597 (GH), Wikipedia, Apple Music",
  },

  {
    id: "soj",
    slug: "son-of-jacob",
    title: "Son Of Jacob",
    type: "Album",
    year: "2022",
    date: "2022-04-22",
    label: "Ground Up Chale",
    notes:
      "Debut full-length album released 22 April 2022. 15 tracks spanning trap, Afroswing, asokpor, amapiano, and highlife. Features Teni, Adekunle Gold, Vic Mensa, Kofi Mole, NSG, and Joeboy.",
    tracks: [
      { title: "Drama", verified: true },
      { title: "Disturb", verified: true },
      { title: "Baajo", verified: true },
      { title: "Jungle Music, Pt. 2", verified: true },
      { title: "Silver Spoon", verified: true },
      { title: "Paper", verified: true },
      { title: "Celebrate", featuring: "Teni", verified: true },
      { title: "Toxic", featuring: "Adekunle Gold", verified: true },
      { title: "Traumatized", verified: true },
      { title: "Winning", featuring: "VIC MENSA", verified: true },
      { title: "Mind Over Body", verified: true },
      { title: "Animal", verified: true },
      { title: "Diamonds Dancing", featuring: "NSG", verified: true },
      { title: "No Regrets", verified: true },
      { title: "Adom", verified: true },
    ],
    hue: 355,
    // iTunes Lookup API: collectionId 1615130209 (US store), verified Oct 2026
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/0f/4b/3d/0f4b3dd6-2627-e9a4-8f38-3abfac49a91e/dj.hsfzuygb.jpg/600x600bb.jpg",
    streaming: {
      spotify:
        "https://open.spotify.com/search/Son%20Of%20Jacob%20Kwesi%20Arthur",
      appleMusic:
        "https://music.apple.com/gh/album/son-of-jacob/1615130209",
      youtube:
        "https://www.youtube.com/results?search_query=Kwesi+Arthur+Son+Of+Jacob+album",
    },
    contentSource:
      "iTunes Lookup API collectionId 1615130209 (US), full 15-track listing verified Oct 2026, MyJoyOnline",
  },

  {
    id: "tint3",
    slug: "this-is-not-the-tape-iii",
    title: "This Is Not The Tape III",
    type: "Project",
    year: "2024",
    date: "2024-03-22",
    label: "Tieme Music",
    notes:
      "Third entry in the TINT series, released 22 March 2024 in partnership with Tieme Music. A 9-track creative statement marking a new chapter in Kwesi Arthur's artistic evolution.",
    tracks: [
      { title: "1 Of 1", verified: true },
      { title: "Can't Relate", verified: true },
      { title: "Jungle Music, Pt.1", verified: true },
      { title: "Raging Bulls", verified: true },
      { title: "Hijack", verified: true },
      { title: "4LYFE", verified: true },
      { title: "Fefe Ne Fe", verified: true },
      { title: "Ginger", verified: true },
      { title: "Make A Way", verified: true },
    ],
    hue: 330,
    // iTunes Lookup API: collectionId 1734875442 (GH store), verified Oct 2026
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/e3/03/ea/e303ea7a-a9ed-0960-697b-4f3f8598b562/085365691193.jpg/600x600bb.jpg",
    streaming: {
      spotify:
        "https://open.spotify.com/search/This%20Is%20Not%20The%20Tape%20III%20Kwesi%20Arthur",
      appleMusic:
        "https://music.apple.com/gh/album/this-is-not-the-tape-iii/1734875442",
      youtube:
        "https://www.youtube.com/results?search_query=Kwesi+Arthur+This+Is+Not+The+Tape+III",
    },
    contentSource:
      "iTunes Lookup API collectionId 1734875442 (GH), full 9-track listing verified Oct 2026, MyJoyOnline",
  },

  {
    id: "rv",
    slug: "redemption-valley",
    title: "Redemption Valley",
    type: "Album",
    year: "2026",
    date: "2026-02-06",
    label: "Sisi / Encore Recordings",
    notes:
      "Second studio album, released 6 February 2026. Named after the road in Tema Community 9 where Kwesi Arthur grew up. An 8-track return to roots — personal, cinematic, and deeply Ghanaian.",
    tracks: [
      { title: "Redemption", verified: true },
      { title: "I Be Where I Wanted To Be", verified: true },
      { title: "Yawa (Hosanna)", verified: true },
      { title: "Immigrant", verified: true },
      { title: "Babylon Interlude", verified: true },
      { title: "What They Want (Gye)", verified: true },
      { title: "Okay Switch", verified: true },
      { title: "Broken Pieces", verified: true },
    ],
    hue: 25,
    // iTunes Lookup API: collectionId 1876963964 (US store), verified Oct 2026
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/36/83/04/36830411-d153-4138-217a-8ccd67c44598/199976556083.jpg/600x600bb.jpg",
    streaming: {
      spotify:
        "https://open.spotify.com/search/Redemption%20Valley%20Kwesi%20Arthur",
      appleMusic:
        "https://music.apple.com/gh/album/redemption-valley/1876963964",
      youtube:
        "https://www.youtube.com/results?search_query=Kwesi+Arthur+Redemption+Valley+album",
    },
    contentSource:
      "iTunes Lookup API collectionId 1876963964 (US), full 8-track listing verified Oct 2026, Wonderland Magazine Apr 2026",
  },
];
