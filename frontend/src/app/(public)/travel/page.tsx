'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Plane, 
  Palmtree, 
  HeartPulse, 
  ShieldCheck, 
  CheckCircle2,
  Globe,
  Info,
  ChevronRight,
  Clock,
  Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const destinations = [
  { id: 'europe', label: 'Європа (Шенген)', factor: 1.0 },
  { id: 'world', label: 'Весь світ (крім США, Канади)', factor: 1.5 },
  { id: 'usa_canada', label: 'США, Канада, Японія', factor: 3.2 },
];

const purposes = [
  { id: 'tourism', label: 'Туризм / Відпочинок', factor: 1.0, icon: <Palmtree className="w-5 h-5" /> },
  { id: 'sport', label: 'Активний відпочинок / Спорт', factor: 2.0, icon: <Briefcase className="w-5 h-5" /> },
  { id: 'work', label: 'Робота / Навчання', factor: 1.3, icon: <Briefcase className="w-5 h-5" /> },
];

export default function TouristInsurancePage() {
  const [destination, setDestination] = useState('europe');
  const [days, setDays] = useState(7);
  const [purpose, setPurpose] = useState('tourism');
  const [price, setPrice] = useState(0);

  // Базова ставка за день (орієнтир 2026)
  const baseRatePerDay = 35; 

  useEffect(() => {
    const destFactor = destinations.find(d => d.id === destination)?.factor || 1;
    const purposeFactor = purposes.find(p => p.id === purpose)?.factor || 1;
    
    let finalPrice = baseRatePerDay * days * destFactor * purposeFactor;
    
    setPrice(Math.round(finalPrice));
  }, [destination, days, purpose]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-sky-600 py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Globe className="w-full h-full text-white rotate-12 scale-150" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
             <span className="bg-sky-400/20 text-sky-100 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-sky-400/30 mb-8 inline-block backdrop-blur-sm">
                МІЖНАРОДНИЙ ЗАХИСТ
             </span>
             <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter uppercase">
               Туристичне <br/> <span className="text-sky-200">страхування</span>
             </h1>
             <p className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
               Подорожуйте з легким серцем. Миттєве оформлення поліса для візи та безвізу з покриттям у всьому світі.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-24 -mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[48px] shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Form Side */}
            <div className="lg:col-span-7 p-10 md:p-16">
              <div className="flex items-center space-x-4 mb-12 uppercase italic">
                <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center">
                  <Calculator className="text-sky-600 w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-none">Розрахунок поліса</h2>
              </div>

              <div className="space-y-12">
                {/* Destination */}
                <div>
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-6">Куди ви прямуєте?</label>
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {destinations.map((d) => (
                        <button
                          key={d.id}
                          onClick={() => setDestination(d.id)}
                          className={`px-4 py-4 rounded-2xl border-2 transition-all font-bold text-xs uppercase tracking-tight ${
                            destination === d.id 
                              ? 'border-sky-500 bg-sky-50 text-sky-700 shadow-lg shadow-sky-500/10' 
                              : 'border-gray-50 hover:border-gray-200 text-slate-600'
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Days */}
                <div>
                   <div className="flex items-center justify-between mb-6">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Тривалість подорожі (днів)</label>
                      <span className="text-2xl font-black text-sky-600">{days}</span>
                   </div>
                   <input 
                      type="range" 
                      min="1" 
                      max="90" 
                      value={days}
                      onChange={(e) => setDays(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-sky-500"
                    />
                    <div className="flex justify-between mt-3 text-[10px] font-black uppercase text-slate-300 tracking-widest">
                       <span>1 день</span>
                       <span>30 днів</span>
                       <span>90 днів</span>
                    </div>
                </div>

                {/* Purpose */}
                <div>
                   <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] block mb-6">Мета поїздки</label>
                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {purposes.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setPurpose(p.id)}
                          className={`flex items-center justify-center space-x-2 px-4 py-4 rounded-2xl border-2 transition-all font-bold text-xs uppercase tracking-tight ${
                            purpose === p.id 
                              ? 'border-sky-500 bg-sky-50 text-sky-700' 
                              : 'border-gray-50 hover:border-gray-200 text-slate-600'
                          }`}
                        >
                          {p.icon}
                          <span>{p.label}</span>
                        </button>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            {/* Results Side */}
            <div className="lg:col-span-5 bg-slate-50 border-l border-gray-100 p-10 md:p-16 flex flex-col justify-between items-center text-center">
               <div className="w-full">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Вартість страхування</p>
                  <div className="flex justify-center items-baseline space-x-2 mb-12">
                    <motion.span 
                      key={price}
                      initial={{ scale: 1.2, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-8xl font-black text-slate-900 leading-none tracking-tighter"
                    >
                      {price}
                    </motion.span>
                    <span className="text-3xl font-black text-slate-400 uppercase tracking-widest">ГРН</span>
                  </div>

                  <div className="space-y-4 mb-16 text-left max-w-xs mx-auto">
                     <div className="flex items-center space-x-3 text-slate-600 font-bold text-xs bg-white p-4 rounded-2xl border border-white shadow-sm italic uppercase tracking-tighter">
                        <CheckCircle2 className="text-sky-500 w-5 h-5 shrink-0" />
                        <span>Медичні витрати: 30 000 €</span>
                     </div>
                     <div className="flex items-center space-x-3 text-slate-600 font-bold text-xs bg-white p-4 rounded-2xl border border-white shadow-sm italic uppercase tracking-tighter">
                        <CheckCircle2 className="text-sky-500 w-5 h-5 shrink-0" />
                        <span>Покриття COVID-19 включено</span>
                     </div>
                     <div className="flex items-center space-x-3 text-slate-600 font-bold text-xs bg-white p-4 rounded-2xl border border-white shadow-sm italic uppercase tracking-tighter">
                        <CheckCircle2 className="text-sky-500 w-5 h-5 shrink-0" />
                        <span>Асистанс 24/7 по всьому світу</span>
                     </div>
                  </div>

                  <button className="w-full group bg-sky-600 hover:bg-sky-700 text-white py-8 rounded-[32px] font-black text-2xl shadow-2xl shadow-sky-600/30 transition-all hover:-translate-y-1 flex items-center justify-center space-x-3 uppercase tracking-tight">
                    <span>Оформити</span>
                    <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
               
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-8">
                  Приймається всіма посольствами та консульствами
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Info */}
      <section className="py-24 bg-white lowercase">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20 uppercase">
               <h2 className="text-4xl font-black text-gray-900 mb-6 italic">Важливо знати</h2>
               <div className="h-2 w-20 bg-sky-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <div className="p-10 bg-slate-50 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all">
                  <HeartPulse className="w-12 h-12 text-red-500 mb-6" />
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Екстрена допомога</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-bold">
                    Покриваються витрати на невідкладну медичну допомогу, ліки, перебування в стаціонарі та транспортування в Україну.
                  </p>
               </div>
               <div className="p-10 bg-slate-50 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all">
                  <Clock className="w-12 h-12 text-sky-500 mb-6" />
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Початок дії</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-bold">
                    Поліс починає діяти з моменту перетину кордону (але не раніше 00:00 наступного дня після оформлення).
                  </p>
               </div>
               <div className="p-10 bg-slate-50 rounded-[40px] border border-gray-100 hover:shadow-xl transition-all">
                  <ShieldCheck className="text-emerald-500 w-12 h-12 mb-6" />
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tight">Нульова франшиза</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-bold">
                    Ми рекомендуємо обирати поліси без франшизи, де страхова компанія оплачує всі рахунки з першого євро.
                  </p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
