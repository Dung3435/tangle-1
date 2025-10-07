"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-sm border-b border-primary-foreground/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              className="text-2xl font-serif font-bold tracking-tight text-primary-foreground"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              MARTINO FUNERAL
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#gioi-thieu"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Giới Thiệu
            </a>
            <a
              href="#dich-vu"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Dịch Vụ
            </a>
            <a
              href="#goi-dich-vu"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Gói Dịch Vụ
            </a>
            <a
              href="#quy-trinh"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Quy Trình
            </a>
            <a
              href="#lien-he"
              className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              Liên Hệ
            </a>
            <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Phone className="h-4 w-4" />
              1900 xxxx
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-4">
              <a
                href="#gioi-thieu"
                className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Giới Thiệu
              </a>
              <a
                href="#dich-vu"
                className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Dịch Vụ
              </a>
              <a
                href="#goi-dich-vu"
                className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Gói Dịch Vụ
              </a>
              <a
                href="#quy-trinh"
                className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Quy Trình
              </a>
              <a
                href="#lien-he"
                className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                Liên Hệ
              </a>
              <Button className="gap-2 w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <Phone className="h-4 w-4" />
                1900 xxxx
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
