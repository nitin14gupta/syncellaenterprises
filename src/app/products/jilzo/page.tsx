export const metadata = {
  title: "Jilzo by Syncella | Social Micro-Content App",
  description:
    "Jilzo by Syncella is a modern social micro-content and house-party inspired app designed for quick, fun interactions with friends.",
};

import { motion } from "framer-motion";
import Image from "next/image";

export default function JilzoPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-semibold tracking-tight">Jilzo</motion.h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <p className="text-gray-700 dark:text-gray-300">
            Jilzo is a playful social experience that blends micro-content with house party vibes. Share quick updates,
            host spontaneous sessions, and connect with your circle in a lightweight, fun-first interface.
          </p>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Follow our updates as we build out features, refine the experience, and prepare for wider availability.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1516387938699-a93567ec168e" alt="Friends at a party using an app" fill className="object-cover" />
        </motion.div>
      </div>
      <div className="mt-10">
        <a href="/" className="text-blue-600 hover:underline">Back to Syncella</a>
      </div>
    </main>
  );
}

