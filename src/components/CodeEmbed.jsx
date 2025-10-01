import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const snippets = {
  js: `// npm i @vanish/auth
import { createAuth } from '@vanish/auth';

const auth = createAuth({ projectId: process.env.VANISH_PROJECT_ID });

// One line biometric login
await auth.biometric();
`,
  react: `import { useEffect } from 'react';
import { createAuth } from '@vanish/auth';

const auth = createAuth({ projectId: import.meta.env.VITE_VANISH_PROJECT_ID });

export default function LoginButton() {
  useEffect(() => {
    // optional: warm up WebAuthn
    auth.prepare();
  }, []);

  return (
    <button onClick={() => auth.biometric()}>
      Continue with Face/Touch ID
    </button>
  );
}
`,
  node: `import express from 'express';
import { verifyAssertion } from '@vanish/auth/server';

const app = express();
app.post('/api/callback', async (req, res) => {
  const session = await verifyAssertion(req.body);
  res.json(session);
});
app.listen(3000);
`,
};

export default function CodeEmbed() {
  const [lang, setLang] = useState('js');
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippets[lang]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <section className="mx-auto mt-20 max-w-6xl px-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Drop-in code</h2>
        <button onClick={onCopy} className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
          {copied ? <><Check className="h-4 w-4" /> Copied</> : <><Copy className="h-4 w-4" /> Copy</>}
        </button>
      </div>

      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0B0F19]">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <button onClick={() => setLang('js')} className={`rounded px-2 py-1 ${lang==='js' ? 'bg-white text-black' : 'hover:bg-white/10'}`}>JS</button>
            <button onClick={() => setLang('react')} className={`rounded px-2 py-1 ${lang==='react' ? 'bg-white text-black' : 'hover:bg-white/10'}`}>React</button>
            <button onClick={() => setLang('node')} className={`rounded px-2 py-1 ${lang==='node' ? 'bg-white text-black' : 'hover:bg-white/10'}`}>Node</button>
          </div>
          <span className="text-[11px] text-white/50">npm i @vanish/auth</span>
        </div>
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-white/90">
{snippets[lang]}
        </pre>
      </div>
    </section>
  );
}
