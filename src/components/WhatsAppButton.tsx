import { whatsappHref } from "@/config/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-fab"
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter avec AZ Solution sur WhatsApp"
    >
      <WhatsAppIcon size={28} />
      <span className="whatsapp-fab__label">WhatsApp</span>
    </a>
  );
}
