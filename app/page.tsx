import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Code2, Zap, Users, Globe, Sparkles, Send, MessageCircle, Rocket, ShoppingCart, Bot, Store } from "lucide-react"
import Script from "next/script"
import Link from "next/link"
import { LogoLoop } from "@/components/LogoLoop"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Squares } from "@/components/effects/Squares"

  export default function Home() {
  const baseUrl = "https://telegram-mini-app.dev";
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Telegram Mini App Builder",
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
    sameAs: [
      "https://t.me", // Telegram
    ],
  };

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Telegram Mini App Builder",
    url: baseUrl,
    applicationCategory: "BusinessApplication",
    description:
      "Create Telegram Mini Apps without coding — drag & drop builder for small businesses, content creators, and Shopify sellers.",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Script id="jsonld-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Script id="jsonld-webapp" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      {/* Navigation */}
      <Header />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares direction="diagonal" speed={0.6} borderColor="#dbeafe" squareSize={40} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-950 rounded-full border border-blue-200 dark:border-blue-800">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">AI‑powered Telegram Mini App builder</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Build your own Telegram Mini App without code
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                Visually drag & drop components and generate your Telegram Mini App. Import products and content from Shopify with a single click.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-12 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-300/30 ring-2 ring-blue-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-blue-400/40 transform hover:scale-[1.02]">
                  <Link href="https://t.me/victoleon1979" target="_blank" rel="noopener noreferrer"><Rocket className="w-5 h-5" /> Start building</Link>
                </Button>

              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-muted-foreground">Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-muted-foreground">No credit card</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg border border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-8 bg-blue-100 dark:bg-blue-900 rounded"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-purple-100 dark:bg-purple-900 rounded"></div>
                        <div className="h-16 bg-green-100 dark:bg-green-900 rounded"></div>
                      </div>
                      <div className="h-12 bg-orange-100 dark:bg-orange-900 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by over 2000+ business owner like you</p>
          <div className="opacity-80">
            <LogoLoop
              logos={[
                <Send key="send" className="h-7 w-auto text-blue-600" />,
                <MessageCircle key="message" className="h-7 w-auto text-blue-600" />,
                <Rocket key="rocket" className="h-7 w-auto text-blue-600" />,
                <ShoppingCart key="cart" className="h-7 w-auto text-blue-600" />,
                <Bot key="bot" className="h-7 w-auto text-blue-600" />,
                <Store key="store" className="h-7 w-auto text-blue-600" />,
                <Globe key="globe" className="h-7 w-auto text-blue-600" />,
                <Users key="users" className="h-7 w-auto text-blue-600" />,
              ]}
              speed={120}
              direction="left"
              width="100%"
              logoHeight={28}
              gap={32}
              pauseOnHover
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Rich features on Telegram & TON for your 1 Billion Users</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              A complete platform for creating production-ready applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">Visual Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build your app&apos;s interface with an intuitive drag-and-drop editor. Design pixel-perfect layouts without
                writing CSS.
              </p>
            </Card>
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Powerful Workflows</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transform existing Shopify or WordPress sites into Telegram mini apps with configurable workflows. Integrate products, checkout, authentication, and webhooks with minimal changes.
              </p>
            </Card>
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Instant Orders for Your Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                Let customers place orders instantly inside your Telegram mini app—no emails or back-and-forth. Configure service packages, pricing, and fulfillment steps, then receive orders via bot and webhooks.
              </p>
            </Card>
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold">Native Fiat and Crypto Payments</h3>
              <p className="text-muted-foreground leading-relaxed">
                Accept card and bank payments alongside TON and crypto seamlessly inside your Telegram mini app. Offer local currencies, instant confirmations, and webhook-driven fulfillment.
              </p>
            </Card>
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">Responsive Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build once, deploy everywhere. Your apps automatically adapt to desktop, tablet, and mobile screens.
              </p>
            </Card>
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold">Instant Deployment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Deploy your app with one click. We handle hosting, scaling, and security so you can focus on building.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">Start building for free today</h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty">
            Join another 2000 builders creating your own Telegram Mini App
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="h-12 px-8 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-300/30 ring-2 ring-blue-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-blue-400/40 transform hover:scale-[1.02]">
                  <Link href="https://t.me/victoleon1979" target="_blank" rel="noopener noreferrer"><Rocket className="w-5 h-5" /> Start building</Link>
                </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-base font-medium px-8 bg-transparent"
            >
              <Link href="https://t.me/victoleon1979" target="_blank" rel="noopener noreferrer">Talk to sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
