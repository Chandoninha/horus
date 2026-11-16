import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/components/Logo';
import WhatsAppLink from '@/components/WhatsAppLink';
import { WHATSAPP_MESSAGES } from '@/lib/whatsapp';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-horus-black/95 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-horus-black/80 to-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" onClick={closeMenu} aria-label="Horus Reparos Automotivos - início">
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative py-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-horus-orange"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-horus-orange transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <WhatsAppLink message={WHATSAPP_MESSAGES.header} className="hidden h-11 px-5 text-sm lg:inline-flex">
            Fale pelo WhatsApp
          </WhatsAppLink>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-horus-orange hover:text-horus-orange lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`overflow-hidden transition-all duration-500 ease-out lg:hidden ${
          menuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav aria-label="Navegação mobile" className="border-t border-white/10 bg-horus-graphite px-5 pb-8 pt-4">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-white/5">
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-4 font-display text-xl font-bold uppercase tracking-wide text-white transition-colors hover:text-horus-orange"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppLink
            message={WHATSAPP_MESSAGES.header}
            fullWidth
            className="mt-6"
          >
            Fale pelo WhatsApp
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}
