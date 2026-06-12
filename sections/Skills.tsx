import SectionWrapper from "../components/SectionWrapper"

const skillCategories = [
  {
    title: "Frontend",
    description: "Crafting intuitive and responsive user experiences.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Accessibility (WCAG)",
    ],
  },
  {
    title: "Backend",
    description: "Building reliable systems and scalable data flows.",
    skills: [
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Authentication & Authorization",
      "Database Design",
    ],
  },
  {
    title: "Product & Collaboration",
    description: "Bridging design and development to deliver polished digital products.",
    skills: [
      "Figma",
      "Git/GitHub",
    ],
  },
]

export default function Skills() {
  return (
  <SectionWrapper id="skills">
    <div>

      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold text-slate-900">
          Building products with modern technologies
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          From crafting intuitive interfaces to developing reliable backend systems,
          these are the tools I use to bring ideas to life.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

        {skillCategories.map((category) => (
          
          <div
  key={category.title}
  className="
    group relative rounded-3xl
    border border-white/60
    bg-white/50
    p-8
    shadow-[0_8px_32px_rgba(15,23,42,0.08)]
    backdrop-blur-xl
    transition-all duration-300 ease-out
    hover:-translate-y-2
    hover:shadow-[0_20px_60px_rgba(15,23,42,0.15)]
  "
>
  {/* Glow layer (same idea as Projects) */}
  <div
  className="
    pointer-events-none absolute inset-0 rounded-3xl
    opacity-0 group-hover:opacity-100
    transition duration-300
    ring-1 ring-sky-400/20
    shadow-[0_0_0_1px_rgba(56,189,248,0.15),0_25px_80px_-30px_rgba(56,189,248,0.35)]
  "
/>

  {/* Content wrapper */}
  <div className="relative">
    <h3 className="text-lg font-semibold text-slate-900">
      {category.title}
    </h3>

    <p className="mt-2 text-sm text-slate-500">
      {category.description}
    </p>

    <div className="mt-6 flex flex-wrap gap-3">
      {category.skills.map((skill) => (
        <span
          key={skill}
          className="
            rounded-full
            border border-white/50
            bg-white/70
            px-4 py-2
            text-sm font-medium
            text-slate-700
            backdrop-blur-md
            transition-all duration-300
            hover:bg-sky-50 hover:text-sky-700
          "
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</div> 
        ))}

      </div>

    </div>
  </SectionWrapper>
  )
}