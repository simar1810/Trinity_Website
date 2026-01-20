/* eslint-disable @next/next/no-img-element */
export default function Hero() {
    return (
        <section id="home" className="relative w-full min-h-screen bg-[#111] overflow-hidden flex flex-col justify-between font-sans">
            {/* Background Overlay & Image */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
                <img
                    src="/assets/hero-bg.png"
                    alt="Wellness Background"
                    className="w-full h-full object-cover opacity-90"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom pt-32 md:pt-48 pb-10 flex-grow flex items-center">
                <div className="max-w-2xl">
                    <div className="inline-block px-4 py-1 border border-white/30 rounded-full text-white/90 text-sm mb-6 backdrop-blur-md uppercase tracking-wide">
                        Wellness
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
                        Step Into Wellness, <br />
                        <span className="italic font-light text-[#e0e0e0]">Flow Into Balance</span>
                    </h1>
                    <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-lg leading-relaxed shadow-sm">
                        Transform your health with customised nutrition, intelligent tools, and trusted expert advice.
                    </p>
                    {/* <button className="bg-[#84bd00] text-black font-bold px-10 py-4 rounded-full hover:bg-[#6a9c00] transition-colors shadow-[0_0_20px_rgba(132,189,0,0.4)]">
                        Start Free Trial
                    </button> */}
                </div>
            </div>

            {/* Stats Bar */}
            <div className="relative z-10 bg-[#84bd00] w-full py-8 md:py-10 text-black">
                <div className="container-custom grid grid-cols-3 divide-x divide-black/10 text-center">
                    <div className="px-2 md:px-4">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-1">100</h3>
                        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold uppercase tracking-wider opacity-80 leading-tight">Life Impacts</p>
                    </div>
                    <div className="px-2 md:px-4">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-1">10+</h3>
                        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold uppercase tracking-wider opacity-80 leading-tight">Personalized Plans</p>
                    </div>
                    <div className="px-2 md:px-4">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-1">97%</h3>
                        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold uppercase tracking-wider opacity-80 leading-tight">User Satisfaction</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
