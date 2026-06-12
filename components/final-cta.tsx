import { ArrowRight } from "lucide-react"
import { Reveal, WHATSAPP_URL } from "./reveal"

export function FinalCta() {
  return (
    <section
      id="cta-final"
      className="relative overflow-hidden border-t border-border bg-primary py-24 text-primary-foreground"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
            Sua empresa merece crescer com mais segurança jurídica.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75">
            Comece pelo diagnóstico e descubra, de forma simples e objetiva, os
            principais pontos de atenção da sua operação.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Fazer meu diagnóstico gratuito
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="mt-12 font-heading text-lg font-bold tracking-wide">
            PREVOX. <span className="text-accent">Direito antes do problema.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
