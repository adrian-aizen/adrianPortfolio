export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "GitHub", href: "https://github.com/adrian-aizen" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/adrian-adora-4b53a5341/" },
    { label: "Facebook", href: "https://www.facebook.com/drianaidss/" },
    { label: "Instagram", href: "https://www.instagram.com/tuffadrian_/" },
  ];

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="font-display text-lg tracking-widest text-[#d4af6e] uppercase">
          Adrian<span className="text-white">.</span>
        </a>

        {/* Social Links */}
        <ul className="flex gap-8">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                className="text-xs tracking-[0.2em] uppercase text-[#666] hover:text-[#d4af6e] transition-colors duration-300"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-xs tracking-widest uppercase text-[#444]">
          © {year} — All rights reserved
        </p>
      </div>
    </footer>
  );
}