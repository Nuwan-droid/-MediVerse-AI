import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  ChevronRight,
  Heart,
  Brain,
  Wrench,
  Users,
  MessageCircle,
} from "lucide-react";

export function HeroSection() {
  const features = [
    {
      title: "Your Health, Smarter",
      description:
        "Get personalized health advice, track your progress, and feel better.",
      icon: Brain,
      bg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Understand Your Health",
      description:
        "Learn about conditions, symptoms, medicines, and more.",
      icon: Heart,
      bg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Use Smart Tools",
      description:
        "Calculators, trackers, and plans to reach your goals.",
      icon: Wrench,
      bg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
    {
      title: "Get AI Guidance",
      description:
        "Ask questions and get personalized answers.",
      icon: Users,
      bg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Stay Connected",
      description:
        "Find doctors, health articles, and trusted resources.",
      icon: MessageCircle,
      bg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ];

  const popularSearches = [
    "Diabetes",
    "Headache",
    "BMI Calculator",
    "Vitamin D",
    "Healthy Recipes",
  ];

  return (
    <section className="relative h-[270px] w-full overflow-hidden sm:h-[285px] lg:h-[300px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Healthy lifestyle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />

        <div className="absolute inset-0 bg-white/5" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto h-full max-w-[1200px] px-6 lg:px-8">

        {/* Left side */}
        <div className="w-full pt-5 sm:pt-6 lg:w-[58%]">

          {/* Badge */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 shadow-md">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
              <Heart className="h-3 w-3 fill-blue-600 text-blue-600" />
            </span>

            <span className="text-[9px] font-bold text-blue-600 sm:text-[10px]">
              Your Health, Our Priority
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-[590px] text-[32px] font-extrabold leading-[0.98] tracking-tight text-blue-950 sm:text-[36px] lg:text-[40px]">
            Everything about health,
            <br />
            <span className="text-teal-500">
              in one place.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-2 max-w-[520px] text-[11px] leading-[1.25] text-blue-950 sm:text-xs lg:text-sm">
            Trusted information, smart tools, and personalized guidance
            <br />
            for a healthier you.
          </p>

          {/* Search */}
          <div className="mt-3 w-full max-w-[440px]">
            <div className="relative">

              {/* Search icon */}
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-slate-400" />
              </div>

              <Input
                type="text"
                placeholder="Search for diseases, symptoms, medicines, foods, exercises..."
                className="h-9 rounded-full border-0 bg-white pl-9 pr-12 text-[9px] text-black shadow-lg placeholder:text-slate-500 sm:h-10 sm:text-[10px]"
              />

              {/* Search button */}
              <Button
                className="absolute right-1 top-1 h-7 w-7 rounded-full bg-blue-600 p-0 hover:bg-blue-700 sm:h-8 sm:w-8"
              >
                <ChevronRight className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>

          {/* Popular searches */}
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="text-[8px] font-bold text-blue-950 sm:text-[9px]">
              Popular searches:
            </span>

            {popularSearches.map((search) => (
              <button
                key={search}
                className="rounded-full bg-white px-2.5 py-1 text-[8px] font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50 sm:text-[9px]"
              >
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Right information card */}
        <div className="absolute right-5 top-3 hidden w-[205px] rounded-[18px] bg-white/95 p-2.5 shadow-xl lg:block xl:right-8 xl:w-[215px]">
          <div className="space-y-0.5">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex cursor-pointer items-center gap-2 rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                >
                  {/* Icon */}
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${feature.bg} transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon
                      className={`h-4 w-4 ${feature.iconColor}`}
                    />
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[8px] font-bold leading-tight text-blue-950 sm:text-[9px]">
                      {feature.title}
                    </h3>

                    <p className="mt-0.5 text-[6.5px] leading-[1.15] text-slate-500 sm:text-[7px]">
                      {feature.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className="h-3 w-3 shrink-0 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}