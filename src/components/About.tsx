import { CheckCircle, Car, ShieldCheck } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const DIFFERENTIALS = ['Serviço de qualidade', 'Atendimento ágil', 'Preço justo', 'Equipe especializada'];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-horus-black py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/2 h-[140%] w-[60%] -translate-y-1/2 rotate-[14deg] bg-gradient-to-r from-horus-graphite/0 via-horus-graphite/60 to-horus-graphite/0"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-64 w-[55%] -rotate-[20deg] bg-horus-orange/10"
      />

      <div
        ref={ref}
        className={`reveal relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:items-center lg:gap-10 lg:px-8 ${
          visible ? 'is-visible' : ''
        }`}
      >
        <div>
          <h2 className="font-display text-4xl font-extrabold italic uppercase leading-[1.05] text-white sm:text-5xl">
            Por que escolher a <span className="text-horus-orange">Horus?</span>
          </h2>
          <div aria-hidden="true" className="mt-6 h-1 w-20 -skew-x-[30deg] bg-horus-orange" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
            Somos uma oficina especializada em serviços automotivos, oferecendo soluções completas para seu veículo, com profissionais experientes, atendimento personalizado e compromisso com a qualidade.
          </p>
        </div>

        <ul className="space-y-5 border-y border-white/10 py-8 lg:border-y-0 lg:py-0" aria-label="Diferenciais">
          {DIFFERENTIALS.map((item) => (
            <li key={item} className="flex items-center gap-4 text-lg font-semibold text-white">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-horus-orange/15 text-horus-orange ring-1 ring-horus-orange/40">
                <CheckCircle className="size-5" strokeWidth={2.2} aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-center lg:justify-end">
          <div className="relative grid size-64 place-items-center sm:size-72" role="img" aria-label="Selo Confiança em cada detalhe">
            <span
              aria-hidden="true"
              className="absolute inset-0 rounded-full border-[3px] border-horus-orange shadow-[0_0_40px_rgba(255,106,0,0.35)]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-3 animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-horus-orange/50"
            />
            <span
              aria-hidden="true"
              className="absolute inset-6 rounded-full bg-gradient-to-br from-horus-steel via-horus-graphite to-horus-black shadow-[inset_0_2px_12px_rgba(255,255,255,0.08),0_24px_60px_-20px_rgba(255,106,0,0.35)]"
            />
            <div className="relative flex flex-col items-center text-center">
              <span className="grid size-14 place-items-center rounded-full bg-horus-orange text-horus-black shadow-[0_0_30px_rgba(255,106,0,0.6)]">
                <ShieldCheck className="size-7" strokeWidth={2.2} aria-hidden="true" />
              </span>
              <span className="mt-4 font-display text-3xl font-extrabold italic uppercase leading-none text-white sm:text-4xl">
                Confiança
              </span>
              <span className="mt-1 text-xs font-semibold uppercase tracking-[0.3em] text-horus-orange">
                em cada detalhe
              </span>
              <Car className="mt-4 size-5 text-white/50" strokeWidth={1.8} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
