'use client';

/* eslint-disable @next/next/no-img-element */
import { GraduationCap, Heart } from 'lucide-react';

const qualifications = [
  "Master's in Foods & Nutrition (MSU Vadodara)",
  "Certified in Ayurvedic Dietetics and Functional Medicine Clinical Nutrition",
  "Trained under Dr. John Douillard (Ayurvedic & Gut Health Expert), USA",
  "Trained under the best life and mindset coach, Shruti Chaudhary",
  "Master's in Theology (DEI)",
  "PhD Scholar researching the Diet–Mood–Meditation Connection",
  "15+ years of experience as a freelance dietician",
  "Member: Indian Dietetic Association & Indian Functional Medicine Clinical Nutrition Association",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container-custom">
        {/* Section label */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#84bd00] bg-[#84bd00]/10 rounded-full uppercase">
            About your Coach
          </span>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-14 items-start">
            {/* Coach photo */}
            <div className="mx-auto md:mx-0 order-2 md:order-1">
              <div className="relative aspect-[3/4] max-w-[280px] rounded-2xl overflow-hidden border-2 border-[#84bd00]/30 shadow-lg">
                <img
                  src="/assets/garima.jpg"
                  alt="Garima Bhatnagar - Dietician & Founder, Trinity Nourishments"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Garima Bhatnagar
              </h2>
              <p className="text-[#005c30] font-semibold text-lg mb-1">
                Founder, Trinity Nourishments By Garima
              </p>
              <p className="text-gray-600 text-sm md:text-base mb-6 flex flex-wrap gap-x-2 gap-y-1">
                <span>Dietician & Lifestyle Expert</span>
                <span className="text-[#84bd00]">|</span>
                <span>Mindset Coach</span>
                <span className="text-[#84bd00]">|</span>
                <span>Research Scholar</span>
              </p>

              {/* Who I Am */}
              <div className="mb-8">
                <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-3 border-l-4 border-[#84bd00] pl-3">
                  <Heart className="w-5 h-5 text-[#84bd00]" />
                  Who I Am?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I am a passionate nutrition and wellness professional dedicated to transforming lives through food, mindset shifts, and sustainable lifestyle practices.
                </p>
              </div>

              {/* Qualifications & Expertise */}
              <div>
                <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-4 border-l-4 border-[#84bd00] pl-3">
                  <GraduationCap className="w-5 h-5 text-[#84bd00]" />
                  Qualifications & Expertise
                </h3>
                <ul className="space-y-3">
                  {qualifications.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-gray-600 text-sm md:text-base"
                    >
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#84bd00] mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
