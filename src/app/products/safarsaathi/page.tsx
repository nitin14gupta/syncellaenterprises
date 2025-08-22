export const metadata = {
  title: "Safarsaathi by Syncella | Travel Safety Companion",
  description:
    "Safarsaathi by Syncella is a travel safety companion app for India, with tips, alerts, and sharing options for safer journeys.",
};

import { motion } from "framer-motion";
import Image from "next/image";

export default function SafarsaathiPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-semibold tracking-tight">Safarsaathi</motion.h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <p className="text-gray-700 dark:text-gray-300">
            Safarsaathi is designed to help travelers in India stay informed and connected. From safety tips and area awareness
            to sharing your trip status with trusted contacts, our goal is to make travel more confident and safe.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            We’re building this with a focus on reliability and clarity. Stay tuned for more updates.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd" alt="Traveler checking route on phone" fill className="object-cover" />
        </motion.div>
      </div>
      <div className="mt-10">
        <a href="/" className="text-blue-600 hover:underline">Back to Syncella</a>
      </div>
    </main>
  );
}

