import { GraduationCap, BookOpen, Users, Calendar, ExternalLink } from 'lucide-react';

const programs = [
  {
    title: 'Computer Science & AI',
    desc: 'Modern CS fundamentals, machine learning, and data-intensive systems with hands-on labs.',
    icon: GraduationCap,
  },
  {
    title: 'Design & New Media',
    desc: 'Visual design, motion graphics, and interactive experiences using the latest tools.',
    icon: BookOpen,
  },
  {
    title: 'Business & Innovation',
    desc: 'Entrepreneurship, product strategy, and growth with industry mentorship.',
    icon: Users,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Signature Programs</h2>
          <p className="mt-3 text-white/70">
            Explore future-forward curricula designed with industry experts. Learn by building real projects and collaborating across disciplines.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <article key={p.title} className="group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 transition pointer-events-none" />
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/15 text-cyan-300">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
                <a href="#admissions" className="mt-4 inline-flex items-center text-cyan-300 hover:text-cyan-200 text-sm font-medium">
                  Learn more
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div id="admissions" className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-500/15 text-emerald-300">
              <Calendar className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Admissions & Scholarships</h3>
              <p className="mt-2 text-white/70 text-sm">
                Applications are open for Fall 2025. Early applicants receive priority scholarship consideration and access to pre-semester bootcamps.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <a href="#contact" className="inline-flex flex-1 md:flex-none items-center justify-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-3 transition">
                Apply Today
              </a>
              <a href="#contact" className="inline-flex flex-1 md:flex-none items-center justify-center rounded-md border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3">
                Talk to Advisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
