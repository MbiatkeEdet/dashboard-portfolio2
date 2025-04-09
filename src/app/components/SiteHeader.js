"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/20 bg-slate-950/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
            DevPortfolio
          </span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="#profile" className="text-slate-300 hover:text-blue-500 transition-colors">
            Profile
          </Link>
          <Link href="#projects" className="text-slate-300 hover:text-blue-500 transition-colors">
            Projects
          </Link>
          <Link href="#feedback" className="text-slate-300 hover:text-blue-500 transition-colors">
            Feedback
          </Link>
          <Link href="#earnings" className="text-slate-300 hover:text-blue-500 transition-colors">
            Earnings
          </Link>
        </nav>

        <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700">Contact Me</Button>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-slate-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden container px-4 pb-4 bg-slate-950/95 backdrop-blur">
          <nav className="flex flex-col gap-2">
            <Link
              href="#profile"
              className="px-2 py-1.5 text-slate-300 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Profile
            </Link>
            <Link
              href="#projects"
              className="px-2 py-1.5 text-slate-300 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#feedback"
              className="px-2 py-1.5 text-slate-300 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Feedback
            </Link>
            <Link
              href="#earnings"
              className="px-2 py-1.5 text-slate-300 hover:text-blue-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Earnings
            </Link>
            <Button className="mt-2 w-full bg-blue-600 hover:bg-blue-700">Contact Me</Button>
          </nav>
        </div>
      )}
    </header>
  )
}
