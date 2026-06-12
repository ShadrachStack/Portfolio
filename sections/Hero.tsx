"use client"

import SectionWrapper from "../components/SectionWrapper"
import Button from "../components/Button"
import Image from "next/image"

export default function Hero() {
  return (
    <SectionWrapper id="hero">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:justify-between">

        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">

          <p className="text-sm text-sky-600 font-medium">
            Hi, I'm
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-slate-900">
            Shadrach Obaah
          </h1>

          <p className="mt-2 text-xl text-slate-700">
            Full Stack Developer
          </p>

          <p className="mt-4 text-slate-600">
            I transform ideas into complete digital products by building
            responsive frontend experiences and reliable backend systems
            that solve real-world problems.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href="#projects">
              <Button>View Projects</Button>
            </a>

            <a href="#contact">
              <Button variant="ghost">
                Contact Me
              </Button>
            </a>
          </div>

        </div>

        {/* Profile Image */}
        <div className="relative">

          {/* Ambient glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/30 to-indigo-400/30 blur-3xl" />

          {/* Glassmorphic image container */}
          <div className="relative overflow-hidden rounded-full border border-white/50 bg-white/60 p-2 shadow-1xl backdrop-blur-xl">
            <Image
              src="/profile.jpg"
              alt="Shadrach Obaah"
              width={280}
              height={280}
              priority
              className="h-56 w-56 rounded-full object-cover md:h-64 md:w-64"
            />
          </div>

        </div>

      </div>
    </SectionWrapper>
  )
}