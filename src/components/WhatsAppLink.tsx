import type { ReactNode } from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

interface WhatsAppLinkProps {
  message: string;
  children: ReactNode;
  variant?: 'solid' | 'outline';
  size?: 'md' | 'lg';
  fullWidth?: boolean;
  showArrow?: boolean;
  className?: string;
}

const sizes = {
  md: 'h-12 px-6 text-base',
  lg: 'h-14 px-8 text-lg sm:h-16 sm:px-10 sm:text-xl',
};

const variants = {
  solid:
    'bg-horus-green text-horus-black shadow-[0_12px_32px_-8px_rgba(0,200,83,0.55)] hover:bg-horus-green-deep hover:shadow-[0_16px_40px_-8px_rgba(0,200,83,0.7)]',
  outline:
    'border border-horus-orange/60 text-white hover:border-horus-orange hover:bg-horus-orange/10',
};

export default function WhatsAppLink({
  message,
  children,
  variant = 'solid',
  size = 'md',
  fullWidth = false,
  showArrow = false,
  className = '',
}: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-3 rounded-full font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full sm:w-auto' : ''} ${className}`}
    >
      <MessageCircle className="size-5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
      <span className="text-left leading-tight">{children}</span>
      {showArrow && (
        <span
          aria-hidden="true"
          className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          &rarr;
        </span>
      )}
    </a>
  );
}
