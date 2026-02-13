import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ConsultationForm from '@/components/forms/ConsultationForm';

export default function Contacts() {
    return (
        <div className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Зв'яжіться з нами</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ми завжди готові відповісти на ваші запитання та допомогти з вибором страхування.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Phone className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Телефон</h3>
                                <p className="text-gray-600">+38 (0XX) XXX-XX-XX</p>
                                <p className="text-gray-600">+38 (0XX) XXX-XX-XX</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Email</h3>
                                <p className="text-gray-600">info@avto-polis.com.ua</p>
                                <p className="text-gray-600">support@avto-polis.com.ua</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Адреса</h3>
                                <p className="text-gray-600">м. Київ, вул. Прикладна, 1</p>
                                <p className="text-gray-600">01001, Україна</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Clock className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold mb-1">Графік роботи</h3>
                                <p className="text-gray-600">Пн-Пт: 09:00 - 18:00</p>
                                <p className="text-gray-600">Сб-Нд: Вихідний</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm">
                        <h2 className="text-2xl font-bold mb-8">Напишіть нам</h2>
                        <ConsultationForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
