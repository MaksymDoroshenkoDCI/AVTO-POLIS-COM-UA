'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Calculator, 
  Globe, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Ціни на Зелену карту (орієнтовні на 2026 рік відповідно до ринку)
const prices = {
  passenger: {
    '15days': 1150,
    '1month': 1850,
    '2months': 3200,
    '3months': 4800,
    '6months': 9500,
    '1year': 13200,
  },
  bus: {
    '15days': 3500,
    '1month': 5200,
    '3months': 12500,
    '6months': 21000,
    '1year': 38000,
  },
  truck: {
    '15days': 2400,
    '1month': 3600,
    '3months': 8500,
    '6months': 14500,
    '1year': 26000,
  },
  motorcycle: {
    '15days': 450,
    '1month': 750,
    '3months': 1800,
    '6months': 3200,
    '1year': 5800,
  }
};

const periods = [
  { id: '15days', label: '15 днів' },
  { id: '1month', label: '1 місяць' },
  { id: '2months', label: '2 місяці' },
  { id: '3months', label: '3 місяці' },
  { id: '6months', label: '6 місяців' },
  { id: '1year', label: '1 рік' },
];

const vehicleTypes = [
  { id: 'passenger', label: 'Легковий автомобіль', icon: '🚗' },
  { id: 'motorcycle', label: 'Мотоцикл', icon: '🏍️' },
  { id: 'bus', label: 'Автобус', icon: '🚌' },
  { id: 'truck', label: 'Вантажівка', icon: '🚛' },
];

export default function GreenCardPage() {
  const [vehicle, setVehicle] = useState('passenger');
  const [period, setPeriod] = useState('15days');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // @ts-ignore
    const price = prices[vehicle]?.[period] || 0;
    setTotalPrice(price);
  }, [vehicle, period]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/green_card_insurance_bg_1775297658221.png" 
            alt="Green Card Insurance Europe" 
            fill 
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-bold border border-green-500/30 mb-6 backdrop-blur-sm">
              <Globe className="w-4 h-4 mr-2" /> СТРАХУВАННЯ ДЛЯ ВИЇЗДУ ЗА КОРДОН
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-green-500 mb-6 uppercase tracking-tighter">
              Зелена Картка
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              Обов'язкове страхування для безпечних подорожей Європою. Оформлення онлайн за 5 хвилин з миттєвим внесенням у базу МТСБУ.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 -mt-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Form Left */}
            <div className="lg:col-span-7 p-10 md:p-16">
              <div className="flex items-center space-x-3 mb-10">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center rounded-2xl">
                  <Calculator className="text-green-600 w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">РОЗРАХУНОК ВАРТОСТІ</h2>
              </div>

              <div className="space-y-10">
                {/* Vehicle Type */}
                <div>
                  <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Тип транспортного засобу</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {vehicleTypes.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => setVehicle(v.id)}
                        className={`py-6 rounded-3xl border-2 transition-all flex flex-col items-center justify-center group ${
                          vehicle === v.id 
                            ? 'border-green-500 bg-green-50 text-green-700 shadow-lg shadow-green-100/50' 
                            : 'border-gray-100 hover:border-gray-300 text-gray-400'
                        }`}
                      >
                        <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{v.icon}</span>
                        <span className="text-[10px] font-bold uppercase text-center px-2">{v.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Period Select */}
                <div>
                  <label className="block text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Тривалість подорожі</label>
                  <div className="flex flex-wrap gap-3">
                    {periods.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setPeriod(p.id)}
                        className={`px-6 py-3 rounded-full border-2 font-bold text-sm transition-all ${
                          period === p.id 
                            ? 'border-green-500 bg-green-500 text-white shadow-lg shadow-green-500/30' 
                            : 'border-gray-100 hover:border-gray-300 text-gray-600'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info Notice */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl flex items-start space-x-4">
                  <Info className="text-blue-500 w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h5 className="font-bold text-blue-900 text-sm mb-1">Зверніть увагу!</h5>
                    <p className="text-blue-700 text-sm leading-relaxed">
                      З 2025 року діє вільне ціноутворення. Ми пропонуємо найвигідніші тарифи з гарантією миттєвого відображення в системі МТСБУ.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Right */}
            <div className="lg:col-span-5 bg-gray-50 border-l border-gray-100 p-10 md:p-16 flex flex-col justify-center">
              <div className="text-center">
                <p className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">Вартість поліса</p>
                <div className="flex justify-center items-baseline space-x-2 mb-8">
                  <span className="text-7xl font-black text-gray-900 leading-none tabular-nums">
                    {totalPrice.toLocaleString('uk-UA')}
                  </span>
                  <span className="text-2xl font-bold text-gray-500">ГРН</span>
                </div>

                <div className="space-y-4 mb-10 text-left">
                  <div className="flex items-center space-x-3 text-gray-600 text-sm">
                    <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" />
                    <span>Покриття у 40+ країнах (крім рф та рб)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 text-sm">
                    <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" />
                    <span>Відразу з'являється в «Дії»</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 text-sm">
                    <CheckCircle2 className="text-green-500 w-5 h-5 shrink-0" />
                    <span>Електронний поліс на імейл (PDF)</span>
                  </div>
                </div>

                <button className="w-full py-6 bg-green-600 text-white rounded-[24px] font-black text-xl hover:bg-green-700 transition-all shadow-xl shadow-green-600/30 hover:-translate-y-1 mb-6 uppercase tracking-tight">
                  Оформити поліс
                </button>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
                  Захищено шифруванням 256-bit SSL
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <section className="py-24 bg-white lowercase">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 uppercase">
             <h2 className="text-4xl font-black text-gray-900 mb-6">Про Зелену Картку</h2>
             <div className="h-2 w-20 bg-green-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h3 className="text-3xl font-black text-gray-900 mb-6 uppercase tracking-tight leading-none">Що таке Зелена карта?</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Це міжнародний договір страхування цивільно-правової відповідальності власників транспортних засобів. Своєрідний аналог нашої «Автоцивілки», але який діє на території всіх країн-учасниць системи Green Card (вся Європа та деякі країни Азії та Африки).
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                  <ShieldCheck className="text-green-600 w-6 h-6 shrink-0" />
                  <p className="text-sm font-bold text-gray-700">Страхує вашу відповідальність: якщо ви станете причиною ДТП за кордоном, збитки потерпілим виплатить страхова компанія.</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-100 rounded-[40px] flex items-center justify-center p-8">
                 <div className="text-center">
                    <span className="block text-4xl mb-2">🇪🇺</span>
                    <span className="block text-xs font-black uppercase text-gray-400">40+ КРАЇН ПІД КРИЛОМ</span>
                 </div>
              </div>
              <div className="aspect-square bg-green-500 rounded-[40px] flex items-center justify-center p-8 text-white">
                 <div className="text-center">
                    <span className="block text-4xl mb-2">📱</span>
                    <span className="block text-xs font-black uppercase">ЦИФРОВИЙ ФОРМАТ</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Comparative Table */}
          <div className="bg-slate-900 rounded-[40px] p-10 md:p-16 text-white mb-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <Globe className="w-64 h-64" />
            </div>
            <h3 className="text-3xl font-black mb-10 text-center uppercase tracking-tight">Як формується ціна у 2026 році?</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-black">1</div>
                  <h4 className="text-xl font-bold">Вільні тарифи МТСБУ</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  З 1 січня 2025 року МТСБУ більше не встановлює єдині фіксовані тарифи. Тепер працює ринок: кожна компанія сама встановлює ціну, спираючись на статистику виплат та конкуренцію. Ми постійно моніторимо пропозиції та даємо вам найкращу ціну.
                </p>
              </div>
              <div className="space-y-6">
                 <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-black">2</div>
                  <h4 className="text-xl font-bold">Законодавчий мінімум</h4>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Хоча тарифи вільні, компанії зобов'язані формувати резерви за стандартами Solvency II, що гарантує виплати. Мінімальна ціна на 15 днів коливається в районі 1000-1100 грн, а максимальна може сягати 1500 грн залежно від рівня сервісу та асистансу.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Logic */}
          <div className="max-w-4xl mx-auto space-y-4">
             <h3 className="text-3xl font-black text-center text-gray-900 mb-12 uppercase">Поширені запитання</h3>
             
             <details className="group bg-white border border-gray-100 rounded-3xl p-6 open:shadow-lg transition-all">
                <summary className="list-none flex items-center justify-between cursor-pointer font-black text-gray-900 uppercase text-sm tracking-tight">
                   Чи можна оформити Зелену карту, якщо я вже за кордоном?
                   <span className="group-open:rotate-180 transition-transform"><HelpCircle className="w-5 h-5 text-gray-400" /></span>
                </summary>
                <div className="mt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  Так, ви можете оформити поліс електронно через наш сервіс. Але пам'ятайте: поліс не діє "сьогодні на сьогодні". Початок дії зазвичай з 00:00 наступної доби або з конкретної обраної дати у майбутньому.
                </div>
             </details>

             <details className="group bg-white border border-gray-100 rounded-3xl p-6 open:shadow-lg transition-all">
                <summary className="list-none flex items-center justify-between cursor-pointer font-black text-gray-900 uppercase text-sm tracking-tight">
                   Чи потрібно друкувати поліс?
                   <span className="group-open:rotate-180 transition-transform"><HelpCircle className="w-5 h-5 text-gray-400" /></span>
                </summary>
                <div className="mt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  За правилами системи Зелена Карта, допускається електронний формат (PDF в телефоні). Проте, у багатьох країнах Європи поліція все ще може вимагати паперову роздруківку (чорно-білу або кольорову). Ми рекомендуємо мати при собі роздрукований варіант для уникнення зайвих питань на митниці.
                </div>
             </details>

             <details className="group bg-white border border-gray-100 rounded-3xl p-6 open:shadow-lg transition-all">
                <summary className="list-none flex items-center justify-between cursor-pointer font-black text-gray-900 uppercase text-sm tracking-tight">
                   В яких країнах діє цей поліс?
                   <span className="group-open:rotate-180 transition-transform"><HelpCircle className="w-5 h-5 text-gray-400" /></span>
                </summary>
                <div className="mt-4 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                  Поліс діє у всіх країнах Європейського Союзу, а також у Молдові, Грузії, Туреччині та інших країнах-партнерах системи. Зверніть увагу: з квітня 2022 року дія полісів Green Card в росії та білорусі повністю припинена!
                </div>
             </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter italic">ГОТОВІ ДО ПОДОРОЖІ?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto font-medium">Оформляйте Зелену Карту за лічені хвилини та подорожуйте без зайвих турбот.</p>
          <button 
            onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
            className="px-12 py-6 bg-white text-green-600 rounded-[28px] font-black text-xl hover:shadow-2xl transition-all shadow-xl"
          >
            ПЕРЕЙТИ ДО РОЗРАХУНКУ
          </button>
        </div>
      </section>
    </div>
  );
}
