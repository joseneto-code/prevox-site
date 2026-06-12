import { Wallet, ShieldCheck, MessagesSquare, Building } from "lucide-react"
import { Reveal } from "./reveal"

const FEATURES = [
  {
    icon: Wallet,
    title: "Mensalidade previsível",
    text: "Sem surpresas financeiras: você sabe exatamente quanto vai investir.",
  },
  {
    icon: ShieldCheck,
    title: "Atuação preventiva",
    text: "Voltada à redução de riscos e à antecipação de problemas.",
  },
  {
    icon: MessagesSquare,
    title: "Comunicação clara",
    text: "Linguagem acessível e alinhada à realidade empresarial.",
  },
  {
    icon: Building,
    title: "Feito para PMEs",
    text: "Suporte jurídico próximo, prático e eficiente para pequenas e médias empresas.",
  },
]

export function WhySection() {
  return (
    <section
      id="por-que"
      className="border-y border-border bg-secondary py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance text-center font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Jurídico que fala a língua do seu negócio
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                    {feature.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
