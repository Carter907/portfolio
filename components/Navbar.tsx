import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import ThemeSwitch from "@/components/ThemeSwitch";

export const runtime = "edge";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "https://carters-blog.vercel.app/", external: true },
  { label: "Showcase", href: "/showcase" },
  { label: "Experience", href: "/experience" },
  { label: "Contact Me", href: "/contact-me" },
];

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <header className="w-full border-b border-line bg-canvas">
      <nav
        aria-label="Primary navigation"
        className="w-full max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-4"
      >
        <Link
          href="/"
          className="shrink-0 rounded-full focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-canvas"
          aria-label="Home"
        >
          <Image
            className="w-9 h-9 rounded-full object-cover border border-line"
            src="https://avatars.githubusercontent.com/u/102479896?v=4"
            alt="Carter's avatar"
            width={36}
            height={36}
            priority
          />
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:gap-x-7">
          {NAV_ITEMS.map((item) => {
            const isActive = !item.external && pathname === item.href;
            const linkClass = `py-1 text-sm font-medium transition-colors border-b-2 ${
              isActive
                ? "text-ink border-accent"
                : "text-ink-muted border-transparent hover:text-ink"
            }`;

            if (item.external) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link key={item.href} href={item.href} prefetch className={linkClass}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="shrink-0">
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
}
