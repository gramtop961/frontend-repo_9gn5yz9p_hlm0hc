import Spline from '@splinetool/react-spline';
import { Copy, Check, ArrowRight, Fingerprint } from 'lucide-react';
import { useState } from 'react';

export default function Hero3D() {
  const [copied, setCopied] = useState(false);
  const oneLiner = 'await auth.biometric()';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(oneLiner);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      setCopied(false);
    }
  };

  return (
    <section className="relative">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-8 md:pt-12">
        {/* Top nav */}
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-black">
              <Fingerprint className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Vanish Auth</span>
            <span className="ml-2 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] uppercase tracking-wide text-white/70">Prelaunch</span>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="#docs" className="rounded-md px-3 py-2 text-sm text-white/80 hover:text-white">Docs</a>
            <a href="#waitlist" className="group inline-flex items-center gap-1 rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90">
              Get early access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left copy */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" /> Passkeys • Face/Touch ID • WebAuthn
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Auth that disappears.
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/70 sm:text-lg">
              Passwordless authentication for developers. Ship delightful biometric logins with one line of code — no passwords, no friction.
            </p>

            {/* One-liner pill */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] px-3 py-2">
              <code className="text-sm text-white/90">{oneLiner}</code>
              <button onClick={handleCopy} className="ml-2 inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/15">
                {copied ? (<><Check className="h-3.5 w-3.5" /> Copied</>) : (<><Copy className="h-3.5 w-3.5" /> Copy</>)}
              </button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#waitlist" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-white/90">
                Join the waitlist
              </a>
              <a href="#docs" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                View docs
              </a>
            </div>

            <p className="mt-4 text-xs text-white/50">
              Built on FIDO2/WebAuthn. No passwords stored. SOC2-ready.
            </p>
          </div>

          {/* Right 3D */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0A0E17] shadow-2xl sm:h-[520px] md:h-[560px]">
            {/* subtle gradient accent behind the scene */}
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18),rgba(59,130,246,0.08)_40%,transparent_70%)]" />
            <div className="relative z-10 h-full w-full">
              <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
