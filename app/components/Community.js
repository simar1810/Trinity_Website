/* eslint-disable @next/next/no-img-element */
export default function Community() {
    return (
        <section className="py-24 bg-white">
            <div className="container-custom text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">Wellness from Our Thriving Community</h2>
                <p className="text-gray-500">Experience the transformation stories from our community members.</p>
            </div>

            {/* Community Scroll/Grid */}
            <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 1].map((i, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
                        <img
                            src={`/assets/community-${i}.png`}
                            alt="Community Member"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                            <p className="font-bold text-lg mb-1">Community Member</p>
                            <p className="text-sm opacity-80 font-light">Wellness Enthusiast</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
