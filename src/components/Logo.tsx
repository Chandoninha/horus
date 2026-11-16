interface LogoProps {
  className?: string;
}

export default function Logo({ className = 'h-14' }: LogoProps) {
  return (
    <img
      src="/assets/images/image.png"
      alt="Horus Reparos Automotivos"
      width={187}
      height={115}
      decoding="async"
      className={`w-auto object-contain ${className}`}
    />
  );
}
