import Image from "next/image";

const featuredLinks = [
  {
    label: "Ridgeline Acquisition Partners",
    href: "https://selltoridgeline.com",
  },
  {
    label: "Sherwood Consulting",
    href: "https://www.sherwoodhelps.com/",
  },
  {
    label: "Email Weston",
    href: "mailto:weston@wgj.io",
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
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center px-6 py-12">
        <section className="flex flex-col items-center text-center">
          <Image
            src="/weston-headshot.jpg"
            alt="Weston Johnson"
            width={112}
            height={112}
            className="h-28 w-28 rounded-full border border-[var(--avatar-ring)] object-cover"
            priority
          />
          <div className="mt-5 space-y-2">
            <h1 className="text-[2rem] font-semibold tracking-tight">
              Weston Johnson
            </h1>
            <p className="text-sm font-medium text-[var(--muted)]">@wgj_io</p>
            <p className="mx-auto max-w-sm text-[15px] leading-6 text-[var(--muted)]">
              Building, buying, and running great companies.
            </p>
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-3">
          {featuredLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
              className="flex min-h-[60px] items-center justify-center rounded-[10px] border border-[var(--button-border)] bg-[var(--button)] px-5 text-center text-[15px] font-semibold text-[var(--button-text)] shadow-[0_2px_8px_rgba(36,31,26,0.12)] transition-colors duration-150 hover:bg-[var(--button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--button)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            >
              {link.label}
            </a>
          ))}
        </section>

        <nav
          className="mt-8 flex items-center justify-center gap-3"
          aria-label="Social links"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto") ? undefined : "noreferrer"}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-[var(--outline)] bg-[var(--surface)] text-[var(--foreground)] transition-colors duration-150 hover:border-[var(--foreground)] hover:bg-[var(--surface-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </nav>

        <p className="mt-10 text-center text-sm text-[var(--muted)]">wgj.io</p>
      </main>
    </div>
  );
}
