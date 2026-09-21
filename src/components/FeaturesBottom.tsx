import { Stethoscope, Activity, HeartHandshake, HeartPulse } from "lucide-react";

const features = [
  {
    title: "Reliable Information",
    description: "Verified by healthcare professionals and trusted sources.",
    icon: <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />,
    bg: "bg-blue-100",
  },
  {
    title: "Better Lifestyle",
    description: "Small changes. Big improvements in your health.",
    icon: <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />,
    bg: "bg-green-100",
  },
  {
    title: "For Everyone",
    description: "Accessible, easy to use, and made for your journey.",
    icon: <HeartHandshake className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />,
    bg: "bg-purple-100",
  },
  {
    title: "A Healthier Tomorrow",
    description: "Because your health matters. Today and always.",
    icon: <HeartPulse className="h-5 w-5 sm:h-6 sm:w-6 text-teal-600" />,
    bg: "bg-teal-100",
  },
];

export function FeaturesBottom() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/*
          Mobile: 1 column (stacked)
          sm: 2 columns
          lg: 4 columns (all in one row)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className={`${feature.bg} p-2.5 sm:p-3 rounded-full shrink-0`}>
                {feature.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
