import { openWhatsApp, whatsappLink } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello Freedom, I'd like more information.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={(e) => {
        e.preventDefault();
        openWhatsApp("Hello Freedom, I'd like more information.");
      }}
      className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition hover:scale-110"
      style={{ background: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white" aria-hidden="true">
        <path d="M19.11 17.21c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.18-1.34-.81-.72-1.35-1.6-1.51-1.87-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.11 2.81.14.18 1.91 2.92 4.63 4.09.65.28 1.16.45 1.55.58.65.21 1.24.18 1.71.11.52-.08 1.61-.66 1.83-1.29.22-.64.22-1.18.16-1.29-.07-.11-.25-.18-.52-.32zM16.03 4C9.4 4 4 9.4 4 16.03c0 2.11.55 4.18 1.6 5.99L4 28l6.16-1.62a12 12 0 0 0 5.87 1.5h.01c6.62 0 12.02-5.4 12.02-12.03 0-3.21-1.25-6.23-3.52-8.49A12 12 0 0 0 16.03 4zm0 21.95h-.01a10 10 0 0 1-5.07-1.39l-.36-.22-3.66.96.98-3.57-.24-.37a10 10 0 0 1-1.53-5.33c0-5.52 4.5-10.02 10.03-10.02 2.68 0 5.19 1.04 7.08 2.94a9.95 9.95 0 0 1 2.93 7.08c0 5.52-4.5 10-10.04 10z"/>
      </svg>
    </a>
  );
}
