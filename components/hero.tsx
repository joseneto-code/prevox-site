import { ShieldCheck, ArrowRight } from "lucide-react"
import { Reveal, WHATSAPP_URL } from "./reveal"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pb-24 pt-36"
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--background),var(--secondary))]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(oklch(0.24_0.05_264/0.04)_1px,transparent_1px),linear-gradient(90deg,oklch(0.24_0.05_264/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_60%_30%,black,transparent_70%)]" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <Reveal className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            <ShieldCheck className="h-4 w-4" />
            Assessoria Jurídica Preventiva por Assinatura
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Sua empresa está exposta.{" "}
            <span className="text-accent">Você só não sabe onde.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A PREVOX oferece assessoria jurídica preventiva por assinatura para
            pequenas e médias empresas, com orientação clara, previsibilidade de
            custos e foco na prevenção de riscos antes que eles se transformem em
            problemas.
          </p>

          <p className="mt-4 text-lg text-foreground">
            Planos a partir de{" "}
            <strong className="font-bold text-accent">R$ 297 por mês</strong>.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
          >
            Descobrir meu nível de proteção jurídica
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
