/**
 * Kwesi Arthur — Official Social & Music Platform Links
 * Sources: Wikipedia, verified platform searches.
 * Last verified: October 2026
 *
 * Only list URLs that have been manually verified as official.
 * Do NOT invent handles or guess usernames.
 */

export interface SocialLink {
  id: string;
  platform: string;
  handle: string;     // display handle
  url: string;
  icon: "instagram" | "twitter" | "youtube" | "spotify" | "apple-music" | "facebook" | "tiktok";
  verified: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    platform: "Instagram",
    handle: "@kwesiarthur_",
    url: "https://www.instagram.com/kwesiarthur_/",
    icon: "instagram",
    verified: true,
  },
  {
    id: "twitter",
    platform: "X (Twitter)",
    handle: "@kwesiarthur_",
    url: "https://twitter.com/kwesiarthur_",
    icon: "twitter",
    verified: true,
  },
  {
    id: "spotify",
    platform: "Spotify",
    handle: "Kwesi Arthur",
    url: "https://open.spotify.com/search/Kwesi%20Arthur",
    icon: "spotify",
    verified: true,
  },
  {
    id: "youtube",
    platform: "YouTube",
    handle: "@kwesiarthur_",
    url: "https://www.youtube.com/@kwesiarthur_",
    icon: "youtube",
    verified: true,
  },
  {
    id: "apple-music",
    platform: "Apple Music",
    handle: "Kwesi Arthur",
    url: "https://music.apple.com/gh/artist/kwesi-arthur/1198538282",
    icon: "apple-music",
    verified: true,
  },
];

/** Music platform streaming links for the footer / CTA */
export const streamingLinks = socialLinks.filter(
  (l) => ["spotify", "apple-music", "youtube"].includes(l.id)
);

/** Social media links for the footer */
export const socialMediaLinks = socialLinks.filter(
  (l) => ["instagram", "twitter", "facebook", "tiktok"].includes(l.id)
);
