import { getPayload } from "payload";
import config from "@payload-config";

import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import SectionFooter from "@/components/SectionFooter";
import SectionImage, { CONTENT_X, IMAGE_GRID } from "@/components/SectionImage";
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

  const stats = arr<{ value: string; label: string }>(hero.stats, d.hero.stats);
  const services = arr<{ no: string; title: string; points: { text: string }[] }>(
    svc.items,
    d.services.items,
  );
  const pillars = arr<{ title: string; body: string }>(
    deepTech.pillars,
    d.deepTech.pillars,
  );
  const whyItems = arr<{ title: string; body: string }>(whyUs.items, d.whyUs.items);
  const ourWorkLinks = arr<{ label: string; href: string }>(
    whyUs.ourWorkLinks,
    d.whyUs.ourWorkLinks,
  );
  const testimonialItems = arr<{ text: string }>(
    testimonials.items,
    d.testimonials.items,
  );

  const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL?.trim();
  const domainsLine = txt(contact.domainsLine, d.contact.domainsLine);

  const ctaHref = txt(hero.primaryCtaHref, d.hero.primaryCtaHref);
  const ctaIsExternal = /^https?:\/\//i.test(ctaHref);

  const aboutImage = mediaUrl(about.image, d.about.image);
  const servicesImage = mediaUrl(svc.image, d.services.image);
  const forSaleImage1 = mediaUrl(testimonials.forSaleImage1, d.testimonials.forSaleImage1);
  const forSaleImage2 = mediaUrl(testimonials.forSaleImage2, d.testimonials.forSaleImage2);

  return (
    <>
      <Navbar />

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-navy">
          <div className="grid-texture absolute inset-0" />

          <div className={`relative mx-auto w-full max-w-7xl ${CONTENT_X} pt-28 pb-8`}>
            <div className="w-full min-w-0">
              <div className={`grid items-center gap-12 py-12 sm:pl-4 lg:gap-10 lg:py-14 ${IMAGE_GRID}`}>
                <div className="min-w-0">
                  <Reveal>
                    <h1 className="max-w-4xl break-words font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                      {txt(hero.titleLead, d.hero.titleLead)}{" "}
                      <span className="text-accent">
                        {txt(hero.titleHighlight, d.hero.titleHighlight)}
                      </span>
                    </h1>
                  </Reveal>
                  <Reveal delay={150}>
                    <a
                      href={ctaHref}
                      {...(ctaIsExternal
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="mt-9 inline-flex items-center gap-2 text-lg font-semibold text-brand-light transition-colors hover:text-white"
                    >
                      {txt(hero.primaryCtaLabel, d.hero.primaryCtaLabel)}
                    </a>
                  </Reveal>

                  <Reveal delay={250}>
                    <div className="mt-16 grid min-w-0 gap-6 sm:grid-cols-3">
                      {stats.map((stat, i) => (
                        <div
                          key={i}
                          className="min-w-0 rounded-2xl border border-white/10 bg-white/5 px-5 py-5 backdrop-blur sm:px-6"
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

                <SectionImage
                  src={mediaUrl(hero.featuredImage, d.hero.featuredImage)}
                  alt="The Hummingbird — Autonomous VTOL UAV prototype by Laminar Aeroworks"
                  priority
                  delay={200}
                  placeholderLabel="Upload Hummingbird image in admin"
                />
              </div>
            </div>

            <SectionFooter domainsLine={domainsLine} />
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="relative isolate overflow-hidden bg-navy text-white"
        >
          <div className="grid-texture absolute inset-0 opacity-60" />
          <div className={`relative mx-auto w-full max-w-7xl ${CONTENT_X} pt-16 pb-24 lg:pt-20 lg:pb-32`}>
            <div className={`grid w-full items-center gap-12 lg:gap-10 ${IMAGE_GRID}`}>
              <Reveal>
                <SectionLabel>{txt(about.label, d.about.label)}</SectionLabel>
                <h2 className="mt-5 break-words font-display text-3xl font-bold sm:text-5xl">
                  {txt(about.heading, d.about.heading)}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/75">
                  {txt(about.body, d.about.body)}
                </p>
                <p className="mt-4 text-lg font-medium leading-relaxed text-brand-light">
                  {txt(about.tagline, d.about.tagline)}
                </p>
              </Reveal>
              <SectionImage
                src={aboutImage}
                alt="About — Laminar Dynamics process cycle"
                delay={150}
                framed={false}
                fixedAspect
                objectFit="contain"
                placeholderLabel="Upload About image in admin"
              />
            </div>

            <SectionFooter domainsLine={domainsLine} className="mt-16 lg:mt-20" />
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="relative isolate overflow-hidden bg-navy text-white"
        >
          <div className="grid-texture absolute inset-0 opacity-60" />
          <div className={`relative mx-auto w-full max-w-7xl ${CONTENT_X} pt-20 pb-16 lg:pt-24 lg:pb-20`}>
            <Reveal>
              <SectionLabel>{txt(svc.label, d.services.label)}</SectionLabel>
              <h2 className="mt-5 break-words font-display text-3xl font-bold sm:text-5xl">
                {txt(svc.heading, d.services.heading)}
              </h2>
            </Reveal>

            <div className={`mt-10 grid items-center gap-8 lg:gap-10 ${IMAGE_GRID}`}>
              <div className="grid gap-4 md:grid-cols-2">
                {services.map((s, i) => (
                  <Reveal
                    key={i}
                    delay={(i % 2) * 100}
                    className="rounded-xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-display text-2xl font-bold text-accent/80">
                        {s.no}
                      </span>
                      <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {(s.points ?? []).map((pt, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-white/75">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                          {pt.text}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </div>

              <SectionImage
                src={servicesImage}
                alt="Full Spectrum — Laminar Dynamics"
                delay={100}
                placeholderLabel="Upload Full Spectrum image in admin"
              />
            </div>

            <SectionFooter domainsLine={domainsLine} />

            <Reveal className="mt-24 max-w-3xl">
              <SectionLabel>{txt(deepTech.label, d.deepTech.label)}</SectionLabel>
              <h2 className="mt-5 break-words font-display text-3xl font-bold sm:text-5xl">
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

            <SectionFooter domainsLine={domainsLine} />
          </div>
        </section>

        {/* WHY US */}
        <section
          id="why-us"
          className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-navy text-white"
        >
          <div className="grid-texture absolute inset-0 opacity-60" />
          <div className={`relative mx-auto w-full max-w-7xl ${CONTENT_X} py-24 lg:py-32`}>
            <Reveal>
              <SectionLabel>{txt(whyUs.label, d.whyUs.label)}</SectionLabel>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyItems.map((item, i) => (
                <Reveal
                  key={i}
                  delay={(i % 3) * 90}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display text-3xl font-bold text-accent/80">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100} className="mt-20">
              <h3 className="break-words font-display text-2xl font-bold text-accent sm:text-4xl">
                {txt(whyUs.ourWorkLabel, d.whyUs.ourWorkLabel)}
              </h3>
              <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-4">
                {ourWorkLinks.map((link, i) => {
                  const isYouTube = /youtube\.com|youtu\.be/i.test(link.href);
                  return (
                    <li key={i}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
                      >
                        {isYouTube && (
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-5 w-5 flex-none fill-current"
                          >
                            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
                          </svg>
                        )}
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <SectionFooter domainsLine={domainsLine} />
          </div>
        </section>

        {/* TESTIMONIALS & FOR SALE */}
        <section
          id="testimonials"
          className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-navy text-white"
        >
          <div className="grid-texture absolute inset-0 opacity-60" />
          <div className={`relative mx-auto w-full max-w-7xl ${CONTENT_X} py-24 lg:py-32`}>
            <Reveal>
              <SectionLabel>
                {txt(testimonials.label, d.testimonials.label)}
              </SectionLabel>
            </Reveal>

            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <Reveal>
                  <h2 className="break-words font-display text-3xl font-bold sm:text-4xl">
                    {txt(testimonials.forSaleLabel, d.testimonials.forSaleLabel)}
                  </h2>
                </Reveal>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <SectionImage
                    src={forSaleImage1}
                    alt="For Sale — Laminar Dynamics"
                    delay={60}
                    className="min-w-0"
                    placeholderLabel="Upload For Sale image 1"
                  />
                  <SectionImage
                    src={forSaleImage2}
                    alt="For Sale — Laminar Dynamics"
                    delay={120}
                    className="min-w-0"
                    placeholderLabel="Upload For Sale image 2"
                  />
                </div>
              </div>

              <div>
                <Reveal delay={80}>
                  <h2 className="break-words font-display text-3xl font-bold sm:text-4xl">
                    {txt(testimonials.heading, d.testimonials.heading)}
                  </h2>
                </Reveal>
                <div className="mt-8 space-y-4">
                  {testimonialItems.map((t, i) => (
                    <Reveal
                      key={i}
                      delay={80 + i * 60}
                      className="rounded-xl border border-white/10 bg-white/5 p-5 italic text-white/80"
                    >
                      &ldquo;{t.text}&rdquo;
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            <SectionFooter domainsLine={domainsLine} />
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-navy text-white"
        >
          <div className="grid-texture absolute inset-0" />
          <div
            className={`relative mx-auto w-full min-w-0 max-w-4xl ${CONTENT_X} py-24 text-center lg:py-32`}
          >
            <Reveal>
              <SectionLabel>{txt(contact.label, d.contact.label)}</SectionLabel>
              <h2 className="mx-auto mt-5 max-w-2xl break-words font-display text-3xl font-bold sm:text-5xl lg:text-6xl">
                {txt(contact.headingLead, d.contact.headingLead)}{" "}
                <span className="text-accent">
                  {txt(contact.headingHighlight, d.contact.headingHighlight)}
                </span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                {txt(contact.description, d.contact.description)}
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-12">
              {contactFormUrl ? (
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={contactFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
                  >
                    Reach Out Directly
                  </a>
                </div>
              ) : null}

              <div
                className={`grid gap-4 text-sm text-white/70 sm:grid-cols-2 ${contactFormUrl ? "mt-8" : "mt-10"}`}
              >
                <div>
                  <p className="font-semibold uppercase tracking-widest text-brand-light">
                    Email
                  </p>
                  <a
                    href={`mailto:${txt(contact.email, d.contact.email)}`}
                    className="mt-1 block text-brand-light hover:text-white"
                  >
                    {txt(contact.email, d.contact.email)}
                  </a>
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
              </div>
            </Reveal>

            <SectionFooter domainsLine={domainsLine} />
          </div>
        </section>
      </main>
    </>
  );
}
