export default function Footer() {
    return (
        <footer className="bg-[#005c30] text-white py-16 border-t border-white/5">
            <div className="container-custom flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Logo & Info */}
                <div className="md:w-1/3">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-full bg-[#84bd00] flex items-center justify-center p-2">
                            <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4L22.5 17.5L36 20L22.5 22.5L20 36L17.5 22.5L4 20L17.5 17.5L20 4Z" fill="currentColor" />
                            </svg>
                        </div>
                        <span className="text-2xl font-extrabold tracking-widest uppercase text-white">Amantra</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                        Your partner in holistic health, bridging ancient wisdom with modern science for a balanced life.
                    </p>
                    <p className="text-xs text-gray-400">© 2026 Amantra. All rights reserved.</p>
                </div>

                {/* Contact Info */}
                <div className="md:w-1/3 text-left md:text-right w-full">
                    <h4 className="font-bold text-xl mb-6 text-[#84bd00]">Contact Us</h4>
                    <p className="text-sm mb-3 text-gray-200 hover:text-white transition-colors cursor-pointer">Email: contact@amantra-wellness.com</p>
                    <p className="text-sm mb-6 text-gray-200 hover:text-white transition-colors cursor-pointer">Phone: +91 987 654 3210</p>

                    <div className="flex md:justify-end gap-2 mt-4">
                        <span className="text-xs text-gray-500">Made with ❤️ for Wellness</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
