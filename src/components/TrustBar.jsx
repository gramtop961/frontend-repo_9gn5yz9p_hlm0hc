import { ShieldCheck, Lock, Server, Globe } from 'lucide-react';

export default function TrustBar() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-6">
      <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-xs text-white/70">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>WebAuthn/FIDO2 • Phishing resistant</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-white/60">
            <div className="inline-flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> AES-256 at rest</div>
            <div className="inline-flex items-center gap-1"><Server className="h-3.5 w-3.5" /> 99.99% uptime</div>
            <div className="inline-flex items-center gap-1"><Globe className="h-3.5 w-3.5" /> GDPR/SOC2 ready</div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {['ACME', 'QUANTUM', 'NEBULA', 'HYPER', 'VERTEX'].map((brand) => (
            <div key={brand} className="flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs tracking-widest text-white/60">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
