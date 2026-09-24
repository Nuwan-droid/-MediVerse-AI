import {
  HeartPulse,
  Pill,
  Apple,
  Dumbbell,
  Calculator,
  FlaskConical,
  Stethoscope,
  Hospital,
  Newspaper,
  MoreHorizontal,
} from "lucide-react";

const quickLinks = [
  {
    title: "Diseases",
    icon: HeartPulse,
    bg: "bg-red-100",
    color: "text-red-500",
  },
  {
    title: "Medicines",
    icon: Pill,
    bg: "bg-blue-100",
    color: "text-blue-500",
  },
  {
    title: "Food & Nutrition",
    icon: Apple,
    bg: "bg-green-100",
    color: "text-green-500",
  },
  {
    title: "Exercises",
    icon: Dumbbell,
    bg: "bg-purple-100",
    color: "text-purple-500",
  },
  {
    title: "Calculators",
    icon: Calculator,
    bg: "bg-blue-100",
    color: "text-blue-500",
  },
  {
    title: "Lab Tests",
    icon: FlaskConical,
    bg: "bg-teal-100",
    color: "text-teal-500",
  },
  {
    title: "Doctors",
    icon: Stethoscope,
    bg: "bg-blue-100",
    color: "text-blue-500",
  },
  {
    title: "Hospitals",
    icon: Hospital,
    bg: "bg-purple-100",
    color: "text-purple-500",
  },
  {
    title: "News",
    icon: Newspaper,
    bg: "bg-blue-100",
    color: "text-blue-500",
  },
  {
    title: "More",
    icon: MoreHorizontal,
    bg: "bg-slate-100",
    color: "text-blue-900",
  },
];

export function QuickLinks() {
  return (
    <section className="w-full bg-white px-4 py-2 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
        {quickLinks.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="group flex min-h-[78px] flex-col items-center justify-center rounded-xl border border-slate-100 bg-white px-2 py-2 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`mb-1.5 flex h-9 w-9 items-center justify-center rounded-full ${item.bg}`}
              >
                <Icon className={`h-4.5 w-4.5 ${item.color}`} />
              </div>

              <span className="text-center text-xs font-semibold text-blue-950">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}