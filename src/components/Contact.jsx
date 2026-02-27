import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-text-dark mb-4">Liên Hệ & Đặt Lịch</h2>
                    <p className="text-gray-600 text-lg">Hãy để lại thông tin, đội ngũ chăm sóc khách hàng của chúng tôi sẽ liên hệ lại nhanh nhất.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-primary/10">

                    {/* Form Side */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 lg:pr-8">
                        <h3 className="text-2xl font-bold text-brand-text-dark mb-6">Đăng Ký Tư Vấn</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Họ và Tên</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors" placeholder="Nguyễn Văn A" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Số Điện Thoại</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors" placeholder="090 123 4567" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Dịch Vụ Quan Tâm</label>
                                <select id="service" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors bg-white">
                                    <option value="">Chọn dịch vụ...</option>
                                    <option value="spa">Dịch Vụ Spa Trị Liệu</option>
                                    <option value="pilates_mat">Lớp Mat Pilates</option>
                                    <option value="pilates_reformer">Lớp Reformer Pilates</option>
                                    <option value="combo">Combo Chăm Sóc Toàn Diện</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Ngày Giờ Mong Muốn (Tuỳ chọn)</label>
                                <input type="datetime-local" id="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors" />
                            </div>

                            <div>
                                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Ghi Chú Thêm</label>
                                <textarea id="notes" rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors resize-none" placeholder="Tình trạng sức khỏe, yêu cầu đặc biệt..."></textarea>
                            </div>

                            <button type="button" className="w-full bg-brand-primary hover:bg-brand-primary-hover text-brand-text-dark font-bold py-4 rounded-xl transition-colors shadow-md text-lg">
                                Gửi Yêu Cầu Đặt Lịch
                            </button>
                        </form>
                    </div>

                    {/* Info Side with Map */}
                    <div className="w-full lg:w-1/2 bg-brand-bg-light p-8 md:p-12 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-brand-text-dark mb-8">Thông Tin Liên Hệ</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <MapPin className="w-6 h-6 text-brand-primary mr-4 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Địa Chỉ</h4>
                                        <p className="text-gray-600 mt-1">số 07 Đông Hưng Thuận 8, Phường Đông Hưng Thuận, Quận 12, TP. HCM</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="w-6 h-6 text-brand-primary mr-4 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Hotline</h4>
                                        <p className="text-gray-600 mt-1">090 300 1416</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="w-6 h-6 text-brand-primary mr-4 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email</h4>
                                        <p className="text-gray-600 mt-1">hello@spapilateshana.vn</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Clock className="w-6 h-6 text-brand-primary mr-4 shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Giờ Hoạt Động</h4>
                                        <p className="text-gray-600 mt-1">Thứ 2 - Chủ Nhật: 08:00 - 21:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 rounded-xl overflow-hidden shadow-inner h-64 border-4 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.006963496035!2d106.62104336021612!3d10.772594452136004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ea144839ef1%3A0x798819bdcd0522b0!2zVMOibiBQaMO6LCBIbyBDaGkgTWluaCBDaXR5LCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1707530635432!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps Location"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
