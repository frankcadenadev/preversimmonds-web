// Datos de contacto centralizados. Si el número cambia, se cambia aquí y se actualiza en todo el sitio.

// TODO: poner el número real de WhatsApp de la empresa, con indicativo de país y sin "+" ni espacios.
// Ejemplo para Colombia: '573001234567'
export const whatsappNumber = '573007462764';

// Arma el enlace de WhatsApp con el mensaje ya escrito. Cada elemento de `lines` es una línea del mensaje.
export function buildWhatsAppUrl(lines: string[]): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}