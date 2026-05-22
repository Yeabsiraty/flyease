export const WHATSAPP_NUMBER = "251951156736";
export const WHATSAPP_DISPLAY = "+251 95 115 6736";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function openWhatsApp(message?: string) {
  if (typeof window === "undefined") return;

  const url = whatsappLink(message);

  try {
    if (window.top && window.top !== window) {
      window.top.location.href = url;
      return;
    }
  } catch {
  }

  window.location.href = url;
}
