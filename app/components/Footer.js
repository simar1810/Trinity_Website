import Image from 'next/image';
import logoImage from '@/public/assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-[#005c30] text-white py-16 border-t border-white/5">
            <div className="container-custom flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Logo & Info */}
                <div className="md:w-1/3">
                    <div className="flex items-center gap-4 mb-6">
                
                        <div className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden transition-transform group-hover:rotate-12 duration-500">
                            <Image src={logoImage} alt="Trinity Nourishments Logo" className="w-full h-full object-contain p-1" width={80} height={80} />
                        </div>
                        <span className="text-2xl font-extrabold tracking-widest uppercase text-white">Trinity Nourishments</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed mb-6">
                        Your partner in holistic health, bridging ancient wisdom with modern science for a balanced life.
                    </p>
                    <p className="text-xs text-gray-400">© 2026 Trinity Nourishments. All rights reserved.</p>
                </div>

                {/* Contact Info */}
                <div className="md:w-1/3 text-left md:text-right w-full">
                    <h4 className="font-bold text-xl mb-6 text-[#84bd00]">Contact Us</h4>
                    <p className="text-sm mb-3 text-gray-200 hover:text-white transition-colors cursor-pointer">garimars1@gmail.com</p>
                    <p className="text-sm mb-6 text-gray-200 hover:text-white transition-colors cursor-pointer">9845185125</p>

                    <div className="flex md:justify-end gap-2 mt-4">
                        <span className="text-xs text-gray-500">Made with ❤️ by WellnessZ</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
