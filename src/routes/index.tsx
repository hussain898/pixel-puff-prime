import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import logoAsset from "@/assets/feather-logo.png.asset.json";

function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="$FEATHER logo"
      className={className}
      draggable={false}
    />
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "$FEATHER — Take from the Rich. Give to the Poor." },
      {
        name: "description",
        content:
          "$FEATHER — the outlaw of Robinhood Chain. Take from the rich, give to the poor. The people's coin.",
      },
      { property: "og:title", content: "$FEATHER — The People's Coin" },
      {
        property: "og:description",
        content:
          "One feather won't change the world. Millions of feathers might, one feather at a time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CA = "0x72081aDC58bdb794b989d424a65948c16848600d";
const DEX_URL =
  "https://dexscreener.com/robinhood/0x72d74dad7135d5e183a3d3fbe1e8358bbc143a9b";

function FeatherSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 230"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="fg" x1="0" y1="0" x2=".4" y2="1">
          <stop offset="0" stopColor="#8CFF7A" />
          <stop offset=".45" stopColor="#00C805" />
          <stop offset="1" stopColor="#007a09" />
        </linearGradient>
      </defs>
      <path
        fill="url(#fg)"
        d="M60 6 C44 40 30 78 30 122 c0 30 8 56 22 82 l8 14 8-14 c14-26 22-52 22-82 0-44-14-82-30-116z"
      />
      <g stroke="#054d13" strokeWidth="2.4" strokeLinecap="round" opacity=".55">
        <line x1="60" y1="40" x2="78" y2="34" />
        <line x1="60" y1="60" x2="82" y2="56" />
        <line x1="60" y1="80" x2="85" y2="78" />
        <line x1="60" y1="100" x2="86" y2="100" />
        <line x1="60" y1="120" x2="85" y2="123" />
        <line x1="60" y1="140" x2="82" y2="146" />
        <line x1="60" y1="160" x2="77" y2="168" />
        <line x1="60" y1="180" x2="71" y2="190" />
        <line x1="60" y1="40" x2="42" y2="34" />
        <line x1="60" y1="60" x2="38" y2="56" />
        <line x1="60" y1="80" x2="35" y2="78" />
        <line x1="60" y1="100" x2="34" y2="100" />
        <line x1="60" y1="120" x2="35" y2="123" />
        <line x1="60" y1="140" x2="38" y2="146" />
        <line x1="60" y1="160" x2="43" y2="168" />
        <line x1="60" y1="180" x2="49" y2="190" />
      </g>
      <rect x="58.4" y="26" width="3.2" height="196" rx="1.6" fill="#eafff0" opacity=".85" />
    </svg>
  );
}

function FallingFeathers() {
  const feathers = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        left: Math.random() * 100,
        size: 14 + Math.random() * 26,
        duration: 12 + Math.random() * 14,
        delay: Math.random() * 12,
        rotate: Math.random() * 60 - 30,
        key: i,
      })),
    [],
  );
  return (
    <div className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden">
      {feathers.map((f) => (
        <div
          key={f.key}
          className="animate-fall absolute -top-10 opacity-70"
          style={{
            left: `${f.left}%`,
            width: `${f.size}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `-${f.delay}s`,
            transform: `rotate(${f.rotate}deg)`,
            filter: "drop-shadow(0 0 7px rgba(0,200,5,.55))",
          }}
        >
          <FeatherSVG className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}

function Nav() {
  const links = [
    { href: "#legend", label: "The Legend" },
    { href: "#meaning", label: "Why a Feather" },
    { href: "#tokenomics", label: "Tokenomics" },
    { href: "#buy", label: "How to Buy" },
    { href: "#community", label: "Community" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-4 backdrop-blur-md bg-gradient-to-b from-[rgba(3,12,7,0.9)] to-transparent">
      <a href="#top" className="flex items-center gap-3 font-display font-black tracking-widest text-lg">
        <Logo className="h-8 w-auto drop-shadow-[0_0_10px_rgba(0,200,5,0.7)]" />
        <span>
          $<span className="text-rh-green [text-shadow:0_0_18px_rgba(0,200,5,0.7)]">FEATHER</span>
        </span>
      </a>
      <div className="hidden md:flex items-center gap-7">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-green hover:text-rh-green transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="#buy"
        className="inline-flex items-center gap-2 rounded-full bg-rh-green px-5 py-2.5 text-sm font-bold text-[#03120a] shadow-[0_0_0_rgba(0,200,5,0.6)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,200,5,0.45)] transition"
      >
        Buy $FEATHER
      </a>
    </nav>
  );
}

function Index() {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  const copyCA = () => {
    navigator.clipboard?.writeText(CA);
    setCopied(true);
  };

  const steps = [
    {
      n: 1,
      title: "Get the Wallet",
      body: "Download the Uniswap Wallet app.",
    },
    {
      n: 2,
      title: "Create It",
      body: "Set up your wallet in a minute. Back up your recovery phrase offline and never share it.",
    },
    {
      n: 3,
      title: "Buy ETH",
      body: "Inside the wallet, buy ETH with a debit or credit card through Robinhood Connect or via Moon Pay.",
    },
    {
      n: 4,
      title: "Move to Robinhood Chain",
      body: "Swap your ETH onto Robinhood Chain in one tap. Still in the app, no bridge site.",
    },
    {
      n: 5,
      title: "Swap for $FEATHER",
      body: "Paste the contract below, confirm the swap, and you're holding $FEATHER. Welcome to the band.",
    },
  ];

  const meanings = [
    {
      title: "Accessibility",
      cap: "For everyone, not the whales",
      body: "Opportunity should not be gated. $FEATHER is open to everyone. One wallet, you're in.",
    },
    {
      title: "Freedom",
      cap: "Light, fast, no barriers",
      body: "A feather weighs nothing. No suits, no gatekeepers, no permission needed to ride.",
    },
    {
      title: "The Quill",
      cap: "Write your own future",
      body: "The feather is a quill. You're not reading the story of finance anymore. You're writing it.",
    },
    {
      title: "The Arrow ↑",
      cap: "The hidden line goes up",
      body: "Look again. The feather is an arrow pointing up. Always was. Only direction we know.",
    },
  ];

  const marqueeItems = [
    "TAKE FROM THE RICH",
    "◆",
    "GIVE TO THE POOR",
    "◆",
    "$FEATHER",
    "◆",
    "ONE FEATHER AT A TIME",
    "◆",
  ];

  return (
    <div id="top" className="relative min-h-screen">
      {/* ambient backgrounds */}
      <div className="fixed inset-0 -z-[2] bg-hero-radial" />
      <div className="fixed inset-0 -z-[1] bg-grid-glow opacity-[0.14] pointer-events-none" />
      <FallingFeathers />

      <Nav />

      {/* HERO */}
      <header className="relative flex min-h-screen flex-col items-center justify-center px-[6vw] pt-32 pb-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rh-green/40 bg-rh-green/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-rh-green">
          <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-rh-green shadow-[0_0_10px_var(--rh-green)]" />
          Live on Robinhood Chain
        </div>

        <Logo className="animate-float mx-auto w-[min(230px,42vw)] drop-shadow-[0_12px_40px_rgba(0,200,5,0.5)]" />

        <h1 className="mt-2 font-display font-black leading-[0.98] tracking-wide text-[clamp(2.6rem,8vw,6.2rem)]">
          THE PEOPLE'S
          <br />
          <span className="text-gradient-gold-green">COIN</span>
        </h1>

        <p className="mt-4 max-w-2xl text-[clamp(1rem,2.4vw,1.4rem)] font-medium text-paper/85">
          One feather won't change the world. Millions of feathers might, one feather at a time.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-green">
          $FEATHER · The legend rides again
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#buy"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-bright to-gold px-6 py-3 font-bold text-[#241a00] shadow-[0_10px_30px_rgba(232,185,35,0.35)] hover:-translate-y-0.5 transition"
          >
            🪶 Buy $FEATHER
          </a>
          <a
            href={DEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-rh-green bg-transparent px-6 py-3 font-bold text-rh-green hover:bg-rh-green/10 transition"
          >
            📈 View Chart
          </a>
        </div>

        <div className="mt-8 inline-flex max-w-[92vw] items-center gap-3 rounded-xl border border-dashed border-rh-green/45 bg-black/40 px-4 py-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-rh-green">CA</span>
          <code className="max-w-[46vw] overflow-hidden text-ellipsis whitespace-nowrap text-[13.5px] text-paper/90">
            {CA}
          </code>
          <button
            onClick={copyCA}
            className="rounded-md bg-rh-green px-3 py-1.5 text-xs font-bold text-[#03120a] hover:brightness-110"
          >
            {copied ? "COPIED" : "COPY"}
          </button>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="overflow-hidden whitespace-nowrap border-y border-rh-green/25 bg-rh-green/[0.05]">
        <div className="animate-marquee inline-block py-3.5 font-display text-[15px] font-extrabold tracking-[0.2em] text-rh-green">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((s, i) => (
            <span key={i} className={`mx-6 ${s === "◆" ? "text-gold" : "opacity-90"}`}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* LEGEND */}
      <section id="legend" className="mx-auto max-w-[1200px] px-[6vw] py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.25em] text-rh-green">
              The Thesis
            </div>
            <h2 className="mb-6 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05]">
              A symbol worth
              <br />
              <span className="text-rh-green">rallying around.</span>
            </h2>
            <p className="mb-4 text-[1.05rem] text-[#c4ddc8]">
              Robinhood created a new blockchain. We believe its feather has the potential to become
              one of the defining cultural symbols of the Robinhood ecosystem.
            </p>
            <p className="mb-4 text-[1.05rem] text-[#c4ddc8]">
              As an independent community, we chose to rally around the feather itself, a timeless
              symbol that inspires creativity, participation, and opportunity.
            </p>
            <p className="mb-6 font-display font-semibold text-gold-bright">
              Through memes, art, community participation, and internet culture, $FEATHER exists to
              celebrate that idea.
            </p>
            <a
              href="#plant"
              className="inline-flex items-center gap-2 rounded-full bg-rh-green px-5 py-3 font-bold text-[#03120a] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,200,5,0.45)] transition"
            >
              Plant a Feather
            </a>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-radial from-gold/20 via-transparent to-transparent blur-3xl" />
            <Logo className="animate-float w-[min(340px,70vw)] drop-shadow-[0_10px_40px_rgba(232,185,35,0.35)]" />
          </div>
        </div>
      </section>

      {/* PLANT */}
      <section id="plant" className="mx-auto max-w-[1000px] px-[6vw] py-24 text-center">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.25em] text-rh-green">
          Plant a Feather
        </div>
        <h2 className="mb-8 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05]">
          Plant a feather.
        </h2>
        <div className="mx-auto max-w-[720px] space-y-5 text-[clamp(1.05rem,2vw,1.2rem)] text-[#cfe7d2] opacity-90">
          <p>
            Planting a feather means publicly showing support for the idea that financial
            opportunity should be more accessible to everyone. Every feather planted represents one
            more person choosing to stand beside the community.
          </p>
          <p>
            You do not need to own or purchase $FEATHER to be part of the community. Everyone is
            welcome to participate through memes, creativity, discussion, and community engagement.
          </p>
          <p>
            The Feather community is a group of people who believe symbols can unite strangers.
            Whether someone owns one token or simply enjoys the movement, everyone is welcome.
          </p>
        </div>
      </section>

      {/* MEANING */}
      <section id="meaning" className="mx-auto max-w-[1200px] px-[6vw] py-24 text-center">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.25em] text-rh-green">
          Why a Feather
        </div>
        <h2 className="mb-6 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05]">
          One feather. Four meanings.
        </h2>
        <p className="mx-auto max-w-[720px] text-[clamp(1.05rem,2vw,1.2rem)] text-[#cfe7d2] opacity-90">
          The feather represents the belief that opportunity should be accessible to everyone. It is
          a symbol of freedom, participation, creativity, and community. While inspired by the
          broader idea of accessible finance, the community is independent and not affiliated with
          Robinhood.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {meanings.map((m) => (
            <div
              key={m.title}
              className="group relative overflow-hidden rounded-2xl border border-rh-green/25 bg-gradient-to-b from-rh-green/[0.08] to-black/25 p-6 text-left transition hover:-translate-y-1.5 hover:border-rh-green hover:shadow-[0_16px_40px_rgba(0,200,5,0.18)]"
            >
              <div className="font-display text-[1.6rem] font-black text-gold-bright">{m.title}</div>
              <div className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-green">
                {m.cap}
              </div>
              <p className="mt-3 text-[0.95rem] text-[#bcd8c1]">{m.body}</p>
              <div className="absolute -right-8 -bottom-8 opacity-10 transition group-hover:opacity-20">
                <FeatherSVG className="w-32" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOKENOMICS */}
      <section id="tokenomics" className="mx-auto max-w-[1200px] px-[6vw] py-24 text-center">
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.25em] text-rh-green">
          Tokenomics
        </div>
        <h2 className="mb-6 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05]">
          Loot, split fairly.
        </h2>
        <p className="mx-auto max-w-[720px] text-[clamp(1.05rem,2vw,1.2rem)] text-[#cfe7d2] opacity-90">
          No arrows in the back. Zero tax, liquidity burned, contract renounced. The way an outlaw's
          supposed to run it.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { num: "1B", cap: "Total Supply" },
            { num: "0 / 0", cap: "Buy / Sell Tax" },
            { num: "100%", cap: "LP Burned" },
            { num: "✔", cap: "Renounced" },
          ].map((t) => (
            <div
              key={t.cap}
              className="rounded-2xl border border-rh-green/25 bg-gradient-to-b from-rh-green/[0.08] to-black/25 p-8 transition hover:-translate-y-1.5 hover:border-rh-green hover:shadow-[0_16px_40px_rgba(0,200,5,0.18)]"
            >
              <div className="font-display text-[2.4rem] font-black text-gold-bright">{t.num}</div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-green">
                {t.cap}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW TO BUY */}
      <section id="buy" className="mx-auto max-w-[1200px] px-[6vw] py-24 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/[0.12] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-gold-bright">
          ⛓ Robinhood Chain
        </div>
        <div className="mb-3 text-[13px] font-bold uppercase tracking-[0.25em] text-rh-green">
          How to Buy
        </div>
        <h2 className="mb-10 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05]">
          Grab your feather in 5 steps.
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 text-left">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-rh-green/25 bg-black/30 p-6 transition hover:-translate-y-1 hover:border-rh-green/60"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-rh-green font-display text-lg font-black text-[#03120a]">
                {s.n}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-paper">{s.title}</h3>
              <p className="text-[0.95rem] text-muted-green">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-[720px] text-base text-muted-green">
          New to all this? Follow the full guided walkthrough with screenshots.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={DEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-rh-green bg-transparent px-6 py-3 font-bold text-rh-green hover:bg-rh-green/10 transition"
          >
            📈 Dexscreener
          </a>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="border-y border-rh-green/25 bg-gradient-to-b from-rh-green/[0.10] to-black/20 py-20 text-center">
        <div className="mx-auto max-w-[800px] px-[6vw]">
          <h2 className="mb-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-extrabold leading-[1.05]">
            The rich had their turn.
          </h2>
          <p className="mx-auto mb-8 max-w-[600px] text-[clamp(1.05rem,2vw,1.2rem)] text-[#cfe7d2] opacity-90">
            Now it's ours. Pick up a feather and ride with the people's coin.
          </p>
          <a
            href="#buy"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-gold-bright to-gold px-8 py-4 text-lg font-bold text-[#241a00] shadow-[0_10px_30px_rgba(232,185,35,0.4)] hover:-translate-y-0.5 transition"
          >
            🪶 Buy $FEATHER
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="community" className="px-[6vw] py-16 text-center">
        <FeatherSVG className="mx-auto w-14 opacity-70" />
        <p className="mt-4 tracking-wider text-muted-green">Take from the rich. Give to the poor.</p>
        <div className="my-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://x.com/FeatherRHC"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-rh-green/30 px-5 py-2.5 text-sm font-semibold text-paper hover:border-rh-green hover:text-rh-green transition"
          >
            𝕏 &nbsp;Twitter
          </a>
          <a
            href="#"
            className="rounded-full border border-rh-green/30 px-5 py-2.5 text-sm font-semibold text-paper hover:border-rh-green hover:text-rh-green transition"
          >
            ✈ &nbsp;Telegram
          </a>
          <a
            href={DEX_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-rh-green/30 px-5 py-2.5 text-sm font-semibold text-paper hover:border-rh-green hover:text-rh-green transition"
          >
            📊 &nbsp;Dexscreener
          </a>
        </div>
        <p className="text-xs text-muted-green/70">
          © {new Date().getFullYear()} $FEATHER · Community-run. Not affiliated with Robinhood.
        </p>
      </footer>
    </div>
  );
}
