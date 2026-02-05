"use client";

import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#111]">
      <Header />

      <section className="flex-1 pt-28 pb-16 bg-[#111] text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 border-b-4 border-[#84bd00] inline-block pb-1">
              Contact Trinity Nourishments
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
              Have questions, need support, or want to start your wellness
              journey with us? Share your details and we&apos;ll get back to
              you as soon as possible.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
