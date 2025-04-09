import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SiteFooter() {
  return (
    <footer className="border-t border-blue-900/20 bg-slate-950 py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text"
            >
              DevPortfolio
            </Link>
            <p className="text-slate-400 mt-1 text-center md:text-left">Building exceptional digital experiences</p>
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-slate-300 hover:text-blue-500 hover:bg-slate-900"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-slate-300 hover:text-blue-500 hover:bg-slate-900"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-slate-300 hover:text-blue-500 hover:bg-slate-900"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full text-slate-300 hover:text-blue-500 hover:bg-slate-900"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-blue-900/10 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} Mbiatke Nkanta. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
