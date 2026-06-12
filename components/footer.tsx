import Image from "next/image"
import { MapPin } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row">
        <div>
          <a href="#hero" className="flex items-center gap-2" aria-label="Prevox - início">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`}
              alt="Prevox - Direito antes do problema"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-contain"
            />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            © {year} Prevox — Assessoria Jurídica Preventiva por Assinatura
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Belo Horizonte / MG
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-end">
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            Política de Privacidade
          </a>
          <a
            href="#"
            className="text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            Termos de Uso
          </a>
          <a
            href="https://www.instagram.com/prevox.adv/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
            aria-label="Instagram da Prevox"
          >
            <InstagramIcon className="h-5 w-5" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}
