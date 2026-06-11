import { Link } from "@tanstack/react-router";
import { PhoneCall, Utensils } from "lucide-react";

const hygieneUrl =
  "https://ratings.food.gov.uk/business/1060406/humber-fish-co-kingston-upon-hull";

const hygieneImageUrl =
  "https://impro.usercontent.one/appid/oneComWsb/domain/humberfishco.co.uk/media/humberfishco.co.uk/onewebmedia/Screenshot%202022-12-01%20at%2014.19.31.png?etag=%22d775c-6388ba2b%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=602%2B292&extract=0%2B0%2B600%2B292";

export function SiteFooter() {
  return (
    <footer>

      {/* CTA band — brass background breaks the navy */}
      <div className="bg-brass">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="eyebrow text-deep/60">Book a table</p>
            <h2 className="mt-1 font-display text-3xl text-deep md:text-4xl">
              Call 01482 326136 for reservations.
            </h2>
          </div>
          <div className="flex shrink-0 gap-3">
            <a href="tel:01482326136" className="btn-primary !bg-deep !text-primary-foreground">
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              01482 326136
            </a>
            <Link to="/menu" className="btn-ghost border-deep/30 text-deep hover:border-deep">
              <Utensils className="h-4 w-4" aria-hidden="true" />
              Menu
            </Link>
          </div>
        </div>
      </div>

      {/* Info columns */}
      <div className="bg-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-8 px-5 py-10 md:grid-cols-4 md:px-8">

          <div>
            <h3 className="font-display text-2xl text-primary-foreground">Humber Fish Co.</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">
              Independent seafood restaurant on Hull's Humber Street.
              Open Wednesday to Sunday.
            </p>
          </div>

          <div>
            <p className="eyebrow !text-brass">Find us</p>
            <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80">
              Humber Street<br />
              Hull<br />
              East Yorkshire
            </p>
          </div>

          <div>
            <p className="eyebrow !text-brass">Follow</p>
            <a
              href="https://www.instagram.com/humberfish/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 block text-sm text-primary-foreground/80 hover:text-brass"
            >
              Instagram
            </a>
          </div>

          <div>
            <p className="eyebrow !text-brass">Food Hygiene</p>
            <a href={hygieneUrl} target="_blank" rel="noreferrer" className="group mt-3 block">
              <img
                src={hygieneImageUrl}
                alt="Food Hygiene Rating 5 — Very Good"
                className="w-full max-w-[160px] opacity-75 group-hover:opacity-100"
                loading="lazy"
              />
              <p className="mt-2 text-xs text-primary-foreground/50 group-hover:text-primary-foreground/70">
                Rated 5 · October 2024 ↗
              </p>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 text-xs text-primary-foreground/40 md:flex-row md:items-center md:justify-between md:px-8">
            <p>© {new Date().getFullYear()} Humber Fish Co. All rights reserved.</p>
            <p>Bookings by phone only · Closed Mondays & Tuesdays</p>
          </div>
        </div>
      </div>

    </footer>
  );
}
