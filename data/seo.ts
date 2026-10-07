import type { Metadata } from "next";

const socialImage = "https://fisat.ac.in/wp-content/uploads/2022/07/Institution1.jpg";

export function pageMetadata(title: string, description: string): Metadata {
  const fullTitle = title.includes("FISAT") ? title : `${title} | FISAT`;
  return {
    title: fullTitle,
    description,
    keywords: ["FISAT", "Federal Institute of Science and Technology", "Kerala", "Angamaly", "engineering education"],
    openGraph: {
      type: "website",
      siteName: "FISAT — Federal Institute of Science and Technology",
      title: fullTitle,
      description,
      images: [{ url: socialImage, width: 1920, height: 890, alt: "FISAT campus in Angamaly, Kerala" }]
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [socialImage] }
  };
}
