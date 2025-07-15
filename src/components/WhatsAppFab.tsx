import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { WHATSAPP_NUMBER, WA_MESSAGE } from "@/lib/constants";

const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WA_MESSAGE
)}`;

export function WhatsAppFab() {
  return (
    <Link
      href={link}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className={`
        fixed bottom-4 right-4 z-50 flex h-18 w-18 items-center justify-center
        rounded-full bg-green-500 text-white shadow-lg
        transition-transform hover:-translate-y-1
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300/50
        aqua-bounce
      `}
      style={{ animation: "aqua-bounce 1.6s ease-in-out infinite" }}
    >
      <IconBrandWhatsapp className="h-12 w-12" />
    </Link>
  );
}
