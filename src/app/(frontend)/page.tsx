import Image from "next/image";
import { getPayload } from "payload";
import config from "@payload-config";

import Navbar from "@/components/Navbar";
import ProcessCycle from "@/components/ProcessCycle";
import Reveal from "@/components/Reveal";
import { DEFAULTS } from "@/content/defaults";

export const dynamic = "force-dynamic";

const txt = (v: unknown, fb: string): string =>
  typeof v === "string" && v.trim() ? v : fb;

function arr<T>(v: unknown, fb: T[]): T[] {
  return Array.isArray(v) && v.length ? (v as T[]) : fb;
}

const mediaUrl = (v: unknown, fb: string): string =>
  v && typeof v === "object" && "url" in v && (v as { url?: string }).url
    ? (v as { url: string }).url
    : fb;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
      <span className="text-white/40">/</span>
      {children}
    </span>
  );
}

export default async function Home() {
  const d = DEFAULTS;

  let data: Record<string, unknown> = {};
  try {
    const payload = await getPayload({ config });
    data = (await payload.findGlobal({ slug: "homepage", depth: 1 })) as Record<
      string,
      unknown
    >;
  } catch {
    data = {};
  }

  const hero = (data.hero ?? {}) as Record<string, unknown>;
  const about = (data.about ?? {}) as Record<string, unknown>;
  const svc = (data.services ?? {}) as Record<string, unknown>;
  const deepTech = (data.deepTech ?? {}) as Record<string, unknown>;
  const whyUs = (data.whyUs ?? {}) as Record<string, unknown>;
  const testimonials = (data.testimonials ?? {}) as Record<string, unknown>;
  const contact = (data.contact ?? {}) as Record<string, unknown>;

  const domains = arr<{ label: string }>(hero.domains, d.hero.domains);
  const stats = arr<{ value: string; label: string }>(hero.stats, d.hero.stats);
  const cycleSteps = arr<{ label: string }>(about.cycleSteps, d.about.cycleSteps);
  const services = arr<{ no: string; title: string; points: { text: string }[] }>(
    svc.items,
    d.services.items,
  );
  const pillars = arr<{ title: string; body: string }>(
    deepTech.pillars,
    d.deepTech.pillars,
  );
  const whyItems = arr<{ title: string; body: string }>(whyUs.items, d.whyUs.items);
  const testimonialItems = arr<{ text: string }>(
    testimonials.items,
    d.testimonials.items,
  );
  const forSaleItems = arr<{ title: string; body: string }>(
    testimonials.forSaleItems,
    d.testimonials.forSaleItems,
  );

  const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL?.trim();

  return (
    <>
      <Navbar />

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy">
          <div className="grid-texture absolute inset-0" />

          <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20 lg:px-8">
            <div>
              <div className="grid items-center gap-12 px-6 py-12 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-12 lg:px-10 lg:py-14 xl:grid-cols-[1fr_minmax(0,26rem)]">
                <div className="min-w-0">
                  <Reveal>
                    <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
                      {txt(hero.titleLead, d.hero.titleLead)}{" "}
                      <span className="text-accent">
                        {txt(hero.titleHighlight, d.hero.titleHighlight)}
                      </span>
                    </h1>
                  </Reveal>
                  <Reveal delay={150}>
                    <a
                      href={txt(hero.primaryCtaHref, d.hero.primaryCtaHref)}
                      className="mt-9 inline-flex items-center gap-2 text-lg font-semibold text-brand-light transition-colors hover:text-white"
                    >
                      {txt(hero.primaryCtaLabel, d.hero.primaryCtaLabel)}
                      <span aria-hidden="true">→</span>
                    </a>
                  </Reveal>

                  <Reveal delay={250}>
                    <div className="mt-14 flex flex-wrap items-center gap-x-3 gap-y-3">
                      {domains.map((item, i) => (
                        <span key={`${item.label}-${i}`} className="flex items-center gap-3">
                          {i > 0 && <span className="text-brand-light/50">·</span>}
                          <span className="text-sm font-medium uppercase tracking-widest text-white/70">
                            {item.label}
                          </span>
                        </span>
                      ))}
                    </div>
                  </Reveal>

                  <Reveal delay={350}>
                    <div className="mt-16 grid gap-6 sm:grid-cols-3">
                      {stats.map((stat, i) => (
                        <div
                          key={i}
                          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur"
                        >
                          <p className="font-display text-4xl font-bold text-accent">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-sm font-medium uppercase tracking-wider text-white/60">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Reveal>
                </div>

                <Reveal delay={200} className="min-w-0">
                  <div className="relative">
                    <div className="relative overflow-hidden border border-white/90 bg-white shadow-[0_20px_48px_rgba(0,0,0,0.45)]">
                      <Image
                        src={mediaUrl(hero.featuredImage, d.hero.featuredImage)}
                        alt="The Hummingbird — Autonomous VTOL UAV prototype by Laminar Aeroworks"
                        width={960}
                        height={540}
                        priority
                        sizes="(max-width: 1024px) 90vw, 26rem"
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="relative isolate overflow-hidden bg-navy py-24 text-white lg:py-32"
        >
          <div className="grid-texture absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <SectionLabel>{txt(about.label, d.about.label)}</SectionLabel>
                <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
                  {txt(about.heading, d.about.heading)}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  {txt(about.body, d.about.body)}
                </p>
                <p className="mt-4 text-lg font-medium leading-relaxed text-brand-light">
                  {txt(about.tagline, d.about.tagline)}
                </p>
              </Reveal>
              <Reveal delay={150} className="flex items-center justify-center">
                <ProcessCycle steps={cycleSteps} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="relative isolate overflow-hidden bg-navy py-24 text-white lg:py-32"
        >
          <div className="grid-texture absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-3xl">
              <SectionLabel>{txt(svc.label, d.services.label)}</SectionLabel>
              <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
                {txt(svc.heading, d.services.heading)}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {services.map((s, i) => (
                <Reveal
                  key={i}
                  delay={(i % 2) * 100}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl font-bold text-accent/80">
                      {s.no}
                    </span>
                    <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {(s.points ?? []).map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-white/75">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                        {pt.text}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-24 max-w-3xl">
              <SectionLabel>{txt(deepTech.label, d.deepTech.label)}</SectionLabel>
              <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
                {txt(deepTech.heading, d.deepTech.heading)}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal
                  key={i}
                  delay={(i % 2) * 80}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <h3 className="font-display text-xl font-semibold text-brand-light">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{p.body}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100} className="mt-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="font-display text-xl font-semibold text-white">
                  {txt(deepTech.integrationTitle, d.deepTech.integrationTitle)}
                </h3>
                <p className="mt-3 leading-relaxed text-white/75">
                  {txt(deepTech.integrationBody, d.deepTech.integrationBody)}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY US */}
        <section
          id="why-us"
          className="relative isolate overflow-hidden bg-navy py-24 text-white lg:py-32"
        >
          <div className="grid-texture absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionLabel>{txt(whyUs.label, d.whyUs.label)}</SectionLabel>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyItems.map((item, i) => (
                <Reveal
                  key={i}
                  delay={(i % 3) * 90}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <span className="absolute -right-2 -top-4 font-display text-8xl font-bold text-white/5">
                    {i + 1}
                  </span>
                  <h3 className="relative font-display text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-white/70">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS & FOR SALE */}
        <section
          id="testimonials"
          className="relative isolate overflow-hidden bg-navy py-24 text-white lg:py-32"
        >
          <div className="grid-texture absolute inset-0 opacity-60" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionLabel>
                {txt(testimonials.label, d.testimonials.label)}
              </SectionLabel>
              <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
                {txt(testimonials.heading, d.testimonials.heading)}
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {testimonialItems.map((t, i) => (
                <Reveal
                  key={i}
                  delay={i * 80}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7 italic text-white/80"
                >
                  &ldquo;{t.text}&rdquo;
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-20">
              <h3 className="font-display text-2xl font-semibold text-accent">
                {txt(testimonials.forSaleLabel, d.testimonials.forSaleLabel)}
              </h3>
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {forSaleItems.map((item, i) => (
                <Reveal
                  key={i}
                  delay={i * 80}
                  className="rounded-2xl border border-white/10 bg-white/5 p-7"
                >
                  <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-white/70">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative isolate overflow-hidden bg-navy py-24 text-white lg:py-32"
        >
          <div className="grid-texture absolute inset-0" />
          <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
            <Reveal>
              <SectionLabel>{txt(contact.label, d.contact.label)}</SectionLabel>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
                {txt(contact.headingLead, d.contact.headingLead)}{" "}
                <span className="text-accent">
                  {txt(contact.headingHighlight, d.contact.headingHighlight)}
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white/75">
                {txt(contact.description, d.contact.description)}
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-12">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
                {domains.map((item, i) => (
                  <span key={`contact-${item.label}-${i}`} className="flex items-center gap-3">
                    {i > 0 && <span className="text-brand-light/50">·</span>}
                    <span className="text-sm font-medium uppercase tracking-widest text-white/70">
                      {item.label}
                    </span>
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${txt(contact.email, d.contact.email)}`}
                  className="rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
                >
                  {txt(contact.email, d.contact.email)}
                </a>
                {contactFormUrl ? (
                  <a
                    href={contactFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/25 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Reach Out Directly
                  </a>
                ) : null}
              </div>

              <div className="mt-8 grid gap-4 text-sm text-white/70 sm:grid-cols-3">
                <div>
                  <p className="font-semibold uppercase tracking-widest text-brand-light">
                    Email
                  </p>
                  <p className="mt-1">{txt(contact.email, d.contact.email)}</p>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-widest text-brand-light">
                    Web
                  </p>
                  <a
                    href={txt(contact.webHref, d.contact.webHref)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-brand-light hover:text-white"
                  >
                    {txt(contact.webLabel, d.contact.webLabel)}
                  </a>
                </div>
                <div>
                  <p className="font-semibold uppercase tracking-widest text-brand-light">
                    Domains
                  </p>
                  <p className="mt-1">{txt(contact.domainsLine, d.contact.domainsLine)}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="bg-navy py-10 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row lg:px-8">
          <span className="font-display text-lg font-bold tracking-wide text-white">
            <span className="text-brand-light">LAMINAR</span> DYNAMICS
          </span>
          <p className="text-center text-sm sm:text-right">
            {txt(contact.footerLine, d.contact.footerLine)}
          </p>
        </div>
      </footer>
    </>
  );
}
