import { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#programs', label: 'Programs' },
    { href: '#admissions', label: 'Admissions' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 text-white">
            <GraduationCap className="h-6 w-6 text-cyan-400" />
            <span className="font-semibold tracking-tight">CLG Tech Institute</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/80 hover:text-white transition">
                {item.label}
              </a>
            ))}
            <a href="#admissions" className="inline-flex items-center rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-medium text-sm px-4 py-2 transition">
              Apply Now
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-white/5 focus:outline-none"
            aria-label="Toggle menu"
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <nav className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#admissions"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 bg-cyan-500 text-black font-medium hover:bg-cyan-400"
            >
              Apply Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
