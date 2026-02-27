import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-bg-light text-brand-text py-12 border-t border-brand-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-bold tracking-tighter text-brand-text-dark mb-4 drop-shadow-sm">
                            <span className="text-brand-primary">HANA</span> SPA & PILATES
                        </h2>
                        <p className="max-w-md text-gray-600 mb-6 font-light leading-relaxed">
                            Trải nghiệm sự cân bằng hoàn hảo giữa sức khỏe thể chất và sự thư giãn tinh thần với các dịch vụ spa trị liệu và lớp học pilates chuyên nghiệp.
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholders */}
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-brand-primary/30 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors text-brand-primary shadow-sm font-medium">
                                Fb
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-brand-primary/30 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors text-brand-primary shadow-sm font-medium">
                                Ig
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-brand-primary/30 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors text-brand-primary shadow-sm font-medium">
                                Tt
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-brand-text-dark font-semibold mb-4 uppercase tracking-wider text-sm">Liên Kết Nhanh</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-gray-600 hover:text-brand-primary transition-colors">Trang Chủ</a></li>
                            <li><a href="#about" className="text-gray-600 hover:text-brand-primary transition-colors">Về Chúng Tôi</a></li>
                            <li><a href="#services" className="text-gray-600 hover:text-brand-primary transition-colors">Dịch Vụ & Lớp Học</a></li>
                            <li><a href="#pricing" className="text-gray-600 hover:text-brand-primary transition-colors">Bảng Giá</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-brand-text-dark font-semibold mb-4 uppercase tracking-wider text-sm">Chính Sách</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-600 hover:text-brand-primary transition-colors">Điều khoản dịch vụ</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-brand-primary transition-colors">Chính sách bảo mật</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-brand-primary transition-colors">Chính sách hoàn tiền</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-brand-primary transition-colors">Quy định phòng tập</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-brand-primary/20 pt-8 mt-8 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} HANA SPA & PILATES. Tất cả các quyền được bảo lưu.</p>
                    <p className="mt-2 md:mt-0">Thiết kế với <span className="text-brand-primary text-lg">&hearts;</span> cho sức khỏe của bạn.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
