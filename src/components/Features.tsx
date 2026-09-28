import { Droplet, ShieldCheck, Sparkles } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Droplet className="h-8 w-8 text-[var(--color-gold)]" />,
      title: 'Baza silikonowa',
      desc: 'Ultra-długotrwała formuła na bazie silikonu zapewnia jedwabistą gładkość, która nie wymaga ponownej aplikacji. Nie rozpuszcza się w wodzie.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[var(--color-gold)]" />,
      title: 'Bezpieczna formuła',
      desc: 'Dermatologicznie przetestowana, hipoalergiczna i bezpieczna dla ciała. Bez parabenów, gliceryny i sztucznych barwników.',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-[var(--color-gold)]" />,
      title: 'Premium design',
      desc: 'Elegancka butelka z matowego szkła, którą z dumą postawisz na szafce nocnej. Dyskretna, piękna i funkcjonalna.',
    },
  ]

  return (
    <section className="bg-[var(--color-bg)] pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${i + 1} flex flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-gold)]`}
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-gold-muted)]">
                {f.icon}
              </div>
              <h3 className="mb-4 font-heading text-xl font-bold text-white">{f.title}</h3>
              <p className="text-white/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
