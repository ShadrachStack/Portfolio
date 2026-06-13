import SectionWrapper from "../components/SectionWrapper"

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-900">About</h2>
        <p className="mt-4 text-slate-600">I am a Full Stack Developer passionate about building clean, 
          functional, and user-focused web applications. I enjoy transforming ideas into digital experiences
          by combining intuitive front-end design with reliable back-end solutions. My experience spans
          technologies such as React, Next.js, TypeScript CSS, Supabase, and modern development tools that
          enable me to create scalable and maintainable applications. I pay close attention to both the visual
           details users interact with and the underlying systems that power those experiences.
           Beyond writing code, I am committed to continuous learning and improving my craft. I approach every
           project with curiosity, problem-solving, and a desire to build solutions that create real value.
           Whether working independently or collaborating with others, I strive to deliver products that are efficient,
           accessible, and thoughtfully designed.
           I believe great software is not only about how it works, but also about how it makes people feel while 
           using it.</p>
      </div>
    </SectionWrapper>
  )
}
