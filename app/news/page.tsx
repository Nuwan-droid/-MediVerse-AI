import { Card } from "@/components/ui/card";
import { Search } from "lucide-react"; 
import { FileText } from "lucide-react";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <FileText className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Medical News
          </h1>
        
        </div>
      </div>
    </main>
  );
}
