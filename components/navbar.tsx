"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X, MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5531990725490?text=Vim%20pelo%20site%2C%20gostaria%20de%20fazer%20um%20diagn%C3%B3stico%20gratuito"

const NAV_LINKS = [
  { href: "#diagnostico", label: "Diagnóstico" },
  { href: "#por-que", label: "Por que a Prevox" },
  { href: "#sobre", label: "Sobre nós" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll)
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed left-0 top-0 z-[1100] h-[3px] bg-accent transition-[width] duration-100 ease-out"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed inset-x-0 top-0 z-[1000] border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/90 shadow-sm backdrop-blur-md"
            : "border-transparent bg-background/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <div
            className={`flex items-center transition-all duration-300 ${
              scrolled ? "h-16" : "h-20"
            }`}
          >
            <a href="#hero" className="flex items-center gap-2" aria-label="Prevox - início">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`}
                alt="Prevox - Direito antes do problema"
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-contain"
                priority
              />
            </a>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md md:inline-flex"
          >
            Diagnóstico gratuito
          </a>

          <button
            className="flex items-center justify-center p-2 text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-border bg-background px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-accent-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Diagnóstico gratuito
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
