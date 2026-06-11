import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import interior4 from "@/assets/interior4.jpg.asset.json";
import interior2 from "@/assets/interior2.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Humber Street Seafood, James & Paula | Humber Fish Co." },
      {
        name: "description",
        content:
          "Run by James and Paula Stockdale, Humber Fish Co. is an independent seafood restaurant on Hull's Humber Street, serving locally landed shellfish and whole fish.",
      },
      { property: "og:title", content: "About Humber Fish Co. — Independent Hull Seafood" },
      { property: "og:description", content: "Independent. Family-run. On Humber Street, Hull." },
      { property: "og:image", content: interior4.url },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-7">
            <p className="eyebrow">About</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] md:text-7xl">
              Independent seafood, shaped by Humber Street.
            </h1>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-6">
            <p className="text-base leading-relaxed text-foreground/85">
              Humber Fish Co. is an independent restaurant on Hull's historic Humber Street, with
              James and Paula Stockdale at the helm. We specialise in seafood and crustacea —
              locally caught shellfish and whole fish, halibut and mussels from Scotland, oysters
              and other delicacies pulled from our own east coast.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <img
            src={interior4.url}
            alt="A view of the dining room at Humber Fish Co., with marble-topped tables"
            className="aspect-[4/5] w-full object-cover md:col-span-5"
            loading="lazy"
          />
          <div className="space-y-6 md:col-span-6 md:col-start-7 md:pt-8">
            <p className="text-base leading-relaxed text-foreground/85">
              The room is small on purpose. Reclaimed driftwood lines the walls. There's an eclectic
              mix of nautical objects, seafaring ornaments and quirky finds that have been collected
              over the years — they fill the walls and most of the ceiling. Marble-topped tables.
              Comfortable seating. An open kitchen you can hear from your chair.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              The menu reflects the boats. We work closely with merchants on the east coast and up
              in Scotland, and we change the specials board often. If something's not at its best,
              it doesn't go on. If something special lands, it usually goes straight onto the board.
            </p>
            <p className="text-base leading-relaxed text-foreground/85">
              We've been recognised by Tripadvisor as a Travellers' Choice winner and voted in the
              top 10% of restaurants worldwide. We're quietly chuffed about that, but the measure
              that really matters is how many guests come back.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-3 md:px-8">
          <div>
            <p className="font-display text-5xl text-brass md:text-6xl">Top&nbsp;10%</p>
            <p className="mt-3 text-sm text-primary-foreground/75">
              Tripadvisor Travellers' Choice — restaurants worldwide.
            </p>
          </div>
          <div>
            <p className="font-display text-5xl text-brass md:text-6xl">8</p>
            <p className="mt-3 text-sm text-primary-foreground/75">
              Maximum booking size. Larger parties with notice.
            </p>
          </div>
          <div>
            <p className="font-display text-5xl text-brass md:text-6xl">5&nbsp;days</p>
            <p className="mt-3 text-sm text-primary-foreground/75">
              Wednesday through Sunday. Closed Mondays and Tuesdays.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">How we book</p>
            <h2 className="mt-3 font-display text-4xl">How bookings work.</h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-4 text-sm leading-relaxed text-foreground/85">
            <p>
              Bookings are taken on the phone. Enquiries by email are fine, but a table is only
              confirmed once we've spoken. On our closed days, the answering machine catches
              everything.
            </p>
            <p>
              No deposits. Please arrive on time — we hold tables for fifteen minutes. Parties of
              three or fewer get 1 hour 45 minutes at the table; parties of four or more get 2
              hours. Where there's space, we'll always give you longer.
            </p>
            <p>
              Tables of more than six are asked to pre-order from the à la carte. Same-week bookings
              are auto-confirmed; everything further out, we'll ring to confirm.
            </p>
            <Link to="/contact" className="btn-primary mt-2">
              Opening times & how to find us
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <img
          src={interior2.url}
          alt="Detail of nautical ornaments and driftwood inside Humber Fish Co."
          className="aspect-[21/9] w-full object-cover"
          loading="lazy"
        />
      </section>

      <SiteFooter />
    </div>
  );
}
