import { MAP_EMBED_URL } from "@/lib/constants";

export function MapEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow">
      <iframe
        title="Royal Aqua location map"
        src={MAP_EMBED_URL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-72 w-full md:h-[22rem] lg:h-[26rem] aspect-video border-0"
      />
    </div>
  );
}
