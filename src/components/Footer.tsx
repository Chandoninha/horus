import { Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import Logo from '@/components/Logo';
import { COMPANY } from '@/lib/company';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';

const SOCIAL_LINK_CLASS =
  'grid size-11 place-items-center rounded-full border border-white/15 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-horus-orange hover:bg-horus-orange hover:text-horus-black';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-horus-graphite">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-horus-orange to-transparent"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">
            Manutenção, reparos e cuidados automotivos com qualidade, agilidade e confiança.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.footer)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale pelo WhatsApp"
              className="grid size-11 place-items-center rounded-full bg-horus-green text-horus-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-horus-green-deep"
            >
              <MessageCircle className="size-5" strokeWidth={2.2} aria-hidden="true" />
            </a>
            <a
              href={COMPANY.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Horus"
              className={SOCIAL_LINK_CLASS}
            >
              <Instagram className="size-5" aria-hidden="true" />
            </a>
            <a
              href={COMPANY.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver localização no Google Maps"
              className={SOCIAL_LINK_CLASS}
            >
              <MapPin className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wider text-horus-orange">
            Endereço
          </h3>
          <a
            href={COMPANY.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-white/75 transition-colors hover:text-white"
          >
            <MapPin className="mt-0.5 size-5 shrink-0 text-horus-orange" aria-hidden="true" />
            <span>{COMPANY.address}</span>
          </a>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase tracking-wider text-horus-orange">
            Telefone
          </h3>
          <a
            href={COMPANY.phoneHref}
            className="mt-4 flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-white"
          >
            <Phone className="size-5 shrink-0 text-horus-orange" aria-hidden="true" />
            <span>{COMPANY.phone}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/55 sm:flex-row lg:px-8">
          <p>
            &copy; {year} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <p className="uppercase tracking-[0.2em]">Barueri – SP</p>
        </div>
      </div>
    </footer>
  );
}
