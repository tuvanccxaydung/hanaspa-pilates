import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-brand-bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 aspect-[4/5]">
                            <img
                                src="/src/assets/hero_bg.jpg"
                                alt="Pilates Studio"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative background blocks */}
                        <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 bg-brand-primary/30 rounded-2xl -z-0"></div>
                        <div className="absolute -top-8 -right-8 w-1/2 h-1/2 bg-brand-bg-light rounded-2xl -z-0"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2"
                    >
                        <h4 className="text-brand-primary font-semibold uppercase tracking-wider mb-2">Về Chúng Tôi</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-text-dark mb-6 leading-tight">
                            Sự kết hợp hoàn hảo giữa <span className="text-brand-primary">phục hồi</span> & <span className="text-brand-primary-hover">thư giãn</span>
                        </h2>

                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Tại <strong className="text-brand-text-dark font-semibold">HANA SPA & PILATES</strong>, chúng tôi tin rằng sức khỏe đích thực đến từ sự cân bằng giữa cơ thể và tâm trí. Triết lý của chúng tôi tập trung vào việc mang đến một liệu trình toàn diện cho mọi khách hàng.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-primary/20">
                                <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-brand-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold text-brand-text-dark mb-2">Thư Giãn Sâu</h3>
                                <p className="text-gray-600 text-sm">Liệu pháp Spa trị liệu nguồn gốc thiên nhiên giúp giải phóng căng thẳng và tái tạo da.</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-brand-primary/20">
                                <div className="w-12 h-12 bg-brand-bg-light rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-brand-primary-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                                </div>
                                <h3 className="text-xl font-bold text-brand-text-dark mb-2">Điều Chỉnh Tư Thế</h3>
                                <p className="text-gray-600 text-sm">Tập luyện Pilates chuyên sâu giúp tăng cường cơ lõi, cải thiện độ linh hoạt và phục hồi vận động.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
