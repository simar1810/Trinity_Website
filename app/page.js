'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Process from './components/Process';
import Features from './components/Features';
import Community from './components/Community';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Process />
      <Features />
      <Community />
      <ContactForm />
      <Footer />
    </main>
  );
}

