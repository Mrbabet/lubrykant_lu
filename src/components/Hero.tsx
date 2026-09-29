import heroProductImg from '../assets/LU-S-30-ml.webp'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" id="start">
      {/* Background video */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          src="./images/LU/wideo_intro_landscape.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-32 md:grid-cols-2 md:items-center mt-12">
        {/* Text */}
        <div className="reveal">
          <span className="mb-4 inline-block text-xs font-semibold tracking-[0.25em] text-[var(--color-gold)] uppercase">
            Premium Intimate Care
          </span>
          <h1 className="font-heading text-5xl leading-tight font-bold text-white md:text-7xl">
            Poczuj <em className="not-italic text-[var(--color-gold)]">więcej</em>,
            <br />
            poczuj <em className="not-italic text-[var(--color-gold)]">lepiej</em>.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Luksusowa formuła silikonowa, stworzona z myślą o Twoim komforcie i przyjemności.
            Bez zapachu, bez kompromisów — czysty, jedwabisty dotyk.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kolekcja"
              className="bg-[var(--color-gold)] px-8 py-4 text-sm font-semibold tracking-widest text-black uppercase transition-all hover:-translate-y-0.5 hover:bg-[var(--color-gold-hover)] hover:shadow-lg"
            >
              Odkryj kolekcję
            </a>
            <a
              href="#o-produkcie"
              className="border border-white/30 px-8 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all hover:border-white hover:bg-white hover:text-black"
            >
              Dowiedz się więcej
            </a>
          </div>
        </div>


      </div>
    </section>
  )
}
