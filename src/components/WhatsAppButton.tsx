import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppUrl(WHATSAPP_MESSAGES.floating)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com a Horus pelo WhatsApp"
      className="group fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-horus-green text-horus-black shadow-[0_12px_32px_-6px_rgba(0,200,83,0.6)] transition-transform duration-300 hover:scale-110 sm:bottom-8 sm:right-8 sm:size-16"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-horus-green animate-pulse-ring"
      />
      <MessageCircle className="relative size-7 sm:size-8" strokeWidth={2.2} aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-full bg-horus-graphite px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-lg ring-1 ring-white/10 transition-all duration-300 group-hover:opacity-100 max-md:hidden">
        Fale conosco
      </span>
    </a>
  );
}
