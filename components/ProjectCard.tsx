"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  behance?: string;
};

const card = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  behance,
}: Props) {
  return (
    <motion.article
      variants={card}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        group relative rounded-xl p-6
        bg-white/70 backdrop-blur-md
        border border-slate-200/60
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-xl
        hover:border-slate-300      
        "
    >
      {/* Glow layer */}
      <div
  className="
    pointer-events-none absolute inset-0 rounded-xl
    opacity-0 group-hover:opacity-100
    transition duration-300
    ring-1 ring-sky-400/20
    shadow-[0_0_0_1px_rgba(56,189,248,0.15),0_25px_80px_-30px_rgba(56,189,248,0.35)]
  "
/>

      {/* Content */}
      <div className="relative">
        <h3 className="text-lg font-semibold text-slate-800 group-hover:text-slate-900 transition">
          {title}
        </h3>

        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          {description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="
                text-xs px-2 py-1 rounded-full
                bg-slate-100/80 text-slate-700
                border border-slate-200/60
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-5">
          {github && (
            <Link
              href={github}
              target="_blank"
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              GitHub
            </Link>
          )}

          {live && (
            <Link
              href={live}
              target="_blank"
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              Live
            </Link>
          )}

          {behance && (
            <Link
              href={behance}
              target="_blank"
              className="text-sm text-slate-600 hover:text-slate-900 transition"
            >
              Behance
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}