"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProductCardProps = {
  href: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  gradientFrom: string;
  gradientTo: string;
};

export default function ProductCard({
  href,
  title,
  description,
  imageUrl,
  imageAlt,
  gradientFrom,
  gradientTo,
}: ProductCardProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className="group rounded-xl border border-black/5 bg-white/70 dark:bg-white/5 p-5 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
    >
      <div className={`h-40 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <span className="mt-3 inline-block text-blue-600 group-hover:underline">Learn more</span>
    </motion.a>
  );
}

