import {
  ShoppingCart,
  Wrench,
  RefreshCw,
  ShieldCheck,
  Filter,
  FlaskConical,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

const services: Service[] = [
  {
    title: "RO Sales",
    desc: "Authorised dealer – Kent, Aquaguard, Livpure & more.",
    icon: ShoppingCart,
  },
  {
    title: "Installation",
    desc: "Professional set-up with inlet plumbing & TDS check.",
    icon: Wrench,
  },
  {
    title: "Annual Maintenance",
    desc: "3-visit AMC covering filters, membranes & sanitisation.",
    icon: ShieldCheck,
  },
  {
    title: "On-call Repair",
    desc: "24-hour turnaround for leaks, low flow, noise, etc.",
    icon: RefreshCw,
  },
  {
    title: "Filter Replacement",
    desc: "Sediment, carbon & RO membranes replaced at MRP.",
    icon: Filter,
  },
  {
    title: "Water Testing",
    desc: "Doorstep TDS & pH test with report in 15 min.",
    icon: FlaskConical,
  },
];

export function ServiceCards() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-extrabold">
          Our&nbsp;Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, desc, icon: Icon }) => (
            <Card
              key={title}
              className={cn(
                "group relative overflow-hidden border bg-white shadow-sm",
                "transition hover:shadow-lg"
              )}
            >
              {/* tiny gradient bar for brand accent */}
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700" />

              <CardHeader className="flex items-center gap-4 pt-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-600/10">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription>{desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
