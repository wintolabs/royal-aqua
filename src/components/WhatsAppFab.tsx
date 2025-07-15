import { WA_MESSAGE, WHATSAPP_NUMBER } from "@/lib/constants";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WA_MESSAGE
)}`;

export function WhatsAppFab() {
  return (
    <Link
      href={link}
      target="_blank"
      className="fixed bottom-4 right-4 z-50 flex h-18 w-18 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <IconBrandWhatsapp className="h-12 w-12 text-white" />
    </Link>
  );
}
