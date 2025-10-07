import Link from "next/link"

export const metadata = {
  title: "Careers",
  description:
    "Explore open roles at telegram-mini-app.dev — join us to build practical Telegram Mini Apps that communities love.",
}

export default function CareersPage() {
  return (
    <main className="container mx-auto px-4 py-16 max-w-3xl prose prose-neutral dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:mb-4 prose-h2:mt-10 prose-h2:text-2xl md:prose-h2:text-3xl prose-p:leading-7 prose-ul:list-disc prose-ol:list-decimal prose-li:leading-7 prose-a:text-blue-600 dark:prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline">
      <h1>{`Careers at telegram-mini-app.dev`}</h1>
      <p>
        {`We're a resource and studio focused on shipping high-quality experiences inside Telegram using Mini Apps. If you care about utility, privacy, and building fast, we'd love to work with you.`}
      </p>
      <p>
        {`We are on-site in Los Angeles (Westwood District), collaborative and product-driven. Join us to help creators, brands, and developers deliver useful flows directly inside chats, channels, and bots — no extra installs, no app store friction.`}
      </p>

      <h2>{`Frontend Engineer (React/Next.js)`}</h2>
      <p>{`Location: Los Angeles, CA — Westwood District · Type: On-site Full-time`}</p>
      <h3>{`What you'll do`}</h3>
      <ul>
        <li>{`Build responsive, accessible UIs for Mini Apps using React, Next.js, and Tailwind CSS.`}</li>
        <li>{`Integrate the Telegram Web App SDK (theme, viewport, initData) to deliver native-feeling chat-first UX.`}</li>
        <li>{`Own performance and quality: optimize bundle size, rendering, and interactions across devices.`}</li>
        <li>{`Collaborate on a lightweight design system; contribute reusable components and patterns.`}</li>
        <li>{`Ship fast with clear code, thoughtful reviews, and attention to edge cases.`}</li>
      </ul>
      <h3>{`Requirements`}</h3>
      <ul>
        <li>{`3+ years building production web apps with React and TypeScript.`}</li>
        <li>{`Hands-on experience with Next.js (SSR/ISR), routing, data fetching, and state management.`}</li>
        <li>{`Strong CSS fundamentals and Tailwind CSS; accessible and responsive design.`}</li>
        <li>{`Performance mindset: profiling, code splitting, caching, and UX polish.`}</li>
        <li>{`Clear communication in an async, remote setting.`}</li>
      </ul>
      <h3>{`Nice to have`}</h3>
      <ul>
        <li>{`Telegram Web App SDK experience and familiarity with chat-first UX.`}</li>
        <li>{`Design systems, component libraries, and typography best practices.`}</li>
        <li>{`Experience with Next Image, analytics, and A/B testing for growth.`}</li>
      </ul>

      <h2>{`Backend Engineer (Node/TypeScript)`}</h2>
      <p>{`Location: Los Angeles, CA — Westwood District · Type: On-site Full-time`}</p>
      <h3>{`What you'll do`}</h3>
      <ul>
        <li>{`Design and build secure APIs for Mini Apps; integrate webhooks and real-time flows.`}</li>
        <li>{`Implement Telegram initData verification, authentication, and session binding safely.`}</li>
        <li>{`Model data for commerce, services, and community features; ensure scalability and reliability.`}</li>
        <li>{`Integrate payments (fiat/crypto) and external services; maintain auditability and logs.`}</li>
        <li>{`Own code quality, tests, observability, and documentation.`}</li>
      </ul>
      <h3>{`Requirements`}</h3>
      <ul>
        <li>{`3+ years building backends with Node.js and TypeScript.`}</li>
        <li>{`Experience with frameworks like Express, Fastify, or NestJS.`}</li>
        <li>{`Databases (e.g., PostgreSQL) and caching (e.g., Redis); schema design and migrations.`}</li>
        <li>{`Security best practices: input validation, rate limiting, and safe integrations.`}</li>
        <li>{`CI/CD fluency and pragmatic testing (unit/integration).`}</li>
      </ul>
      <h3>{`Nice to have`}</h3>
      <ul>
        <li>{`Experience with TON or Web3 integrations, wallet flows, and payment gateways.`}</li>
        <li>{`Event-driven architectures and message queues.`}</li>
        <li>{`Experience with analytics pipelines and admin tooling.`}</li>
      </ul>

      <h2>{`DevOps / SRE`}</h2>
      <p>{`Location: Los Angeles, CA — Westwood District · Type: On-site Full-time`}</p>
      <h3>{`What you'll do`}</h3>
      <ul>
        <li>{`Own CI/CD pipelines for frontend and backend; automate reliable, repeatable deployments.`}</li>
        <li>{`Provision and manage cloud infrastructure; implement IaC and environment parity.`}</li>
        <li>{`Monitor performance, uptime, and costs; set up logging, alerting, and runbooks.`}</li>
        <li>{`Build secure, scalable containers; guide best practices for Docker/Kubernetes where appropriate.`}</li>
        <li>{`Collaborate with engineers to profile and optimize systems.`}</li>
      </ul>
      <h3>{`Requirements`}</h3>
      <ul>
        <li>{`3+ years in DevOps or SRE roles.`}</li>
        <li>{`Experience with AWS/GCP, Docker, and Terraform (or similar).`}</li>
        <li>{`Strong Linux fundamentals, networking, TLS/HTTPS, and security hygiene.`}</li>
        <li>{`Observability tooling (e.g., Prometheus, Grafana, ELK, or similar).`}</li>
        <li>{`Clear documentation and incident communication.`}</li>
      </ul>
      <h3>{`Nice to have`}</h3>
      <ul>
        <li>{`Experience with Vercel, Cloudflare, or edge runtimes for Next.js.`}</li>
        <li>{`Cost optimization and multi-region strategies.`}</li>
        <li>{`Blue/green, canary, and progressive delivery techniques.`}</li>
      </ul>

      <h2>{`Marketing / Growth`}</h2>
      <p>{`Location: Los Angeles, CA — Westwood District · Type: On-site Full-time`}</p>
      <h3>{`What you'll do`}</h3>
      <ul>
        <li>{`Lead content strategy: articles, guides, case studies, and community updates.`}</li>
        <li>{`Own SEO and distribution; measure impact with analytics and iterate on growth loops.`}</li>
        <li>{`Engage Telegram communities, coordinate partnerships, and amplify product launches.`}</li>
        <li>{`Collaborate with product and engineering to shape messaging and onboarding.`}</li>
        <li>{`Maintain a strong, clear brand voice focused on utility and privacy.`}</li>
      </ul>
      <h3>{`Requirements`}</h3>
      <ul>
        <li>{`3+ years in product marketing, content, or growth roles at tech companies or studios.`}</li>
        <li>{`Hands-on SEO, analytics (e.g., GA4), and content tooling; data-informed decision-making.`}</li>
        <li>{`Excellent copywriting and editorial judgment.`}</li>
        <li>{`Experience with Telegram communities or messaging platforms.`}</li>
        <li>{`Comfort working cross-functionally with product and engineering.`}</li>
      </ul>
      <h3>{`Nice to have`}</h3>
      <ul>
        <li>{`Web3/crypto community experience and creator partnerships.`}</li>
        <li>{`Product-led growth, onboarding optimization, and lifecycle messaging.`}</li>
        <li>{`Technical writing chops and developer-focused content.`}</li>
      </ul>

      <h2>{`Compensation & How to Apply`}</h2>
      <p>
        {`We offer competitive compensation tailored to experience and location. We're pragmatic on structure — full-time or long-term contract depending on fit.`}
      </p>
      <p>
        {`To apply, share a short note with links to your work (GitHub, portfolio, articles) and what you want to build inside Telegram.`}
      </p>
      <p>
        {`Say hello via the `}
        <Link href="/" className="font-semibold hover:underline">homepage</Link>
        {` or on Telegram: `}
        <a href="https://t.me/victoleon1979" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          @victoleon1979
        </a>
        {`.`}
      </p>
    </main>
  )
}