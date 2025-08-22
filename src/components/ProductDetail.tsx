"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  paragraphs: string[];
  imageUrl: string;
  imageAlt: string;
};

export default function ProductDetail({ title, paragraphs, imageUrl, imageAlt }: Props) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-4xl font-semibold tracking-tight">
        {title}
      </motion.h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          {paragraphs.map((p, i) => (
            <p key={i} className={`text-gray-700 dark:text-gray-300 ${i > 0 ? "mt-4" : ""}`}>{p}</p>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image src={imageUrl} alt={imageAlt} fill className="object-cover" />
        </motion.div>
      </div>
      <div className="mt-10">
        <a href="/" className="text-blue-600 hover:underline">Back to Syncella</a>
      </div>
    </main>
  );
}


