import {
  Stethoscope, Pill, Salad, Dumbbell, Calculator,
  FlaskConical, UserRoundCheck, Hospital, Rss, LayoutGrid
} from "lucide-react";
import { Card } from "@/components/ui/card";

// Original 10 categories — upgraded icons
const categories = [
  { name: "Diseases",        icon: <Stethoscope className="h-5 w-5 lg:h-6 lg:w-6 text-red-500" />,       bg: "bg-red-50",      hover: "hover:bg-red-100" },
  { name: "Medicines",       icon: <Pill className="h-5 w-5 lg:h-6 lg:w-6 text-blue-500" />,             bg: "bg-blue-50",     hover: "hover:bg-blue-100" },
  { name: "Food & Nutrition",icon: <Salad className="h-5 w-5 lg:h-6 lg:w-6 text-green-500" />,           bg: "bg-green-50",    hover: "hover:bg-green-100" },
  { name: "Exercises",       icon: <Dumbbell className="h-5 w-5 lg:h-6 lg:w-6 text-purple-500" />,       bg: "bg-purple-50",   hover: "hover:bg-purple-100" },
  { name: "Calculators",     icon: <Calculator className="h-5 w-5 lg:h-6 lg:w-6 text-sky-500" />,        bg: "bg-sky-50",      hover: "hover:bg-sky-100" },
  { name: "Lab Tests",       icon: <FlaskConical className="h-5 w-5 lg:h-6 lg:w-6 text-teal-500" />,     bg: "bg-teal-50",     hover: "hover:bg-teal-100" },
  { name: "Doctors",         icon: <UserRoundCheck className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />,   bg: "bg-blue-50",     hover: "hover:bg-blue-100" },
  { name: "Hospitals",       icon: <Hospital className="h-5 w-5 lg:h-6 lg:w-6 text-fuchsia-500" />,      bg: "bg-fuchsia-50",  hover: "hover:bg-fuchsia-100" },
  { name: "News",            icon: <Rss className="h-5 w-5 lg:h-6 lg:w-6 text-amber-500" />,             bg: "bg-amber-50",    hover: "hover:bg-amber-100" },
  { name: "More",            icon: <LayoutGrid className="h-5 w-5 lg:h-6 lg:w-6 text-slate-600" />,      bg: "bg-slate-100",   hover: "hover:bg-slate-200" },
];

function CategoryCard({ cat }: { cat: typeof categories[0] }) {
  return (
    <Card className="flex flex-col items-center justify-center gap-2 py-4 px-1 rounded-2xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-all hover:-translate-y-1 bg-white">
      <div className={`${cat.bg} ${cat.hover} p-2.5 lg:p-3 rounded-full transition-colors`}>
        {cat.icon}
      </div>
      <span className="text-[10px] sm:text-[11px] font-semibold text-slate-700 text-center leading-tight px-1">
        {cat.name}
      </span>
    </Card>
  );
}

export function CategoryIcons() {
  return (
    <section className="py-5 sm:py-6 md:py-8 bg-slate-50">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Section Label */}
        <h2 className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">
          Browse by Category
        </h2>

        {/* lg+: 10-col grid (2 rows of 10) */}
        <div className="hidden lg:grid lg:grid-cols-10 gap-3 xl:gap-4">
          {categories.map((cat, i) => (
            <CategoryCard key={i} cat={cat} />
          ))}
        </div>

        {/* sm–md: 5-column grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-5 gap-3">
          {categories.map((cat, i) => (
            <CategoryCard key={i} cat={cat} />
          ))}
        </div>

        {/* Mobile: horizontal scroll row */}
        <div className="flex sm:hidden overflow-x-auto gap-3 pb-2 hide-scrollbar snap-x">
          {categories.map((cat, i) => (
            <div key={i} className="flex-shrink-0 w-[88px] snap-start">
              <Card className="flex flex-col items-center justify-center gap-2 py-4 px-1 rounded-2xl shadow-sm border border-slate-100 cursor-pointer bg-white">
                <div className={`${cat.bg} p-2.5 rounded-full`}>{cat.icon}</div>
                <span className="text-[10px] font-semibold text-slate-700 text-center leading-tight px-1">{cat.name}</span>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
