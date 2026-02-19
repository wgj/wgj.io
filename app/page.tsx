import Image from "next/image";

const links = [
  {
    label: "Ridgeline Acquisition Partners",
    href: "https://selltoridgeline.com",
  },
  {
    label: "Sherwood Consulting",
    href: "#",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/westonjohnson",
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
    href: "https://x.com/westonjohnson",
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

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_45%),radial-gradient(circle_at_20%_60%,_rgba(129,140,248,0.12),_transparent_50%),radial-gradient(circle_at_80%_60%,_rgba(244,114,182,0.1),_transparent_40%)]" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 py-20">
        <section className="w-full rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)] backdrop-blur">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400/40 via-indigo-400/40 to-pink-400/40 blur-lg" />
              <Image
                src="/weston-headshot.jpg"
                alt="Weston Johnson"
                width={160}
                height={160}
                className="relative h-32 w-32 rounded-full border border-white/20 object-cover shadow-xl sm:h-36 sm:w-36"
                priority
              />
            </div>
            <div className="mt-6 space-y-3">
              <p className="text-sm uppercase tracking-[0.32em] text-slate-400">
                wgj.io
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Weston Johnson
              </h1>
              <p className="text-base text-slate-300 sm:text-lg">
                Building, buying, and running great companies.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noreferrer"}
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                <span className="text-slate-300 transition group-hover:text-white">
                  {social.icon}
                </span>
                <span className="font-medium">{social.label}</span>
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 via-white/10 to-white/5 px-6 py-4 text-left text-base font-medium text-white transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
              >
                <span>{link.label}</span>
                <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Operator
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Technologist
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Entrepreneur
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
