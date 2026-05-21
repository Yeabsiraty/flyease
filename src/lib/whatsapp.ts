export const WHATSAPP_NUMBER = "251951156736"; // no plus
export const WHATSAPP_DISPLAY = "+251 95 115 6736";

function withMessage(base: string, message?: string) {
  return message ? `${base}&text=${encodeURIComponent(message)}` : base;
}

export function whatsappLink(message?: string) {
  return withMessage(`https://web.whatsapp.com/send?phone=${WHATSAPP_NUMBER}`, message);
}

export function whatsappAppLink(message?: string) {
  return withMessage(`whatsapp://send?phone=${WHATSAPP_NUMBER}`, message);
}

export function openWhatsApp(message?: string) {
  if (typeof window === "undefined") return;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
  const webLink = whatsappLink(message);

  if (isMobile) {
    window.location.href = whatsappAppLink(message);
    window.setTimeout(() => {
      window.open(webLink, "_blank", "noopener,noreferrer") ?? window.location.assign(webLink);
    }, 500);
    return;
  }

  const opened = window.open(webLink, "_blank", "noopener,noreferrer");

  if (!opened) {
    try {
      if (window.top) {
        window.top.location.href = webLink;
        return;
      }
    } catch {
      window.location.assign(webLink);
      return;
    }

    window.location.assign(webLink);
  }
}
