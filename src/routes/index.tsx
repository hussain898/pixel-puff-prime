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
      { title: "$FEATHER" },
      {
        name: "description",
        content:
          "$FEATHER — One feather won’t change the world. Millions of feathers might, one feather at a time.",
      },
      { property: "og:title", content: "$FEATHER" },
      {
        property: "og:description",
        content:
          "$FEATHER — One feather won’t change the world. Millions of feathers might, one feather at a time.",
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
const TWITTER_URL = "https://x.com/featherrhc?s=21";
const TELEGRAM_URL = "https://t.me/Official_Feather";

function FeatherSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 320"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="featherGrad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0" stopColor="#E1FFD4" />
          <stop offset="0.25" stopColor="#7CFF6B" />
          <stop offset="0.6" stopColor="#00C805" />
          <stop offset="1" stopColor="#00520A" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Curved feather silhouette — tapered top, wider mid, pointed quill bottom */}
      <path
        fill="url(#featherGrad)"
        opacity="0.95"
        d="M50 12
           C36 60 22 110 24 170
           C25 205 34 235 46 258
           L50 296
           L54 258
           C66 235 75 205 76 170
           C78 110 64 60 50 12 Z"
      />

      {/* Barbs — angled downward, following feather flow */}
      <g stroke="#F0FFE6" strokeWidth="1" strokeLinecap="round" opacity="0.55" fill="none">
        <path d="M50 40 Q40 46 30 52" />
        <path d="M50 58 Q37 65 26 74" />
        <path d="M49 76 Q35 84 23 96" />
        <path d="M49 94 Q34 103 22 117" />
        <path d="M48 112 Q33 122 22 138" />
        <path d="M48 130 Q33 141 23 158" />
        <path d="M48 148 Q34 160 26 177" />
        <path d="M49 166 Q36 178 30 194" />
        <path d="M49 184 Q39 196 36 210" />
        <path d="M50 202 Q42 214 42 226" />
        <path d="M50 40 Q60 46 70 52" />
        <path d="M50 58 Q63 65 74 74" />
        <path d="M51 76 Q65 84 77 96" />
        <path d="M51 94 Q66 103 78 117" />
        <path d="M52 112 Q67 122 78 138" />
        <path d="M52 130 Q67 141 77 158" />
        <path d="M52 148 Q66 160 74 177" />
        <path d="M51 166 Q64 178 70 194" />
        <path d="M51 184 Q61 196 64 210" />
        <path d="M50 202 Q58 214 58 226" />
      </g>

      {/* Rachis (central shaft) */}
      <path
        d="M50 10 C48 90 48 180 50 300"
        stroke="#F5FFEC"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
        filter="url(#glow)"
      />

      {/* Afterglow halo */}
      <ellipse cx="50" cy="160" rx="42" ry="130" fill="url(#featherGrad)" opacity="0.08" filter="url(#glow)" />
    </svg>
  );
}

function FallingFeathers() {
  const feathers = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        left: Math.random() * 100,
        size: 16 + Math.random() * 30,
        duration: 14 + Math.random() * 18,
        delay: Math.random() * 16,
        sway: 15 + Math.random() * 35,
        swayDuration: 4 + Math.random() * 4,
        key: i,
      })),
    [],
  );
  return (
    <div className="pointer-events-none fixed inset-0 -z-[1] overflow-hidden">
      {feathers.map((f) => (
        <div
          key={f.key}
          className="absolute -top-16 animate-fall"
          style={{
            left: `${f.left}%`,
            width: `${f.size}px`,
            animationDuration: `${f.duration}s`,
            animationDelay: `-${f.delay}s`,
            filter: "drop-shadow(0 0 12px rgba(0,255,34,.85)) drop-shadow(0 0 24px rgba(0,200,5,.55))",
          }}
        >
          <div
            className="animate-sway"
            style={{
              animationDuration: `${f.swayDuration}s`,
              animationDelay: `-${f.delay}s`,
              transform: `translateX(${f.sway}px)`,
            }}
          >
            <img
              src={logoAsset.url}
              alt=""
              className="w-full h-auto"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(58%) sepia(93%) saturate(2400%) hue-rotate(85deg) brightness(105%) contrast(105%)",
              }}
            />
          </div>

        </div>
      ))}
    </div>
  );
}

function DisclaimerModal({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#020805]/90 p-4 backdrop-blur-sm">
      <div className="flex w-full max-w-[560px] flex-col max-h-[90vh] rounded-2xl border border-rh-green/40 bg-gradient-to-b from-[#0a1f12] to-[#03120a] p-6 sm:p-8 shadow-[0_0_60px_rgba(0,200,5,0.18)]">
        <div className="mb-5 shrink-0 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-rh-green/30 bg-rh-green/10 text-xl text-rh-green">
            ⚠️
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-paper">Disclaimer</h2>
        </div>

        <p className="mb-4 shrink-0 text-center text-sm sm:text-base leading-relaxed text-[#cfe7d2]">
          $<span className="text-rh-green font-bold">FEATHER</span> is an independent, community-created meme coin for entertainment and internet culture. It is not affiliated with, endorsed by, sponsored by, or connected to Robinhood Markets, Inc.
        </p>

        <div className="relative mb-5 min-h-0 overflow-y-auto rounded-xl border border-rh-green/20 bg-black/30 p-4 sm:p-5">
          <div className="space-y-4 text-sm leading-relaxed text-[#cfe7d2]">
            <p>
              $<span className="text-rh-green font-bold">FEATHER</span> is strictly a meme, has no intrinsic value, makes no promises or guarantees, and should not be considered an investment. Meme coins are highly speculative and extremely risky. If you choose to purchase $FEATHER, you should only use funds you can afford to lose, as you may lose 100% of your purchase.
            </p>
            <p>
              You do not need to own or purchase $FEATHER to be part of the community. Everyone is welcome to participate through memes, creativity, discussion, and community engagement.
            </p>
            <p>
              Nothing on this website or in the community constitutes financial, investment, legal, or tax advice. Community discussions, memes, opinions, or personal decisions should not be interpreted as recommendations from the $FEATHER meme coin or its contributors to buy, sell, or hold any digital asset. Always do your own research before making any financial decisions.
            </p>
          </div>
          <div className="pointer-events-none sticky bottom-0 -mb-5 -mx-4 sm:-mx-5 h-10 bg-gradient-to-t from-[#03120a] to-transparent sm:-mb-5" />
        </div>

        <button
          onClick={onContinue}
          className="w-full shrink-0 rounded-full bg-rh-green px-6 py-3 text-sm sm:text-base font-bold text-[#03120a] shadow-[0_10px_30px_rgba(0,200,5,0.35)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,200,5,0.45)] transition"
        >
          I agree
        </button>
      </div>
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
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-2 px-4 sm:px-[5vw] py-3 sm:py-4 backdrop-blur-md bg-gradient-to-b from-[rgba(3,12,7,0.9)] to-transparent">
      <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3 font-display font-black tracking-widest text-base sm:text-lg">
        <Logo className="h-7 sm:h-8 w-auto shrink-0 drop-shadow-[0_0_10px_rgba(0,200,5,0.7)]" />
        <span className="truncate">
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
        className="shrink-0 inline-flex items-center gap-2 rounded-full bg-rh-green px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-[#03120a] shadow-[0_0_0_rgba(0,200,5,0.6)] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,200,5,0.45)] transition whitespace-nowrap"
      >
        Buy <span className="hidden sm:inline">$FEATHER</span>
      </a>
    </nav>
  );
}

function Index() {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
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
      body: "Paste the contract below, confirm the swap, and you're holding $FEATHER. Welcome to the flock.",
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
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      {!disclaimerAccepted && (
        <DisclaimerModal onContinue={() => setDisclaimerAccepted(true)} />
      )}

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

        <div className="mt-8 flex w-full max-w-[92vw] items-center gap-2 sm:gap-3 rounded-xl border border-dashed border-rh-green/45 bg-black/40 px-3 sm:px-4 py-3 sm:w-auto">
          <span className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.15em] text-rh-green">CA</span>
          <code className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[12px] sm:text-[13.5px] text-paper/90">
            {CA}
          </code>
          <button
            onClick={copyCA}
            className="shrink-0 rounded-md bg-rh-green px-3 py-1.5 text-xs font-bold text-[#03120a] hover:brightness-110"
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
                <Logo className="w-32" />
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
            href="https://wallet.uniswap.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-rh-green px-6 py-3 font-bold text-[#03120a] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,200,5,0.45)] transition"
          >
            🦄 Buy in Uniswap Wallet
          </a>
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
        <Logo className="mx-auto w-14 opacity-70" />
        <p className="mt-4 tracking-wider text-muted-green">Take from the rich. Give to the poor.</p>
        <div className="my-8 flex flex-wrap justify-center gap-4">
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-rh-green/30 px-5 py-2.5 text-sm font-semibold text-paper hover:border-rh-green hover:text-rh-green transition"
          >
            𝕏 &nbsp;Twitter
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
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
          © {new Date().getFullYear()} $FEATHER · Community run. Not affiliated with Robinhood.
        </p>
      </footer>
    </div>
  );
}
