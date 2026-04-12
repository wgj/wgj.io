import Image from "next/image";

const links = [
  {
    label: "Ridgeline Acquisition Partners",
    href: "https://selltoridgeline.com",
  },
  {
    label: "Sherwood Consulting",
    href: "https://www.sherwoodhelps.com/",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wgj/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3ZM8.34 18.25H5.67V9.75h2.67v8.5Zm-1.33-9.7a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1Zm11.24 9.7h-2.67v-4.3c0-1.03-.02-2.35-1.43-2.35-1.43 0-1.65 1.12-1.65 2.27v4.38h-2.67v-8.5h2.56v1.16h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.78 3.2 4.1v4.64Z"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/wgj_io",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M18.9 3H21l-6.6 7.55L22 21h-6.2l-4.1-5.4L6.6 21H3l7-8.06L2 3h6.4l3.7 4.93L18.9 3Zm-2.2 16h1.8L7.4 5h-1.8l11.1 14Z"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/wgj",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.8-.26.8-.58v-2.08c-3.26.72-3.95-1.57-3.95-1.57-.54-1.36-1.32-1.72-1.32-1.72-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.83 2.78 1.3 3.46.99.1-.78.42-1.3.76-1.6-2.6-.3-5.33-1.3-5.33-5.78 0-1.28.46-2.33 1.22-3.15-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.52 3.3-1.2 3.3-1.2.65 1.65.24 2.87.12 3.17.76.82 1.22 1.87 1.22 3.15 0 4.5-2.74 5.48-5.35 5.78.43.38.82 1.1.82 2.22v3.3c0 .32.21.7.8.58A11.5 11.5 0 0 0 12 .5Z"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:weston@wgj.io",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5.33L20 7.2V7H4Zm16 10V9.3l-7.4 4.94a1 1 0 0 1-1.2 0L4 9.3V17h16Z"
        />
      </svg>
    ),
  },
];

const practiceAreas = [
  {
    title: "Build",
    description:
      "New ventures, internal tools, and operating systems that help strong teams move with clarity.",
  },
  {
    title: "Buy",
    description:
      "Durable businesses with room for thoughtful transitions and steady operational improvement.",
  },
  {
    title: "Run",
    description:
      "Execution with an operator's mindset across technology, process, and the people doing the work.",
  },
];

const ventures = links.map((link) => ({
  ...link,
  domain: new URL(link.href).hostname.replace(/^www\./, ""),
}));

export default function Home() {
  return (
    <div className="min-h-screen text-[color:var(--foreground)]">
      <main className="mx-auto max-w-6xl px-5 pb-10 pt-5 sm:px-8 sm:pb-16 sm:pt-8 lg:px-10">
        <header
          data-reveal="1"
          className="flex flex-col items-start gap-4 border-b border-[color:var(--border)] pb-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <Image
              src="/icon.svg"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl"
            />
            <div>
              <p className="text-sm font-medium text-[color:var(--foreground)]">
                wgj.io
              </p>
              <p className="text-sm text-[color:var(--muted)]">
                Weston Johnson
              </p>
            </div>
          </div>
          <a
            href="mailto:weston@wgj.io"
            className="inline-flex w-full items-center justify-center rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)] transition-colors hover:border-slate-900/20 hover:bg-white sm:w-auto"
          >
            weston@wgj.io
          </a>
        </header>

        <div className="grid gap-10 py-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-16 lg:py-12">
          <section data-reveal="2" className="lg:sticky lg:top-8">
            <div className="overflow-hidden rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface-strong)]">
              <Image
                src="/weston-headshot.jpg"
                alt="Weston Johnson"
                width={400}
                height={400}
                sizes="(min-width: 1024px) 36vw, (min-width: 640px) 80vw, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="mt-6 max-w-xl">
              <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl">
                Weston Johnson
              </h1>
              <p className="mt-4 text-xl leading-8 text-[color:var(--foreground)]">
                I build, buy, and run great companies.
              </p>
              <p className="mt-3 max-w-lg text-base leading-7 text-[color:var(--muted)]">
                Operator, technologist, entrepreneur.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noreferrer"}
                  className="group flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-4 text-[color:var(--foreground)] transition-colors hover:border-slate-900/20 hover:bg-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[color:var(--muted)] transition-colors group-hover:text-[color:var(--foreground)]">
                      {social.icon}
                    </span>
                    <span className="text-sm font-medium">{social.label}</span>
                  </span>
                  <span className="text-sm text-[color:var(--muted)] transition-colors group-hover:text-[color:var(--foreground)]">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </section>

          <div className="space-y-6">
            <section
              data-reveal="3"
              className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8"
            >
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                  How I work
                </h2>
                <p className="mt-2 text-base leading-7 text-[color:var(--muted)]">
                  Most of my time falls into three lanes, with technology
                  threaded through all of them.
                </p>
              </div>

              <div className="mt-6 divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
                {practiceAreas.map((area, index) => (
                  <div
                    key={area.title}
                    className="grid gap-4 py-5 sm:grid-cols-[80px_minmax(0,1fr)] sm:gap-6"
                  >
                    <p className="font-mono text-sm text-[color:var(--muted)]">
                      0{index + 1}
                    </p>
                    <div>
                      <h3 className="text-xl font-medium text-[color:var(--foreground)]">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-base leading-7 text-[color:var(--muted)]">
                        {area.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section
              data-reveal="4"
              className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8"
            >
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                  Current work
                </h2>
                <p className="mt-2 text-base leading-7 text-[color:var(--muted)]">
                  A couple of places to start.
                </p>
              </div>

              <div className="mt-6 grid gap-4">
                {ventures.map((venture) => (
                  <a
                    key={venture.label}
                    href={venture.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] px-5 py-5 transition-colors hover:border-slate-900/20 hover:bg-white"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-medium text-[color:var(--foreground)]">
                          {venture.label}
                        </h3>
                        <p className="mt-2 font-mono text-xs tracking-[0.08em] text-[color:var(--muted)]">
                          {venture.domain}
                        </p>
                      </div>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--border)] text-base text-[color:var(--foreground)] transition-colors group-hover:border-slate-900/20">
                        ↗
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section
              data-reveal="5"
              className="rounded-[24px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
                Connect
              </h2>
              <p className="mt-2 max-w-2xl text-base leading-7 text-[color:var(--muted)]">
                Email is the simplest way to reach me. If another channel is
                easier, the rest are above.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="mailto:weston@wgj.io"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-medium text-slate-50 transition-colors hover:bg-slate-800 sm:w-auto"
                >
                  Email Weston
                </a>
                <p className="text-sm leading-6 text-[color:var(--muted)]">
                  weston@wgj.io
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
