"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">EU</span>
            </div>
            <span className="font-bold text-lg text-primary hidden sm:inline">Eastern Utah CPAs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition">
              About
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary transition">
              Team
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:4357890960"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
            >
              <Phone className="w-4 h-4" />
              <span>435-789-0960</span>
            </a>
            <Button asChild className="ml-2" size="sm">
              <Link href="#contact">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
            <Link href="/" className="block text-sm font-medium py-2 hover:text-primary">
              Home
            </Link>
            <Link href="#services" className="block text-sm font-medium py-2 hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="block text-sm font-medium py-2 hover:text-primary">
              About
            </Link>
            <Link href="#team" className="block text-sm font-medium py-2 hover:text-primary">
              Team
            </Link>
            <a href="tel:4357890960" className="block text-sm font-medium py-2 text-primary">
              435-789-0960
            </a>
            <Button asChild className="w-full" size="sm">
              <Link href="#contact">Book Appointment</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
}
