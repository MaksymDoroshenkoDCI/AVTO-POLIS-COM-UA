'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Car, Globe, Umbrella, Plane, CheckCircle, ArrowRight, Star, Quote, Phone, Mail, ChevronRight, Calculator, Lock, Gift, Search } from 'lucide-react';

export default function Home() {
  const services = [
    {
      id: 'osago',
      title: 'Автоцивілка онлайн',
      description: 'Порівняти умови та купити поліс ОСЦПВ від найкращих страхових компаній України. Заощаджуйте до 2 000 грн при оформленні онлайн.',
      icon: Car,
      color: 'from-blue-500 to-blue-700',
      iconBg: 'bg-blue-100 text-blue-600',
    },
    {
      id: 'green-card',
      title: 'Зелена Карта',
      description: 'Порівняти умови та оформити онлайн страховку Зелена картка на авто від провідних страхових компаній України.',
      icon: Globe,
      color: 'from-emerald-500 to-emerald-700',
      iconBg: 'bg-emerald-100 text-emerald-600',
    },
    {
      id: 'kasko',
      title: 'КАСКО',
      description: 'Оформлення КАСКО з економією до 7 000 грн, та повним захистом Вашого автомобіля + додатково захист від Військових ризиків.',
      icon: Shield,
      color: 'from-orange-500 to-orange-700',
      iconBg: 'bg-orange-100 text-orange-600',
    },
    {
      id: 'travel',
      title: 'Туристична страховка',
      description: 'Порівняти умови та купити онлайн поліс страхування для туристів від перевірених страхових компаній України.',
      icon: Plane,
      color: 'from-purple-500 to-purple-700',
      iconBg: 'bg-purple-100 text-purple-600',
    },
  ];

  const advantages = [
    {
      icon: Search,
      title: 'Зручний вибір кращих умов',
      description: 'Порівнюйте умови та ціни страховок на одному сервісі, у зручний час 24/7, у будь-якому місці, де є інтернет.',
      color: 'text-orange-500',
    },
    {
      icon: Calculator,
      title: 'Поліс за вигідною ціною',
      description: "Вибирайте найкращу страхову пропозицію без нав'язливої думки агентів, додаткових комісій та переплат.",
      color: 'text-orange-500',
    },
    {
      icon: Lock,
      title: 'Безпечна покупка',
      description: '100% гарантія безпеки платіжних та особистих даних. Відповідність страховому законодавству України.',
      color: 'text-orange-500',
    },
    {
      icon: Gift,
      title: 'Бонусна програма',
      description: 'Діліться посиланням із друзями та отримуйте 10% від вартості страховки на бонусний рахунок.',
      color: 'text-orange-500',
    },
  ];

  const reviews = [
    {
      name: 'Ірина Мостова',
      text: 'Оформлення автоцивілки зайняло всього кілька хвилин — все онлайн, без черг і паперів. Дуже зручно! Плюс приємно здивувала ціна. Рекомендую всім, хто цінує свій час!',
      rating: 5,
    },
    {
      name: 'Олександр Кучеренко',
      text: "Їхали з родиною до Польщі — зелена карта була потрібна терміново. Оформили за 5 хвилин, одразу отримали PDF на пошту. Все чітко, без зайвих дзвінків. Надійний сервіс!",
      rating: 5,
    },
    {
      name: 'Світлана Кравченко',
      text: 'Перед поїздкою до Італії вирішила не ризикувати — взяла туристичне страхування. І не дарма! У Римі звернулася до лікаря, і всі витрати покрили. Працює бездоганно!',
      rating: 5,
    },
  ];

  const partnerLogos = [
    'ТАС', 'ARX', 'VUSO', 'Guardian', 'Oranta', 'PZU', 'Євроінс', 'УНІКА',
  ];

  return (
    <div className="flex flex-col">
      {/* ═══════════════════════ HERO SECTION ═══════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-sky-100/50"></div>
        {/* Decorative shapes */}
        <div className="absolute -right-32 -top-32 w-[700px] h-[700px] bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -left-32 bottom-0 w-[500px] h-[500px] bg-orange-200/15 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 rounded-full text-blue-700 text-sm font-medium mb-8 backdrop-blur-sm">
              <Shield className="h-4 w-4 mr-2" />
              Онлайн сервіс страхових продуктів
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-8">
              Онлайн сервіс{' '}
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                страхових продуктів.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
              Компанія <strong>Авто Поліс</strong> — це сучасний онлайн сервіс, який допомагає швидко та зручно оформити страхові поліси без зайвих черг і дзвінків.
            </p>
            <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
              Ми пропонуємо <strong>автоцивілку, каско, зелену карту</strong> та <strong>туристичне страхування</strong> від перевірених і надійних страхових компаній України. Наш онлайн калькулятор дозволяє <strong>розрахувати вартість полісу всього за кілька хвилин</strong>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 group"
              >
                <Calculator className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                КАЛЬКУЛЯТОР АВТОЦИВІЛКИ
              </Link>
              <a
                href="tel:+380977172121"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5 mr-3" />
                +380977172121
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ ADVANTAGES BAR ═══════════════════════ */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, i) => (
              <div key={i} className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                  <adv.icon className={`h-5 w-5 ${adv.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{adv.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVICES SECTION ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Які електронні страхові<br className="hidden md:block" /> поліси ми пропонуємо?
              </h2>
            </div>
            <div className="flex flex-col items-start lg:items-end">
              <div className="flex items-baseline space-x-2 mb-2">
                <span className="text-4xl md:text-5xl font-extrabold text-orange-500">1000+</span>
                <span className="text-gray-600 text-sm md:text-base">оформлено за рік<br />електронних страхових полісів</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <div className="w-1 h-8 bg-blue-600 rounded-full"></div>
                <span>Тут ви можете вибрати оптимальний для Вас страховий продукт</span>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Card Top - Gradient */}
                <div className={`h-40 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                  <service.icon className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                  <Link
                    href={`/services`}
                    className="inline-flex items-center text-orange-500 font-bold text-sm hover:text-orange-600 transition-colors group/link"
                  >
                    ЗАМОВИТИ
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CTA - CALCULATOR ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Хочеш дізнатися вартість страховки вже зараз?
              </h2>
              <p className="text-xl text-orange-500 font-semibold mb-8">
                Калькулятор покаже найкращі пропозиції за 2 хвилини!
              </p>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-blue-700 text-white rounded-xl font-bold text-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 group"
              >
                <Calculator className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                Розрахувати вартість автоцивілки
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-100 to-blue-200 rounded-3xl p-10 md:p-14 relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-400/20 rounded-full blur-2xl"></div>
                <div className="text-center relative z-10">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                    Хочеш дізнатися вартість<br /> страховки вже зараз?
                  </h3>
                  <p className="text-orange-500 font-bold text-lg md:text-xl mb-6">
                    Калькулятор покаже найкращі пропозиції за 2 хвилини!
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-orange-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-5xl md:text-6xl font-extrabold text-gray-900">
                      4300
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm mt-3">Середня ціна полісу, грн</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ PARTNERS / TRUST ═══════════════════════ */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-wider mb-10">
            Наші партнери — провідні страхові компанії України
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {partnerLogos.map((name, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 flex items-center justify-center h-16 border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300"
              >
                <span className="font-bold text-gray-400 text-sm tracking-wide hover:text-blue-600 transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ REVIEWS SECTION ═══════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Відгуки наших клієнтів
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              У цьому розділі ми зібрали реальні історії та оцінки від людей, які вже скористалися нашими послугами. Їхні слова — найкраще підтвердження якості та надійності.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-transparent transition-all duration-500 relative group"
              >
                <Quote className="h-8 w-8 text-orange-200 mb-4 group-hover:text-orange-300 transition-colors" />
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center space-x-3 mt-auto">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">Клієнт Avto-Polis</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contacts" className="inline-flex items-center text-orange-500 font-bold hover:text-orange-600 transition-colors group">
              Читати всі відгуки
              <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CONTACT CTA ═══════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjZmZmIi8+PC9zdmc+')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Ми завжди поруч
            </h2>
            <p className="text-gray-300 text-lg">
              Маєте запитання або потребуєте консультації? Зв&apos;яжіться з нами:
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 md:p-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-xl font-bold mb-1">
                У Вас виникли питання з приводу страхування?
              </h3>
              <p className="text-gray-400 text-sm">Наші спеціалісти відповідять протягом 15 хвилин</p>
            </div>
            <Link
              href="/contacts"
              className="inline-flex items-center px-8 py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5 whitespace-nowrap group"
            >
              Написати нам
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ NEWS + EMAIL ═══════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News Card */}
            <div className="bg-orange-500 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-orange-400 rounded-full opacity-50"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Новини в страхуванні України</h3>
                <p className="text-orange-100 text-sm leading-relaxed mb-6">
                  Інформація корисна усім, хто хоче більше дізнатися про тему страхування, а також планує обрати надійну страхову компанію.
                </p>
                <Link href="/news" className="inline-flex items-center text-white font-bold text-sm hover:underline group/link">
                  Читати новини
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 flex flex-col justify-center">
              <div className="w-12 h-12 bg-gray-200 rounded-xl flex items-center justify-center mb-6">
                <Mail className="h-6 w-6 text-gray-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-mail</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Маєте запитання? Напишіть нам, і ми відповімо вам якнайшвидше.
              </p>
              <a
                href="mailto:info@avto-polis.com.ua"
                className="text-orange-500 font-bold text-lg hover:text-orange-600 transition-colors"
              >
                info@avto-polis.com.ua
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
