export const metadata = {
  title: "Jilzo by Syncella | Social Micro-Content App",
  description:
    "Jilzo by Syncella is a modern social micro-content and house-party inspired app designed for quick, fun interactions with friends.",
};

import ProductDetail from "@/components/ProductDetail";

export default function JilzoPage() {
  return (
    <ProductDetail
      title="Jilzo"
      paragraphs={[
        "Jilzo is a playful social experience that blends micro-content with house party vibes. Share quick updates, host spontaneous sessions, and connect with your circle in a lightweight, fun-first interface.",
        "Follow our updates as we build out features, refine the experience, and prepare for wider availability.",
      ]}
      imageUrl="https://images.unsplash.com/photo-1516387938699-a93567ec168e"
      imageAlt="Friends at a party using an app"
    />
  );
}

