export const metadata = {
  title: "Safarsaathi by Syncella | Travel Safety Companion",
  description:
    "Safarsaathi by Syncella is a travel safety companion app for India, with tips, alerts, and sharing options for safer journeys.",
};

import ProductDetail from "@/components/ProductDetail";

export default function SafarsaathiPage() {
  return (
    <ProductDetail
      title="Safarsaathi"
      paragraphs={[
        "Safarsaathi is designed to help travelers in India stay informed and connected. From safety tips and area awareness to sharing your trip status with trusted contacts, our goal is to make travel more confident and safe.",
        "We’re building this with a focus on reliability and clarity. Stay tuned for more updates.",
      ]}
      imageUrl="https://images.unsplash.com/photo-1502920917128-1aa500764cbd"
      imageAlt="Traveler checking route on phone"
    />
  );
}

