import React from 'react'
const experiences = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "Tech Innovators Inc.",
    description:
      "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
    technologies: ["React", "JavaScript", "Node.js", "Express"],
    current: true,
  },
  {
    period: "2020 — 2022",
    role: "Frontend Engineer",
    company: "Digital Solutions Co.",
    description:
      "Built and maintained multiple React applications for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
    technologies: ["React", "Redux", "Jest", "Cypress"],
    current: false,
  },
  {
    period: "2019 — 2020",
    role: "Junior Developer",
    company: "StartUp Labs",
    description:
      "Contributed to the development of a SaaS platform from MVP to production. Collaborated with designers to implement pixel-perfect UI components.",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    current: false,
  },
  {
    period: "2018 — 2019",
    role: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications, handling everything from design to deployment.",
    technologies: ["JavaScript", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12 md:mb-16">
          <span
            className="text-secondary-foreground text-xs sm:text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold
           mt-2 sm:mt-4 mb-3 sm:mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-sm sm:text-base text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-primary rounded-full -translate-x-1/2 ring-3 sm:ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-6 sm:pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-8 lg:md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-8 lg:md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-4 sm:p-5 md:p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-xs sm:text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-1 sm:mt-2">{exp.role}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-2 sm:mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-2 sm:px-3 py-0.5 sm:py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience