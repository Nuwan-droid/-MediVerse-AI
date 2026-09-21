import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, HeartPulse, Brain, ClipboardList, Bot, Stethoscope, ChevronRight } from "lucide-react";


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
            Everything about health
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
         
        </div>
      </div>

    </section>
  );
}
