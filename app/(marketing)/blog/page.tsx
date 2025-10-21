import Link from "next/link"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function BlogIndex() {
  const posts = [
    {
      slug: "telegram-mini-app-guide",
      title: "Telegram Community and Mini Apps: A Comprehensive Guide",
      description:
        "Understand Telegram's community, what Mini Apps are, and learn step-by-step how to build and launch your first Mini App.",
      date: "2025-10-07",
      image: "/telegram-app.png",
      imageAlt: "Telegram Mini App",
      readMinutes: 6,
    },
    {
      slug: "pavel-durov-unplugged",
      title: "Pavel Durov’s Insights",
      description:
        "Highlights from Lex Fridman Podcast #482 on Telegram’s evolution, Mini Apps, TON, and Pavel Durov’s disciplined way of life.",
      date: "2025-10-07",
      image: "/pavel-durov.webp",
      imageAlt: "Pavel Durov",
      readMinutes: 8,
    },
    {
      slug: "telegram-stars",
      title: "Telegram Stars: History, Adoption, Use Cases, and Forecast",
      description:
        "A practical overview of Telegram Stars — how it works, real-world adoption across Mini Apps, success stories, and what to expect next.",
      date: "2025-10-09",
      image: "/telegram-stars.jpg",
      imageAlt: "Telegram Stars",
      readMinutes: 8,
    },
    {
      slug: "korean-local-spa-teletem-mini-app",
      title: "Grow Exposure & Fill Bookings: Telegram Mini App for Local Spa",
      description: "How broadcasts and one‑tap reservations attracted buyers to a Korean local spa.",
      date: "2025-10-21",
      image: "/spa.jpg",
      imageAlt: "Korean Local Spa",
      readMinutes: 5,
    },
  ]

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <p className="text-muted-foreground mb-10">
        Insights on Telegram, TON, and building modern experiences with Mini Apps.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.slug} className="p-6 hover:shadow-lg transition-shadow">
            <Link href={`/blog/${post.slug}`} className="block mb-4 overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={post.imageAlt}
                width={800}
                height={400}
                className="w-full h-40 object-cover rounded-lg"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </Link>
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-muted-foreground mb-3">{post.date} · {post.readMinutes} min read</p>
            <p className="text-muted-foreground mb-4">{post.description}</p>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
              Read more →
            </Link>
          </Card>
        ))}
      </div>
    </main>
  )
}