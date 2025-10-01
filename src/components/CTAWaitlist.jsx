import { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTAWaitlist() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setTimeout(() => setSent(true), 400);
  };

  return (
    <section id="waitlist" className="mx-auto mt-20 max-w-3xl px-6">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-transparent p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Get early access</h3>
            <p className="mt-1 text-sm text-white/70">Join the waitlist for private beta invites and integration guides.</p>
          </div>
          {sent ? (
            <div className="rounded-md bg-emerald-500/15 px-4 py-3 text-sm text-emerald-300">
              You’re in. Check your inbox for confirmation.
            </div>
          ) : (
            <form onSubmit={submit} className="flex w-full max-w-md items-center gap-2">
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="h-11 w-full rounded-md border border-white/10 bg-white/5 pl-10 pr-3 text-sm outline-none placeholder:text-white/40 focus:border-white/20"
                />
              </div>
              <button type="submit" className="inline-flex h-11 items-center gap-2 rounded-md bg-white px-4 text-sm font-semibold text-black hover:bg-white/90">
                Join <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
