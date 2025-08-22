'use client'

import AnimatedNavbar from "@/components/AnimatedNavbar";
import Section from "@/components/motion/Section";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParallax, useRevealOnScroll } from "@/hooks/useParallax";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const heroParallaxRef = useParallax<HTMLDivElement>({ speed: 0.15 });
  const aboutImageRef = useParallax<HTMLDivElement>({ speed: 0.25 });
  const contactRef = useRevealOnScroll<HTMLDivElement>();
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <AnimatedNavbar />

      {/* Hero */}
      <Section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(37,99,235,0.12),transparent),radial-gradient(600px_200px_at_80%_30%,rgba(16,185,129,0.10),transparent)]" />
        {/* Floating blobs */}
        <motion.div
          aria-hidden
          className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute top-40 -left-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-36 relative">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-[var(--font-poppins)] text-4xl md:text-6xl font-bold tracking-tight"
          >
            Building products that shape the future.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-300"
          >
            Syncella Enterprise is a product-driven company creating digital solutions like Jilzo and Safarsaathi.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-10">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition-colors"
            >
              Explore Our Products
            </a>
          </motion.div>
          <div ref={heroParallaxRef} className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-90">
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="Team collaboration" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
              <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Product design" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
              <Image src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="Engineering" fill className="object-cover" />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
              <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Business meeting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </Section>

      {/* About */}
      <Section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl">
              Syncella Enterprise Pvt. Ltd. is a parent company dedicated to building innovative products across industries.
              We focus on technology, design, and user experience to bring ideas to life. Our team blends strategy,
              engineering, and human-centered thinking to craft products people love.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-black/5 p-4 bg-white/70 dark:bg-white/5">
                <h3 className="font-semibold">What we value</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Clarity, craftsmanship, and speed. We ship thoughtfully and iterate fast.</p>
              </div>
              <div className="rounded-xl border border-black/5 p-4 bg-white/70 dark:bg-white/5">
                <h3 className="font-semibold">How we build</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Cross-functional squads aligned on outcomes, with deep user empathy.</p>
              </div>
            </div>
          </div>
          <div ref={aboutImageRef} className="grid gap-4">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Design review" fill className="object-cover" />
            </div>
            <div className="flex gap-3 md:justify-start">
              <span className="rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-1 text-sm">Innovation</span>
              <span className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 text-sm">Technology</span>
              <span className="rounded-full bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 text-sm">Simplicity</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Products */}
      <Section id="products" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Products</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            href="https://www.jilzo.com/"
            title="Jilzo"
            description="A social micro-content and house-party inspired app designed for quick, fun interactions with friends."
            imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            imageAlt="People enjoying a house party"
            gradientFrom="from-blue-50 dark:from-blue-900/20"
            gradientTo="to-blue-100 dark:to-blue-700/10"
          />
          <ProductCard
            href="/products/safarsaathi"
            title="Safarsaathi"
            description="A travel safety companion app for India, providing smart tips, alerts, and sharing options for safer journeys."
            imageUrl="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
            imageAlt="Traveler with backpack at sunset"
            gradientFrom="to-emerald-100 dark:to-emerald-700/10"
            gradientTo="to-emerald-100 dark:to-emerald-700/10"
          />
          <ProductCard
            href="#"
            title="More coming soon…"
            description="We are building new products under Syncella. Stay tuned for updates and announcements."
            imageUrl="https://images.unsplash.com/photo-1543269865-cbf427effbad"
            imageAlt="Abstract technology background"
            gradientFrom="from-gray-50 dark:from-gray-800/40"
            gradientTo="to-gray-100 dark:to-gray-700/30"
          />
        </div>
      </Section>

      {/* Stats */}
      <Section id="stats" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-black/5 bg-white/70 dark:bg-white/5 p-8 grid gap-6 md:grid-cols-4 text-center">
          <div>
            <p className="text-3xl font-semibold">2</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Active Products</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">1k+</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Beta Signups</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">5+</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Team Members</p>
          </div>
          <div>
            <p className="text-3xl font-semibold">2025</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Founded</p>
          </div>
        </div>
      </Section>

      {/* Partners */}
      {/* <Section id="partners" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Partners</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80">
          <div className="rounded-xl border border-black/5 p-6 text-center">Partner A</div>
          <div className="rounded-xl border border-black/5 p-6 text-center">Partner B</div>
          <div className="rounded-xl border border-black/5 p-6 text-center">Partner C</div>
          <div className="rounded-xl border border-black/5 p-6 text-center">Partner D</div>
        </div>
      </Section> */}

      {/* Testimonials */}
      <Section id="testimonials" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What people say</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-black/5 bg-white/70 dark:bg-white/5 p-6">
            <p className="text-sm text-gray-700 dark:text-gray-300">“Syncella’s team moves fast and delivers with polish.”</p>
            <p className="mt-3 text-sm text-gray-500">— Product Manager</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white/70 dark:bg-white/5 p-6">
            <p className="text-sm text-gray-700 dark:text-gray-300">“They care deeply about the user experience.”</p>
            <p className="mt-3 text-sm text-gray-500">— Design Lead</p>
          </div>
          <div className="rounded-xl border border-black/5 bg-white/70 dark:bg-white/5 p-6">
            <p className="text-sm text-gray-700 dark:text-gray-300">“Strong technology fundamentals with pragmatic decisions.”</p>
            <p className="mt-3 text-sm text-gray-500">— Tech Advisor</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-6 divide-y divide-black/5 rounded-xl border border-black/5 bg-white/70 dark:bg-white/5">
          <details className="p-5 group">
            <summary className="cursor-pointer font-medium">Where are you based?</summary>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">We are based in India and build globally.</p>
          </details>
          <details className="p-5 group">
            <summary className="cursor-pointer font-medium">How can I partner or invest?</summary>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Reach out via email and we’ll get in touch.</p>
          </details>
          <details className="p-5 group">
            <summary className="cursor-pointer font-medium">Are you hiring?</summary>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">We’re always open to meeting great talent—see Careers.</p>
          </details>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-10">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Ready to explore our products?</h2>
          <p className="mt-2 opacity-90">Discover what we’re building and how it can help your team.</p>
          <div className="mt-6">
            <a href="#products" className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 hover:bg-white/20">View Products</a>
          </div>
        </div>
      </Section>

      {/* Careers */}
      <Section id="careers" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-2xl border border-black/5 bg-white/70 dark:bg-white/5 p-8">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Careers</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-black/5 p-5">
              <h3 className="font-semibold">Engineering</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Frontend, Backend, Mobile. TypeScript-first stack.</p>
            </div>
            <div className="rounded-xl border border-black/5 p-5">
              <h3 className="font-semibold">Design</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Product design, systems thinking, and prototyping.</p>
            </div>
            <div className="rounded-xl border border-black/5 p-5">
              <h3 className="font-semibold">Operations</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Program and partner management with high ownership.</p>
            </div>
          </div>
          <p className="mt-6 text-gray-700 dark:text-gray-300">We’re always looking for talented people. Drop us a message if you’d like to work with us.</p>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="mt-2 text-gray-700 dark:text-gray-300">Syncella Enterprise Pvt. Ltd., City, India</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div ref={contactRef}>
            <div className="space-y-2 text-sm">
              <a className="text-blue-600 hover:underline" href="mailto:hello@syncella.com">hello@syncella.com</a>
              <div>
                <a className="text-blue-600 hover:underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
                <span className="mx-2">·</span>
                <a className="text-blue-600 hover:underline" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              </div>
            </div>
          </div>
          <form className="rounded-xl border border-black/5 bg-white/70 dark:bg-white/5 p-6 space-y-4">
            <div>
              <label className="block text-sm mb-1" htmlFor="name">Name</label>
              <input id="name" name="name" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm mb-1" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Send</button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-12">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-4 text-sm text-gray-600 dark:text-gray-300">
          <div>
            <h3 className="font-semibold">Syncella Enterprise</h3>
            <p className="mt-2">Building products that shape the future.</p>
          </div>
          <div>
            <h3 className="font-semibold">Products</h3>
            <ul className="mt-2 space-y-2">
              <li><a className="hover:underline" href="/products/jilzo">Jilzo</a></li>
              <li><a className="hover:underline" href="/products/safarsaathi">Safarsaathi</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-2 space-y-2">
              <li><a className="hover:underline" href="#about">About</a></li>
              <li><a className="hover:underline" href="#careers">Careers</a></li>
              <li><a className="hover:underline" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Follow</h3>
            <ul className="mt-2 space-y-2">
              <li><a className="hover:underline" href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a className="hover:underline" href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        {/* Marquee */}
        <div className="mt-10 overflow-hidden">
          <div className="flex gap-12 whitespace-nowrap animate-[marquee_20s_linear_infinite] px-6">
            <span>Innovation</span>
            <span>Technology</span>
            <span>Design</span>
            <span>User Experience</span>
            <span>Reliability</span>
            <span>Security</span>
            <span>Innovation</span>
            <span>Technology</span>
            <span>Design</span>
            <span>User Experience</span>
            <span>Reliability</span>
            <span>Security</span>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-8 flex items-center justify-between text-xs text-gray-500">
          <p>Copyright © 2025 Syncella Enterprise Pvt. Ltd.</p>
          <p>Made with Next.js, Tailwind CSS, Framer Motion, and GSAP</p>
        </div>
      </footer>
      <BackToTop />
    </main>
  );
}
