import { ChevronRight } from 'lucide-react';
import Logo from '@/components/Logo';
import WhatsAppLink from '@/components/WhatsAppLink';
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp';

const HERO_IMAGE =
  'https://images.pexels.com/photos/8442905/pexels-photo-8442905.jpeg?auto=compress&cs=tinysrgb&h=1000&w=1400';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-horus-black pt-20"
    >
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <img
          src={HERO_IMAGE}
          alt="SUV moderno preto em uma garagem automotiva com iluminação elegante"
          width={1400}
          height={1000}
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover opacity-60 lg:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-horus-black via-horus-black/85 to-horus-black/20 lg:via-horus-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-horus-black via-transparent to-horus-black/60" />
      </div>

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-40 w-[70%] origin-bottom-right -rotate-[12deg] bg-gradient-to-r from-horus-orange-deep to-horus-orange opacity-95 sm:h-48"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 bottom-10 h-2 w-[60%] origin-bottom-right -rotate-[12deg] bg-horus-orange/80 sm:bottom-16"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 top-28 h-px w-[45%] rotate-[-8deg] bg-gradient-to-r from-transparent via-horus-orange to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <div className="animate-slide-in-left">
            <Logo className="mb-10 h-28 sm:mb-12 sm:h-32" />
          </div>

          <h1 className="font-display text-[2.75rem] font-extrabold italic uppercase leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="block animate-fade-up">Seu carro sempre</span>
            <span
              className="block animate-fade-up text-horus-orange [animation-delay:150ms]"
            >
              em boas mãos!
            </span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-white/75 [animation-delay:300ms] sm:text-xl">
            Manutenção, reparos e cuidados automotivos com qualidade, agilidade e confiança.
          </p>

          <div className="mt-10 flex animate-fade-up flex-col items-stretch gap-6 [animation-delay:450ms] sm:flex-row sm:items-center">
            <WhatsAppLink
              message={WHATSAPP_MESSAGES.hero}
              size="lg"
              fullWidth
              showArrow
            >
              Fale Conosco pelo WhatsApp
            </WhatsAppLink>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-1 text-sm font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-horus-orange"
            >
              Ver serviços
              <ChevronRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
