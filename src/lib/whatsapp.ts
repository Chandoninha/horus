export const WHATSAPP_NUMBER = '551141944540';

export const WHATSAPP_MESSAGES = {
  header: 'Olá! Conheci a Horus pelo site e gostaria de solicitar um orçamento.',
  hero: 'Olá! Vi o site da Horus e gostaria de agendar uma avaliação para o meu veículo.',
  service: (service: string) =>
    `Olá! Tenho interesse no serviço de ${service} e gostaria de mais informações.`,
  contact: 'Olá! Gostaria de falar com a Horus sobre um atendimento para o meu veículo.',
  floating: 'Olá! Gostaria de tirar algumas dúvidas sobre os serviços da Horus.',
  footer: 'Olá! Conheci a Horus pelo site e gostaria de falar com a equipe.',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
