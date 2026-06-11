import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 md:gap-4 md:px-8">
        <Link to="/" className="flex items-baseline gap-2 leading-none">
          <span className="font-display text-lg tracking-tight sm:text-xl md:text-2xl">
            Humber Fish Co.
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link to="/" className="hover:text-brass [&.active]:text-brass">
            Restaurant
          </Link>
          <Link to="/menu" className="hover:text-brass [&.active]:text-brass">
            Menu
          </Link>
          <Link to="/about" className="hover:text-brass [&.active]:text-brass">
            About
          </Link>
          <Link to="/contact" className="hover:text-brass [&.active]:text-brass">
            Visit & Book
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:01482326136"
            className="btn-primary hidden !px-4 !py-2.5 text-[11px] md:inline-flex"
          >
            Book
          </a>
          <a
            href="tel:01482326136"
            className="btn-primary hidden !px-3 !py-2.5 text-[11px] min-[420px]:inline-flex md:!hidden"
          >
            Call
          </a>
          <button aria-label="Menu" className="md:hidden" onClick={() => setOpen(!open)}>
            <span className="block h-px w-6 bg-deep mb-1.5" />
            <span className="block h-px w-6 bg-deep" />
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col px-5 py-4 text-sm">
            {[
              { to: "/", label: "Restaurant" },
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Visit & Book" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3 last:border-0"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
