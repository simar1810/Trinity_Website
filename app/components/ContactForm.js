export default function ContactForm() {
    return (
        <section className="py-24 bg-gradient-to-b from-[#7ab300] to-[#5a8c00]">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">Let&apos;s Know You Better!</h2>
                    <p className="text-white/80 max-w-xl mx-auto text-lg">Send us a message and we will get back to you shortly.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 max-w-5xl mx-auto shadow-2xl">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-white ml-2">Name</label>
                            <input type="text" placeholder="Enter Your Name" className="w-full px-6 py-4 rounded-full bg-white text-black placeholder:text-gray-400 focus:ring-4 focus:ring-[#84bd00]/50 outline-none transition-all shadow-inner" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-white ml-2">Phone</label>
                            <input type="tel" placeholder="Enter Your Phone Number" className="w-full px-6 py-4 rounded-full bg-white text-black placeholder:text-gray-400 focus:ring-4 focus:ring-[#84bd00]/50 outline-none transition-all shadow-inner" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-white ml-2">Email</label>
                            <input type="email" placeholder="Enter Your Email" className="w-full px-6 py-4 rounded-full bg-white text-black placeholder:text-gray-400 focus:ring-4 focus:ring-[#84bd00]/50 outline-none transition-all shadow-inner" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-white ml-2">What is your goal?</label>
                            <input type="text" placeholder="Enter Your Goal" className="w-full px-6 py-4 rounded-full bg-white text-black placeholder:text-gray-400 focus:ring-4 focus:ring-[#84bd00]/50 outline-none transition-all shadow-inner" />
                        </div>

                        <div className="md:col-span-2 flex justify-center mt-6">
                            <button type="button" className="bg-[#1a1a1a] text-white px-12 py-4 rounded-full font-bold hover:bg-black transition-all hover:scale-105 shadow-xl">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
