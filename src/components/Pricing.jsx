import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
    const plans = [
        {
            name: "Trải Nghiệm Lẻ",
            price: "250.000đ",
            period: "/buổi",
            desc: "Dành cho khách hàng muốn làm quen với Pilates hoặc Spa cơ bản.",
            features: [
                "1 buổi tập Mat Pilates",
                "Sử dụng phòng tắm & xông hơi",
                "Nước uống & khăn tập",
                "Tư vấn lộ trình cơ bản"
            ],
            buttonText: "Đặt Lịch Ngay",
            popular: false,
            color: "brand-bg-light"
        },
        {
            name: "Hội Viên Cơ Bản",
            price: "2.500.000đ",
            period: "/tháng",
            desc: "Gói tiêu chuẩn duy trì thói quen tập luyện và chăm sóc bản thân.",
            features: [
                "8 buổi tập Reformer Pilates",
                "1 buổi Massage thư giãn 60 phút",
                "Đo chỉ số InBody miễn phí",
                "Bảo lưu gói tập tối đa 14 ngày",
                "Ưu đãi 10% khi mua mỹ phẩm"
            ],
            buttonText: "Chọn Gói Này",
            popular: true,
            color: "brand-primary"
        },
        {
            name: "Chăm Sóc Toàn Diện",
            price: "5.500.000đ",
            period: "/tháng",
            desc: "Lựa chọn hoàn hảo cho sự thay đổi vóc dáng và phục hồi chuyên sâu.",
            features: [
                "Tập Pilates không giới hạn",
                "4 buổi Massage trị liệu 90 phút",
                "Kèm 1-1 với HLV 2 buổi/tháng",
                "Phân tích da chuyên sâu",
                "Tặng kèm set đồ tập HANA"
            ],
            buttonText: "Chọn Gói Này",
            popular: false,
            color: "brand-primary-hover"
        }
    ];

    return (
        <section id="pricing" className="py-20 md:py-32 bg-brand-bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-text-dark mb-4">Bảng Giá Dịch Vụ</h2>
                    <p className="text-gray-600 text-lg">Đầu tư vào sức khỏe là khoản đầu tư sinh lời nhất. Chọn gói phù hợp với bạn ngay hôm nay.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`bg-white rounded-2xl shadow-lg relative overflow-hidden flex flex-col h-full transform transition-transform hover:-translate-y-2 border-t-4 ${plan.popular ? 'border-brand-primary md:-mt-8 md:mb-8 md:z-10 shadow-xl' : index === 0 ? 'border-brand-bg-light' : 'border-brand-primary-hover'
                                }`}
                        >
                            {plan.popular && (
                                <div className="bg-brand-primary text-white text-sm font-bold uppercase tracking-wider py-1.5 text-center">
                                    Được Ưa Chuộng Nhất
                                </div>
                            )}

                            <div className="p-8 flex-1">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                                <p className="text-gray-500 mb-6 text-sm h-10">{plan.desc}</p>
                                <div className="mb-6">
                                    <span className="text-4xl font-extrabold text-brand-text-dark">{plan.price}</span>
                                    <span className="text-gray-500 font-medium">{plan.period}</span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <Check className="h-5 w-5 text-brand-primary shrink-0 mr-3" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 pt-0 mt-auto">
                                <button className={`w-full py-4 rounded-xl font-bold transition-colors ${plan.popular
                                        ? 'bg-brand-primary text-white hover:bg-brand-primary-hover shadow-md'
                                        : 'bg-brand-bg-light text-brand-text-dark hover:bg-pink-100'
                                    }`}>
                                    {plan.buttonText}
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
