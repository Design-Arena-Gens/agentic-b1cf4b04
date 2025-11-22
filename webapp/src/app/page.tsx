export default function Home() {
  const capabilities = [
    {
      title: "Launch polished web products",
      description:
        "Design and build responsive experiences end-to-end with Next.js, React Server Components, Tailwind CSS, and frictionless Vercel deploys.",
      tags: ["UX polish", "Accessibility", "SEO aware"],
    },
    {
      title: "Automate complex workflows",
      description:
        "Wire up APIs, orchestrate background jobs, and codify business logic with resilient error handling and observability hooks.",
      tags: ["REST & GraphQL", "Background jobs", "Monitoring"],
    },
    {
      title: "Own the full stack",
      description:
        "Model reliable databases, implement secure auth, integrate payments, and expose clean APIs with thorough tests.",
      tags: ["Postgres", "Auth & RLS", "Testing"],
    },
    {
      title: "Ship continuously",
      description:
        "Set up CI pipelines, guard quality with linting and typed checks, and document the system so teams can iterate quickly.",
      tags: ["CI/CD", "Tooling", "Docs"],
    },
  ];

  const playbook = [
    {
      phase: "Explore",
      focus:
        "Clarify goals, audit constraints, and map the fastest path from idea to live product using pragmatic architecture.",
    },
    {
      phase: "Build",
      focus:
        "Develop incremental slices that de-risk complexity early, keep scope visible, and deliver working software continuously.",
    },
    {
      phase: "Stabilize",
      focus:
        "Add guardrails: tests, observability, performance tuning, and polish that make a launch feel effortless.",
    },
    {
      phase: "Scale",
      focus:
        "Improve reliability, automate deployments, and coach teams so the solution can grow without friction.",
    },
  ];

  const toolbelt = [
    "Next.js 14 & App Router",
    "TypeScript everywhere",
    "Tailwind & CSS-in-JS",
    "Supabase & PostgreSQL",
    "Prisma & Edge Functions",
    "Stripe, OpenAI, Resend",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.27)_0%,_rgba(15,23,42,0)_45%)]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.18)_0%,_rgba(15,23,42,0)_70%)] lg:block"></div>
      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-32 pt-20 sm:px-10 lg:px-16">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200 backdrop-blur">
              Agentic developer
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-cyan-300"></span>
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              I turn open-ended ideas into production-ready web experiences,
              from pixels to deployment.
            </h1>
            <p className="max-w-2xl text-pretty text-lg leading-8 text-zinc-300 sm:text-xl">
              Tell me the outcome you want. I will scope it, build it,
              integrate the right APIs, harden it with tests, and ship it to
              Vercel on your behalf.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-zinc-300">
              {toolbelt.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.7)]"></span>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(14,116,144,0.25)] backdrop-blur">
            <div className="space-y-6 text-sm text-zinc-200">
              <header className="flex items-center justify-between">
                <span className="font-medium text-white">Latest win</span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                  Delivered
                </span>
              </header>
              <p className="text-pretty text-base leading-7 text-zinc-300">
                Built a fully responsive SaaS dashboard with live analytics,
                billing integration, and realtime collaboration in under 48
                hours—starting from a single paragraph prompt.
              </p>
              <div className="space-y-2 rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                  Techniques applied
                </p>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                    Component-driven design system with auto-dark mode theming
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                    Multi-tenant Postgres schema with row-level security
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                    Observability hooks for latency and error budgets
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                What I build for you
              </h2>
              <p className="mt-3 max-w-2xl text-pretty text-base text-zinc-300 sm:text-lg">
                Each capability combines strong product instincts with trusted
                engineering practices so the outcome hits both design and
                delivery goals.
              </p>
            </div>
            <p className="text-sm text-zinc-400">
              Hover any card to see the focus areas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_30px_90px_rgba(34,211,238,0.23)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.25)_0%,_rgba(14,116,144,0)_65%)]"></div>
                </div>
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {capability.title}
                  </h3>
                  <p className="text-pretty text-base leading-7 text-zinc-300">
                    {capability.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-[13px] text-zinc-300">
                    {capability.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-black/40 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Blueprint for delivery
            </h2>
            <p className="text-pretty text-base text-zinc-300 sm:text-lg">
              A lightweight but disciplined playbook keeps momentum without
              surprises. You always have visibility into progress, decisions,
              and trade-offs.
            </p>
            <div className="space-y-6">
              {playbook.map((item, index) => (
                <div
                  key={item.phase}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-5 pl-14"
                >
                  <span className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/30 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {item.phase}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-300">
                    {item.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-black/50 via-zinc-900/50 to-cyan-900/30 p-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">
                Signals I optimize
              </h3>
              <ul className="space-y-2 text-sm text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400"></span>
                  <div>
                    <p className="font-medium text-white">
                      Time-to-first-usable
                    </p>
                    <p className="text-zinc-400">
                      Deliver value fast with vertical slices so stakeholders
                      can give real feedback.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400"></span>
                  <div>
                    <p className="font-medium text-white">Quality guardrails</p>
                    <p className="text-zinc-400">
                      Strong typing, linting, testing, and observability keep
                      the codebase calm under change.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400"></span>
                  <div>
                    <p className="font-medium text-white">
                      Maintainable handoff
                    </p>
                    <p className="text-zinc-400">
                      Clear documentation, scripts, and stewardship notes make
                      it easy for teams to extend the system.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                Ready to collaborate?
              </p>
              <p className="mt-3 text-pretty text-base text-zinc-200">
                Drop a product brief or even just an outcome. I will design,
                build, test, and deploy the solution—keeping you updated at
                every milestone.
              </p>
              <a
                href="mailto:agentic@builder.codes?subject=Let's%20build%20something"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/50 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:text-white"
              >
                Start a project
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
