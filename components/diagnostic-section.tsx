import {
  FileText,
  Users,
  Lock,
  Building2,
  TrendingUp,
  ArrowRight,
} from "lucide-react"
import { Reveal, WHATSAPP_URL } from "./reveal"

const AREAS = [
  { icon: FileText, label: "Contratos e relacionamentos" },
  { icon: Users, label: "Equipe e riscos trabalhistas" },
  { icon: Lock, label: "Proteção de dados e LGPD" },
  { icon: Building2, label: "Estrutura empresarial" },
  { icon: TrendingUp, label: "Crescimento e relacionamento com clientes" },
]

export function DiagnosticSection() {
  return (
    <section id="diagnostico" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-balance text-center font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Descubra o nível de proteção jurídica da sua empresa
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
            Em menos de 5 minutos, o Diagnóstico de Maturidade Jurídica Prevox
            avalia as 5 áreas mais críticas da sua operação:
          </p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <Reveal key={area.label} delay={i * 70}>
              <div className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <area.icon className="h-6 w-6" />
                </span>
                <p className="text-base font-semibold leading-snug text-card-foreground">
                  {area.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-pretty text-lg leading-relaxed text-foreground">
              Você recebe um resultado personalizado, área por área e descobre
              exatamente onde sua empresa está vulnerável.
            </p>
            <p className="mt-3 text-pretty text-base italic leading-relaxed text-muted-foreground">
              O diagnóstico leva menos de 5 minutos e ajuda a identificar
              vulnerabilidades que podem comprometer a segurança jurídica do seu
              negócio.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            Quero fazer o diagnóstico agora
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
