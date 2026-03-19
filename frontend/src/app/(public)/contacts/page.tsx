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
                                <p className="text-gray-600">+38 (097)717-21-21</p>
                                <p className="text-gray-600">+38 (063)439-29-59</p>
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
                                <p className="text-gray-600">м. Київ, вул. Степана Руданського, 3/7</p>
                                <p className="text-gray-600">03189, Україна</p>
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

            {/* Map Section */}
            <div className="mt-16 w-full h-[600px] bg-gray-100 border-t border-gray-100 overflow-hidden shadow-inner">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4007.1948258851457!2d30.463202905130615!3d50.38882080941747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8e026bebdd3%3A0x81a80eae9827d206!2z0LLRg9C70LjRhtGPINCh0YLQtdC_0LDQvdCwINCg0YPQtNC90LjRhtGM0LrQvtCz0L4sIDMvNywg0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMjAwMA!5e0!3m2!1suk!2sde!4v1773951735633!5m2!1suk!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
        </div>
    );
}
