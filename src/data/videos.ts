/**
 * Kwesi Arthur — Music Videos
 * Primary sources:
 *  - YouTube channel: youtube.com/@kwesiarthur_ (oEmbed confirmed Oct 2026)
 *  - YouTube search results (oEmbed/noembed verified Oct 2026)
 *  - iTunes Music Video API: itunes.apple.com/lookup?id=1198538282&entity=musicVideo&country=gh
 * All YouTube IDs verified via oEmbed API.
 * All appleMusicUrl values confirmed from iTunes GH storefront.
 * All artworkUrl values from iTunes public CDN (is1-ssl.mzstatic.com).
 */

export interface MusicVideo {
  id: string;
  title: string;
  featuring?: string;
  year: string;
  releaseId?: string;
  youtubeId?: string;
  youtubeSearchUrl: string;
  appleMusicUrl?: string;
  artworkUrl?: string;
  verified: boolean;
  isOfficialVideo: boolean;
  description: string;
  contentSource: string;
}

export function youtubeEmbed(id: string): string {
  return `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`;
}
export function youtubeWatch(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}
export function youtubeThumbnail(id: string): string {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

export const videos: MusicVideo[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────
  {
    id: "yawa-hosanna",
    title: "Yawa (Hosanna)",
    year: "2026",
    releaseId: "rv",
    youtubeId: "c4BbmixVm5Y",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Yawa+Hosanna+official",
    appleMusicUrl: "https://music.apple.com/gh/music-video/yawa-hosanna/6807144372",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/9d/44/06/9d4406fa-50df-161d-d8ad-58bc5b7bc6df/Job6663ba35-fb00-427b-8e83-3bb7acd9d51b-241755689-PreviewImage_preview_image_76000_video_sdr-Time1788210719192.png/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "Lead single from Redemption Valley — the album's most-streamed track. A spiritual, triumphant anthem rooted in gratitude and community.",
    contentSource: "@kwesiarthur_ YouTube (oEmbed); iTunes GH musicVideo ID 6807144372",
  },
  {
    id: "no-more-sleep",
    title: "NO MORE SLEEP",
    featuring: "M.anifest",
    year: "2026",
    youtubeId: "G6dpi8dch6g",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=M.anifest+Kwesi+Arthur+NO+MORE+SLEEP+official",
    appleMusicUrl: "https://music.apple.com/gh/music-video/no-more-sleep/6794931006",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video221/v4/eb/44/82/eb4482e5-df82-99ce-1cbe-1a950d37a5fb/Job60fd9377-25ab-40cc-aff6-830b574e3cd4-236873139-PreviewImage_preview_image_10000_video_sdr-Time1785099260412.png/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "2026 collaboration with M.anifest. A high-energy statement track.",
    contentSource: "YouTube oEmbed confirmed: 'M.anifest x Kwesi Arthur - NO MORE SLEEP'; iTunes GH musicVideo ID 6794931006",
  },
  // ── 2025 ──────────────────────────────────────────────────────────────
  {
    id: "real-thing",
    title: "Real Thing",
    featuring: "King Promise",
    year: "2025",
    youtubeId: "zw6R9SAXPeU",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Real+Thing+King+Promise+official",
    verified: true,
    isOfficialVideo: true,
    description: "A smooth 2025 collaboration with fellow Ghanaian star King Promise.",
    contentSource: "@kwesiarthur_ YouTube oEmbed confirmed",
  },
  // ── 2024 ──────────────────────────────────────────────────────────────
  {
    id: "fefe-ne-fe",
    title: "Fefe Ne Fe",
    year: "2024",
    releaseId: "tint3",
    youtubeId: "vK06Z6cvAC0",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Fefe+Ne+Fe+official+video",
    verified: true,
    isOfficialVideo: true,
    description: "Official music video from TINT III. Title translates to \"how beautiful\" in Twi.",
    contentSource: "@kwesiarthur_ YouTube oEmbed confirmed",
  },
  {
    id: "jungle-music-pt1",
    title: "Jungle Music, Pt. 1",
    featuring: "IDK",
    year: "2024",
    releaseId: "tint3",
    youtubeId: "QXNtH_NOSuo",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Jungle+Music+Pt+1+IDK+official",
    verified: true,
    isOfficialVideo: true,
    description: "A cinematic TINT III collaboration with American rapper IDK.",
    contentSource: "@kwesiarthur_ YouTube oEmbed confirmed",
  },
  {
    id: "raging-bulls",
    title: "Raging Bulls",
    featuring: "Joey B",
    year: "2024",
    releaseId: "tint3",
    youtubeId: "RpEbKJJwNiY",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Raging+Bulls+Joey+B+official",
    verified: true,
    isOfficialVideo: true,
    description: "High-energy TINT III collaboration with GroundUp Chale's Joey B.",
    contentSource: "@kwesiarthur_ YouTube oEmbed confirmed",
  },
  // ── 2023 ──────────────────────────────────────────────────────────────
  {
    id: "pain-interlude",
    title: "Pain Interlude",
    year: "2023",
    releaseId: "paininterlude",
    youtubeId: "Ar2oStMGGFE",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Pain+Interlude+official+video",
    appleMusicUrl: "https://music.apple.com/gh/music-video/pain-interlude/1677312515",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/d8/22/88/d82288c5-6863-3891-8948-65bfedeedeae/dj.uwalzxud.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "Raw, introspective official music video bridging the Son of Jacob era with TINT III.",
    contentSource: "@kwesiarthur_ YouTube oEmbed confirmed; iTunes GH musicVideo ID 1677312515",
  },
  // ── 2022 ──────────────────────────────────────────────────────────────
  {
    id: "animal",
    title: "Animal",
    featuring: "Dayonthetrack",
    year: "2022",
    releaseId: "soj",
    youtubeId: "R7lxDyZqE8k",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Animal+official+video",
    appleMusicUrl: "https://music.apple.com/gh/music-video/animal/1665152547",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video113/v4/93/96/df/9396dfcc-425b-921f-5e5e-e03a16baed3f/5059449102528_US23A1556424.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "Amapiano-influenced Son of Jacob cut. The video features Dayonthetrack (Kwesi's brother).",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur x Dayonthetrack - Animal (The Movie)'; iTunes GH musicVideo ID 1665152547",
  },
  {
    id: "nirvana",
    title: "Nirvana",
    featuring: "Kofi Mole",
    year: "2022",
    releaseId: "soj",
    youtubeId: "E1YDr0PYg34",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Nirvana+official+video",
    appleMusicUrl: "https://music.apple.com/gh/music-video/nirvana/1653598755",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video122/v4/fb/2e/23/fb2e23ca-c180-0156-8712-199d1fd46002/5059449099309_US23A1555431.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "Kofi Mole collaboration from the Son of Jacob era.",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur x Kofi Mole - Nirvana (Official Music Video)'; iTunes GH musicVideo ID 1653598755",
  },
  {
    id: "celebrate",
    title: "Celebrate",
    featuring: "Teni",
    year: "2022",
    releaseId: "soj",
    youtubeId: "j_iKE6ffJ0c",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Celebrate+Teni+official",
    appleMusicUrl: "https://music.apple.com/gh/music-video/celebrate/1592096526",
    verified: true,
    isOfficialVideo: true,
    description: "Lead single from Son of Jacob featuring Nigerian star Teni. Bright, joyful, festival-ready.",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur x Teni - Celebrate (Lyric video)'; iTunes GH musicVideo ID 1592096526",
  },
  // ── 2021 ──────────────────────────────────────────────────────────────
  {
    id: "winning",
    title: "Winning",
    featuring: "Vic Mensa",
    year: "2021",
    releaseId: "soj",
    youtubeId: "WHVSy7jZ6uI",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Winning+Vic+Mensa+official+video",
    appleMusicUrl: "https://music.apple.com/gh/music-video/winning-feat-vic-mensa/1566366836",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video125/v4/96/9e/e6/969ee646-ef5d-8c5e-b5ac-0c7850b572a7/5059449016160_US23A1535851.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "Transatlantic collaboration with Vic Mensa. Featured on EA Sports UFC 5 soundtrack. Played on Hot 97.",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur - Winning (Official Music Video) ft. Vic Mensa' on KwesiArthurVEVO; iTunes GH musicVideo ID 1566366836",
  },
  {
    id: "door",
    title: "Door",
    featuring: "Joeboy",
    year: "2021",
    youtubeId: "gjzzE1v1RDk",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Door+Joeboy+official+video",
    appleMusicUrl: "https://music.apple.com/gh/music-video/door/1563449780",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/70/dc/2a/70dc2a09-f0ba-bb87-a1a1-9b8475787cd1/720665641850_cover.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "A soulful 2021 collaboration with Nigerian singer Joeboy.",
    contentSource: "YouTube oEmbed confirmed: 'Joeboy - Door (feat. Kwesi Arthur) [Official Video]'; iTunes GH musicVideo ID 1563449780",
  },
  {
    id: "sore-remix",
    title: "Sore (Remix)",
    featuring: "Yaw Tog & Stormzy",
    year: "2021",
    youtubeId: "o_WlT8WA1No",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Yaw+Tog+Stormzy+Kwesi+Arthur+Sore+Remix+official",
    appleMusicUrl: "https://music.apple.com/gh/music-video/sore-remix/1555815438",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/1c/51/8a/1c518a55-0d05-8093-8161-5c64d20af0a9/194690468292_cover.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "High-profile remix feat. UK rap legend Stormzy and Yaw Tog — a landmark Ghana-UK moment.",
    contentSource: "YouTube oEmbed confirmed: 'Yaw Tog, Stormzy & Kwesi Arthur - Sore (Remix) (Official Video)'; iTunes GH musicVideo ID 1555815438",
  },
  // ── 2020 ──────────────────────────────────────────────────────────────
  {
    id: "live-from-233",
    title: "Live From 233",
    year: "2020",
    releaseId: "tint2",
    youtubeId: "dXDp8kGfA7s",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Live+From+233+official",
    appleMusicUrl: "https://music.apple.com/gh/music-video/live-from-233/1537584629",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/ed/f8/7b/edf87b01-7588-1381-4fb6-f372cd6f0545/5060726325882_US23A1515263.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "One of Apple Music's most-streamed African songs in 2020. 233 is Ghana's international dialling code.",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur - Live From 233'; iTunes GH musicVideo ID 1537584629",
  },
  {
    id: "turn-on-the-lights",
    title: "Turn On The Lights",
    year: "2020",
    releaseId: "tint2",
    youtubeId: "kqex0ANhWpI",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Turn+On+The+Lights+official",
    appleMusicUrl: "https://music.apple.com/gh/music-video/turn-on-the-lights/1537113786",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video114/v4/1a/92/c1/1a92c119-59e1-e583-747a-d0fc20af9d1c/5060726325844_US23A1515260.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "TINT II track with an official Apple Music video listing.",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur - Turn On The Lights'; iTunes GH musicVideo ID 1537113786",
  },
  {
    id: "baajo",
    title: "Baajo",
    featuring: "Joeboy",
    year: "2020",
    releaseId: "tint2",
    youtubeId: "WMOZaEP4Fl4",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Baajo+Joeboy+official+video",
    appleMusicUrl: "https://music.apple.com/gh/music-video/baajo/1544416419",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video125/v4/21/f6/83/21f683ee-03f9-753d-99d9-7c94685e0dce/5059449004853_US23A1526568.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "Afropop-leaning TINT II collaboration with Joeboy.",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur - Baajo (Official Music Video) ft. Joeboy'; iTunes GH musicVideo ID 1544416419",
  },
  // ── 2019 ──────────────────────────────────────────────────────────────
  {
    id: "walk",
    title: "Walk",
    featuring: "Nasty C",
    year: "2019",
    releaseId: "lfnk2",
    youtubeId: "9t4195-Npmo",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Walk+Nasty+C+official+video",
    appleMusicUrl: "https://music.apple.com/gh/music-video/walk/1564429646",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video125/v4/25/9b/78/259b781f-a445-b340-1ddd-e36d5456a7a8/5059449015019_US23A1534748.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "LFNK Vol. II collab with South African rap star Nasty C.",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur - Walk (Official Music Video)' on KwesiArthurVEVO; iTunes GH musicVideo ID 1564429646",
  },
  {
    id: "see-no-evil",
    title: "See No Evil",
    year: "2019",
    releaseId: "lfnk2",
    youtubeId: "3LE6KViFFNo",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+See+No+Evil+official+video",
    appleMusicUrl: "https://music.apple.com/gh/music-video/see-no-evil/1477193592",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video125/v4/7b/e9/d4/7be9d482-c180-c5dd-31b8-a19e45cc2922/dj.itffvdwp.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "Introspective LFNK Vol. II track.",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur - See No Evil' on Ground Up Tv; iTunes GH musicVideo ID 1477193592",
  },
  {
    id: "zombie",
    title: "Zombie",
    year: "2019",
    youtubeId: "u9F2GbWo-Oc",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Zombie+official+video",
    appleMusicUrl: "https://music.apple.com/gh/music-video/zombie/1483979625",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video125/v4/ea/a4/46/eaa4461d-98fd-8d82-2d4f-5786bfd93df4/5060726320948_US23A1501582.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "Moody single produced by TwoBars. One of Kwesi's most distinctive visual releases.",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur - Zombie' on Ground Up Tv; iTunes GH musicVideo ID 1483979625",
  },
  {
    id: "nobody",
    title: "Nobody",
    featuring: "Mr Eazi",
    year: "2019",
    releaseId: "lfnk2",
    youtubeId: "4t36PfRuSR4",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Nobody+Mr+Eazi+official+video",
    appleMusicUrl: "https://music.apple.com/gh/music-video/nobody-feat-mr-eazi/1461046730",
    artworkUrl: "https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/c0/bc/15/c0bc15fa-858a-a3c3-3779-f513374ed8bb/5060450068833_US23A1501298.jpg/600x600bb.jpg",
    verified: true,
    isOfficialVideo: true,
    description: "Melodic LFNK Vol. II collab with Nigerian hitmaker Mr Eazi.",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur ft Mr Eazi - Nobody' on Ground Up Tv; iTunes GH musicVideo ID 1461046730",
  },
  // ── 2017 ──────────────────────────────────────────────────────────────
  {
    id: "grind-day-remix",
    title: "Grind Day (Remix)",
    featuring: "Sarkodie & Medikal",
    year: "2017",
    releaseId: "lfnk",
    youtubeId: "QLg8lPWnuHk",
    youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Grind+Day+Remix+Sarkodie+Medikal+official",
    verified: true,
    isOfficialVideo: true,
    description: "The breakthrough single. Won Hip-Hop Song of the Year at the Ghana Music Awards. The remix that put Kwesi Arthur on the map nationally.",
    contentSource: "YouTube oEmbed confirmed: 'Kwesi Arthur - Grind Day Remix ft. Sarkodie & Medikal X (Bigg Homie Flee) | Ground Up TV' on GROUND UP CHALE",
  },
];

export function getOfficialVideos(): MusicVideo[] {
  return videos.filter((v) => v.isOfficialVideo);
}
