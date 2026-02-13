import React from 'react';
import { Shield, Zap, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Ваш надійний захист <span className="text-blue-600">на дорозі</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Оформлюйте страхування онлайн за 5 хвилин. Кращі ціни від провідних страхових компаній України.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services" className="btn-primary text-center">
                Оформити поліс
              </Link>
              <Link href="/contacts" className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all text-center">
                Консультація
              </Link>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block">
          <div className="w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl absolute -right-40 -top-20"></div>
          <div className="w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl absolute -right-20 bottom-20"></div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наші послуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Вибирайте оптимальний пакет страхування для ваших потреб.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'osago', title: 'ОСЦПВ', desc: 'Обов\'язкове страхування відповідальності власників авто.', icon: Shield },
              { id: 'kasko', title: 'КАСКО', desc: 'Повний захист вашого автомобіля від будь-яких ризиків.', icon: Zap },
              { id: 'green-card', title: 'Зелена карта', desc: 'Страхування для виїзду за кордон на власному авто.', icon: Clock },
            ].map((service) => (
              <div key={service.id} className="p-8 border border-gray-100 rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <Link href={`/services/${service.id}`} className="text-blue-600 font-semibold flex items-center hover:space-x-2 transition-all">
                  <span>Детальніше</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Клієнтів', value: '10,000+', icon: Users },
              { label: 'Років досвіду', value: '12+', icon: Shield },
              { label: 'Партнерів', value: '25+', icon: Zap },
              { label: 'Виплат', value: '98%', icon: Shield },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Потрібна допомога у виборі?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Наші спеціалісти готові проконсультувати вас та підібрати найкращий варіант страхування.
          </p>
          <Link href="/contacts" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
            Отримати безкоштовну консультацію
          </Link>
        </div>
      </section>
    </div>
  );
}
