import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Dịch vụ Spa', href: '#spa' },
        { name: 'Lớp Pilates', href: '#pilates' },
        { name: 'Bảng giá', href: '#pricing' },
        { name: 'Liên hệ', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#home" className="flex items-center gap-3 group">
                            <img
                                src={logoImg}
                                alt="HANA Logo"
                                className="h-16 md:h-20 w-auto object-contain transition-all duration-300 transform group-hover:scale-105 group-hover:brightness-110"
                                style={{
                                    filter: "drop-shadow(0 2px 4px rgba(233, 30, 99, 0.3))"
                                }}
                            />
                            <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-brand-text-dark' : 'text-brand-text-dark drop-shadow-sm'}`}>
                                <span className="text-brand-primary">HANA </span>SPA & PILATES
                            </span>
                        </a>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors hover:text-brand-primary ${isScrolled ? 'text-gray-700' : 'text-gray-800'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-brand-primary hover:bg-brand-primary-hover text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-md"
                        >
                            Đặt lịch ngay
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 hover:text-brand-primary focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full left-0 top-full">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 text-base font-medium text-gray-800 hover:text-brand-primary hover:bg-brand-bg-light border-b border-gray-100 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="block mt-4 w-full text-center bg-brand-primary text-white px-6 py-3 rounded-md font-medium"
                            onClick={() => setIsOpen(false)}
                        >
                            Đặt lịch ngay
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
