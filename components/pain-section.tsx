import {
  FileWarning,
  UserX,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
} from "lucide-react"
import { Reveal, WHATSAPP_URL } from "./reveal"

const PAINS = [
  {
    icon: FileWarning,
    text: "Assinou um contrato sem saber se estava de fato protegido",
  },
  {
    icon: UserX,
    text: "Contratou alguém sem formalizar e torce para não dar problema",
  },
  {
    icon: HelpCircle,
    text: "Tomou uma decisão importante sem ter com quem consultar",
  },
  {
    icon: AlertTriangle,
    text: "Já enfrentou uma situação que poderia ter sido evitada com orientação jurídica prévia.",
  },
]

export function PainSection() {
  return (
    <section
      id="dor"
      className="relative overflow-hidden border-y border-border bg-secondary py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance text-center font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Você reconhece alguma dessas situações?
          </h2>
        </Reveal>

        <ul className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
          {PAINS.map((pain, i) => (
            <Reveal key={pain.text} delay={i * 80}>
              <li className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:translate-x-1.5 hover:border-accent hover:shadow-md">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <pain.icon className="h-5 w-5" />
                </span>
                <span className="pt-1.5 text-base leading-relaxed text-card-foreground">
                  {pain.text}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
            Se alguma dessas situações parece familiar, talvez seja o momento de
            estruturar a proteção jurídica da sua empresa antes que o problema
            aconteça.
          </p>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Descobrir onde minha empresa está exposta
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
