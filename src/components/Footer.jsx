import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold">CLG Tech Institute</h4>
            <p className="mt-2 text-white/70 text-sm">
              A modern college for creators, engineers, and innovators. Learn by doing with state-of-the-art labs and industry mentors.
            </p>
          </div>

          <div>
            <h5 className="text-sm font-semibold tracking-wide text-white/80">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 123 Innovation Drive, Tech City</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" /> +1 (555) 123-4567</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5" /> admissions@clg.edu</li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold tracking-wide text-white/80">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#home" className="text-white/80 hover:text-white">Home</a></li>
              <li><a href="#programs" className="text-white/80 hover:text-white">Programs</a></li>
              <li><a href="#admissions" className="text-white/80 hover:text-white">Admissions</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60">
          <p>© {new Date().getFullYear()} CLG Tech Institute. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
