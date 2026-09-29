import storyImg from '../assets/lu_plakat_500x700_10092024-05.jpg'

export default function Story() {
  return (
    <section className="bg-[var(--color-bg-card)] py-24 md:py-32" id="historia">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="reveal">
            <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
              Nasza historia
            </span>
            <h2 className="font-heading text-3xl leading-tight font-bold text-white md:text-5xl">
              Stworzone z pasji
              <br />
              do piękna.
            </h2>
            <div className="mt-8 space-y-6 text-lg text-white/70">
              <p>
                LU powstało z przekonania, że produkty intymne mogą być piękne, luksusowe i godne
                uwagi. Zbyt długo ta kategoria była marginalizowana — postanowiliśmy to zmienić.
              </p>
              <p>
                Każda butelka LU jest zaprojektowana tak, aby budzić zachwyt i pewność siebie. Nasza
                formuła jest wynikiem miesięcy badań i współpracy z dermatologami, aby zapewnić
                najwyższy komfort i bezpieczeństwo.
              </p>
              <p>
                Wierzymy, że intymność zasługuje na najlepsze — dlatego nie idziemy na żadne
                kompromisy w kwestii jakości, składu ani designu.
              </p>
            </div>
            <p className="mt-10 font-heading text-xl italic text-[var(--color-gold)]">
              Zespół LU
            </p>
          </div>

          <div className="reveal flex justify-center md:justify-end">
            <img
              src={storyImg}
              alt="LU — luksusowy lubrykant w intymnym otoczeniu"
              className="h-auto w-full max-w-md rounded-2xl object-cover shadow-2xl opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
