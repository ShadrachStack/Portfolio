"use client";

import SectionWrapper from "../components/SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="max-w-3xl mx-auto py-20">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-600">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Let’s build something great
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Open to freelance work, collaborations, and product-focused roles.
            If you’re building something interesting, let’s talk.
          </p>
        </div>

        {/* Contact Card */}
        <div className="mt-12 relative group">
          {/* Glow border */}
          <div
            className="
              pointer-events-none absolute inset-0 rounded-3xl
              opacity-0 group-hover:opacity-100
              transition duration-300
              ring-1 ring-sky-400/20
              shadow-[0_0_0_1px_rgba(56,189,248,0.15),0_30px_90px_-35px_rgba(56,189,248,0.35)]
            "
          />

          <div
            className="
              relative rounded-3xl
              border border-white/60
              bg-white/60
              backdrop-blur-xl
              p-8 md:p-10
              shadow-[0_8px_32px_rgba(15,23,42,0.08)]
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_60px_rgba(15,23,42,0.15)]
            "
          >
            {/* Email */}
            <div className="text-center">
              <p className="text-sm text-slate-500">Email me at</p>

              <a
                href="mailto:obaahshadrach416@gmail.com"
                className="
                  mt-2 inline-block
                  text-xl font-medium text-slate-900
                  hover:text-sky-600
                  transition
                "
              >
                obaahshadrach416@gmail.com
              </a>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-slate-200/60" />

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:obaahshadrach416@gmail.com"
                className="
                  px-6 py-3 rounded-xl
                  bg-slate-900 text-white
                  text-sm font-medium
                  hover:bg-slate-800
                  transition
                "
              >
                Send Email
              </a>

              <a
                href="https://github.com/Shadrach-stack"
                target="_blank"
                className="
                  px-6 py-3 rounded-xl
                  border border-slate-300
                  text-sm font-medium text-slate-700
                  hover:bg-slate-50
                  transition
                "
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shadrach-obaah/"
                target="_blank"
                className="
                  px-6 py-3 rounded-xl
                  border border-slate-300
                  text-sm font-medium text-slate-700
                  hover:bg-slate-50
                  transition
                "
              >
                LinkedIn
              </a>
<a
                href="https://www.behance.net/shadrach_obaah"
                target="_blank"
                className="
                  px-6 py-3 rounded-xl
                  border border-slate-300
                  text-sm font-medium text-slate-700
                  hover:bg-slate-50
                  transition
                "
              >
                Behance
              </a>

            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}