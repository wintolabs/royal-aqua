import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import {
  WHATSAPP_NUMBER,
  WA_MESSAGE,
  BUSINESS_EMAIL,
  BUSINESS_ADDRESS,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from "@/lib/constants";

const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WA_MESSAGE
)}`;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2">
            {/* temp logo */}
            <Image
              src="/water-drop-temp.png" // place temp logo file in /public
              alt="Royal Aqua logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-lg font-bold text-slate-900">Royal Aqua</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-slate-600">
            Gurgaon’s trusted RO purifier sales, service & repair partner for
            20+ years.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900">
            Quick Links
          </h4>
          <ul className="grid gap-2 text-sm">
            <li>
              <Link href="#home" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900">
            Contact
          </h4>
          <ul className="grid gap-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-[2px] h-4 w-4 text-blue-600" />
              <Link
                href={`tel:${BUSINESS_PHONE_TEL}`}
                className="hover:text-blue-600"
              >
                {BUSINESS_PHONE_DISPLAY}
              </Link>
            </li>
            <li className="flex items-start gap-2 break-all">
              <Mail className="mt-[2px] h-4 w-4 text-blue-600" />
              <Link
                href={`mailto:${BUSINESS_EMAIL}`}
                className="hover:text-blue-600"
              >
                {BUSINESS_EMAIL}
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-[2px] h-4 w-4 text-blue-600" />
              <Link
                href={waLink}
                target="_blank"
                className="hover:text-blue-600"
              >
                WhatsApp Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Location & Hours */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-900">
            Location
          </h4>
          <p className="flex items-start gap-2 text-sm leading-relaxed">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            {BUSINESS_ADDRESS}
          </p>
          <p className="mt-4 text-sm">
            <span className="font-semibold text-slate-900">Hours:</span> 8:00 AM
            – 9:00 PM (All days)
          </p>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Royal Aqua. All rights reserved.
      </div>
    </footer>
  );
}
