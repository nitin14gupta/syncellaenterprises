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
  const isExternal = href.startsWith("http");
  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className="rounded-xl border border-black/5 bg-white/70 dark:bg-white/5 p-5 shadow-md overflow-hidden"
    >
      <div className={`h-40 rounded-lg bg-gradient-to-br ${gradientFrom} ${gradientTo} relative overflow-hidden`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover mix-blend-multiply"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <span className="mt-3 inline-block text-blue-600">Learn more</span>
    </motion.a>
  );
}

