"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-zinc-900 border-zinc-800 text-white">
        <div className="flex flex-col gap-6 mt-10">
          <Link
            href="#about"
            className="text-lg font-medium hover:text-teal-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-lg font-medium hover:text-teal-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-lg font-medium hover:text-teal-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-lg font-medium hover:text-teal-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Skills
          </Link>
          <Link
            href="#education"
            className="text-lg font-medium hover:text-teal-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Education
          </Link>
          <Link
            href="https://hashnode.com/@tim665"
            target="_blank"
            className="text-lg font-medium hover:text-teal-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium hover:text-teal-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/tim-maina-resume.pdf"
            download="Tim_Maina_Resume.pdf"
            className="text-lg font-medium text-teal-500 hover:text-teal-400 transition-colors"
            onClick={() => setOpen(false)}
          >
            Resume
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

