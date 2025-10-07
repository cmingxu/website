import Link from "next/link"

export const metadata = {
  title: "About",
  description: "Learn about telegram-mini-app.dev — our mission, what we build, and how we help you ship Telegram Mini Apps.",
}

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mb-4 prose-h2:mt-10 prose-h2:text-2xl md:prose-h2:text-3xl prose-p:leading-7 prose-ul:list-disc prose-ol:list-decimal prose-li:leading-7 prose-a:text-blue-600 dark:prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">
      <h1>{`About telegram-mini-app.dev`}</h1>
      <p>
        {`telegram-mini-app.dev is a resource and studio focused on building practical, high-quality experiences inside Telegram using Mini Apps. We help creators, brands, and developers launch useful products where communities already live — in chats, channels, and bots.`}
      </p>

      <h2>{`What We Do`}</h2>
      <ul>
        <li>{`Guides and articles that explain Telegram’s ecosystem, Mini Apps, and how to ship fast without compromising quality.`}</li>
        <li>{`Starter templates and best practices to integrate the Telegram Web App SDK, verify initData securely, and design chat-first UX.`}</li>
        <li>{`Consulting and implementation support to turn flows like onboarding, catalog, checkout, and account management into native-feeling Mini App experiences.`}</li>
      </ul>

      <h2>{`Why Telegram Mini Apps`}</h2>
      <p>
        {`Mini Apps let you deliver rich web experiences directly inside Telegram. No extra installs, no app store friction — just tap to open. With a global audience and strong privacy ethos, Telegram is an ideal platform for commerce, services, learning, and community tools.`}
      </p>

      <h2>{`How This Site Is Built`}</h2>
      <p>
        {`This website is built with modern web tooling and simple, readable content. It uses Next.js and Tailwind CSS for clean structure and typography, and keeps assets lightweight for quick loading. Our goal is clarity, speed, and a smooth reading experience across devices.`}
      </p>

      <h2>{`Get In Touch`}</h2>
      <p>
        {`If you want to launch a Mini App or adapt an existing site for Telegram, we can help. Start by exploring the `}
        <Link href="/blog" className="font-semibold hover:underline">blog</Link>
        {` and the homepage at `}
        <Link href="/" className="font-semibold hover:underline">telegram-mini-app.dev</Link>
        {`.`}
      </p>
      <p>
        {`Prefer Telegram? Reach out directly: `}
        <a href="https://t.me/victoleon1979" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          @victoleon1979
        </a>
        {`.`}
      </p>

      <h2>{`Our Principles`}</h2>
      <ul>
        <li>{`Respect for users: private-by-default approaches and transparent handling of data.`}</li>
        <li>{`Utility over hype: build features that solve real problems for communities.`}</li>
        <li>{`Speed with quality: ship quickly, but design thoughtfully for long-term maintainability.`}</li>
      </ul>

      <p>
        {`Thanks for visiting — and if you’re building on Telegram, we’d love to see what you ship next.`}
      </p>
    </main>
  )
}