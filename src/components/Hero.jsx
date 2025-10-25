import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[86vh] md:h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/YMbQm4jphL7pTceL/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Futuristic Learning for Tomorrow's Leaders
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Discover. Build. Lead.
            </h1>
            <p className="mt-4 text-white/80 text-base sm:text-lg">
              At CLG Tech Institute, we merge creativity, technology, and real-world practice. Explore cutting-edge programs designed for innovation in an ever-evolving world.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-5 py-3 transition"
              >
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#admissions"
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 hover:bg-white/10 text-white px-5 py-3"
              >
                Admissions & Scholarships
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
