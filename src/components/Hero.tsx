import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { WHATSAPP_NUMBER, WA_MESSAGE } from "@/lib/constants";

const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WA_MESSAGE
)}`;

const BUBBLES = [
  { left: "8%", size: 10, dur: 6, delay: 0 },
  { left: "22%", size: 18, dur: 8, delay: 1 },
  { left: "37%", size: 14, dur: 7, delay: 2.5 },
  { left: "48%", size: 24, dur: 9, delay: 0.8 },
  { left: "63%", size: 12, dur: 5.5, delay: 3.2 },
  { left: "72%", size: 20, dur: 7.5, delay: 1.8 },
  { left: "84%", size: 16, dur: 6.5, delay: 4.1 },
  { left: "91%", size: 26, dur: 10, delay: 2.7 },
];

export function Hero() {
  return (
    <section
      id="home"
      className={cn(
        "relative overflow-hidden",
        "bg-gradient-to-b from-blue-600 to-blue-800 text-white",
        "px-4 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-32 lg:pt-40"
      )}
    >
      {/* content grid */}
      <div
        className={cn(
          "relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12",
          "md:grid-cols-2"
        )}
      >
        {/* Text */}
        <div className="order-2 text-center md:order-1 md:text-left">
          <h1
            className="font-extrabold leading-[1.1]"
            style={{ fontSize: "clamp(2.25rem,5vw,4.5rem)" }}
          >
            Pure&nbsp;Water,&nbsp;Pure&nbsp;Care
          </h1>

          <p
            className={cn(
              "mt-6 max-w-md text-white/90 md:max-w-none",
              "mx-auto md:mx-0",
              "text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed"
            )}
          >
            Gurgaon’s trusted RO partner for 20&nbsp;years—installation, AMC &
            on-call repair right at your doorstep.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
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

        {/* Image */}
        <div className="order-1 mx-auto max-w-xs md:order-2 md:max-w-none">
          <Image
            src="/hero-1.png"
            alt="Royal Aqua technician servicing an RO purifier"
            width={640}
            height={640}
            priority
            className="mx-auto h-auto w-full max-w-sm drop-shadow-2xl md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      {/* Bubbles */}
      <div aria-hidden="true" className="hero-bubbles">
        {BUBBLES.map((b, i) => (
          <span
            key={i}
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDuration: `${b.dur}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* optional bottom wave */}
      {/* 
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16">
        <img
          src="/hero-wave.svg"
          alt=""
          className="h-full w-full object-cover opacity-90"
        />
      </div>
      */}
    </section>
  );
}
