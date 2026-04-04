"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, User, ChevronDown, Car, Shield, Globe } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            setScrollProgress(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Головна', href: '/' },
        { 
            name: 'Онлайн страхування', 
            href: '/services',
            submenu: [
                { name: 'Автоцивілка', href: '/oszpv', icon: <Car className="h-4 w-4" /> },
                { name: 'КАСКО', href: '/kasko', icon: <Shield className="h-4 w-4" /> },
                { name: 'Зелена карта', href: '/green-card', icon: <Globe className="h-4 w-4" /> },
                { name: 'Туризм', href: '/travel', icon: <Globe className="h-4 w-4" /> },
            ]
        },
        { name: 'Контакти', href: '/contacts' },
    ];

    return (
        <header className="fixed w-full z-50">
            {/* Announcement Bar */}
            <div className="bg-blue-900 text-white py-1.5 px-4 text-center text-xs font-medium tracking-wide">
                <span className="opacity-90">Оформлюйте автоцивілку онлайн за 5 хвилин та отримуйте поліс на email 🛡️</span>
            </div>

            <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/90 backdrop-blur-sm py-4'}`}>
                {/* Progress Bar */}
                <div
                    className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-150"
                    style={{ width: `${scrollProgress}%` }}
                />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo + Social */}
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="flex items-center space-x-2">
                                <Image
                                    src="/avto-polis-logo345-ts1401833101-300x192.jpg"
                                    alt="Avto-Polis Logo"
                                    width={120}
                                    height={77}
                                    className="h-10 w-auto object-contain"
                                    priority
                                />
                                <span className="text-xl font-bold text-gray-900 tracking-tight">Avto-Polis</span>
                            </Link>
                            {/* Social Icons */}
                            <div className="hidden md:flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                                <a href="https://t.me/avtopoliscomua" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-100 text-gray-500 hover:text-blue-600 transition-colors" aria-label="Telegram">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                                </a>
                                <a href="https://instagram.com/avtopolis" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-pink-100 text-gray-500 hover:text-pink-600 transition-colors" aria-label="Instagram">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    {link.submenu ? (
                                        <>
                                            <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 font-medium transition-colors text-sm py-2">
                                                <span>{link.name}</span>
                                                <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                                            </button>
                                            
                                            {/* Dropdown Menu */}
                                            <div className="absolute top-full left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                                                <div className="bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden mt-1 p-2">
                                                    {link.submenu.map((item) => (
                                                        <Link
                                                            key={item.href}
                                                            href={item.href}
                                                            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-bold text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all group/item"
                                                        >
                                                            <span className="p-1.5 bg-gray-50 text-gray-400 group-hover/item:text-blue-500 group-hover/item:bg-blue-100 rounded-lg transition-colors">
                                                                {item.icon}
                                                            </span>
                                                            <span>{item.name}</span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-gray-700 hover:text-blue-700 font-medium transition-colors text-sm py-2 block"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <a href="tel:+380977172121" className="px-5 py-2.5 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-all text-sm shadow-md hover:shadow-lg flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>+38 (097) 717-21-21</span>
                            </a>
                            <Link href="/login" className="flex items-center space-x-2 text-gray-700 hover:text-blue-700 font-medium transition-colors text-sm border-l border-gray-200 pl-6 ml-2">
                                <User className="h-5 w-5" />
                                <span>Увійти</span>
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="md:hidden flex items-center space-x-3">
                            <a href="tel:+380977172121" className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-lg" aria-label="Зателефонувати">
                                <Phone className="h-5 w-5" />
                            </a>
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 p-1">
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-xl absolute w-full top-full left-0 border-t border-gray-100">
                        <div className="px-4 py-6 space-y-4 font-bold">
                            {navLinks.map((link) => (
                                <React.Fragment key={link.name}>
                                    {link.submenu ? (
                                        <div className="space-y-2">
                                            <div className="text-gray-900 border-b border-gray-50 py-2 uppercase text-[10px] tracking-widest opacity-50">
                                                {link.name}
                                            </div>
                                            {link.submenu.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className="flex items-center space-x-4 text-gray-700 py-3 px-2 rounded-xl hover:bg-blue-50 transition-all font-bold"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">{item.icon}</span>
                                                    <span className="text-lg">{item.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="block text-gray-900 py-3 text-lg border-b border-gray-50 uppercase tracking-tight"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </React.Fragment>
                            ))}
                            <div className="pt-4 space-y-3">
                                <a
                                    href="tel:+380977172121"
                                    className="flex items-center justify-center w-full px-5 py-4 bg-orange-500 text-white rounded-2xl font-black text-lg shadow-lg shadow-orange-500/20"
                                >
                                    <Phone className="h-5 w-5 mr-3" />
                                    <span>+38 (097) 717-21-21</span>
                                </a>
                                <Link
                                    href="/login"
                                    className="flex items-center justify-center w-full px-5 py-4 bg-slate-900 text-white rounded-2xl font-black text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <User className="h-5 w-5 mr-3" />
                                    <span>Увійти</span>
                                </Link>
                                {/* Mobile Social */}
                                <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-100">
                                    <a href="https://t.me/avtopoliscomua" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                                    </a>
                                    <a href="https://instagram.com/avtopolis" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
