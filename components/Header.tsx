"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Send, ChevronDown } from "lucide-react"

export function Header() {
  return (
    <nav className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Telegram Mini App Builder</span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-foreground hover:text-blue-600 transition-colors">
                Product
              </a>
              <div className="relative group">
                <button className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-blue-600 transition-colors">
                  Use cases <ChevronDown className="w-4 h-4" />
                </button>
                <div className="pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <div className="absolute left-0 mt-3 w-[640px] p-4 rounded-2xl border border-blue-200/50 bg-white shadow-xl shadow-blue-300/20 ring-1 ring-blue-200/40 transition-all duration-300 group-hover:translate-y-1 group-hover:scale-[1.01]">
                    <div className="grid grid-cols-2 gap-4">
                      <Link href="#" className="group/item rounded-lg p-4 border border-transparent hover:border-blue-300/50 hover:bg-gradient-to-br hover:from-blue-50/60 hover:to-indigo-50/40 hover:shadow-md hover:shadow-blue-200/40 transition-all">
                        <h4 className="text-sm font-semibold group-hover/item:text-blue-600">Local services (SMB)</h4>
                        <p className="mt-1 text-xs text-muted-foreground">Launch a Telegram mini app to let neighborhood customers book and pay for your services instantly.</p>
                      </Link>
                      <Link href="#" className="group/item rounded-lg p-4 border border-transparent hover:border-blue-300/50 hover:bg-gradient-to-br hover:from-blue-50/60 hover:to-indigo-50/40 hover:shadow-md hover:shadow-blue-200/40 transition-all">
                        <h4 className="text-sm font-semibold group-hover/item:text-blue-600">Shopify & WordPress</h4>
                        <p className="mt-1 text-xs text-muted-foreground">Extend your store or site into Telegram—import products, sync orders, and grow where your users are.</p>
                      </Link>
                      <Link href="#" className="group/item rounded-lg p-4 border border-transparent hover:border-blue-300/50 hover:bg-gradient-to-br hover:from-blue-50/60 hover:to-indigo-50/40 hover:shadow-md hover:shadow-blue-200/40 transition-all">
                        <h4 className="text-sm font-semibold group-hover/item:text-blue-600">Digital goods sellers</h4>
                        <p className="mt-1 text-xs text-muted-foreground">Sell e-books, courses, codes, and subscriptions natively in Telegram with instant fulfillment.</p>
                      </Link>
                      <Link href="#" className="group/item rounded-lg p-4 border border-transparent hover:border-blue-300/50 hover:bg-gradient-to-br hover:from-blue-50/60 hover:to-indigo-50/40 hover:shadow-md hover:shadow-blue-200/40 transition-all">
                        <h4 className="text-sm font-semibold group-hover/item:text-blue-600">Creators & Stars</h4>
                        <p className="mt-1 text-xs text-muted-foreground">Launch a fan mini app for exclusive content, drops, and membership with native payments.</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" className="text-sm font-medium text-foreground hover:text-blue-600 transition-colors">
                Solutions
              </a>
              <Link href="/blog" className="text-sm font-medium text-foreground hover:text-blue-600 transition-colors">
                Blogs
              </Link>
              <a href="#" className="text-sm font-medium text-foreground hover:text-blue-600 transition-colors">
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" className="text-sm font-medium">
              <Link href="https://t.me/victoleon1979" target="_blank" rel="noopener noreferrer">Log in</Link>
            </Button>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium">
              <Link href="https://t.me/victoleon1979" target="_blank" rel="noopener noreferrer">Start building</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}