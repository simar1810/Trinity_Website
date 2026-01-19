export default function Process() {
    const steps = [
        {
            id: "01",
            title: "Consultant Information & Assessment",
            desc: "Tell us about your wellness goals, dietary preferences, and any constraints.",
        },
        {
            id: "02",
            title: "Seamless Access to the Arogya Shakti",
            desc: "Get access to a personalized wellness regimen, resources, and expert guidance.",
        },
        {
            id: "03",
            title: "Whole Body Transformation",
            desc: "Track meaningful progress with regular check-ins and plan adjustments.",
        },
        {
            id: "04",
            title: "Achieved a Healthier You!",
            desc: "Reach your goals with confidence and maintain a sustainable lifestyle.",
        }
    ];

    return (
        <section className="py-20 bg-white" id="process">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">How its Works</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Your journey is our priority. A path matched the perfect plan so best of results.</p>
                </div>

                <div className="relative flex flex-col gap-12 md:gap-0">
                    {/* Central Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-dashed border-l border-gray-300 -translate-x-1/2"></div>

                    {steps.map((step, index) => {
                        const isEven = index % 2 === 1; // 0 index is odd visually (left), 1 index is even (right) . actually 0->Left, 1->Right
                        // Wait, Design: 
                        // 01 (Right Side Number, Left Content) ? Or Number is separate?
                        // Let's assume standard ZigZag:
                        // Row 1: Content Left, Number Right.
                        // Row 2: Number Left, Content Right.

                        return (
                            <div key={step.id} className="flex flex-col md:flex-row items-center w-full relative">

                                {/* Left Side */}
                                <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-start md:pr-12' : 'justify-end md:pl-12'} order-2 md:order-1`}>
                                    {/* If Even (Right Side Content), Left side is Number */}
                                    {isEven ? (
                                        <div className="md:text-right hidden md:block">
                                            <span className="text-8xl font-bold text-stroke-1 opacity-20 select-none block leading-none">{step.id}</span>
                                        </div>
                                    ) : (
                                        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md relative z-10 border-l-4 border-[#84bd00]">
                                            <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-[#84bd00] border-4 border-white shadow-md z-20 hidden md:block"></div>

                                {/* Right Side */}
                                <div className={`w-full md:w-1/2 flex ${isEven ? 'justify-end md:pl-12' : 'justify-start md:pr-12'} order-1 md:order-2`}>
                                    {isEven ? (
                                        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md relative z-10 border-r-4 border-[#84bd00] text-right">
                                            <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                        </div>
                                    ) : (
                                        <div className="md:text-left hidden md:block">
                                            <span className="text-8xl font-bold text-stroke-1 opacity-20 select-none block leading-none">{step.id}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile View Adjustment */}
                                <div className="md:hidden w-full pl-4 border-l-2 border-[#84bd00]/30 ml-4 pb-8 relative">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#84bd00] border-2 border-white"></div>
                                    <span className="text-4xl font-bold text-gray-200 absolute top-0 right-0">{step.id}</span>
                                    <div className="bg-white p-6 rounded-lg shadow-md mt-2">
                                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                        <p className="text-gray-500 text-sm">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
