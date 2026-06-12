import { Check, ArrowRight, Scale } from "lucide-react"
import { Reveal, WHATSAPP_URL } from "./reveal"

const CHECKS = [
  "Atendimento realizado por advogados",
  "Linguagem clara e objetiva",
  "Foco em pequenas e médias empresas",
  "Tecnologia aliada à experiência jurídica",
]

export function AboutSection() {
  return (
    <section id="sobre" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Scale className="h-7 w-7" />
          </div>
          <h2 className="mx-auto max-w-3xl text-balance text-center font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Proteção jurídica construída por quem vive a realidade das empresas.
          </h2>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              A PREVOX foi criada por advogados que atuam diariamente na
              prevenção e solução de problemas enfrentados por empresas.
            </p>
            <p>
              Ao longo dos anos, percebemos um padrão: muitas empresas procuram
              orientação jurídica apenas quando o problema já aconteceu.
              Contratos assinados sem análise, contratações realizadas sem
              suporte adequado, riscos trabalhistas ignorados e decisões
              importantes tomadas sem segurança jurídica.
            </p>
            <p className="font-semibold text-foreground">
              Foi para mudar essa lógica que a PREVOX foi criada.
            </p>
            <p>
              Nosso objetivo é tornar o suporte jurídico mais acessível, próximo
              e preventivo, ajudando empresários a tomar decisões com mais
              segurança antes que os problemas apareçam.
            </p>
          </div>
        </Reveal>

        <ul className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {CHECKS.map((item, i) => (
            <Reveal key={item} delay={i * 70}>
              <li className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-base font-semibold text-card-foreground">
                  {item}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Descobrir meu nível de proteção jurídica
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
