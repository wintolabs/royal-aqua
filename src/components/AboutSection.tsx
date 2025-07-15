import { cn } from "@/lib/utils";

type Step = { year: string; title: string; desc: string };

const timeline: Step[] = [
  {
    year: "2005",
    title: "Royal Aqua opens",
    desc: "Started as a one-room shop in Old Gurgaon bazaar.",
  },
  {
    year: "2009",
    title: "1,000+ RO installs",
    desc: "Earned trust across DLF & Sushant Lok homes.",
  },
  {
    year: "2014",
    title: "24 h Repair hotline",
    desc: "Introduced emergency on-call service.",
  },
  {
    year: "2018",
    title: "Bigger workshop",
    desc: "Shifted to Sector 14 for faster parts sourcing.",
  },
  {
    year: "2022",
    title: "AMC plans",
    desc: "Launched 3-visit & 5-visit annual maintenance contracts.",
  },
  {
    year: "2025",
    title: "Online booking",
    desc: "WhatsApp & website go live — book in 30 sec.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto max-w-5xl px-6">
        {/* Intro */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold">Our Journey</h2>
          <p className="mt-4 text-slate-600">
            For two decades we’ve kept Gurgaon families drinking safe,
            great-tasting water. Here’s how we grew from a tiny shop to the
            city’s most trusted RO experts.
          </p>
        </div>

        {/* Timeline */}
        <ol className="relative border-l border-slate-200">
          {timeline.map(({ year, title, desc }, i) => (
            <li key={year + i} className="mb-12 ml-6">
              {/* Dot */}
              <span
                className={cn(
                  "absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white",
                  "ring-4 ring-white"
                )}
              >
                {year.slice(-2)}
              </span>

              <h3 className="mb-1 text-xl font-semibold text-slate-800">
                {title}
              </h3>
              <time className="mb-1 block text-sm font-medium text-slate-500">
                {year}
              </time>
              <p className="text-slate-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
