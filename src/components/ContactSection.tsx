import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="container mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2">
        {/* Left – form */}
        <div>
          <h2 className="mb-6 text-3xl font-extrabold">Get in touch</h2>
          <ContactForm />
        </div>

        {/* Right – map */}
        <div className="rounded-lg overflow-hidden shadow">
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
