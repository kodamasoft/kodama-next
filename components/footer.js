
import { FaBandcamp, FaSoundcloud, FaYoutube, FaTwitter, FaDiscord, FaEnvelope, FaCoffee } from 'react-icons/fa';
import BoothSVG from '../public/assets/icons/booth.svg';
import BskySVG from '../public/assets/icons/bsky.svg';

import Link from 'next/link';

// Define common icon class for reuse
const iconClass = 'text-slate-500 no-underline hover:text-slate-50 hover:scale-105 w-10 h-10 transition';

// Array of icon links to simplify component structure
const iconLinks = [
  { href: 'mailto:kodamasoft@example.com', icon: FaEnvelope },
  { href: 'https://discord.gg/9ZmHv3r', icon: FaDiscord },
  { href: "https://ko-fi.com/kodamasoft", icon: FaCoffee },
  { href: 'https://twitter.com/kodamasoft', icon: FaTwitter },
  { href: 'https://bsky.app/profile/kodamasoft.bsky.social', icon: BskySVG },
  { href: 'https://www.youtube.com/@kodamasoft', icon: FaYoutube },
  { href: 'https://soundcloud.com/kodamasoft', icon: FaSoundcloud },
  { href: 'https://bandcamp.com/kodamasounds', icon: FaBandcamp },
  { href: 'https://kodamasoft.booth.pm/', icon: BoothSVG },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-500/20 mt-10">
      <div className="container max-w-4xl mx-auto flex py-8 flex-col text-center">
        <div className="w-full mx-auto flex justify-center flex-wrap items-center gap-3">
          {iconLinks.map(({ href, icon: IconComponent }, index) => (
            <Link key={index} href={href} className="footer_svg_container outline-hidden">
              <IconComponent className={iconClass} />
            </Link>
          ))}
        </div>
        <p className="text-slate-500 mt-5">
          KodamaSoft / KodamaSounds logo by <a href="https://twitter.com/vgmcal" className="text-slate-500 transition hover:text-slate-50 hover:underline">cal</a> — Kodama Mascots by Garrrros (KodamaSoft) — Website by <a href="https://twitter.com/krz0001" className="text-slate-500 transition hover:text-slate-50 hover:underline">krz</a> (KodamaSoft) <br />
        </p>
      </div>
    </footer>
  );
}
