import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Carter907",
    icon: FaGithub,
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/carter_dev907",
    icon: FaHackerrank,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Carter907/",
    icon: SiLeetcode,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/carter-speerschneider/",
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-line bg-canvas">
      <div className="w-full max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-ink-subtle">
          Copyright © {new Date().getFullYear()} Carter S. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="text-ink-subtle hover:text-accent transition-colors"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
