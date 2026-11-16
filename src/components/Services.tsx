import type { LucideIcon } from 'lucide-react';
import {
  ArrowUpRight,
  BatteryCharging,
  Car,
  Cog,
  Lock,
  Snowflake,
  ShieldCheck,
  Speaker,
  Sun,
  Wrench,
} from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '@/lib/whatsapp';
import { useReveal } from '@/hooks/useReveal';

interface Service {
  name: string;
  description: string;
  icon: LucideIcon;
}

const SERVICES: Service[] = [
  {
    name: 'Manutenção Preventiva',
    description: 'Revisões programadas para evitar falhas e manter o veículo sempre pronto.',
    icon: Wrench,
  },
  {
    name: 'Reparos em Geral',
    description: 'Diagnóstico e conserto de mecânica geral, com orçamento antes do serviço.',
    icon: Cog,
  },
  {
    name: 'Auto Elétrico',
    description: 'Bateria, alternador, motor de partida e toda a parte elétrica do carro.',
    icon: BatteryCharging,
  },
  {
    name: 'Ar-Condicionado Automotivo',
    description: 'Higienização, recarga e reparo do sistema para um ar sempre gelado.',
    icon: Snowflake,
  },
  {
    name: 'Insulfilm',
    description: 'Película térmica e de proteção, com acabamento limpo e durável.',
    icon: Sun,
  },
  {
    name: 'Som Automotivo',
    description: 'Instalação e ajuste de sistemas de áudio para uma experiência fiel.',
    icon: Speaker,
  },
  {
    name: 'Alarmes',
    description: 'Instalação de alarmes e rastreadores para mais segurança no dia a dia.',
    icon: ShieldCheck,
  },
  {
    name: 'Travas e Vidros Elétricos',
    description: 'Reparo e instalação de travas, vidros e comandos elétricos.',
    icon: Lock,
  },
  {
    name: 'Acessórios em Geral',
    description: 'Acessórios e personalizações que combinam com o seu estilo.',
    icon: Car,
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      className={`reveal h-full ${visible ? 'is-visible' : ''}`}
    >
      <a
        href={buildWhatsAppUrl(WHATSAPP_MESSAGES.service(service.name))}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-horus-black/60 p-6 text-center transition-[border-color,background-color,box-shadow] duration-500 hover:border-horus-orange/70 hover:bg-horus-black hover:shadow-[0_20px_50px_-20px_rgba(255,106,0,0.45)] sm:p-8"
      >
        <span
          aria-hidden="true"
          className="absolute -right-10 -top-10 h-24 w-40 rotate-[25deg] bg-gradient-to-r from-horus-orange/0 to-horus-orange/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span className="relative grid size-20 place-items-center rounded-full border-2 border-horus-orange text-white transition-all duration-500 group-hover:scale-105 group-hover:bg-horus-orange group-hover:shadow-[0_0_30px_rgba(255,106,0,0.5)] sm:size-24">
          <Icon className="size-9 sm:size-10" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-display text-lg font-bold uppercase leading-tight tracking-wide text-white sm:text-xl">
          {service.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-white/65">{service.description}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-horus-orange opacity-80 transition-opacity group-hover:opacity-100">
          Consultar
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </a>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="relative bg-horus-graphite py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-horus-orange/70 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-horus-orange">
            O que fazemos
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold italic uppercase leading-[1.05] text-white sm:text-5xl">
            Nossos <span className="text-horus-orange">serviços</span>
          </h2>
          <div aria-hidden="true" className="mx-auto mt-6 h-1 w-24 -skew-x-[30deg] bg-horus-orange" />
        </header>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
