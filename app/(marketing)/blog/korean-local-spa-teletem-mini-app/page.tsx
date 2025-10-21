import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Boost Exposure & Fill Bookings: How a Local Spa Wins with Telegram Mini App",
  description:
    "See how a Korean local spa used Telegram Mini App broadcasts and one‑tap reservations to boost exposure, drive foot traffic, and sell services—fast.",
  openGraph: {
    type: "article",
    title: "Boost Exposure & Fill Bookings: How a Local Spa Wins with Telegram Mini App",
    description:
      "Broadcasts that sell, one‑tap reservations that convert, and a simple flow that turns interest into paying customers.",
    images: [{ url: "/spa.jpg", width: 1200, height: 800, alt: "Korean local spa – warmth, steam, and cedar." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Exposure. Fill Bookings. Sell Services—Inside Telegram.",
    description:
      "Learn how broadcasts + one‑tap reservations help small businesses attract buyers and drive revenue.",
    images: ["/spa.jpg"],
  },
};

export default function BlogPost() {
  return (
    // Replace outer wrapper to use blog layout's <main>
    <main className="container mx-auto px-4 py-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border">
            <Image
              src="/spa.jpg"
              alt="Steam drifting across warm tiles in a Korean local spa"
              width={1600}
              height={1000}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto pb-20 mt-10">
        <h1 className="text-4xl font-bold tracking-tight mb-6 text-balance">
          Grow Exposure. Fill Bookings. Sell Services—Inside Telegram.
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Meet Mr. Han, a local spa owner in Mapo, Seoul. He turned quiet days into fully booked evenings by using a Telegram Mini App to broadcast offers and enable one‑tap reservations. The result: more eyes on his services, faster decisions, and customers who tap to buy.
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <h2 className="text-2xl font-semibold">What made it work</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><span className="font-medium">Broadcasts that sell</span> — Daily posts announce fresh steam blends, limited slots, and special bundles. Messages land where attention lives: in customers’ chats.</li>
            <li><span className="font-medium">One‑tap reservations</span> — Interest becomes action in seconds. No phone calls. No forms. Customers reserve with a tap.</li>
            <li><span className="font-medium">Automated reminders</span> — Fewer no‑shows and smoother schedules. Customers get nudges at the right time.</li>
            <li><span className="font-medium">Simple bundles and add‑ons</span> — Upsell gently with charcoal resets, herbal upgrades, and group bookings—all configured once.</li>
            <li><span className="font-medium">Real‑time calendar</span> — Slots update instantly, so buyers see what’s available now.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10">The impact</h2>
          <p>
            More people saw the spa’s offers, more customers reserved, and sessions ran on time. Instead of hoping passersby would notice a sign, Mr. Han puts his services directly in front of buyers—and makes acting on that interest effortless.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-sm text-muted-foreground">Exposure</p>
              <p className="text-2xl font-bold">Up</p>
              <p className="text-sm text-muted-foreground mt-1">Broadcasts reach subscribers instantly</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-sm text-muted-foreground">Reservations</p>
              <p className="text-2xl font-bold">Faster</p>
              <p className="text-sm text-muted-foreground mt-1">One‑tap converts interest to bookings</p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <p className="text-sm text-muted-foreground">Sales</p>
              <p className="text-2xl font-bold">Higher</p>
              <p className="text-sm text-muted-foreground mt-1">Upsells packaged as add‑ons</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mt-10">Why it’s compelling</h2>
          <p>
            Buyers don’t browse for long—they act when friction is low. Telegram Mini Apps turn your service into a chat‑native storefront: announce, reserve, remind, and deliver. That’s how you boost exposure and attract people who are ready to buy.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="h-12 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-300/30 ring-2 ring-blue-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-blue-400/40 transform hover:scale-[1.02]">
            <Link href="mailto:cming.xu@gmail.com" target="_blank" rel="noopener noreferrer">Start building your Mini App</Link>
          </Button>
          <Button variant="outline" asChild size="lg" className="h-12 px-8">
            <Link href="/">See how broadcasts convert</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}