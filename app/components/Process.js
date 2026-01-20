export default function Process() {
    const steps = [
        {
            id: "01",
            title: "Sign Up & Get Personalized Assessment",
            desc: "Tell us about your health goals, dietary preferences, and any medical history.",
        },
        {
            id: "02",
            title: "Get Instant Access to the Trinity Nourishments",
            desc: "Get access to a personalized wellness regimen, resources, and expert guidance.",
        },
        {
            id: "03",
            title: "Follow Your Personalized Plan & Track Progress",
            desc: "Get science-backed meal plans, expert consultations and real-time tracking.",
        },
        {
            id: "04",
            title: "Achieved a Healthier You!",
            desc: "Stay consistent with reminders, recipe recommendations, and expert advice",
        },
    ];

    return (
        <section className="py-20 bg-white" id="process">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How it Works</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Your concerns are our priority - we craft the perfect plan to fit your needs.
                    </p>
                </div>

                <div className="relative">
                    {/* Center Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 h-full w-px border-l border-dashed border-gray-300 -translate-x-1/2" />

                    <div className="flex flex-col gap-24">
                        {steps.map((step, index) => {
                            const isRight = index % 2 === 0; // 01 Right, 02 Left

                            return (
                                <div
                                    key={step.id}
                                    className="relative grid md:grid-cols-[1fr_auto_1fr] items-center"
                                >
                                    {/* LEFT CARD (02, 04) */}
                                    <div className="hidden md:flex justify-end pr-[56px]">
                                        {isRight && (
                                            <div className="relative max-w-md text-right">
                                                <div className="bg-white p-8 rounded-xl shadow-lg border-r-4 border-[#84bd00]">
                                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                                    <p className="text-gray-500 text-sm">{step.desc}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* CENTER (DOT + NUMBER) */}
                                    <div className="relative flex justify-center">
                                        {/* Dot */}
                                        <div className="hidden md:block w-4 h-4 rounded-full bg-[#84bd00] border-4 border-white shadow z-10" />

                                        {/* Number (DESKTOP ONLY) */}
                                        <span
                                            className={`hidden md:block absolute top-1/2 -translate-y-1/2 text-[110px] font-bold text-gray-200 select-none
                        ${isRight ? "left-[32px]" : "right-[32px]"}`}
                                        >
                                            {step.id}
                                        </span>
                                    </div>

                                    {/* RIGHT CARD (01, 03) */}
                                    <div className="hidden md:flex justify-start pl-[56px]">
                                        {!isRight && (
                                            <div className="relative max-w-md">
                                                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#84bd00]">
                                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                                    <p className="text-gray-500 text-sm">{step.desc}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* MOBILE CARD (ONLY ONCE) */}
                                    <div className="md:hidden relative pl-8 border-l-2 border-[#84bd00]/30">
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#84bd00] rounded-full border-2 border-white" />
                                        <div className="bg-white p-6 rounded-lg shadow-md">
                                            <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                            <p className="text-gray-500 text-sm">{step.desc}</p>
                                        </div>
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
