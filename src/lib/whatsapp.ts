export const WHATSAPP_NUMBER = "251951156736";
export const WHATSAPP_DISPLAY = "+251 95 115 6736";

function normalizedWhatsAppNumber() {
  return WHATSAPP_NUMBER.replace(/\D/g, "");
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${normalizedWhatsAppNumber()}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function openWhatsApp(message?: string) {
  if (typeof window === "undefined") return;

  const url = whatsappLink(message);
  const opened = window.open(url, "_blank", "noopener,noreferrer");

  if (opened) {
    opened.opener = null;
  }
}
