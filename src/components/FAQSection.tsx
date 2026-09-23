"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  CircleHelp,
  Headphones,
  MessageCircle,
  ShieldCheck,
  CalendarCheck,
  LockKeyhole,
  CreditCard,
  Clock3,
  ClipboardList,
  Globe2,
  HeartHandshake,
  Mail,
  Lightbulb,
} from "lucide-react";

const faqs = [
  {
    question: "How do I create an account?",
    answer:
      'You can create an account by clicking the "Sign Up" button on the top right corner of our website. Fill in your details, verify your email, and you are all set! It only takes a few minutes.',
    icon: CircleHelp,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book an appointment by visiting the Doctors section, selecting a doctor, and choosing an available date and time.",
    icon: CalendarCheck,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "We take privacy seriously and use appropriate security measures to help protect your personal information.",
    icon: LockKeyhole,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    question: "Does the platform accept insurance?",
    answer:
      "Insurance availability depends on the healthcare provider and service. Please check with the provider before booking.",
    icon: CreditCard,
    bg: "bg-red-100",
    color: "text-red-500",
  },
  {
    question: "Can I cancel or reschedule my appointment?",
    answer:
      "Yes. You can manage your appointment from your account. Cancellation and rescheduling may depend on the provider's policy.",
    icon: Clock3,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    question: "What should I bring to my appointment?",
    answer:
      "Bring any relevant medical information, identification, appointment details, and a list of medications if applicable.",
    icon: ClipboardList,
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
  {
    question: "Do you offer services in multiple languages?",
    answer:
      "We aim to make our healthcare information accessible to users from different backgrounds and languages.",
    icon: Globe2,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team using the Contact Us option. Our support team will be happy to assist you.",
    icon: HeartHandshake,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
];

const helpItems = [
  {
    title: "Need More Help?",
    description: "Our support team is ready to assist you 24/7.",
    icon: Headphones,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Quick & Easy",
    description: "Find answers instantly, anytime, anywhere.",
    icon: MessageCircle,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Your Health Matters",
    description: "We're here to support your well-being, every step of the way.",
    icon: ShieldCheck,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
];

const trustItems = [
  {
    title: "Trusted Care",
    description: "Reliable and professional health support.",
    icon: HeartHandshake,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Easy Access",
    description: "Get the information you need, when you need it.",
    icon: ShieldCheck,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Expert Support",
    description: "Our team is always ready to help.",
    icon: Headphones,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Health for a Better You",
    description: "Better information. Healthier decisions.",
    icon: Globe2,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f7fbff] py-16 sm:py-20">
      {/* Decorative background shapes */}
      <div className="absolute left-0 bottom-0 h-32 w-[45%] rounded-tr-[100%] bg-teal-100/60" />
      <div className="absolute right-0 bottom-0 h-32 w-[45%] rounded-tl-[100%] bg-blue-100/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main FAQ area */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.5fr_0.9fr] lg:items-center">
          
          {/* LEFT SIDE */}
          <div>
            {/* Small label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
              <CircleHelp className="h-4 w-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-600">
                Frequently Asked Questions
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
              Got Questions?
              <br />
              <span className="text-teal-500">We&apos;ve Got Answers</span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">
              Find quick answers to the most common questions about our
              services, tools, appointments, and more. If you don&apos;t see
              your question here, feel free to contact us — we&apos;re always
              here to help!
            </p>

            {/* Help items */}
            <div className="mt-8 space-y-6">
              {helpItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.bg}`}
                    >
                      <Icon className={`h-5 w-5 ${item.color}`} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-blue-950">
                        {item.title}
                      </h3>

                      <p className="mt-1 max-w-[210px] text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MIDDLE - FAQ LIST */}
          <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-[0_10px_40px_rgba(30,100,180,0.08)] sm:p-5">
            <div className="space-y-2">
              {faqs.map((faq, index) => {
                const Icon = faq.icon;
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-xl border border-blue-100 bg-white"
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                      className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-blue-50/50"
                    >
                      {/* Icon */}
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${faq.bg}`}
                      >
                        <Icon className={`h-4 w-4 ${faq.color}`} />
                      </div>

                      {/* Question */}
                      <span className="flex-1 text-xs font-bold text-blue-950 sm:text-sm">
                        {faq.question}
                      </span>

                      {/* Arrow */}
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 shrink-0 text-blue-600" />
                      ) : (
                        <ChevronDown className="h-4 w-4 shrink-0 text-blue-600" />
                      )}
                    </button>

                    {/* Answer */}
                    {isOpen && (
                      <div className="px-4 pb-4 pl-[60px]">
                        <div className="rounded-lg bg-blue-50 px-4 py-3">
                          <p className="text-xs leading-5 text-slate-500">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* View all FAQs */}
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="rounded-full bg-blue-50 px-5 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-100"
              >
                View All FAQs →
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex flex-col items-center">
            
            {/* Doctor image */}
            <div className="relative h-[350px] w-full max-w-[300px]">
              <Image
                src="/doctor image.png"
                alt="Healthcare professional"
                fill
                className="object-contain"
              />

              {/* Question bubble */}
              <div className="absolute right-0 top-5 flex h-16 w-20 items-center justify-center rounded-[50%] bg-blue-200 shadow-sm">
                <span className="text-3xl font-bold text-white">?</span>
              </div>
            </div>

            {/* Still have questions card */}
            <div className="relative -mt-16 w-full max-w-[260px] rounded-[30px] border border-blue-100 bg-white/95 p-6 shadow-lg">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100">
                  <Lightbulb className="h-5 w-5 text-blue-600" />
                </div>

                <h3 className="font-handwriting text-xl font-bold italic text-blue-500">
                  Still have
                  <br />
                  questions?
                </h3>
              </div>

              <p className="text-xs leading-5 text-slate-500">
                Our friendly support team is here to help you.
              </p>

              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
              >
                <Mail className="h-3.5 w-3.5" />
                Contact Us
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM TRUST BAR */}
        <div className="mt-16 border-t border-blue-100 pt-8">
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-3 px-4 lg:px-7 ${
                    index !== 0 ? "lg:border-l lg:border-blue-100" : ""
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${item.bg}`}
                  >
                    <Icon className={`h-5 w-5 ${item.color}`} />
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-blue-950">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-[10px] leading-4 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}