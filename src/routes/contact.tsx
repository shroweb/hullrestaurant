import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit & Book — Humber Street Opening Times | Humber Fish Co." },
      {
        name: "description",
        content:
          "Opening times, address and contact details for Humber Fish Co. on Humber Street, Hull. Reservations on 01482 326136.",
      },
      { property: "og:title", content: "Visit & Book Humber Fish Co. on Humber Street" },
      { property: "og:description", content: "Opening times, contact details and how to book." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(80),
  email: z.string().trim().email("That email doesn't look right").max(120),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(5, "A few more words?").max(800),
});

function Contact() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = enquirySchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-7">
            <p className="eyebrow">Visit & Book</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] md:text-7xl">
              Book by phone. Eat on Humber Street.
            </h1>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-6">
            <a href="tel:01482326136" className="font-display text-4xl text-deep">
              01482 326136
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              For all reservations. Email is fine for enquiries, but bookings are confirmed on the
              phone.
            </p>
            <a
              href="mailto:info@humberfishco.co.uk"
              className="mt-4 inline-block text-sm underline underline-offset-4"
            >
              info@humberfishco.co.uk
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:grid md:grid-cols-12 md:gap-12 md:px-8">
        {/* Hours */}
        <div className="md:col-span-7">
          <p className="eyebrow">Opening & food service</p>
          <h2 className="mt-3 font-display text-4xl">
            Opening times, food service and closed days.
          </h2>
          <dl className="mt-8 divide-y divide-border border-y border-border">
            {[
              ["Monday", "Closed", true],
              ["Tuesday", "Closed", true],
              ["Wednesday", "12:00 – 21:30 · Food 12:00–14:00 / 17:00–19:30"],
              ["Thursday", "12:00 – 21:30 · Food 12:00–14:30 / 17:00–20:00"],
              ["Friday", "12:00 – 22:30 · Food 12:00–14:30 / 17:00–20:30"],
              ["Saturday", "12:00 – 22:30 · Food 12:00–14:30 / 16:30–20:30"],
              ["Sunday", "12:00 – 17:00 · Food 12:00–15:00"],
            ].map(([day, hours, closed]) => (
              <div key={day as string} className="grid grid-cols-12 gap-4 py-4">
                <dt className="col-span-4 font-display text-lg md:col-span-3">{day}</dt>
                <dd
                  className={`col-span-8 text-sm md:col-span-9 ${closed ? "text-muted-foreground" : "text-foreground/85"}`}
                >
                  {hours}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-xs text-muted-foreground">
            Hours can shift with the seasons and bookings. If you're heading down for a specific
            service, please ring ahead.
          </p>

          <div className="mt-12 bg-sand p-7 md:p-9">
            <p className="eyebrow">Booking terms · in short</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/85">
              <li>· Maximum booking 8. Larger parties possible with notice.</li>
              <li>· Parties over 6 pre-order from the à la carte.</li>
              <li>· No deposits. Please arrive on time — we hold tables for 15 minutes.</li>
              <li>· 1h45 at the table for up to 3 guests; 2h for 4+. Longer when we can.</li>
            </ul>
          </div>
        </div>

        {/* Enquiry */}
        <div className="mt-16 md:col-span-5 md:mt-0">
          <p className="eyebrow">Send an enquiry</p>
          <h2 className="mt-3 font-display text-4xl">
            Questions, allergens or private hire enquiries.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            For private hire, allergens, or anything we haven't answered. Reservations remain by
            phone.
          </p>

          <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
            <div>
              <label className="eyebrow !text-deep" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                maxLength={80}
                className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brass"
              />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="eyebrow !text-deep" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brass"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label className="eyebrow !text-deep" htmlFor="phone">
                  Phone (opt.)
                </label>
                <input
                  id="phone"
                  name="phone"
                  maxLength={30}
                  className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brass"
                />
              </div>
            </div>
            <div>
              <label className="eyebrow !text-deep" htmlFor="message">
                Your enquiry
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                maxLength={800}
                className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm outline-none focus:border-brass"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button type="submit" className="btn-primary w-full justify-center">
              Send enquiry
            </button>
            {status === "ok" && (
              <p className="text-sm text-foreground/85">
                Thanks — we'll be in touch. For a booking, please ring 01482 326136.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="border-t border-border bg-sand">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-3 md:px-8">
          <div>
            <p className="eyebrow">Address</p>
            <p className="mt-2 font-display text-2xl">Humber Street, Hull</p>
            <p className="mt-1 text-sm text-muted-foreground">East Yorkshire</p>
          </div>
          <div>
            <p className="eyebrow">Reservations</p>
            <a href="tel:01482326136" className="mt-2 block font-display text-2xl">
              01482 326136
            </a>
          </div>
          <div>
            <p className="eyebrow">Follow</p>
            <a
              href="https://www.instagram.com/humberfish/"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block font-display text-2xl hover:text-brass"
            >
              @humberfish
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
