declare module "./whatsapp.jsx" {
  import type { ReactNode } from "react";
  export const WHATSAPP_NUMBER: string;
  export function WhatsAppIcon(props: { className?: string }): ReactNode;
  export function whatsappLink(message?: string): string;
  export function openWhatsApp(message?: string): void;
  export function buildBookingMessage(args: {
    countryName: string;
    airportName: string;
    iata: string;
    form: Record<string, unknown>;
  }): string;
  export function WhatsAppFab(): ReactNode;
  export function WhatsAppBookButton(props: {
    booking: {
      countryName: string;
      airportName: string;
      iata: string;
      valid: boolean;
      form: Record<string, unknown>;
    };
    className?: string;
  }): ReactNode;
}

declare module "@/components/whatsapp.jsx" {
  export * from "./whatsapp.jsx";
}
