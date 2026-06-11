import { createFileRoute } from "@tanstack/react-router";
import { Download, PhoneCall } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const menuPdf = "https://humberfishco.co.uk/onewebmedia/fish%20co%20new%20menu%20APR%202025.pdf";

const menuImages = {
  cover:
    "https://humberfishco.co.uk/onewebmedia/Screenshot%202026-05-08%20at%2008.32.42.png?etag=%2231640-69fd9274%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1183,1676&quality=85",
  page: "https://humberfishco.co.uk/onewebmedia/Screenshot%202026-05-08%20at%2008.34.03.png?etag=%2213ea7a-69fd9292%22&sourceContentType=image%2Fpng&ignoreAspectRatio&resize=1183,1676&quality=85",
  seafood: "https://humberfishco.co.uk/onewebmedia/achtergrond-2___serialized1.jpg",
  platter: "https://the-yorkshireman.com/wp-content/uploads/2024/05/HUMBER-FISH-CO-2-858x1024.jpeg",
};

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Oysters, Shellfish & Humber Mains | Humber Fish Co." },
      {
        name: "description",
        content:
          "Humber Fish Co. menu, specials, seafood platters, oysters, lobster, fish and chips, allergen notes and booking details.",
      },
      { property: "og:title", content: "Humber Fish Co. Menu — Shellfish, Platters & Specials" },
      {
        property: "og:description",
        content:
          "Seafood, crustacea, chilled platters, Humber mains and specials on Humber Street.",
      },
      { property: "og:image", content: menuImages.platter },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

const menuSections = [
  {
    title: "Nibbles",
    items: [
      ["Warm breads", "Flavoured butter, whipped cream cheese and olives", "£7"],
      ["Crispy breaded whitebait", "", "£8"],
      ["Smoked salmon and cream cheese blinis", "", "£8"],
      ["Half pint prawns", "Marie Rose and lemon", "£9"],
      ["Marinated white anchovies", "Olive oil, sea salt and parsley", "£7"],
    ],
  },
  {
    title: "Starters",
    items: [
      [
        "Signature prawn and king prawn cocktail",
        "Marie Rose dressing, brown bread and lemon",
        "£14",
      ],
      [
        "Sauteed large tiger king prawns",
        "Fresh chilli, garlic and herb butter, mini garlic loaf",
        "£15",
      ],
      ["Crispy pepper squid", "Chinese Szechuan pepper, citrus and chive mayonnaise", "£12"],
      ["Crab on toast", "White and brown crab meat, crab butter and sweet ketchup", "£13"],
      [
        "The Smokie Board",
        "Smoked trout, salmon, gravadlax, mackerel pate, brown bread and cream cheese",
        "£20",
      ],
    ],
  },
  {
    title: "Seafood & crustacea",
    items: [
      ["Lindisfarne oysters", "3 for £12, 6 for £23, 12 for £42", ""],
      [
        "Prawnzilla",
        "Supersized prawns grilled with garlic, green herb butter and potato or garlic bread",
        "£46",
      ],
      [
        "Steamed mussels",
        "Shetland mussels, crusty tin loaf, choice of Mariniere, Thai spiced or Diablo",
        "£14 / £20",
      ],
      ["East Coast lobster", "Grilled with garlic butter, tomato salad and fries", "MP"],
      [
        "Fruit de Mer",
        "Mussels, king prawns, squid, crevettes, scallop and monkfish",
        "£50 / £100",
      ],
    ],
  },
  {
    title: "Humber mains",
    items: [
      [
        "Traditional fish stew",
        "Monkfish, king prawns, mussels and squid with roast vegetables, tomato, garlic and potato",
        "£29",
      ],
      [
        "Seafood Diablo",
        "Scallops, king prawns, monkfish and squid in spicy tomato sauce with lobster stock",
        "£35",
      ],
      [
        "East Coast fish and chips",
        "Skinless and boneless haddock, hand-cut chips, mushy peas and tartare sauce",
        "£20",
      ],
      [
        "Sriracha monkfish",
        "Spiced batter, lime and garlic, fries, sriracha and citrus mayonnaise",
        "£29",
      ],
      [
        "Thai spiced halibut",
        "Roast halibut steak, Thai style sauce, king prawns and sticky rice",
        "£35",
      ],
    ],
  },
];

const platterItems = [
  [
    "The Skippers Haul",
    "Whole lobster, dressed crab, oysters, mussels, crevettes, prawns, smoked fish and warm bread",
    "£150",
  ],
  [
    "The Shipmate",
    "Smoked salmon, trout, prawn cocktail, oysters, Scottish mussels, roll mop herring and prawns",
    "£43 per head",
  ],
  [
    "Crab platter",
    "Dressed East Coast crab, shell-on prawns, crevette, salad, sauces and fries or bread",
    "£26",
  ],
  [
    "Seafood antipasti",
    "Mackerel pate, smoked salmon and trout, prawns, boquerones, olives and warm bread",
    "£34",
  ],
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-12 md:px-8 md:py-18">
          <div className="md:col-span-5">
            <p className="eyebrow">Menu</p>
            <h1 className="mt-4 max-w-[10ch] font-display text-4xl leading-[1.06] sm:max-w-none sm:text-5xl md:text-7xl">
              Oysters, shellfish, whole fish and Humber mains.
            </h1>
            <p className="mt-6 max-w-[32ch] text-base leading-relaxed text-foreground/85 sm:max-w-lg">
              The menu below is based on the restaurant's current published menu. Specials change
              with the catch, the season and what is worth serving on the day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={menuPdf}
                target="_blank"
                rel="noreferrer"
                className="btn-primary w-full justify-center sm:w-auto"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download menu
              </a>
              <a href="tel:01482326136" className="btn-ghost w-full justify-center sm:w-auto">
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                Call to book
              </a>
            </div>
            <p className="mt-5 max-w-[35ch] text-sm text-muted-foreground sm:max-w-none">
              For today's specials, lobster availability, market price dishes or allergens, please
              call the restaurant on 01482 326136.
            </p>
          </div>
          <div className="md:col-span-7">
            <img
              src={menuImages.seafood}
              alt="Fresh fish, crab, prawns and shellfish"
              className="aspect-[5/4] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="wood-panel border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 md:grid-cols-3 md:px-8">
          <div className="border border-border/70 bg-background/88 p-5">
            <p className="eyebrow">Specials</p>
            <p className="mt-3 font-display text-2xl">Ask what landed</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Fish, shellfish and lobster change with availability.
            </p>
          </div>
          <div className="border border-border/70 bg-background/88 p-5">
            <p className="eyebrow">Catch</p>
            <p className="mt-3 font-display text-2xl">East coast where possible</p>
            <p className="mt-2 text-sm text-muted-foreground">
              The menu notes that most fish and seafood is caught off England's east coast where
              possible.
            </p>
          </div>
          <div className="border border-border/70 bg-background/88 p-5">
            <p className="eyebrow">Service</p>
            <p className="mt-3 font-display text-2xl">Cooked as ordered</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Small waits can happen at busy times; the kitchen is a husband and wife team.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
          {menuSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-baseline gap-4">
                <h2 className="font-display text-3xl">{section.title}</h2>
                <div className="pink-rule mb-1" />
              </div>
              <ul className="mt-6 divide-y divide-border">
                {section.items.map(([name, detail, price]) => (
                  <li key={name} className="grid grid-cols-[1fr_auto] gap-4 py-4">
                    <div>
                      <p className="font-display text-lg leading-tight">{name}</p>
                      {detail && (
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {detail}
                        </p>
                      )}
                    </div>
                    {price && <p className="font-mono text-sm text-brass">{price}</p>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
          <div className="md:col-span-4">
            <p className="eyebrow !text-brass">Chilled seafood platters</p>
            <h2 className="mt-3 font-display text-4xl text-primary-foreground md:text-5xl">
              Shellfish to share, if you can.
            </h2>
          </div>
          <div className="grid gap-px bg-white/10 md:col-span-8 md:grid-cols-2">
            {platterItems.map(([name, detail, price]) => (
              <div key={name} className="bg-deep p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl text-primary-foreground">{name}</h3>
                  <p className="font-mono text-sm text-brass">{price}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Printed menu</p>
            <h2 className="mt-3 font-display text-4xl">View the full menu PDF.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The full menu image is included for guests who want to scan the original layout,
              prices and small-print notes.
            </p>
            <a href={menuPdf} target="_blank" rel="noreferrer" className="btn-primary mt-6">
              <Download className="h-4 w-4" aria-hidden="true" />
              Open PDF
            </a>
          </div>
          <div className="grid gap-4 md:col-span-8 md:grid-cols-2">
            <img
              src={menuImages.cover}
              alt="Humber Fish Co. menu cover"
              className="w-full border border-wood/50 bg-card"
              loading="lazy"
            />
            <img
              src={menuImages.page}
              alt="Humber Fish Co. published menu with dish prices"
              className="w-full border border-wood/50 bg-card"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="wood-panel border-y border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8">
          <div className="md:col-span-5">
            <p className="eyebrow">Allergens</p>
            <h2 className="mt-3 font-display text-3xl">Please speak to us about allergies.</h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-foreground/85 md:col-span-6 md:col-start-7">
            <p>
              Humber Fish Co. is a dedicated seafood and crustacea restaurant. Milk, eggs, wheat,
              soy, peanuts, tree nuts, fish and shellfish are present in the open-plan kitchen, and
              cross-contamination is possible.
            </p>
            <p>
              Gluten-free and dairy-intolerant options can often be adapted from the à la carte menu
              and specials board. The fryers contain gluten products, so gluten-free fish and chips
              are not available.
            </p>
            <p>For specific dietary needs, call 01482 326136 before booking.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-12">
          <img
            src={menuImages.platter}
            alt="Humber Fish Co. seafood platter"
            className="aspect-[4/3] w-full object-cover md:col-span-7"
            loading="lazy"
          />
          <div className="bg-deep p-8 text-primary-foreground md:col-span-5 md:p-12">
            <p className="eyebrow !text-brass">Gift vouchers</p>
            <h3 className="mt-3 font-display text-3xl text-primary-foreground">
              A seafood gift, bought at the bar.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
              Gift vouchers sell out. Please call ahead or ask in the restaurant for current
              availability.
            </p>
            <a
              href="tel:01482326136"
              className="mt-6 inline-flex border border-brass px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-brass hover:bg-brass hover:text-deep"
            >
              Call 01482 326136
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
