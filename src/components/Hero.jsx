import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBannerImg from '../assets/hero_banner_real.png';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBannerImg}
                    alt="Luxurious Spa and Pilates Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-stone-900/50 mix-blend-multiply"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 text-white">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-brand-primary font-medium tracking-widest uppercase mb-4"
                >
                    CHÀO MỪNG ĐẾN VỚI HANA SPA &amp; PILATES
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg"
                >
                    Cân bằng Thể chất & <br className="hidden md:block" /> Thư giãn Tinh thần
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-stone-100 mb-10 max-w-2xl mx-auto font-light drop-shadow-md"
                >
                    Trải nghiệm không gian tĩnh lặng, nơi phục hồi cơ bắp và làm mới năng lượng từ bên trong cùng các chuyên gia hàng đầu.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-white bg-brand-primary hover:bg-brand-primary-hover rounded-full font-bold uppercase transition-colors text-lg shadow-lg">
                        ĐẶT LỊCH NGAY
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                    <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-brand-text-dark bg-white hover:bg-brand-bg-cream rounded-full font-bold uppercase transition-colors text-lg shadow-lg border-2 border-transparent hover:border-brand-primary">
                        KHÁM PHÁ DỊCH VỤ
                    </a>
                </motion.div>
            </div>

            {/* Decorative element at bottom */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
                <svg className="relative block w-full h-12 md:h-24 lg:h-32" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.11,201.2,120.72,241.6,119.34,281.4,111.45,321.39,56.44Z" fill="var(--color-brand-bg-cream)"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
