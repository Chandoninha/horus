import WhatsAppLink from '@/components/WhatsAppLink';
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative isolate overflow-hidden bg-horus-black py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 -top-32 h-72 w-[48%] -rotate-[18deg] bg-gradient-to-r from-horus-orange to-horus-orange-deep opacity-90"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 -top-16 h-2 w-[40%] -rotate-[18deg] bg-horus-orange-soft/80"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-24 h-72 w-[52%] -rotate-[18deg] bg-gradient-to-l from-horus-orange to-horus-orange-deep opacity-90"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -right-16 h-2 w-[42%] -rotate-[18deg] bg-horus-orange-soft/80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,106,0,0.12),transparent_60%)]"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center lg:px-8">
        <h2 className="font-display text-4xl font-extrabold italic uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
          Entre em contato <span className="text-horus-orange">agora mesmo!</span>
        </h2>
        <p className="mt-6 max-w-xl text-base text-white/75 sm:text-lg">
          Solicite um orçamento ou tire suas dúvidas diretamente pelo WhatsApp.
        </p>
        <div className="mt-10 w-full sm:w-auto">
          <WhatsAppLink message={WHATSAPP_MESSAGES.contact} size="lg" fullWidth showArrow>
            Falar com a Horus
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
