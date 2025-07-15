import Link from "next/link";
import { cn } from "@/lib/utils";
import { WHATSAPP_NUMBER, WA_MESSAGE } from "@/lib/constants";

const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WA_MESSAGE
)}`;

export function Hero() {
  return (
    <section
      id="home"
      className={cn(
        // 🔵 gradient background
        "relative flex flex-col items-center justify-center",
        "bg-gradient-to-b from-blue-600 to-blue-800 text-white",
        // fluid height – more on large screens
        "min-h-[68vh] sm:min-h-[72vh] lg:min-h-[80vh] xl:min-h-[85vh]",
        // safe padding for small notch phones
        "px-4 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32"
      )}
    >
      {/* main container */}
      <div className="relative z-10 mx-auto w-full max-w-2xl lg:max-w-3xl">
        {/* headline scales from 34 → 72 px using clamp */}
        <h1
          className="mb-6 text-center font-extrabold leading-[1.1]"
          style={{
            fontSize: "clamp(2.125rem, 6vw + 0.5rem, 4.5rem)",
          }}
        >
          Pure&nbsp;Water,&nbsp;Pure&nbsp;Care
        </h1>

        {/* sub-copy max-width auto-centres */}
        <p
          className={cn(
            "mx-auto mb-10 max-w-xl text-center text-white/90",
            "text-[clamp(1rem,3.2vw,1.25rem)] leading-relaxed"
          )}
        >
          Gurgaon’s trusted RO partner for 20&nbsp;years—installation, AMC and
          on-call repair right at your doorstep.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="#contact"
            className="rounded-lg bg-white px-7 py-3 text-sm font-semibold text-blue-700 shadow transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          >
            Book a Service
          </Link>

          <Link
            href={whatsapp}
            target="_blank"
            className="rounded-lg border border-white/70 px-7 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          >
            WhatsApp&nbsp;Us
          </Link>
        </div>
      </div>

      {/* optional waves background
      <div className="pointer-events-none absolute inset-0 bg-[url('/waves.svg')] bg-cover opacity-20" />
      */}
    </section>
  );
}
