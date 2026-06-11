import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  CalendarDays,
  ClipboardCheck,
  Gift,
  PhoneCall,
  Shell,
  Utensils,
  Wine,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Humber Fish Co. — Hull Seafood, Shellfish & Specials" },
      {
        name: "description",
        content:
          "Independent seafood restaurant on Hull's Humber Street. Locally landed shellfish, whole fish and oysters from the east coast. Book on 01482 326136.",
      },
      { property: "og:title", content: "Humber Fish Co. — Hull Seafood & Shellfish" },
      {
        property: "og:description",
        content:
          "Locally caught shellfish, whole fish and oysters on Hull's historic Humber Street.",
      },
      { property: "og:image", content: restaurantPhotos.interior },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const restaurantPhotos = {
  originalSeafood: "https://humberfishco.co.uk/onewebmedia/achtergrond-2___serialized1.jpg",
  interior:
    "https://cdn.yorkshirefoodguide.co.uk/app/uploads/2018/07/12104801/Humber-Fish-Co-1.jpg",
  exterior:
    "https://cdn.yorkshirefoodguide.co.uk/app/uploads/2018/07/12104800/Humber-Fish-Co-4.jpg",
  diningRoom:
    "https://cdn.yorkshirefoodguide.co.uk/app/uploads/2018/07/12104800/Humber-Fish-Co-2.jpg",
  details: "https://cdn.yorkshirefoodguide.co.uk/app/uploads/2018/07/12104801/Humber-Fish-Co-3.jpg",
  seafoodPlatter:
    "https://the-yorkshireman.com/wp-content/uploads/2024/05/HUMBER-FISH-CO-2-858x1024.jpeg",
  foodCollage:
    "https://cdn6.localdatacdn.com/images/426950/d_humber_fish_co_photo.jpg?q=68d45e50caae5",
};

const highlights = [
  {
    icon: Award,
    label: "Tripadvisor",
    title: "Top 10% worldwide",
    detail: "Travellers' Choice recognition for the dining experience, seafood and service.",
  },
  {
    icon: PhoneCall,
    label: "Bookings",
    title: "Book by phone",
    detail: "Maximum booking of 8. Larger groups can sometimes be accommodated with notice.",
  },
  {
    icon: ClipboardCheck,
    label: "Allergens",
    title: "Tell us before ordering",
    detail: "Fish, shellfish, wheat, eggs, milk, soy, peanuts and tree nuts are present.",
  },
];

const seafoodCategories = [
  ["Oysters", "East coast oysters served by the half dozen or dozen."],
  ["Shellfish", "Crab, prawns, mussels, lobster and cold plates when available."],
  ["Whole fish", "Simply grilled or roasted, landed locally where possible."],
  ["Humber mains", "Fish stew, fish and chips, monkfish, halibut and specials."],
];

const diningMoments = [
  [
    "Lunch",
    "A slower Humber Street lunch with fish, chips, mussels and a glass of something cold.",
  ],
  ["Evening", "Small room, specials board, cocktails and whole fish for the table."],
  ["Sunday", "Shorter service, generous plates and bookings by phone."],
];

const drinks = [
  ["Cocktails", "Classic coastal drinks, aperitifs and house serves."],
  ["Wine", "Fresh whites, fizz and seafood-friendly bottles."],
  ["No-fuss pints", "Cold beer and simple drinks for the bar seats."],
];


function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="relative h-[calc(100vh-56px)] min-h-[560px] overflow-hidden border-b border-border" id="top">
        <img
          src={restaurantPhotos.originalSeafood}
          alt="Fresh fish, crab, prawns, shellfish and seafood"
          className="absolute inset-0 h-full w-full object-cover object-left"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

        <div className="relative flex h-full flex-col justify-center px-5 md:px-12">
          <p className="eyebrow !text-white/70">71-72 Humber Street · Hull Marina</p>
          <h1 className="mt-4 max-w-[14ch] font-display text-5xl leading-[1.02] text-white sm:text-6xl md:text-8xl">
            Seafood and shellfish on Humber Street.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80">
            An independent restaurant run by James and Paula Stockdale. Locally caught shellfish,
            whole fish, Scottish halibut and oysters from the east coast.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:01482326136" className="inline-flex items-center gap-2 bg-brass px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-deep hover:bg-brass/90">
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Book by phone
            </a>
            <Link to="/menu" className="inline-flex items-center gap-2 border border-white/60 px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-white hover:border-white hover:bg-white/10">
              View menu
            </Link>
          </div>
          <p className="mt-6 text-xs text-white/50">
            Wed–Sun · Bookings by phone only · 01482 326136
          </p>
        </div>
      </section>


      <section className="wood-panel border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 md:grid-cols-3 md:px-8">
          {highlights.map(({ icon: Icon, label, title, detail }) => (
            <div key={label} className="border border-border/70 bg-background/88 p-5">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-brass" aria-hidden="true" />
                <p className="eyebrow">{label}</p>
              </div>
              <p className="mt-3 font-display text-2xl leading-[1.08]">{title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <p className="eyebrow">The restaurant</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.08] md:text-5xl">
                A small room, a short menu, a proper sense of place.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-foreground/85 md:col-span-7 md:col-start-6 md:pt-2">
              <p>
                Reclaimed driftwood on the walls, marble-topped tables, nautical pieces collected
                over the years. Informal, small and busy enough that the specials board matters.
              </p>
              <p>
                The menu follows the boats — locally landed shellfish, whole fish, Scottish mussels,
                halibut, oysters, brown crab and lobster when it is right. Alongside the à la carte,
                the kitchen runs a changing board each day.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-12">
            <img
              src={restaurantPhotos.interior}
              alt="Dining room at Humber Fish Co. with reclaimed driftwood and marble tables"
              className="aspect-[4/3] w-full object-cover md:col-span-7"
              loading="lazy"
            />
            <div className="grid gap-3 md:col-span-5">
              <img
                src={restaurantPhotos.diningRoom}
                alt="Nautical objects and wall details inside Humber Fish Co."
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <img
                src={restaurantPhotos.exterior}
                alt="Outside Humber Fish Co. on Humber Street"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card" id="food">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-12 md:px-8 md:py-18">
          <div className="md:col-span-4">
            <p className="eyebrow">Food on the table</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.08] md:text-5xl">
              Seafood platters, oysters and fresh fish.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cold shellfish, oysters, prawns, mussels, fish and chips, and daily seafood from the
              specials board.
            </p>
          </div>
          <div className="grid gap-4 md:col-span-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <img
                src={restaurantPhotos.seafoodPlatter}
                alt="Humber Fish Co. seafood platter with lobster, prawns, oysters, mussels and bread"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-7">
              <img
                src={restaurantPhotos.foodCollage}
                alt="Humber Fish Co. food photos showing fish and chips, seafood platter and restaurant bar"
                className="aspect-[7/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Explore the menu</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.08] md:text-5xl">
              From the à la carte and specials board.
            </h2>
            <Link to="/menu" className="btn-primary mt-7">
              Full menu
            </Link>
          </div>
          <div className="grid gap-px bg-border md:col-span-8 md:grid-cols-2">
            {seafoodCategories.map(([title, detail]) => (
              <Link key={title} to="/menu" className="group bg-background p-7">
                <Shell className="h-5 w-5 text-brass" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl group-hover:text-brass">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="wood-panel border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <img
              src={restaurantPhotos.foodCollage}
              alt="Fresh fish, prawns, crab and shellfish"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 md:self-center">
            <p className="eyebrow">Specials board</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.08] md:text-5xl">
              Ask what is on today.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-foreground/80">
              Lobster, dressed crab, whole fish, oysters and shellfish depend on the catch. Call
              ahead for market price dishes or ask the team when you arrive.
            </p>
            <a href="tel:01482326136" className="btn-primary mt-7">
              Ask today's board
            </a>
          </div>
        </div>
      </section>

      <section className="bg-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
          <div className="md:col-span-4">
            <p className="eyebrow !text-brass">Service</p>
            <h2 className="mt-4 font-display text-4xl text-primary-foreground md:text-5xl">
              Lunch, dinner and Sunday service.
            </h2>
          </div>
          <div className="grid gap-px bg-white/10 md:col-span-8 md:grid-cols-3">
            {diningMoments.map(([title, detail]) => (
              <div key={title} className="bg-deep p-7">
                <CalendarDays className="h-5 w-5 text-brass" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl text-primary-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-12">
          <img
            src={restaurantPhotos.exterior}
            alt="Outside Humber Fish Co. on Humber Street, Hull"
            className="aspect-[4/3] w-full object-cover md:col-span-7"
            loading="lazy"
          />
          <div className="border border-border bg-card p-8 md:col-span-5 md:p-12">
            <p className="eyebrow">Seafood platters</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.08]">
              Shellfish platters for the table.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Cold shellfish platters, oysters, mussels, prawns, dressed crab and lobster are
              available when the market is kind.
            </p>
            <Link to="/menu" className="btn-ghost mt-7">
              See platters
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-12 md:px-8">
          <div className="md:col-span-4">
            <p className="eyebrow">Drinks</p>
            <h2 className="mt-3 font-display text-4xl leading-[1.08] md:text-5xl">
              Drinks to go with the catch.
            </h2>
          </div>
          <div className="grid gap-4 md:col-span-8 md:grid-cols-3">
            {drinks.map(([title, detail]) => (
              <div key={title} className="border border-border bg-background p-6">
                <Wine className="h-5 w-5 text-brass" aria-hidden="true" />
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8" id="gifts">
        <div className="grid gap-4 md:grid-cols-3">
          <img
            src={restaurantPhotos.details}
            alt="Maritime details inside Humber Fish Co."
            className="aspect-square w-full object-cover"
            loading="lazy"
          />
          <div className="wood-panel border border-border p-8 md:p-10">
            <Gift className="h-5 w-5 text-brass" aria-hidden="true" />
            <p className="eyebrow mt-5">Gift vouchers</p>
            <h3 className="mt-3 font-display text-3xl leading-[1.08]">
              Gift vouchers from the restaurant.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A simple gift for seafood lovers. The 2025 allocation has sold out; check with the
              restaurant for the next release.
            </p>
            <a href="tel:01482326136" className="btn-primary mt-6">
              Call to check
            </a>
          </div>
          <img
            src={restaurantPhotos.seafoodPlatter}
            alt="Seafood platter at Humber Fish Co."
            className="aspect-square w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Special occasions — standalone promotional banner */}
      <section className="wood-panel border-y border-border">
        <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="eyebrow">Special occasions</p>
              <h2 className="mt-3 font-display text-4xl leading-[1.08] md:text-5xl">Sunday 21 June</h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">
                Extended lunch from 12pm, serving the à la carte menu alongside chef's specials
                board and cocktails. Book by phone.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-10">
              <a href="tel:01482326136" className="btn-primary w-full justify-center">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Call to book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Opening times + hygiene rating together — both practical pre-visit info */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="eyebrow">Opening times</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                Opening times and food service.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Food service and opening hours can change with the season and bookings. Please ring
                ahead before travelling for a specific sitting.
              </p>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <dl className="divide-y divide-border border-y border-border">
                {[
                  ["Wednesday", "Open 12:00–21:30 · Food 12:00–14:00 / 17:00–19:30"],
                  ["Thursday", "Open 12:00–21:30 · Food 12:00–14:30 / 17:00–20:00"],
                  ["Friday", "Open 12:00–22:30 · Food 12:00–14:30 / 17:00–20:30"],
                  ["Saturday", "Open 12:00–22:30 · Food 12:00–14:30 / 16:30–20:30"],
                  ["Sunday", "Open 12:00–17:00 · Food 12:00–15:00"],
                ].map(([day, time]) => (
                  <div key={day} className="grid grid-cols-12 gap-4 py-4">
                    <dt className="col-span-4 font-display text-lg md:col-span-3">{day}</dt>
                    <dd className="col-span-8 text-sm text-foreground/80 md:col-span-9">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
