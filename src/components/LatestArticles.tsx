import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Salad, HeartPulse, Dumbbell, Microscope, Clock, Calendar, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const articles = [
  {
    title: "The Best Diet for Diabetes",
    description: "Explore heart-healthy meals like grilled salmon and quinoa that stabilize blood sugar and provide lasting energy throughout your day.",
    category: "Nutrition",
    icon: <Salad className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    image: "/article-nutrition-v2.jpg",
    readTime: "5 min read",
    date: "Apr 28, 2026",
    color: "from-[#02443a] from-40% via-[#02443a]/90 via-55%", // Solid dark teal/green
    pillBg: "bg-[#98f2c2] text-[#02443a]", // Solid light green
    arrowColor: "text-[#02443a]",
  },
  {
    title: "Top 10 Foods to Avoid",
    description: "Learn how modern continuous glucose monitors (CGMs) can help you identify trigger foods and track your health in real-time.",
    category: "Diabetes",
    icon: <HeartPulse className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    image: "/article-diabetes-v2.jpg",
    readTime: "4 min read",
    date: "Apr 26, 2026",
    color: "from-[#0a3962] from-40% via-[#0a3962]/90 via-55%", // Solid dark blue
    pillBg: "bg-[#93c5fd] text-[#0a3962]",
    arrowColor: "text-[#0a3962]",
  },
  {
    title: "Diabetes and Exercise",
    description: "Incorporate daily yoga and low-impact workouts into your routine to naturally boost insulin sensitivity and improve flexibility.",
    category: "Exercise",
    icon: <Dumbbell className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    image: "/article-exercise-v2.jpg",
    readTime: "6 min read",
    date: "Apr 20, 2026",
    color: "from-[#452866] from-40% via-[#452866]/90 via-55%", // Solid dark purple
    pillBg: "bg-[#d8b4fe] text-[#452866]",
    arrowColor: "text-[#452866]",
  },
  {
    title: "Latest Research on Diabetes",
    description: "Step inside the lab and discover how scientists are developing next-generation treatments and potential cures using cellular technology.",
    category: "Research",
    icon: <Microscope className="h-3.5 w-3.5 sm:h-4 sm:w-4" />,
    image: "/article-research-v2.jpg",
    readTime: "7 min read",
    date: "Apr 18, 2026",
    color: "from-[#0c565d] from-40% via-[#0c565d]/90 via-55%", // Solid dark teal
    pillBg: "bg-[#99f6e4] text-[#0c565d]",
    arrowColor: "text-[#0c565d]",
  },
];

export function LatestArticles() {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-slate-50">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-blue-50 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold text-blue-600 shadow-sm border border-blue-100 mb-4">
              <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600" />
              Related Articles
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3 sm:mb-4">
              Latest <span className="text-teal-600">Health Insights</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              Explore our latest articles, tips, and expert advice to help you live a healthier, happier life.
            </p>
          </div>
          <Link 
            href="/articles" 
            className="inline-flex items-center gap-1.5 text-blue-600 font-bold hover:text-blue-700 hover:gap-2 transition-all group shrink-0 text-sm sm:text-base mt-2 md:mt-0"
          >
            View All Articles 
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-5 xl:gap-6">
          {articles.map((article, i) => (
            <Card 
              key={i} 
              className="relative overflow-hidden rounded-3xl h-[400px] sm:h-[420px] md:h-[450px] lg:h-[480px] xl:h-[500px] group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${article.color} to-transparent to-100% opacity-95 transition-opacity duration-300 group-hover:opacity-100`} />
              
              {/* Content */}
              <div className="absolute inset-0 px-5 pt-5 pb-0 sm:px-6 sm:pt-6 sm:pb-1 flex flex-col justify-end">
                {/* Category Pill */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-4 w-fit ${article.pillBg}`}>
                  {article.icon}
                  {article.category}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 sm:mb-3 leading-tight group-hover:text-blue-50 transition-colors">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-white/90 text-sm leading-relaxed mb-6 sm:mb-8 line-clamp-3">
                  {article.description}
                </p>

                {/* Footer (Meta Data & Arrow) */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-medium text-white/80">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 opacity-70" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 opacity-70" />
                      {article.date}
                    </div>
                  </div>
                  <div className={`bg-white ${article.arrowColor} rounded-full p-2 group-hover:scale-110 shadow-sm transition-transform`}>
                    <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
