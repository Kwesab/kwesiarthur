/**
 * Kwesi Arthur — Full Discography
 * Songs, EPs, Features, Collaborations & Interviews
 * Sources: iTunes Lookup API (GH store), Apple Music artist page, Wikipedia, Last.fm
 * Last verified: October 2026
 */

export type SongCategory =
  | "solo"
  | "feature"
  | "collab"
  | "interview"
  | "freestyle"
  | "live";

export interface Song {
  id: string;
  title: string;
  artist?: string;            // for features where KA is not the lead
  featuring?: string;
  year: string;
  category: SongCategory;
  releaseId?: string;         // links to releases.ts id
  appleMusicUrl?: string;
  youtubeSearchUrl: string;
  note?: string;
}

export const allSongs: Song[] = [
  // ── 2017 ──────────────────────────────────────────────────────────────
  { id: "about-to-blow", title: "About to Blow", artist: "Various", featuring: "Kwesi Arthur", year: "2017", category: "feature", youtubeSearchUrl: "https://www.youtube.com/results?search_query=About+to+Blow+Kwesi+Arthur", appleMusicUrl: "https://music.apple.com/gh/album/1481911155" },
  { id: "ade-akye", title: "Ade Akye", year: "2017", category: "solo", releaseId: "lfnk", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Ade+Akye" },
  { id: "free", title: "Free", year: "2017", category: "solo", releaseId: "lfnk", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Free+LFNK" },
  { id: "grind-day", title: "Grind Day", year: "2017", category: "solo", releaseId: "lfnk", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Grind+Day" },
  { id: "grind-day-remix", title: "Grind Day (Remix)", featuring: "Sarkodie & Medikal", year: "2017", category: "collab", releaseId: "lfnk", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Grind+Day+Remix+Sarkodie+Medikal", appleMusicUrl: "https://music.apple.com/gh/album/grind-day-remix/1330243366" },
  { id: "back-on-the-wall", title: "Back on the Wall", year: "2017", category: "solo", releaseId: "lfnk", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Back+on+the+Wall" },
  { id: "devil-knocking", title: "Devil Knocking", year: "2017", category: "solo", releaseId: "lfnk", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Devil+Knocking" },
  { id: "digits-remix", title: "Digits (Remix)", artist: "Mr Eazi", featuring: "Kwesi Arthur", year: "2017", category: "feature", appleMusicUrl: "https://music.apple.com/gh/album/1306271540", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Mr+Eazi+Digits+Remix+Kwesi+Arthur" },
  { id: "8pm-in-tema", title: "8pm in Tema", year: "2017", category: "solo", appleMusicUrl: "https://music.apple.com/gh/album/1315059612", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+8pm+in+Tema" },

  // ── 2018 ──────────────────────────────────────────────────────────────
  { id: "dont-keep-me-waiting", title: "Don't Keep Me Waiting", featuring: "KiDi", year: "2018", category: "collab", appleMusicUrl: "https://music.apple.com/gh/album/1436178506", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Don%27t+Keep+Me+Waiting+KiDi" },
  { id: "woara", title: "Woara", year: "2018", category: "solo", appleMusicUrl: "https://music.apple.com/gh/album/1405610237", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Woara" },
  { id: "no-title", title: "No Title", year: "2018", category: "solo", appleMusicUrl: "https://music.apple.com/gh/album/1420570235", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+No+Title" },
  { id: "boys-kasa", title: "Boys Kasa", artist: "GroundUp Chale", featuring: "King Promise, Kwesi Arthur, DarkoVibes & others", year: "2018", category: "collab", appleMusicUrl: "https://music.apple.com/gh/album/1439116220", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Boys+Kasa+King+Promise+Kwesi+Arthur+DarkoVibes" },
  { id: "african-girl", title: "African Girl", featuring: "Shatta Wale", year: "2018", category: "collab", releaseId: "lfnk2", appleMusicUrl: "https://music.apple.com/gh/album/1445608800", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+African+Girl+Shatta+Wale" },
  { id: "kpo-k3k3", title: "Kpo K3K3", artist: "Medikal", featuring: "Kwesi Arthur, Kelvyn Boy & DarkoVibes", year: "2018", category: "feature", appleMusicUrl: "https://music.apple.com/gh/album/1852547509", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kpo+K3K3+Medikal+Kwesi+Arthur+Kelvyn+Boy" },
  { id: "fire-in-the-booth", title: "Fire in the Booth", year: "2018", category: "freestyle", note: "Charlie Sloth's BBC Radio 1Xtra Fire in the Booth", appleMusicUrl: "https://music.apple.com/gh/music-video/kwesi-arthur-fire-in-the-booth/1462900997", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Fire+in+the+Booth+Charlie+Sloth" },

  // ── 2019 ──────────────────────────────────────────────────────────────
  { id: "live-or-die", title: "Live or Die", year: "2019", category: "solo", releaseId: "tint1", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Live+or+Die" },
  { id: "chill", title: "Chill", year: "2019", category: "solo", releaseId: "tint1", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Chill+2019" },
  { id: "pray-for-me", title: "Pray for Me", year: "2019", category: "solo", releaseId: "lfnk2", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Pray+for+Me" },
  { id: "radio", title: "Radio", featuring: "Stonebwoy", year: "2019", category: "collab", releaseId: "lfnk2", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Radio+Stonebwoy" },
  { id: "nobody", title: "Nobody", featuring: "Mr Eazi", year: "2019", category: "collab", releaseId: "lfnk2", appleMusicUrl: "https://music.apple.com/gh/music-video/nobody-feat-mr-eazi/1461046730", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Nobody+Mr+Eazi" },
  { id: "kill-my-spirit", title: "Kill My Spirit", featuring: "Sarkodie & Santi", year: "2019", category: "collab", releaseId: "lfnk2", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Kill+My+Spirit+Sarkodie+Santi" },
  { id: "see-no-evil", title: "See No Evil", year: "2019", category: "solo", releaseId: "lfnk2", appleMusicUrl: "https://music.apple.com/gh/music-video/see-no-evil/1477193592", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+See+No+Evil" },
  { id: "sometimes", title: "Sometimes (Va Midzo)", year: "2019", category: "solo", releaseId: "lfnk2", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Sometimes+Va+Midzo" },
  { id: "walk", title: "Walk", featuring: "Nasty C", year: "2019", category: "collab", releaseId: "lfnk2", appleMusicUrl: "https://music.apple.com/gh/music-video/walk/1564429646", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Walk+Nasty+C" },
  { id: "colours", title: "Colours", year: "2019", category: "solo", releaseId: "lfnk2", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Colours+2019" },
  { id: "zombie", title: "Zombie", year: "2019", category: "solo", appleMusicUrl: "https://music.apple.com/gh/music-video/zombie/1483979625", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Zombie" },
  { id: "dont-stress", title: "Don't Stress", year: "2019", category: "solo", appleMusicUrl: "https://music.apple.com/gh/album/1486983349", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Don%27t+Stress" },
  { id: "la-familia", title: "La Familia", artist: "Sarkodie", featuring: "Kwesi Arthur", year: "2019", category: "feature", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Sarkodie+La+Familia+Kwesi+Arthur", appleMusicUrl: "https://music.apple.com/gh/music-video/la-familia-feat-kwesi-arthur-sarkodie/1473632193" },
  { id: "comfortable", title: "Comfortable", artist: "Oxlade", featuring: "Kwesi Arthur", year: "2019", category: "feature", appleMusicUrl: "https://music.apple.com/gh/music-video/comfortable-feat-kwesi-arthur/1468248748", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Oxlade+Comfortable+Kwesi+Arthur" },
  { id: "confirmed", title: "Confirmed", artist: "Various", featuring: "Kwesi Arthur & Joey B", year: "2019", category: "feature", appleMusicUrl: "https://music.apple.com/gh/music-video/confirmed-feat-kwesi-arthur-joey-b/1525400232", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Confirmed+Kwesi+Arthur+Joey+B" },
  { id: "ebro-show-2019", title: "The Ebro Show Interview", year: "2019", category: "interview", note: "Kwesi Arthur on Apple Music's The Ebro Show discussing LFNK Vol. II: Home Run.", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Ebro+Show+interview+2019" },

  // ── 2020 ──────────────────────────────────────────────────────────────
  { id: "live-from-233", title: "Live From 233", year: "2020", category: "solo", releaseId: "tint2", appleMusicUrl: "https://music.apple.com/gh/music-video/live-from-233/1537584629", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Live+From+233" },
  { id: "baajo", title: "Baajo", featuring: "Joeboy", year: "2020", category: "collab", releaseId: "tint2", appleMusicUrl: "https://music.apple.com/gh/music-video/baajo/1544416419", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Baajo+Joeboy" },
  { id: "turn-on-the-lights", title: "Turn On The Lights", year: "2020", category: "solo", releaseId: "tint2", appleMusicUrl: "https://music.apple.com/gh/music-video/turn-on-the-lights/1537113786", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Turn+On+The+Lights" },
  { id: "vancouver-remix", title: "Vancouver (Remix)", year: "2020", category: "solo", appleMusicUrl: "https://music.apple.com/gh/music-video/vancouver-remix/1517427843", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Vancouver+Remix" },
  { id: "revolution-sound", title: "Revolution Sound", year: "2020", category: "solo", appleMusicUrl: "https://music.apple.com/gh/album/1501399066", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Revolution+Sound" },
  { id: "bet-cypher-2020-track", title: "BET Hip Hop Awards Cypher", year: "2020", category: "freestyle", note: "Second Ghanaian rapper to perform in the BET Hip Hop Awards Cypher.", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+BET+Hip+Hop+Awards+Cypher+2020" },

  // ── 2021 ──────────────────────────────────────────────────────────────
  { id: "winning", title: "Winning", featuring: "Vic Mensa", year: "2021", category: "collab", releaseId: "soj", appleMusicUrl: "https://music.apple.com/gh/music-video/winning-feat-vic-mensa/1566366836", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Winning+Vic+Mensa" },
  { id: "door", title: "Door", featuring: "Joeboy", year: "2021", category: "collab", appleMusicUrl: "https://music.apple.com/gh/music-video/door/1563449780", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Door+Joeboy" },
  { id: "different", title: "Different", year: "2021", category: "solo", appleMusicUrl: "https://music.apple.com/gh/music-video/different/1592754326", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Different+2021" },
  { id: "john-wick", title: "John Wick (Freestyle)", year: "2021", category: "freestyle", appleMusicUrl: "https://music.apple.com/gh/music-video/john-wick-freestyle/1589716181", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+John+Wick+Freestyle" },
  { id: "celebrate", title: "Celebrate", featuring: "Teni", year: "2021", category: "collab", releaseId: "soj", appleMusicUrl: "https://music.apple.com/gh/music-video/celebrate/1592096526", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Celebrate+Teni" },
  { id: "sore-remix", title: "Sore (Remix)", artist: "Yaw Tog", featuring: "Stormzy & Kwesi Arthur", year: "2021", category: "feature", appleMusicUrl: "https://music.apple.com/gh/music-video/sore-remix/1555815438", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Yaw+Tog+Sore+Remix+Stormzy+Kwesi+Arthur" },
  { id: "ghetto-vigilante", title: "Ghetto Vigilante", artist: "Various", featuring: "Kwesi Arthur", year: "2021", category: "feature", appleMusicUrl: "https://music.apple.com/gh/music-video/ghetto-vigilante-feat-kwesi-arthur/1581699435", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Ghetto+Vigilante+Kwesi+Arthur" },
  { id: "africa-now-radio-soj", title: "Africa Now Radio — Son of Jacob", year: "2022", category: "interview", note: "Kwesi Arthur on Apple Music's Africa Now Radio with Nandi Madida discussing Son of Jacob.", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Africa+Now+Radio+Son+of+Jacob" },

  // ── 2022 ──────────────────────────────────────────────────────────────
  { id: "drama", title: "Drama", featuring: "Bigg Homie Flee", year: "2022", category: "solo", releaseId: "soj", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Drama+Bigg+Homie+Flee" },
  { id: "disturb", title: "Disturb", year: "2022", category: "solo", releaseId: "soj", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Disturb" },
  { id: "silver-spoon", title: "Silver Spoon", year: "2022", category: "solo", releaseId: "soj", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Silver+Spoon" },
  { id: "paper", title: "Paper", year: "2022", category: "solo", releaseId: "soj", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Paper+Son+of+Jacob" },
  { id: "diamonds-dancing", title: "Diamonds Dancing", featuring: "NSG", year: "2022", category: "collab", releaseId: "soj", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Diamonds+Dancing+NSG" },
  { id: "toxic", title: "Toxic", featuring: "Adekunle Gold", year: "2022", category: "collab", releaseId: "soj", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Toxic+Adekunle+Gold" },
  { id: "traumatized", title: "Traumatized", year: "2022", category: "solo", releaseId: "soj", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Traumatized" },
  { id: "mind-over-body", title: "Mind Over Body", year: "2022", category: "solo", releaseId: "soj", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Mind+Over+Body" },
  { id: "animal", title: "Animal", year: "2022", category: "solo", releaseId: "soj", appleMusicUrl: "https://music.apple.com/gh/music-video/animal/1665152547", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Animal" },
  { id: "no-regrets", title: "No Regrets", year: "2022", category: "solo", releaseId: "soj", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+No+Regrets+Son+of+Jacob" },
  { id: "adom", title: "Adom", year: "2022", category: "solo", releaseId: "soj", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Adom" },
  { id: "nirvana", title: "Nirvana", featuring: "Kofi Mole", year: "2022", category: "collab", appleMusicUrl: "https://music.apple.com/gh/music-video/nirvana/1653598755", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Nirvana+Kofi+Mole" },
  { id: "on-the-streets", title: "On The Streets", artist: "Various", featuring: "Kwesi Arthur", year: "2022", category: "feature", appleMusicUrl: "https://music.apple.com/gh/music-video/on-the-streets-feat-kwesi-arthur/1638041825", youtubeSearchUrl: "https://www.youtube.com/results?search_query=On+The+Streets+Kwesi+Arthur" },

  // ── 2023 ──────────────────────────────────────────────────────────────
  { id: "pain-interlude-track", title: "Pain Interlude", year: "2023", category: "solo", releaseId: "paininterlude", appleMusicUrl: "https://music.apple.com/gh/music-video/pain-interlude/1677312515", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Pain+Interlude" },
  { id: "floor-shake", title: "Floor Shake", artist: "BackRoad Gee", featuring: "Kwesi Arthur", year: "2023", category: "feature", appleMusicUrl: "https://music.apple.com/gh/music-video/floor-shake-feat-backroad-gee-kwesi-arthur/1675527574", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Floor+Shake+BackRoad+Gee+Kwesi+Arthur" },

  // ── 2024 ──────────────────────────────────────────────────────────────
  { id: "1-of-1", title: "1 Of 1", year: "2024", category: "solo", releaseId: "tint3", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+1+Of+1" },
  { id: "cant-relate", title: "Can't Relate", year: "2024", category: "solo", releaseId: "tint3", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Can%27t+Relate" },
  { id: "jungle-music-pt1-track", title: "Jungle Music, Pt. 1", featuring: "IDK", year: "2024", category: "collab", releaseId: "tint3", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Jungle+Music+Pt+1+IDK" },
  { id: "raging-bulls-track", title: "Raging Bulls", featuring: "Joey B", year: "2024", category: "collab", releaseId: "tint3", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Raging+Bulls+Joey+B" },
  { id: "hijack", title: "Hijack", year: "2024", category: "solo", releaseId: "tint3", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Hijack" },
  { id: "4lyfe", title: "4LYFE", year: "2024", category: "solo", releaseId: "tint3", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+4LYFE" },
  { id: "fefe-ne-fe-track", title: "Fefe Ne Fe", year: "2024", category: "solo", releaseId: "tint3", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Fefe+Ne+Fe" },
  { id: "ginger", title: "Ginger", year: "2024", category: "solo", releaseId: "tint3", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Ginger" },
  { id: "make-a-way", title: "Make A Way", year: "2024", category: "solo", releaseId: "tint3", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Make+A+Way" },
  { id: "kpo-k3k3-2024", title: "Kpo K3K3", artist: "Medikal", featuring: "Kwesi Arthur, Kelvyn Boy & DarkoVibes", year: "2024", category: "feature", appleMusicUrl: "https://music.apple.com/gh/music-video/kpo-k3k3-feat-medikal-kelvyn-boy-darkovibes-kwesi-arthur/1894435403", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kpo+K3K3+Medikal+Kwesi+Arthur+2024" },

  // ── 2025 ──────────────────────────────────────────────────────────────
  { id: "real-thing-track", title: "Real Thing", featuring: "King Promise", year: "2025", category: "collab", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Real+Thing+King+Promise" },
  { id: "mami-water", title: "MAMI WATER", artist: "Various", featuring: "Kwesi Arthur & BPM Boss", year: "2025", category: "feature", appleMusicUrl: "https://music.apple.com/gh/album/1809031926", youtubeSearchUrl: "https://www.youtube.com/results?search_query=MAMI+WATER+Kwesi+Arthur+BPM+Boss" },
  { id: "killy-killy-remix", title: "Killy Killy (Remix)", artist: "Stonebwoy", featuring: "Kwesi Arthur", year: "2025", category: "feature", appleMusicUrl: "https://music.apple.com/gh/music-video/killy-killy-remix-feat-stonebwoy-kwesi-arthur/1852941348", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Killy+Killy+Remix+Stonebwoy+Kwesi+Arthur" },
  { id: "long-life", title: "Long Life", artist: "Various", featuring: "Kwesi Arthur", year: "2025", category: "feature", appleMusicUrl: "https://music.apple.com/gh/music-video/long-life-feat-kwesi-arthur/1803286234", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Long+Life+Kwesi+Arthur" },

  // ── 2026 ──────────────────────────────────────────────────────────────
  { id: "redemption-track", title: "Redemption", year: "2026", category: "solo", releaseId: "rv", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Redemption+2026" },
  { id: "i-be-where", title: "I Be Where I Wanted To Be", year: "2026", category: "solo", releaseId: "rv", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+I+Be+Where+I+Wanted+To+Be" },
  { id: "yawa-hosanna-track", title: "Yawa (Hosanna)", year: "2026", category: "solo", releaseId: "rv", appleMusicUrl: "https://music.apple.com/gh/music-video/yawa-hosanna/6807144372", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Yawa+Hosanna" },
  { id: "immigrant", title: "Immigrant", year: "2026", category: "solo", releaseId: "rv", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Immigrant" },
  { id: "babylon-interlude", title: "Babylon Interlude", year: "2026", category: "solo", releaseId: "rv", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Babylon+Interlude" },
  { id: "what-they-want", title: "What They Want (Gye)", year: "2026", category: "solo", releaseId: "rv", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+What+They+Want+Gye" },
  { id: "okay-switch", title: "Okay Switch", year: "2026", category: "solo", releaseId: "rv", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Okay+Switch" },
  { id: "broken-pieces", title: "Broken Pieces", year: "2026", category: "solo", releaseId: "rv", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Broken+Pieces" },
  { id: "no-more-sleep-track", title: "NO MORE SLEEP", year: "2026", category: "solo", appleMusicUrl: "https://music.apple.com/gh/music-video/no-more-sleep/6794931006", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+NO+MORE+SLEEP+2026" },
  { id: "coachella", title: "Coachella", artist: "Various", featuring: "Kwesi Arthur", year: "2026", category: "feature", appleMusicUrl: "https://music.apple.com/gh/music-video/coachella-feat-kwesi-arthur/6784705566", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Coachella+feat+Kwesi+Arthur+2026" },
  { id: "wonderland-interview", title: "Kwesi Arthur's Road To Redemption", year: "2026", category: "interview", note: "In-depth interview with Wonderland Magazine discussing Redemption Valley and his Tema roots.", youtubeSearchUrl: "https://www.youtube.com/results?search_query=Kwesi+Arthur+Wonderland+interview+2026" },
];

export const CATEGORY_LABELS: Record<SongCategory, string> = {
  solo:      "Solo",
  feature:   "Feature",
  collab:    "Collab",
  interview: "Interview",
  freestyle: "Freestyle",
  live:      "Live",
};

export function getSongsByCategory(cat: SongCategory): Song[] {
  return allSongs.filter((s) => s.category === cat);
}

export function getSongsByYear(year: string): Song[] {
  return allSongs.filter((s) => s.year === year);
}
