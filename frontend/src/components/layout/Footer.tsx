import React from 'react';
import Link from 'next/link';
import { Shield, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <Shield className="h-8 w-8 text-blue-500" />
                            <span className="text-2xl font-bold tracking-tight">AVTO-POLIS</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Надійне страхування вашого автомобіля та захист у будь-яких ситуаціях на дорозі.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook /></a>
                            <a href="#" className="hover:text-blue-500 transition-colors"><Instagram /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Навігація</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/" className="hover:text-white transition-colors">Головна</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Послуги</Link></li>
                            <li><Link href="/news" className="hover:text-white transition-colors">Новини</Link></li>
                            <li><Link href="/contacts" className="hover:text-white transition-colors">Контакти</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Послуги</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><Link href="/services/osago" className="hover:text-white transition-colors">Автоцивілка (ОСЦПВ)</Link></li>
                            <li><Link href="/services/kasko" className="hover:text-white transition-colors">КАСКО</Link></li>
                            <li><Link href="/services/zelena-karta" className="hover:text-white transition-colors">Зелена карта</Link></li>
                            <li><Link href="/services/med-insurance" className="hover:text-white transition-colors">Медичне страхування</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Контакти</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start space-x-3">
                                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>+38 (0XX) XXX-XX-XX</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>info@avto-polis.com.ua</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0" />
                                <span>м. Київ, вул. Прикладна, 1</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} AVTO-POLIS. Усі права захищені.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
