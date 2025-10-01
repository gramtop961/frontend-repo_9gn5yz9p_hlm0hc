import Hero3D from './components/Hero3D';
import CodeEmbed from './components/CodeEmbed';
import TrustBar from './components/TrustBar';
import CTAWaitlist from './components/CTAWaitlist';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B12] text-white antialiased">
      <Hero3D />
      <TrustBar />
      <CodeEmbed />
      <CTAWaitlist />
      <footer className="mx-auto mt-20 max-w-7xl px-6 py-10 text-sm text-white/40">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Vanish Auth, Inc.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Security</a>
            <a className="hover:text-white" href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
