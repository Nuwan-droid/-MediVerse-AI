import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
          <div className="bg-teal-100 p-4 rounded-full">
            <BookOpen className="h-10 w-10 text-teal-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Health Articles
          </h1>
         
        </div>
      </div>
    </main>
  );
}
