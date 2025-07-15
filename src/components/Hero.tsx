import Link from "next/link";
import { cn } from "@/lib/utils";
import { WA_MESSAGE, WHATSAPP_NUMBER } from "@/lib/constants";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WA_MESSAGE
)}`;

export function Hero() {
  return (
    <section
      id="home"
      className={cn(
        "relative flex min-h-[75vh] flex-col items-center justify-center",
        "bg-gradient-to-b from-blue-600 to-blue-800 text-white"
      )}
    >
      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
          Pure&nbsp;Water,&nbsp;Pure&nbsp;Care
        </h1>

        <p className="mx-auto mt-6 max-w-md text-lg text-white/90">
          Gurgaon’s trusted RO partner for 20 years. Installation, AMC & on-call
          repair — right at your doorstep.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#contact"
            className={cn(
              "rounded-lg bg-white px-7 py-3 text-sm font-semibold text-blue-700 shadow",
              "transition hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            )}
          >
            Book a Service
          </Link>

          <Link
            href={whatsappLink}
            target="_blank"
            className={cn(
              "rounded-lg border border-white/70 px-7 py-3 text-sm font-semibold text-white/90",
              "hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            )}
          >
            WhatsApp&nbsp;Us
          </Link>
        </div>
      </div>
    </section>
  );
}
