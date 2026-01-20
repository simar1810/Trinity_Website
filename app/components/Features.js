/* eslint-disable @next/next/no-img-element */
import { Apple, Brain, Leaf, Zap, Scale, Check, Flame } from 'lucide-react';

export default function Features() {
    // Data for the 'Classes' section
    const classes = [
        {
            title: "Balanced Food Diet Mastery",
            desc: "A low-carb diet focuses on reducing carbhydrate intake while increasing protein and healthy fats. Mastering this approch can help with weight management, blood sugar regulation, and overall health.",
            icon: <Apple className="w-8 h-8 text-[#FF6B6B]" />,
            isDark: true,
        },
        {
            title: "Mindful Eating Techniques",
            desc: "Mindful eating is about developing a healthy relationship with food by paying attention to the eating experience. It helps you understand hunger signals, avoid overeating, and enjoy your meals fully.",
            icon: <Brain className="w-8 h-8 text-[#84bd00]" />,
            isDark: false,
        },
        {
            title: "Stress Reduction Strategies",
            desc: "Stress impacts both mental and physical health, disrupting sleep, digestion, and overall well-being. Effective stress reduction techniques can improve your health and enhance the success of your nutrition plan.",
            icon: <Leaf className="w-8 h-8 text-[#4dabf7]" />,
            isDark: false,
        },
        {
            title: "Building Vishvoday",
            desc: "Vishvodaya are the foundation of sustainable wellness. Developing routines that align with your health goals ensures long-term success without falling into the trap of yo-yo dieting or unsustainable practices.",
            icon: <Zap className="w-8 h-8 text-[#FFC107]" />,
            isDark: true,
        },
    ];

    const featureList = [
        "Scientifically Designed Balanced Nutrition",
        "Expert Coaching",
        "AI-Powered Meal Plans",
        "Easy-to-use App",
        "Supportive Community",
    ];

    return (
        <div className="w-full">
            {/* ================= PARTNER SECTION ================= */}
            <section className="bg-gray-50 py-12 md:py-24 overflow-hidden">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

                    {/* Left: Image with Floating Cards */}
                    <div className="relative flex justify-center py-6 md:py-10 order-2 md:order-1">
                        {/* Background Blur Effect */}
                        <div className="absolute inset-0 bg-[#84bd00]/10 rounded-full blur-3xl scale-125 z-0" />

                        {/* Main Image - Fully responsive width, aspect-square for circle */}
                        <div className="hidden md:block relative z-10 w-[85vw] h-[85vw] max-w-[450px] max-h-[450px] rounded-full border-4 md:border-8 border-white shadow-2xl overflow-hidden">
                            <img
                                src="/assets/partner-collage.png"
                                alt="Wellness Partner Collage"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Floating Badge (Top Left) - Adjusted for mobile */}
                        <div className="hidden md:block absolute top-4 left-0 sm:top-10 sm:left-0 bg-white/95 backdrop-blur-sm px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl shadow-lg border-l-4 border-[#84bd00] z-20">
                            <p className="text-[10px] md:text-sm font-bold text-[#84bd00] uppercase tracking-wider">Traditional</p>
                            <p className="text-[9px] md:text-xs text-gray-500 mt-0.5 md:mt-1">Ancient Wisdom</p>
                        </div>

                        {/* Floating Badge (Bottom Right) - Adjusted for mobile */}
                        <div className="hidden md:block absolute bottom-4 right-0 sm:bottom-10 sm:right-0 bg-white/95 backdrop-blur-sm px-3 py-2 md:px-5 md:py-3 rounded-lg md:rounded-xl shadow-lg border-r-4 border-[#84bd00] z-20 text-right">
                            <p className="text-[10px] md:text-sm font-bold text-[#84bd00] uppercase tracking-wider">Personalized</p>
                            <p className="text-[9px] md:text-xs text-gray-500 mt-0.5 md:mt-1">Tailored for You</p>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="relative z-10 order-1 md:order-2 text-center md:text-left">
                        <span className="inline-block px-3 py-1 mb-4 text-[10px] md:text-xs font-bold tracking-widest text-[#84bd00] bg-[#84bd00]/10 rounded-full uppercase">
                            Our Promise
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 leading-tight">
                            Your Reliable Partner <br className="hidden md:block" />
                            <span className="text-[#84bd00]">In Wellness</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto md:ml-0">
                            We bridge the gap between ancient healing traditions and modern science to guide you on a transformative journey toward lasting health.
                        </p>

                        {/* Feature Cards - Using Images and Left Aligned Text */}
                        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar snap-x">
                            {[
                                { title: "Nutritional Education", desc: "Prevention is better than cure.", img: "/assets/image1.png" },
                                { title: "Preventative Care", desc: "Learn to make better dietary choices.", img: "/assets/image2.png" },
                                { title: "Mind-Body Balance", desc: "Focus on Stress and emotional wellness.", img: "/assets/image3.png" }
                            ].map((pill, idx) => (
                                <div
                                    key={idx}
                                    className=" snap-center bg-white p-2 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-start hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className=" mb-3 w-auto h-auto overflow-hidden shadow-sm">
                                        <img src={pill.img} alt={pill.title} className="w-auto h-auto object-cover" />
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-sm md:text-base font-bold text-gray-800">{pill.title}</h4>
                                        <p className="text-[10px] md:text-xs text-gray-500 mt-1 leading-tight">{pill.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= CLASSES SECTION ================= */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Classes for Every Level <br className="hidden md:block" /> and Intention
                        </h2>
                        <p className="text-lg text-gray-500">
                            Our classes are thoughtfully designed for all experience levels, from foundational practices to advanced techniques.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {classes.map((item, index) => {
                            // Conditional Styling based on 'isDark' (now Light Grey vs White)
                            const cardStyles = item.isDark
                                ? "bg-gray-600 text-white border border-gray-200" // Light Grey
                                : "bg-white text-gray-900 border border-gray-100 shadow-lg";  // White

                            // Icon container background
                            const iconBg = item.isDark ? "bg-white" : "bg-gray-50";
                            const descColor = item.isDark ? "text-white" : "text-gray-500";

                            return (
                                <div
                                    key={index}
                                    className={`relative p-10 rounded-[1.0rem] transition-all duration-300 hover:shadow-2xl hover:border-[#84bd00]/30 overflow-hidden group ${cardStyles}`}
                                >
                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div>
                                            {/* Icon */}
                                            <div className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center shadow-sm ${iconBg}`}>
                                                {item.icon}
                                            </div>
                                            {/* Title */}
                                            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                            {/* Description */}
                                            <p className={`text-base leading-relaxed ${descColor}`}>
                                                {item.desc}
                                            </p>
                                        </div>

                                        {/* 'Learn More' Link */}
                                        <div className="mt-8 pt-6 border-t border-dashed border-gray-300">
                                            <span className="text-sm font-bold uppercase tracking-wider text-[#84bd00] flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Learn More
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= WHY CHOOSE SECTION ================= */}
            <section className="bg-[#fefffa] py-24 relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#84bd00]/5 -skew-x-12 origin-top-right scale-110" />

                <div className="container mx-auto px-4 pl-10 md:pl-20 relative z-10 grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <div>
                        <span className="block text-xs font-bold text-[#84bd00] uppercase tracking-widest mb-2">
                            Why Choose Us
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Trinity <span className="text-[#84bd00]">Nourishments</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            Choose us for a step-by-step path to success, backed by professionals and a supportive network.
                        </p>
                        {/* <button className="flex items-center gap-3 bg-black hover:bg-[#84bd00] text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 group">
                            Join Us Today
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button> */}
                    </div>

                    {/* Right: Feature List */}
                    <div className="space-y-4">
                        {featureList.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-transparent hover:border-[#84bd00]/20 hover:shadow-lg transition-all"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#84bd00] flex items-center justify-center text-white shadow-md">
                                    <Check className="w-6 h-6" />
                                </div>
                                <span className="text-lg font-bold text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
