import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, HeartPulse, Brain, ClipboardList, Bot, Stethoscope, ChevronRight } from "lucide-react";

// 📚 Learning Note — Responsive Design with Tailwind:
// We use breakpoint prefixes (no prefix = mobile-first default):
//   sm: 640px | md: 768px | lg: 1024px | xl: 1280px | 2xl: 1536px
// Pattern: "mobile style" then override → text-3xl sm:text-4xl lg:text-5xl xl:text-6xl

const featureItems = [
  { icon: <Brain className="h-4 w-4 xl:h-5 xl:w-5 text-blue-600" />,    bg: "bg-blue-100 group-hover:bg-blue-200",    title: "Your Health, Smarter",    desc: "Get personalized health advice and feel better." },
  { icon: <HeartPulse className="h-4 w-4 xl:h-5 xl:w-5 text-emerald-600" />, bg: "bg-emerald-100 group-hover:bg-emerald-200", title: "Understand Your Health", desc: "Learn about conditions, symptoms, and medicines." },
  { icon: <ClipboardList className="h-4 w-4 xl:h-5 xl:w-5 text-amber-600" />,bg: "bg-amber-100 group-hover:bg-amber-200",  title: "Use Smart Tools",         desc: "Calculators, trackers, and plans for your goals." },
  { icon: <Bot className="h-4 w-4 xl:h-5 xl:w-5 text-purple-600" />,      bg: "bg-purple-100 group-hover:bg-purple-200",title: "Get AI Guidance",         desc: "Ask questions and get personalized answers." },
  { icon: <Stethoscope className="h-4 w-4 xl:h-5 xl:w-5 text-orange-600" />, bg: "bg-orange-100 group-hover:bg-orange-200",title: "Stay Connected",          desc: "Find doctors, articles and trusted resources." },
];

export function HeroSection() {
  return (
    <section
      className={`
        relative w-full flex items-center overflow-hidden
        h-[480px]          /* mobile  <640px  — compact height    */
        sm:h-[520px]       /* sm      640px+  — slightly taller   */
        md:h-[560px]       /* md      768px+  — tablet height      */
        lg:h-[600px]       /* lg      1024px+ — desktop standard   */
        xl:h-[640px]       /* xl      1280px+ — large desktop      */
        2xl:h-[680px]      /* 2xl     1536px+ — ultra-wide         */
      `}
    >
      {/* ── Background Image ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt="Healthy lifestyle background"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* ── LEFT CONTENT ─────────────────────────────────── */}
      {/*
        Layout rules:
        - mobile/sm : full width, starts near left edge
        - md+       : limited width, card-aware
        No centered container — content hugs the left side
      */}
      <div className="relative z-10 w-full flex items-center h-full
        pl-14 sm:pl-24 md:pl-28 lg:pl-32 xl:pl-36 2xl:pl-40
        pr-4 sm:pr-6
        py-8 sm:py-10 md:py-12
      ">
        <div
          className={`
            flex flex-col min-w-0
            gap-3 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-6
            w-full           /* mobile  : full width */
            md:w-[65%]       /* md      : more room  */
            lg:w-[60%]       /* lg      : card appears right */
            xl:w-[58%]       /* xl      : wider left */
            2xl:w-[55%]      /* 2xl     : balanced   */
          `}
        >
          {/* ── Badge ── */}
          <div className="inline-flex items-center gap-1.5 bg-blue-50/90 backdrop-blur-sm px-3 py-1 rounded-full font-semibold text-blue-600 shadow-sm border border-blue-100 w-fit
            text-[11px] sm:text-xs md:text-sm
          ">
            <HeartPulse className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
            Your Health, Our Priority
          </div>

          {/* ── Headline ── */}
          <h1 className="
            font-extrabold tracking-tight leading-[1.1] text-teal-900
            text-2xl          /* mobile  */
            sm:text-3xl       /* sm      */
            md:text-4xl       /* md      */
            lg:text-5xl       /* lg      */
            xl:text-[3.5rem]  /* xl      */
            2xl:text-6xl      /* 2xl     */
          ">
            Everything about health,
            <br />
            <span className="text-emerald-600">in one place.</span>
          </h1>

          {/* ── Subheading — hidden on mobile to save vertical space ── */}
          <p className="
            hidden font-medium text-slate-600 leading-relaxed
            sm:block sm:text-sm
            md:text-base
            lg:text-lg
            xl:text-xl
          ">
            Trusted information, smart tools, and personalized guidance for a healthier you.
          </p>

          {/* ── Search Bar ── constrained width at lg+ */}
          <div className="relative
            w-full           /* mobile–md : full width of container */
            lg:w-[90%]       /* lg        : slightly narrower       */
            xl:w-[85%]       /* xl        : more reduced            */
            2xl:w-[80%]      /* 2xl       : balanced                */
          ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 pointer-events-none">
              <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Search diseases, symptoms, medicines..."
              className="
                w-full rounded-full bg-white text-gray-900 shadow-xl border-0
                pl-9 pr-12 py-3.5       /* mobile  */
                sm:pl-11 sm:pr-14 sm:py-5  /* sm   */
                md:pl-12 md:pr-16 md:py-6  /* md   */
                lg:py-6                    /* lg   */
                xl:py-7                    /* xl   */
                text-sm md:text-base
              "
            />
            <div className="absolute inset-y-0 right-1.5 sm:right-2 flex items-center">
              <Button className="
                rounded-full p-0 bg-blue-600 hover:bg-blue-700
                h-7 w-7        /* mobile  */
                sm:h-9 sm:w-9  /* sm      */
                md:h-10 md:w-10 /* md+    */
              ">
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
              </Button>
            </div>
          </div>

          {/* ── Popular Searches ── single row at all breakpoints */}
          <div className="flex items-center gap-2 font-medium text-slate-700 overflow-x-auto hide-scrollbar flex-nowrap pb-1 lg:pb-0">
            <span className="shrink-0 font-semibold text-slate-500 text-xs whitespace-nowrap">Popular searches:</span>
            {["Diabetes", "Headache", "BMI Calculator", "Vitamin D", "Healthy Recipes"].map((term) => (
              <span
                key={term}
                className="
                  inline-flex items-center shrink-0 whitespace-nowrap cursor-pointer
                  bg-white hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200
                  shadow-sm rounded-full border border-slate-200 text-slate-600
                  transition-all duration-150
                  px-2.5 py-0.5      /* mobile  */
                  sm:px-3 sm:py-1    /* sm      */
                  md:px-3 md:py-1    /* md      */
                  lg:px-3.5 lg:py-1  /* lg      */
                  xl:px-4 xl:py-1    /* xl      */
                  text-xs sm:text-xs lg:text-xs
                "
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT FEATURE CARD ────────────────────────────── */}
      {/*
        Breakpoint visibility:
        - mobile / sm / md : HIDDEN (not enough screen space)
        - lg               : shown, compact size, right-4
        - xl               : slightly wider, more padding, right-8
        - 2xl              : wider still, right-12
      */}
      <div className="
        hidden
        lg:block lg:absolute lg:right-8 lg:z-10 lg:w-[270px]
        xl:right-14 xl:w-[300px]
        2xl:right-20 2xl:w-[320px]
      ">
        <Card className="
          rounded-3xl shadow-2xl bg-white/95 backdrop-blur border-0
          p-3 space-y-0.5     /* lg   : compact */
          xl:p-4 xl:space-y-1 /* xl+  : comfortable */
        ">
          {featureItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 xl:gap-3 p-1.5 xl:p-2 hover:bg-slate-50/80 rounded-2xl cursor-pointer group transition-colors"
            >
              <div className={`${item.bg} p-2 xl:p-2.5 rounded-xl transition-colors shrink-0`}>
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-slate-800 flex justify-between items-center
                  text-xs xl:text-sm
                ">
                  <span className="truncate">{item.title}</span>
                  <ChevronRight className="h-3.5 w-3.5 xl:h-4 xl:w-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0 ml-1" />
                </h3>
                <p className="text-[10px] xl:text-[11px] text-slate-500 mt-0.5 leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </Card>
      </div>
    </section>
  );
}
