/* eslint-disable @next/next/no-img-element */
export default function Features() {

    const classes = [
        { title: "Balanced Food Diet Mastery", desc: "A scientific framework combining ancient wisdom with modern nutrition.", icon: "🍎", dark: true },
        { title: "Mindful Eating Techniques", desc: "Build a healthy relationship with food.", icon: "🧘", dark: false },
        { title: "Screen Reduction Strategies", desc: "Therapeutic sessions and physical drills.", icon: "🌊", dark: false },
        { title: "Building Wellness", desc: "A holistic approach to mental and physical health.", icon: "⚡", dark: true }
    ];

    const features = [
        { title: "Scientifically Designed Curriculum", icon: "M" },
        { title: "Expert Coaching", icon: "E" },
        { title: "Multi-faceted Platform", icon: "P" },
        { title: "Easy to use App", icon: "A" },
        { title: "Supportive Community", icon: "C" }
    ];

    return (
        <>
            {/* Reliable Partner Section */}
            <section className="py-24 bg-[#f5f9f0] overflow-hidden">
                <div className="container-custom flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Image Circle/Shape */}
                    <div className="md:w-1/2 relative">
                        <div className="relative p-4 md:p-8">
                            {/* Decorative Circles */}
                            <div className="absolute top-0 right-0 w-64 h-64 border border-[#84bd00]/20 rounded-full -z-10 animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 border border-[#84bd00]/30 rounded-full -z-10"></div>

                            <div className="relative rounded-full overflow-hidden w-72 h-72 md:w-[450px] md:h-[450px] mx-auto border-8 border-white shadow-2xl">
                                <img
                                    src="/assets/partner-collage.png"
                                    alt="Wellness Partner"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute top-10 md:top-20 left-0 md:-left-4 bg-white p-4 rounded-xl shadow-lg max-w-[180px] border-l-4 border-[#84bd00]">
                                <p className="text-sm font-bold text-[#84bd00]">Traditional Wellness</p>
                                <p className="text-[11px] text-gray-500 mt-1">Ancient wisdom for modern living.</p>
                            </div>
                            <div className="absolute bottom-10 md:bottom-20 right-0 md:-right-4 bg-white p-4 rounded-xl shadow-lg max-w-[180px] border-r-4 border-[#84bd00] text-right">
                                <p className="text-sm font-bold text-[#84bd00]">Personalized Plan</p>
                                <p className="text-[11px] text-gray-500 mt-1">Tailored to your needs.</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <p className="text-[#84bd00] font-bold uppercase tracking-wider text-sm mb-2">Our Promise</p>
                        <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">Your Reliable Partner in Wellness</h2>
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">Amantra is here to guide you every step of the way, providing the tools and support you need for a balanced life. We integrate diverse practices for holistic health.</p>

                        <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                            <div className="min-w-[140px] bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#84bd00]/10 rounded-full mx-auto mb-3 flex items-center justify-center text-[#84bd00]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </div>
                                <h4 className="font-bold text-sm text-gray-800">Mindfulness</h4>
                                <p className="text-xs text-gray-500 mt-1">Daily practice</p>
                            </div>
                            <div className="min-w-[140px] bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#84bd00]/10 rounded-full mx-auto mb-3 flex items-center justify-center text-[#84bd00]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h4 className="font-bold text-sm text-gray-800">Energy</h4>
                                <p className="text-xs text-gray-500 mt-1">Boost vitality</p>
                            </div>
                            <div className="min-w-[140px] bg-white p-5 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#84bd00]/10 rounded-full mx-auto mb-3 flex items-center justify-center text-[#84bd00]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                                <h4 className="font-bold text-sm text-gray-800">Balance</h4>
                                <p className="text-xs text-gray-500 mt-1">Life harmony</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Classes / Grids */}
            <section className="py-24 bg-white">
                <div className="container-custom text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-black">Classes for Every Level <br />and Intention</h2>
                    <p className="text-gray-500 max-w-xl mx-auto">Our programs, ranging from beginner to advanced, are designed to potential your every step of the way.</p>
                </div>

                <div className="container-custom grid md:grid-cols-2 gap-8">
                    {classes.map((item, idx) => (
                        <div key={idx} className={`p-10 rounded-3xl flex flex-col justify-between min-h-[250px] transition-transform hover:-translate-y-1 ${item.dark ? 'bg-[#1a1a1a] text-white' : 'bg-gray-50 border border-gray-100 text-gray-800'}`}>
                            <div>
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 text-2xl shadow-sm ${item.dark ? 'bg-white/10 text-white' : 'bg-white text-black'}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                <p className={`text-base leading-relaxed ${item.dark ? 'text-gray-400' : 'text-gray-600'}`}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-[#fefffa] relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#84bd00]/5 -skew-x-12 transform origin-top-right"></div>

                <div className="container-custom flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Why Choose</p>
                        <h2 className="text-5xl font-bold text-[#84bd00] mb-8 leading-tight">Arogya Drishti</h2>
                        <p className="text-gray-600 mb-10 max-w-md text-lg leading-relaxed">Choose us for a step by step path to wellness, backed by science and experts. We prioritize your holistic growth.</p>
                        <button className="bg-[#84bd00] text-white px-10 py-4 rounded-full font-bold hover:bg-[#6a9c00] transition-colors shadow-xl shadow-[#84bd00]/30">
                            Join Us Today
                        </button>
                    </div>

                    <div className="md:w-1/2 grid gap-6">
                        {features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-6 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-[#84bd00] rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-[#84bd00]/20 flex-shrink-0">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg mb-1">{feat.title}</h4>
                                    <p className="text-sm text-gray-500">Comprehensive resources structured for your journey.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
