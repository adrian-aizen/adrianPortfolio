import { useEffect } from "react";
import aboutPic from "../assets/profile.jpeg";
import profileImg from "../assets/formalpic.png";

/* ── tiny hook: intersection-based reveal ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const timeline = [
  {
    year: "2026",
    role: "B.S. Information Technology Undergraduate",
    place: "University of the Cordilleras",
  },
];

/* ── project data ── */
const projects = [
  {
    num: "01",
    title: "Brand Identity System",
    tags: ["Branding", "Design"],
    desc: "Complete visual language crafted for a fintech startup — logotype, color system, and motion guidelines.",
  },
  {
    num: "02",
    title: "E-Commerce Platform",
    tags: ["React", "Node.js"],
    desc: "Full-stack storefront with real-time inventory, Stripe integration, and a headless CMS.",
  },
  {
    num: "03",
    title: "Data Dashboard",
    tags: ["D3.js", "API"],
    desc: "Interactive analytics suite visualising millions of rows via custom SVG charts and WebSocket feeds.",
  },
];

/* ── skills ticker (kept for marquee) ── */
const tickerSkills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "Node.js", "Tailwind CSS",
  "MongoDB", "MySQL", "Git", "Laravel", "PHP",
];

/* ── Grouped tech stack for skills section ── */
const skillGroups = [
  {
    label: "Languages",
    icon: "⌨",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "PHP", "Python", "C#"],
  },
  {
    label: "Frontend",
    icon: "🖼",
    items: ["React", "Vue.js", "React Native", "TailwindCSS", "Vite", "React Router"],
  },
  {
    label: "Backend",
    icon: "⚙",
    items: ["Node.js", "Express.js", "Laravel", "Nginx"],
  },
  {
    label: "Database",
    icon: "🗄",
    items: ["MongoDB", "MySQL", "SQLite", "Firebase"],
  },
  {
    label: "DevOps & Cloud",
    icon: "☁",
    items: ["Git", "GitHub", "GitLab", "Vercel", "Netlify", "Render", "GitHub Actions"],
  },
  {
    label: "Tools & Design",
    icon: "🎨",
    items: ["Figma", "Canva", "Postman", "Notion", "NPM", "Yarn"],
  },
];

export default function Home() {
  useReveal();

  return (
    <main className="bg-[#0e0e0e] text-white overflow-x-hidden">

      {/* ════════════ HERO ════════════ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 pt-24 pb-16"
      >
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#d4af6e]/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#d4af6e]/5 blur-[100px]" />
        </div>

        {/* Decorative vertical line */}
        <div className="hidden lg:block absolute left-[8%] top-1/4 h-48 w-px bg-gradient-to-b from-transparent via-[#d4af6e]/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div className="space-y-8">
            <p className="hero-tag inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#d4af6e]">
              <span className="inline-block w-8 h-px bg-[#d4af6e]" />
              Available for freelance
            </p>

            <h1 className="hero-title font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Aspiring<br />
              <span className="text-outline">Fullstack</span><br />
              Web Developer
            </h1>

            <p className="hero-sub max-w-md text-[#888] text-lg leading-relaxed">
              I build high-performance digital products that sit at the
              intersection of thoughtful engineering and refined design.
            </p>

            <div className="hero-cta flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="px-8 py-3.5 bg-[#d4af6e] text-[#0e0e0e] text-sm tracking-[0.15em] uppercase font-semibold hover:bg-white transition-colors duration-300"
              >
                View Work
              </a>
              <a
                href="#about"
                className="px-8 py-3.5 border border-white/20 text-sm tracking-[0.15em] uppercase text-[#a8a8a8] hover:border-[#d4af6e] hover:text-[#d4af6e] transition-all duration-300"
              >
                About Me
              </a>
            </div>
          </div>

          {/* Right — Profile photo */}
          <div className="hero-photo hidden lg:flex justify-end items-center">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-[#d4af6e]/20" />
              <div className="absolute -inset-6 rounded-full border border-[#d4af6e]/8" />

              {/* Corner accent lines */}
              <div className="absolute -top-8 -right-8 w-16 h-px bg-gradient-to-r from-[#d4af6e]/60 to-transparent" />
              <div className="absolute -top-8 -right-8 h-16 w-px bg-gradient-to-b from-[#d4af6e]/60 to-transparent" />
              <div className="absolute -bottom-8 -left-8 w-16 h-px bg-gradient-to-l from-[#d4af6e]/60 to-transparent" />
              <div className="absolute -bottom-8 -left-8 h-16 w-px bg-gradient-to-t from-[#d4af6e]/60 to-transparent" />

              {/* Photo container */}
              <div className="relative w-96 h-96 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 border-[#d4af6e]/30">
                <img
                  src={profileImg}
                  alt="Adrian"
                  className="w-full h-full object-cover object-top transition-all duration-700 scale-105"
                />
                {/* Subtle gold overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#d4af6e]/15 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#444]">Scroll</span>
          <span className="w-px h-8 bg-gradient-to-b from-[#444] to-transparent" />
        </div>
      </section>

      {/* ════════════ SKILLS TICKER ════════════ */}
      <div className="border-y border-white/5 py-4 overflow-hidden bg-[#0a0a0a]">
        <div className="flex gap-12 animate-ticker whitespace-nowrap">
          {[...tickerSkills, ...tickerSkills].map((s, i) => (
            <span
              key={i}
              className="text-xs tracking-[0.25em] uppercase text-[#444] flex items-center gap-12"
            >
              {s}
              <span className="inline-block w-1.5 h-1.5 bg-[#d4af6e]/50 rounded-full" />
            </span>
          ))}
        </div>
      </div>

      {/* ════════════ ABOUT ME ════════════ */}
      <section id="about" className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-1/3 w-[400px] h-[400px] bg-[#d4af6e]/4 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="reveal mb-20 space-y-3">
            <p className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#d4af6e]">
              <span className="w-8 h-px bg-[#d4af6e]" /> About Me
            </p>
            <h2 className="font-display text-5xl md:text-6xl">
              The Person<br />
              <span className="text-outline">Behind the Code</span>
            </h2>
          </div>

          {/* Bio + Portrait */}
          <div className="reveal grid lg:grid-cols-2 gap-16 mb-24 items-start min-h-[500px]">
            <div className="space-y-5 text-[#777] text-lg leading-relaxed">
              <p>
                I'm a multidisciplinary developer and designer with a passion for
                crafting digital experiences that are both technically robust and
                aesthetically refined.
              </p>
              <p>
                My work lives at the intersection of clean engineering and
                intentional design — I believe the best products are those where
                every detail, visible or hidden, has been carefully considered.
              </p>
              <p>
                When I'm not writing code, you'll find me exploring type design,
                hiking mountain trails, or hunting for the perfect espresso.
              </p>
              <div className="flex gap-4 pt-4 flex-wrap">
                <a
                  href="/resume.pdf"
                  className="inline-flex items-center gap-2 px-7 py-3 border border-[#d4af6e] text-[#d4af6e] text-xs tracking-[0.18em] uppercase hover:bg-[#d4af6e] hover:text-[#0e0e0e] transition-all duration-300"
                >
                  Download CV <span>↓</span>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3 border border-white/10 text-[#666] text-xs tracking-[0.18em] uppercase hover:border-white/30 hover:text-white transition-all duration-300"
                >
                  Let's Talk <span>→</span>
                </a>
              </div>
            </div>

            {/* Portrait with real photo */}
            <div className="relative w-full max-w-xs h-[400px] overflow-hidden lg:ml-auto border border-[#d4af6e]/20">
              <img
                src={aboutPic}
                alt="Adrian"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-end p-6">
                <div className="space-y-1">
                  <p className="font-display text-2xl text-white">Adrian</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#d4af6e]">
                    Developer & Designer
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#d4af6e] via-[#d4af6e]/50 to-transparent" />
            </div>
          </div>

          {/* Timeline */}
          <div className="reveal">
            <p className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#d4af6e] mb-10">
              <span className="w-8 h-px bg-[#d4af6e]" /> Experience
            </p>
            <div>
              {timeline.map((t, i) => (
                <div
                  key={i}
                  className="reveal group border-t border-white/10 py-7 grid grid-cols-[70px_1fr] md:grid-cols-[100px_1fr] gap-8 items-center hover:bg-white/1 transition-colors px-2 -mx-2"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="font-display text-xl text-[#d4af6e]/40 group-hover:text-[#d4af6e]/70 transition-colors duration-300">
                    {t.year}
                  </span>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                    <span className="text-base font-medium tracking-wide group-hover:text-[#d4af6e] transition-colors duration-300">
                      {t.role}
                    </span>
                    <span className="text-xs tracking-[0.18em] uppercase text-[#444]">
                      {t.place}
                    </span>
                  </div>
                </div>
              ))}
              <div className="border-t border-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SKILLS ════════════ */}
      <section id="skills" className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden bg-[#0a0a0a]">
        {/* Background accent */}
        <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4af6e]/3 blur-[140px] rounded-full" />

        <div className="max-w-7xl mx-auto relative">
          {/* Section header */}
          <div className="reveal mb-20 space-y-3">
            <p className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#d4af6e]">
              <span className="w-8 h-px bg-[#d4af6e]" /> Tech Stack
            </p>
            <h2 className="font-display text-5xl md:text-6xl">
              Skills &<br />
              <span className="text-outline">Technologies</span>
            </h2>
            <p className="text-[#555] text-base max-w-md mt-4 leading-relaxed">
              Tools and technologies I've worked with across frontend, backend, and beyond.
            </p>
          </div>

          {/* Skill groups grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillGroups.map((group, gi) => (
              <div
                key={group.label}
                className="reveal group border border-white/8 p-6 hover:border-[#d4af6e]/30 transition-all duration-500 relative overflow-hidden"
                style={{ transitionDelay: `${gi * 80}ms` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4af6e]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Group header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-lg">{group.icon}</span>
                  <span className="text-xs tracking-[0.25em] uppercase text-[#d4af6e] font-medium">
                    {group.label}
                  </span>
                  <div className="flex-1 h-px bg-[#d4af6e]/15" />
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/3 border border-white/8 text-[11px] tracking-[0.15em] uppercase text-[#777] hover:bg-[#d4af6e]/10 hover:border-[#d4af6e]/30 hover:text-[#d4af6e] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stat strip */}
          <div className="reveal mt-16 border-t border-white/8 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "30+", label: "Technologies" },
              { num: "73", label: "Commits Last Year" },
              { num: "2026", label: "Currently Studying" },
              { num: "∞", label: "Curiosity" },
            ].map((stat) => (
              <div key={stat.label} className="text-center space-y-2">
                <p className="font-display text-3xl md:text-4xl text-[#d4af6e]">{stat.num}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-[#444]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WORK ════════════ */}
      <section id="projects" className="py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="reveal flex items-end justify-between mb-20 flex-wrap gap-6">
            <div className="space-y-3">
              <p className="text-xs tracking-[0.3em] uppercase text-[#d4af6e] flex items-center gap-3">
                <span className="w-8 h-px bg-[#d4af6e]" /> Selected Work
              </p>
              <h2 className="font-display text-5xl md:text-6xl">Featured<br />Projects</h2>
            </div>
            <a
              href="#"
              className="text-sm tracking-[0.2em] uppercase text-[#666] hover:text-[#d4af6e] transition-colors flex items-center gap-2"
            >
              All Projects <span>→</span>
            </a>
          </div>

          <div className="space-y-0">
            {projects.map((p, i) => (
              <div
                key={p.num}
                className="reveal group border-t border-white/8 py-10 grid md:grid-cols-[80px_1fr_auto] gap-6 md:gap-12 items-start hover:bg-white/5 transition-colors duration-300 cursor-pointer px-4 -mx-4"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="font-display text-4xl text-[#d4af6e]/30 group-hover:text-[#d4af6e]/70 transition-colors duration-300">
                  {p.num}
                </span>
                <div className="space-y-3">
                  <h3 className="font-display text-2xl md:text-3xl group-hover:text-[#d4af6e] transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed max-w-xl">{p.desc}</p>
                  <div className="flex gap-2 flex-wrap pt-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 border border-white/10 text-[10px] tracking-[0.2em] uppercase text-[#555]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-[#d4af6e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl mt-1 hidden md:block">
                  ↗
                </span>
              </div>
            ))}
            <div className="border-t border-white/8" />
          </div>
        </div>
      </section>

      {/* ════════════ CONTACT CTA ════════════ */}
      <section id="contact" className="py-32 px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#d4af6e]/5 blur-[140px] rounded-full" />
        </div>
        <div className="reveal max-w-4xl mx-auto text-center space-y-8 relative">
          <p className="text-xs tracking-[0.3em] uppercase text-[#d4af6e] flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#d4af6e]" /> Get in touch{" "}
            <span className="w-8 h-px bg-[#d4af6e]" />
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight">
            Let's Build<br />
            <span className="text-outline">Together</span>
          </h2>
          <p className="text-[#666] text-lg max-w-xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's create
            something remarkable together.
          </p>
          <a
            href="mailto:hello@portfolio.com"
            className="inline-block mt-4 px-12 py-4 bg-[#d4af6e] text-[#0e0e0e] text-sm tracking-[0.2em] uppercase font-semibold hover:bg-white transition-colors duration-300"
          >
            Start a Conversation
          </a>
        </div>
      </section>

    </main>
  );
}