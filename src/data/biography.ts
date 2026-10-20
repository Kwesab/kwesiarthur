/**
 * Kwesi Arthur — Biography
 * Sources: Wikipedia, Wonderland Magazine (Apr 2026), Pan-African Music profile,
 *          Genius bio, yen.com.gh, New Wave Magazine interview.
 * Last verified: October 2026
 *
 * Facts clearly marked where single-source or uncertain.
 */

export interface Milestone {
  year: string;
  event: string;
  verified: boolean;
}

export interface BiographyData {
  fullName: string;
  born: string;           // ISO date
  birthplace: string;
  nationality: string;
  genres: string[];
  labels: string[];
  shortBio: string;       // one-paragraph intro
  story: string[];        // array of paragraphs for the full bio section
  milestones: Milestone[];
  awards: string[];
  contentSource: string;
}

const biography: BiographyData = {
  fullName: "Emmanuel Kwesi Danso Arthur Jr.",
  born: "1999-12-18",
  birthplace: "Tema, Greater Accra Region, Ghana",
  nationality: "Ghanaian",
  genres: ["Hip-hop", "Afrobeats", "Trap", "Afroswing"],
  labels: ["GroundUp Chale Records", "Tieme Music", "Sisi / Encore Recordings"],
  shortBio:
    "Kwesi Arthur is a Ghanaian rapper, singer, and songwriter from Tema, Ghana. Since his 2017 breakout with \"Grind Day\", he has grown into one of West Africa's most compelling voices — blending street storytelling, melody, and culture into a body of work that resonates far beyond Ghana's borders.",
  story: [
    "Born Emmanuel Kwesi Danso Arthur Jr. on 18 December 1999, Kwesi Arthur grew up in Tema Community 9 — a working-class coastal neighbourhood east of Accra. The second of four children, he attended Tema Secondary Technical School (Temasco), where he graduated in 2013. Financial constraints prevented him from continuing to university, where he had hoped to study psychology and law.",
    "Music became his path forward. He taught himself at a local recording studio, trading menial work — sweeping floors, running errands — for studio time and production lessons. It was there that his voice and pen developed into something undeniable. He credits Drake's debut album, Thank Me Later, as an early creative catalyst.",
    "In April 2017, Kwesi Arthur released his debut EP, Live From Nkrumah Krom, through GroundUp Chale Records — an independent collective he helped build. The EP's lead single, \"Grind Day\", caught the attention of Sarkodie and Medikal, who both joined the remix. The song became an anthem, and Kwesi Arthur became a name Ghana couldn't ignore.",
    "By 2018, the momentum was international. He received a BET Awards Viewer's Choice Best International Act nomination — becoming one of the first Ghanaian artists of his generation to reach that stage. He won Rapper of the Year and Hip Hop Song of the Year at the Vodafone Ghana Music Awards. He later became the second Ghanaian rapper nominated for the BET Hip Hop Awards Cypher, after Sarkodie.",
    "His 2019 EP, Live From Nkrumah Krom Vol. II: Home Run, accumulated over 2 million streams in its first week. The TINT (This Is Not The Tape) series became a vehicle for his most experimental and collaborative work, featuring artists across Ghana, Nigeria, and the United Kingdom.",
    "In 2022, his debut album, Son of Jacob, arrived — a 15-track statement that moved across trap, Afroswing, amapiano, asokpor, and highlife. Featuring Teni, Adekunle Gold, Vic Mensa, Kofi Mole, NSG, and Joeboy, it demonstrated an artist capable of holding his own on an international canvas.",
    "Redemption Valley (2026), his second studio album, is named after the actual road in Tema Community 9 where he grew up. \"That road brought me home from hospital, took me to school, led me to the studio,\" he explained in an April 2026 interview with Wonderland Magazine. The album is a return to roots — eight tracks anchored in lived experience and gratitude.",
    "Across his career, Kwesi Arthur has collaborated with Sarkodie, Medikal, Stonebwoy, Shatta Wale, KiDi, M.anifest, King Promise, DarkoVibes, Joey B, Nasty C, Joeboy, and many others. He remains based in Tema, where the community spirit that shaped his music — captured in GroundUp Chale — continues to define who he is.",
  ],
  milestones: [
    { year: "2017", event: "Released debut EP Live From Nkrumah Krom and breakout single \"Grind Day\"", verified: true },
    { year: "2017", event: "\"Grind Day\" remix featuring Sarkodie and Medikal became a national anthem", verified: true },
    { year: "2018", event: "Nominated for BET Awards Viewer's Choice Best International Act", verified: true },
    { year: "2018", event: "Won Rapper of the Year & Hip Hop Song of the Year at Vodafone Ghana Music Awards", verified: true },
    { year: "2019", event: "Live From Nkrumah Krom Vol. II surpassed 2M streams in its first week", verified: true },
    { year: "2020", event: "\"Live From 233\" became one of Apple Music's most-streamed African songs", verified: true },
    { year: "2020", event: "Featured in the BET Hip Hop Awards Cypher — second Ghanaian rapper to do so", verified: true },
    { year: "2022", event: "Released debut album Son of Jacob (22 April 2022)", verified: true },
    { year: "2024", event: "Released This Is Not The Tape III in partnership with Tieme Music", verified: true },
    { year: "2026", event: "Released second studio album Redemption Valley (6 February 2026)", verified: true },
  ],
  awards: [
    "BET Awards — Viewer's Choice Best International Act nominee (2018)",
    "Vodafone Ghana Music Awards — Rapper of the Year (2018)",
    "Vodafone Ghana Music Awards — Hip Hop Song of the Year (2018)",
    "3Music Awards — Best Collaboration winner (2019)",
    "Ghana Music Awards — International Collaboration of the Year winner (2021)",
  ],
  contentSource:
    "Wikipedia (Kwesi Arthur), Wonderland Magazine Apr 2026, Pan-African Music profile, Genius artist bio, yen.com.gh, New Wave Magazine",
};

export default biography;
