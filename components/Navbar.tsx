"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="backdrop-blur bg-white/60 sticky top-0 z-40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="#" className="text-lg font-semibold text-slate-800">
              Shadrach Obaah
            </Link>
            <nav className="hidden md:flex gap-4 text-sm text-slate-600">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <div className="hidden md:flex gap-3">
            <Link href="https://github.com/Shadrach-stack" className="text-sm text-slate-600">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/shadrach-obaah/" className="text-sm text-slate-600">
              LinkedIn
            </Link>
            <Link href="https://www.behance.net/shadrach_obaah" className="text-sm text-slate-600">
              Behance
            </Link>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-slate-700"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        {open && (
          <div className="md:hidden py-2 flex flex-col gap-2">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </div>
    </header>
  )
}
