import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: 'https://images.pexels.com/photos/8478259/pexels-photo-8478259.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
    alt: 'Mecânico trabalhando no motor de um veículo com as mãos e ferramentas',
    title: 'Mecânica especializada',
  },
  {
    src: 'https://images.pexels.com/photos/4756887/pexels-photo-4756887.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
    alt: 'Visão ampla de uma oficina automotiva organizada, com veículos sobre elevadores',
    title: 'Oficina organizada',
  },
  {
    src: 'https://images.pexels.com/photos/8985664/pexels-photo-8985664.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
    alt: 'Profissional realizando manutenção automotiva em um motor',
    title: 'Manutenção profissional',
  },
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild as HTMLElement | null;
    const distance = card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  return (
    <section id="galeria" className="relative bg-horus-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <header>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-horus-orange">
              Nosso dia a dia
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold italic uppercase leading-[1.05] text-white sm:text-5xl">
              Galeria <span className="text-horus-orange">da oficina</span>
            </h2>
          </header>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Foto anterior"
              className="grid size-12 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-horus-orange hover:bg-horus-orange hover:text-horus-black"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Próxima foto"
              className="grid size-12 place-items-center rounded-full border border-white/15 text-white transition-colors hover:border-horus-orange hover:bg-horus-orange hover:text-horus-black"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.src}
              className="group relative h-80 w-[82%] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-horus-graphite sm:w-[calc(50%-12px)] sm:h-[26rem] lg:w-[calc(33.333%-16px)]"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={1000}
                height={800}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-horus-black via-horus-black/20 to-transparent" />
              <div
                aria-hidden="true"
                className="absolute -left-10 bottom-16 h-1.5 w-40 -rotate-[28deg] bg-horus-orange transition-transform duration-500 group-hover:translate-x-6"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <span className="block font-display text-2xl font-bold italic uppercase tracking-wide text-white">
                  {item.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
