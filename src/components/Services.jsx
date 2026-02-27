import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
    const spaServices = [
        { name: "Chăm sóc da chuyên sâu", desc: "Liệu trình phục hồi da tổn thương, cấp ẩm và chống lão hóa bằng dược mỹ phẩm cao cấp.", price: "Từ 500k" },
        { name: "Massage tinh dầu Thụy Điển", desc: "Giảm căng thẳng cơ bắp, lưu thông khí huyết với kỹ thuật xoa bóp thư giãn sâu.", price: "Từ 400k" },
        { name: "Gội đầu dưỡng sinh", desc: "Làm sạch da đầu, đả thông kinh lạc vùng đầu, cổ, vai, gáy.", price: "Từ 250k" },
        { name: "Trị liệu cổ vai gáy", desc: "Giải quyết triệt để tình trạng nhức mỏi, thoái hóa do ngồi nhiều.", price: "Từ 450k" }
    ];

    const pilatesClasses = [
        { name: "Mat Pilates (Lớp Thảm)", desc: "Tập trung vào cơ lõi, điều khiển hơi thở và sự dẻo dai với các dụng cụ nhỏ (bóng, vòng).", level: "Cơ bản - Trung bình" },
        { name: "Reformer Pilates (Lớp Máy)", desc: "Sử dụng hệ thống lò xo kháng lực giúp định hình cơ thể, chỉnh sửa tư thế hiệu quả nhất.", level: "Mọi cấp độ" },
        { name: "Lớp 1 kèm 1 (Private)", desc: "Giáo án cá nhân hóa theo tình trạng bệnh lý và mục tiêu thể hình của từng học viên.", level: "Theo nhu cầu" },
        { name: "Pilates cho Mẹ bầu", desc: "Bài tập nhẹ nhàng, an toàn giúp giảm đau lưng và chuẩn bị sức khỏe tốt cho thai kỳ.", level: "Đặc biệt" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="services" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-text-dark mb-4 drop-shadow-sm">Dịch Vụ & Lớp Học</h2>
                    <p className="text-gray-600 text-lg">Chúng tôi mang đến các giải pháp chăm sóc sức khỏe toàn diện, đáp ứng nhu cầu thư giãn và tập luyện của bạn.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Khu Spa */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-brand-bg-light/50 p-8 rounded-2xl border border-brand-primary/30 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-bl-full -z-10"></div>
                        <h3 className="text-3xl font-bold text-brand-text-dark mb-8 flex items-center">
                            <span className="bg-brand-primary text-white p-2 rounded-lg mr-4 shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </span>
                            Khu Spa Trị Liệu
                        </h3>

                        <div className="space-y-6">
                            {spaServices.map((service, index) => (
                                <motion.div key={index} variants={itemVariants} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-semibold text-gray-800">{service.name}</h4>
                                        <span className="text-brand-primary-hover font-bold whitespace-nowrap ml-4">{service.price}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Khu Pilates */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="bg-brand-bg-cream p-8 rounded-2xl border border-brand-primary/20 relative overflow-hidden shadow-sm"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-bg-light rounded-bl-full -z-10"></div>
                        <h3 className="text-3xl font-bold text-brand-text-dark mb-8 flex items-center">
                            <span className="bg-brand-primary-hover text-white p-2 rounded-lg mr-4 shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                            </span>
                            Lớp Học Pilates
                        </h3>

                        <div className="space-y-6">
                            {pilatesClasses.map((cls, index) => (
                                <motion.div key={index} variants={itemVariants} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-brand-primary">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="text-xl font-semibold text-gray-800">{cls.name}</h4>
                                        <span className="bg-brand-bg-light text-brand-primary-hover font-medium text-xs px-3 py-1 rounded-full whitespace-nowrap ml-4">{cls.level}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{cls.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Services;
