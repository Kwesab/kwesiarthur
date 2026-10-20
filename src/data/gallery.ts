/**
 * Kwesi Arthur — Gallery
 * All real images sourced from Wikimedia Commons under CC BY-SA 4.0.
 * Attribution is required: credit the photographer and link to the license.
 *
 * Wikimedia Commons source: https://commons.wikimedia.org/wiki/Category:Kwesi_Arthur
 * License: https://creativecommons.org/licenses/by-sa/4.0/
 */

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  credit: string;
  creditUrl: string;
  license: string;
  licenseUrl: string;
  year?: string;
  placeholder: boolean;
  hue: number;
}

export const galleryImages: GalleryImage[] = Array.from({ length: 12 }, (_, i) => ({
  id: `kwesi-${i + 1}`,
  src: `/kwesi/${i + 1}.jpeg`,
  alt: `Kwesi Arthur — photo ${i + 1}`,
  caption: `Kwesi Arthur — ${i + 1}`,
  credit: "Project owner collection",
  creditUrl: "",
  license: "Fan project",
  licenseUrl: "",
  placeholder: false,
  hue: (i * 30) % 360,
}));

/** Only images with real authorized photos */
export function getRealImages(): GalleryImage[] {
  return galleryImages.filter((g) => !g.placeholder && g.src);
}
