import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const opinions = [
    {
      text: 'Nigdy nie sądziłam, że lubrykant może być tak elegancki. LU zmienił moje podejście do intymnej pielęgnacji — czuję się pięknie i komfortowo.',
      author: 'Katarzyna M.',
      city: 'Warszawa',
    },
    {
      text: 'Kupiliśmy LU z ciekawości i nie wróciliśmy już do niczego innego. Konsystencja jest absolutnie idealna — jedwabista i naturalna.',
      author: 'Anna i Tomek',
      city: 'Kraków',
    },
    {
      text: 'Wreszcie produkt intymny, którego nie trzeba chować w szufladzie. LU wygląda jak luksusowy kosmetyk i działa jeszcze lepiej.',
      author: 'Marta S.',
      city: 'Wrocław',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % opinions.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [opinions.length])

  return (
    <section className="bg-[var(--color-bg)] py-24 md:py-32" id="opinie">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="reveal mb-16">
          <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
            Opinie klientek
          </span>
          <h2 className="font-heading text-3xl leading-tight font-bold text-white md:text-5xl">
            Zaufały nam tysiące
            <br />
            zadowolonych par.
          </h2>
        </div>

        <div className="reveal relative min-h-[250px]">
          {opinions.map((op, i) => (
            <div
              key={i}
              className={`absolute top-0 left-0 w-full transition-opacity duration-1000 ${
                active === i ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <div className="mb-8 flex justify-center gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-[var(--color-gold)] text-[var(--color-gold)]" />
                ))}
              </div>
              <blockquote className="mb-8 font-heading text-2xl italic leading-relaxed text-white md:text-3xl">
                „{op.text}”
              </blockquote>
              <cite className="font-semibold text-white/60 not-italic">
                — {op.author}, {op.city}
              </cite>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 flex justify-center gap-3">
          {opinions.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 transition-all duration-300 ${
                active === i ? 'w-8 bg-[var(--color-gold)]' : 'w-2 bg-white/20 hover:bg-white/40'
              } rounded-full`}
              aria-label={`Przejdź do opinii ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
