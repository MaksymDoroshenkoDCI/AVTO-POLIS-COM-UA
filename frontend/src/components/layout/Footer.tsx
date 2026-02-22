import React from 'react';
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-5">
                        <Link href="/" className="flex items-center space-x-2">
                            <Shield className="h-7 w-7 text-blue-700" />
                            <span className="text-lg font-bold text-gray-900 tracking-tight">Avto-Polis.com.ua</span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Онлайн сервіс страхових продуктів.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center space-x-3">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all" aria-label="LinkedIn">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="https://facebook.com/avtopolis" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all" aria-label="Facebook">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.738-.9 10.126-5.864 10.126-11.854z" /></svg>
                            </a>
                            <a href="https://instagram.com/avtopolis" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-400 hover:text-pink-600 hover:border-pink-200 transition-all" aria-label="Instagram">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* About Us / Nav */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">Про нас</h3>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><Link href="/" className="hover:text-gray-900 transition-colors">Головна</Link></li>
                            <li className="flex items-start space-x-2">
                                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                <a href="tel:+380671234567" className="hover:text-gray-900 transition-colors">+38 (067) 123-45-67</a>
                            </li>
                            <li className="flex items-start space-x-2">
                                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                <a href="mailto:info@avto-polis.com.ua" className="hover:text-gray-900 transition-colors">info@avto-polis.com.ua</a>
                            </li>
                            <li className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span>вул. Гарантійна, 12, Київ, Україна, 01001</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <Clock className="h-4 w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span>Пн–Пт, 09:00–18:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Insurance Products */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">Онлайн страхування</h3>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><Link href="/services" className="hover:text-gray-900 transition-colors">Автоцивілка</Link></li>
                            <li><Link href="/services" className="hover:text-gray-900 transition-colors">Зелена Карта</Link></li>
                            <li><Link href="/services" className="hover:text-gray-900 transition-colors">КАСКО</Link></li>
                            <li><Link href="/services" className="hover:text-gray-900 transition-colors">Туристичне страхування</Link></li>
                        </ul>
                    </div>

                    {/* Contact / Communication */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5">Зв&apos;язок</h3>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><Link href="/contacts" className="hover:text-gray-900 transition-colors">Контакти</Link></li>
                            <li><Link href="/contacts" className="hover:text-gray-900 transition-colors">Страхові Компанії</Link></li>
                            <li><Link href="/contacts" className="hover:text-gray-900 transition-colors">Форма зворотнього зв&apos;язку</Link></li>
                            <li><a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Ми на карті Google</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8 mt-4">
                    <p className="text-center text-gray-400 text-sm mb-2">
                        © 2015 <strong className="text-gray-600">Avto-Polis.com.ua</strong> — Усі права захищені.
                    </p>
                    <p className="text-center text-gray-400 text-xs">
                        Використання матеріалів сайту дозволено лише з письмової згоди адміністрації.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
