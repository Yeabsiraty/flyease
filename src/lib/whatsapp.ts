export const WHATSAPP_NUMBER = "251951156736"; // no plus
export const WHATSAPP_DISPLAY = "+251 95 115 6736";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
