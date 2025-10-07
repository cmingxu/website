import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Send } from "lucide-react"

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