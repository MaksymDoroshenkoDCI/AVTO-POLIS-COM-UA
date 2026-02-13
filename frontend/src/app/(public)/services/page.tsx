import React from 'react';
import { Shield, Zap, Plane, Heart, Car } from 'lucide-react';
import Link from 'next/link';

const ServiceCard = ({ title, desc, icon: Icon, features }: any) => (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <Icon className="h-7 w-7" />
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{desc}</p>
        <ul className="space-y-3 mb-8">
            {features.map((f: string, i: number) => (
                <li key={i} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                    {f}
                </li>
            ))}
        </ul>
        <Link href="/contacts" className="block w-full text-center py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-bold hover:bg-blue-600 hover:text-white transition-all">
            Отримати пропозицію
        </Link>
    </div>
);

export default function Services() {
    const services = [
        {
            title: 'ОСЦПВ (Автоцивілка)',
            desc: 'Обов\'язкове страхування цивільно-правової відповідальності власників наземних транспортних засобів.',
            icon: Shield,
            features: ['Пряме врегулювання', 'Електронний поліс', 'Підтримка 24/7']
        },
        {
            title: 'КАСКО',
            desc: 'Добровільне страхування автомобіля від пошкоджень, викрадення або повного знищення.',
            icon: Car,
            features: ['Захист від ДТП', 'Викрадення', 'Стихійні лиха']
        },
        {
            title: 'Зелена карта',
            desc: 'Обов\'язкове страхування для тих, хто виїжджає за кордон на власному автомобілі.',
            icon: Plane,
            features: ['Діє у 48 країнах', 'Швидке оформлення', 'Повна легітимність']
        },
        {
            title: 'Медичне страхування',
            desc: 'Захист вашого здоров\'я та фінансова підтримка при настанні страхових випадків.',
            icon: Heart,
            features: ['Покриття лікування', 'Медикаменти', 'Виклик лікаря']
        }
    ];

    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Наші послуги</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ми пропонуємо широкий спектр страхових продуктів, розроблених для вашого спокою та безпеки.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {services.map((s, i) => (
                        <ServiceCard key={i} {...s} />
                    ))}
                </div>
            </div>
        </div>
    );
}
