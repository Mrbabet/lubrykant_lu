import { CheckCircle2 } from 'lucide-react'

export default function Ingredients() {
  const items = [
    {
      title: 'Baza silikonowa i wodna',
      desc: 'Wybierz idealną konsystencję dla siebie. Opcja silikonowa to ultra-gładkość, wodna to naturalna lekkość.',
    },
    {
      title: 'Witamina E',
      desc: 'Naturalny antyoksydant, nawilża i chroni delikatną skórę.',
    },
    {
      title: 'Bez parabenów',
      desc: 'Czysta formuła bez konserwantów syntetycznych.',
    },
    {
      title: 'Hipoalergiczna',
      desc: 'Dermatologicznie przebadana, bezpieczna dla wrażliwej skóry.',
    },
  ]

  return (
    <section className="bg-[var(--color-bg-card)] py-24 md:py-32" id="skladniki">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="reveal order-2 md:order-1">
            <img
              src="/images/ingredients.jpg"
              alt="Składniki LU — naturalne ingredienty na marmurowej powierzchni"
              className="rounded-2xl object-cover shadow-2xl opacity-90"
              loading="lazy"
            />
          </div>

          <div className="reveal order-1 md:order-2">
            <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
              Czysty skład
            </span>
            <h2 className="font-heading text-3xl leading-tight font-bold text-white md:text-5xl">
              Wiemy, co jest
              <br />w środku.
            </h2>
            <p className="mt-6 mb-10 text-lg text-white/70">
              Każdy składnik w LU został starannie wybrany i przebadany. Nasza formuła to połączenie
              zaawansowanej technologii z dbałością o Twoją skórę.
            </p>

            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[var(--color-gold)]" />
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-white/60">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
