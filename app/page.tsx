import Link from "next/link";

// SWAP THIS URL once GiveButter campaign is live
const DONATE_URL = "https://givebutter.com/friends-of-kofa";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* ───────────── NAV ───────────── */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-kofa-green flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor" aria-hidden>
              {/* simplified Africa silhouette */}
              <path d="M14.2 2.8c-.6-.4-1.4-.5-2.1-.3l-3 .9c-.7.2-1.3.7-1.6 1.4L6 8.5c-.3.6-.3 1.4 0 2l1.2 2.4c.2.4.5.7.9.9l1.5.7v3.2c0 .5.2 1 .6 1.4l1.7 1.6c.4.4 1 .6 1.5.5l2.4-.4c.7-.1 1.3-.6 1.6-1.2l1.7-3.6c.2-.5.3-1 .1-1.5l-.6-2c-.1-.4-.4-.8-.7-1l-1.4-1c-.3-.2-.5-.5-.6-.9l-.5-1.8c-.1-.5-.4-.9-.8-1.2l-1-.6z" />
            </svg>
          </div>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-semibold tracking-tight text-kofa-ink">
              Friends of KOFA
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-kofa-stone/60">
              Africa
            </div>
          </div>
        </div>

        <Link
          href={DONATE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-kofa-ink hover:text-kofa-green transition-colors"
        >
          Donate
          <span aria-hidden>→</span>
        </Link>
      </nav>

      {/* ───────────── HERO ───────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 slow-zoom"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=2400&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Warm gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-kofa-warm via-kofa-ink/40 to-kofa-ink/60" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 pb-20 md:pb-32">
          <div className="max-w-5xl">
            <div className="fade-up fade-up-delay-1 inline-flex items-center gap-3 mb-8 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-kofa-gold" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-white/90">
                A 501(c)(3) Public Charity
              </span>
            </div>

            <h1 className="fade-up fade-up-delay-2 font-display font-black text-white leading-[0.95] tracking-tightest text-5xl md:text-7xl lg:text-8xl mb-8">
              For me,
              <br />
              you,
              <br />
              <span className="italic font-normal text-kofa-gold">and us.</span>
            </h1>

            <p className="fade-up fade-up-delay-3 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed font-light">
              Friends of KOFA Africa raises tax-deductible funds in the United States
              to advance community health, maternal care, and clean water across the
              African continent — supporting the work of KOFA Africa.
            </p>

            <div className="fade-up fade-up-delay-3 mt-10 flex flex-wrap gap-4">
              <Link
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-donate inline-flex items-center gap-3 px-8 py-4 text-white font-semibold text-base tracking-tight rounded-sm shadow-2xl"
              >
                Make a Tax-Deductible Gift
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-medium text-base border border-white/40 hover:bg-white/10 transition-colors rounded-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 text-white/60 text-xs uppercase tracking-[0.2em]">
          <span>Scroll</span>
          <span className="w-12 h-px bg-white/40" />
        </div>
      </section>

      {/* ───────────── ABOUT KOFA ───────────── */}
      <section id="about" className="relative px-6 md:px-12 py-24 md:py-40 bg-kofa-warm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.22em] text-kofa-green font-semibold mb-6">
                01 / About KOFA Africa
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] text-kofa-ink tracking-tightest">
                <span className="headline-underline decoration-kofa-ink">
                  Transforming
                  <br />
                  lives since
                  <br />
                  2017.
                </span>
              </h2>
            </div>

            <div className="md:col-span-8 md:pt-2 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-kofa-stone">
                <strong className="text-kofa-ink font-semibold">
                  Kingsley Obi Foundation for All (KOFA) Africa
                </strong>{" "}
                is a non-profit human development organization dedicated to fostering
                community health and ensuring universal access to clean water and
                sanitation across the African continent.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-kofa-stone/85">
                Through community-centric initiatives, KOFA addresses fundamental needs
                and contributes to the well-being of individuals and families. Their
                multifaceted work spans preventive healthcare, maternal and infant care,
                disease prevention, services for internally displaced persons, and the
                facilitation of clean water access and proper sanitation practices —
                building immediate relief and long-term resilience in the communities
                they serve.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-kofa-stone/85">
                Active programs include ending the Hepatitis B and HIV epidemics,
                controlling malnutrition, providing healthcare for internally displaced
                persons, and promoting child health through accessible immunization.
              </p>

              <div className="pt-6">
                <Link
                  href="https://www.kofaafrica.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-kofa-green font-semibold text-base hover:text-kofa-green-deep transition-colors group"
                >
                  Visit kofaafrica.org
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Statistic block */}
          <div className="mt-20 md:mt-28 grid md:grid-cols-12 gap-8 items-end border-t border-kofa-ink/10 pt-16">
            <div className="md:col-span-5">
              <div className="font-display text-7xl md:text-8xl font-black text-kofa-green leading-none tracking-tightest">
                30%
              </div>
              <div className="mt-4 text-sm uppercase tracking-[0.18em] text-kofa-stone/70 font-semibold">
                of global maternal deaths
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="text-xl md:text-2xl font-display leading-snug text-kofa-ink">
                Nigeria represents <em>2.5%</em> of the world's population — but accounts
                for <em>30%</em> of global maternal deaths. KOFA's work meets that crisis
                where it is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── FRIENDS OF EXPLAINER ───────────── */}
      <section className="relative px-6 md:px-12 py-24 md:py-40 bg-kofa-ink text-white overflow-hidden">
        {/* Subtle texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16">
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.22em] text-kofa-gold font-semibold mb-6">
                02 / Who We Are
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl leading-[1.05] tracking-tightest">
                <span className="headline-underline decoration-kofa-gold">
                  An American
                  <br />
                  bridge to
                  <br />
                  African impact.
                </span>
              </h2>
            </div>

            <div className="md:col-span-8 md:pt-2 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-white/90">
                Friends of KOFA, Africa is a United States–based <strong>501(c)(3)
                public charity</strong> organized to raise tax-deductible funds in
                support of KOFA Africa and similar charitable organizations advancing
                community health, maternal and infant care, and universal access to
                clean water and sanitation across the African continent.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/75">
                We exist because American donors who care about KOFA's mission deserve
                a tax-advantaged, U.S.-compliant path to support that work. Every gift
                you make through Friends of KOFA, Africa is fully tax-deductible to the
                extent allowed by law.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/75">
                In keeping with IRS requirements for the deductibility of contributions,
                Friends of KOFA, Africa exercises full discretion and control over the
                use and distribution of all funds raised. We evaluate, approve, and
                monitor each grant we make to ensure it advances our charitable
                mission.
              </p>

              {/* Trust strip */}
              <div className="mt-10 grid sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
                <div className="bg-kofa-ink p-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-kofa-gold font-semibold mb-2">
                    Tax Status
                  </div>
                  <div className="font-display text-lg font-semibold">
                    501(c)(3) <span className="text-white/50 text-sm font-normal">pending</span>
                  </div>
                </div>
                <div className="bg-kofa-ink p-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-kofa-gold font-semibold mb-2">
                    Incorporated
                  </div>
                  <div className="font-display text-lg font-semibold">
                    North Carolina
                  </div>
                </div>
                <div className="bg-kofa-ink p-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-kofa-gold font-semibold mb-2">
                    Supports
                  </div>
                  <div className="font-display text-lg font-semibold">
                    KOFA Africa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── DONATE CTA ───────────── */}
      <section id="donate" className="relative px-6 md:px-12 py-24 md:py-40 bg-kofa-warm">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-kofa-green font-semibold mb-8">
            03 / Give
          </div>

          <h2 className="font-display font-black text-5xl md:text-7xl leading-[0.95] tracking-tightest text-kofa-ink mb-8">
            Your gift becomes
            <br />
            <span className="italic font-normal">a clinic visit, a clean</span>
            <br />
            <span className="headline-underline decoration-kofa-green">
              well, a vaccinated child.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-kofa-stone/80 leading-relaxed mb-12">
            Every contribution to Friends of KOFA, Africa directly funds KOFA's work
            on the ground — and is tax-deductible to the fullest extent allowed by
            United States law.
          </p>

          <Link
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-donate inline-flex items-center gap-3 px-10 py-5 text-white font-semibold text-lg tracking-tight rounded-sm shadow-2xl"
          >
            Donate Now
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>

          <p className="mt-8 text-sm text-kofa-stone/60 max-w-md mx-auto leading-relaxed">
            Friends of KOFA, Africa is a 501(c)(3) tax-exempt organization
            <span className="italic"> (status pending)</span>. EIN forthcoming. Donations
            are processed securely through GiveButter.
          </p>
        </div>
      </section>

      {/* ───────────── FOOTER ───────────── */}
      <footer className="px-6 md:px-12 py-16 bg-kofa-mist border-t border-kofa-ink/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-kofa-green flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="currentColor" aria-hidden>
                    <path d="M14.2 2.8c-.6-.4-1.4-.5-2.1-.3l-3 .9c-.7.2-1.3.7-1.6 1.4L6 8.5c-.3.6-.3 1.4 0 2l1.2 2.4c.2.4.5.7.9.9l1.5.7v3.2c0 .5.2 1 .6 1.4l1.7 1.6c.4.4 1 .6 1.5.5l2.4-.4c.7-.1 1.3-.6 1.6-1.2l1.7-3.6c.2-.5.3-1 .1-1.5l-.6-2c-.1-.4-.4-.8-.7-1l-1.4-1c-.3-.2-.5-.5-.6-.9l-.5-1.8c-.1-.5-.4-.9-.8-1.2l-1-.6z" />
                  </svg>
                </div>
                <div className="font-display font-semibold text-kofa-ink">
                  Friends of KOFA, Africa
                </div>
              </div>
              <p className="text-sm text-kofa-stone/70 leading-relaxed max-w-sm">
                A U.S.-based 501(c)(3) public charity supporting KOFA Africa's work in
                community health, maternal care, and clean water across the African
                continent.
              </p>
            </div>

            <div className="md:col-span-3">
              <div className="text-[11px] uppercase tracking-[0.2em] text-kofa-stone/60 font-semibold mb-4">
                Connect
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="https://www.kofaafrica.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kofa-stone hover:text-kofa-green transition-colors"
                  >
                    kofaafrica.org →
                  </Link>
                </li>
                <li>
                  <Link
                    href={DONATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kofa-stone hover:text-kofa-green transition-colors"
                  >
                    Donate via GiveButter →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-kofa-stone/60 font-semibold mb-4">
                Legal
              </div>
              <p className="text-xs text-kofa-stone/70 leading-relaxed">
                Friends of KOFA, Africa is incorporated in North Carolina as a nonprofit
                corporation. Application for federal tax-exempt status under Section
                501(c)(3) of the Internal Revenue Code is in process. EIN and
                determination letter forthcoming.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-kofa-ink/10 flex flex-wrap items-center justify-between gap-4 text-xs text-kofa-stone/50">
            <div>© {new Date().getFullYear()} Friends of KOFA, Africa. All rights reserved.</div>
            <div className="italic font-display">For me, you, and us.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
