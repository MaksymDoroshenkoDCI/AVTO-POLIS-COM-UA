'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Car, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2,
  Lock,
  Zap,
  Info,
  Calendar,
  DollarSign,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function KASKOPage() {
  const [carValue, setCarValue] = useState(500000);
  const [carAge, setCarAge] = useState('new');
  const [experience, setExperience] = useState('over_10');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    // Жорсткий розрахунок КАСКО (орієнтовно 2.5% - 4.5% від вартості)
    let factor = 0.032; // Базовий (3.2%)
    
    if (carAge === 'over_5') factor += 0.008;
    if (experience === 'less_2') factor += 0.012;
    
    setPrice(Math.round(carValue * factor));
  }, [carValue, carAge, experience]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Premium Hero */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <span className="bg-orange-500/10 text-orange-400 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.3em] border border-orange-500/20 mb-8 inline-block">
              PREMIUM ЗАХИСТ
            </span>
            <h1 className="text-6xl md:text-9xl font-black text-white leading-none mb-4 tracking-tighter uppercase italic">
              КАСКО
            </h1>
            <p className="text-2xl text-slate-400 max-w-2xl leading-tight font-medium uppercase tracking-tight">
              Повна безпека вашого авто <br/> від будь-яких ризиків на дорозі.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 -mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Calculator Panel */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white rounded-[48px] p-10 md:p-16 shadow-2xl border border-gray-100">
                <div className="flex items-center space-x-4 mb-16 uppercase italic">
                  <div className="w-14 h-14 bg-orange-100 rounded-3xl flex items-center justify-center">
                    <Calculator className="text-orange-600 w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 tracking-tighter">Експрес-розрахунок</h2>
                </div>

                <div className="space-y-12">
                  {/* Car Value Slider */}
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center">
                        <DollarSign className="w-3 h-3 mr-2" /> Ринкова вартість автомобіля (₴)
                      </label>
                      <span className="text-3xl font-black text-orange-500 tabular-nums">
                        {carValue.toLocaleString('uk-UA')} ₴
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="100000" 
                      max="10000000" 
                      step="50000"
                      value={carValue}
                      onChange={(e) => setCarValue(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-orange-500"
                    />
                    <div className="flex justify-between mt-3 text-[10px] font-black uppercase text-slate-300 tracking-widest px-2">
                       <span>100к</span>
                       <span>2млн</span>
                       <span>5млн</span>
                       <span>10млн</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Car Age */}
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center mb-6">
                        <Calendar className="w-3 h-3 mr-2" /> Вік автомобіля
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => setCarAge('new')} className={`py-4 rounded-2xl border-2 font-bold text-xs uppercase transition-all ${carAge === 'new' ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-50 text-slate-400'}`}>Новий (0-2 роки)</button>
                        <button onClick={() => setCarAge('over_5')} className={`py-4 rounded-2xl border-2 font-bold text-xs uppercase transition-all ${carAge === 'over_5' ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-50 text-slate-400'}`}>3-7 років</button>
                      </div>
                    </div>

                    {/* Driving Experience */}
                    <div>
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center mb-6">
                        <UserCheck className="w-3 h-3 mr-2" /> Стаж водіння (мінімальний)
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => setExperience('less_2')} className={`py-4 rounded-2xl border-2 font-bold text-xs uppercase transition-all ${experience === 'less_2' ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-50 text-slate-400'}`}>Менше 2 років</button>
                        <button onClick={() => setExperience('over_10')} className={`py-4 rounded-2xl border-2 font-bold text-xs uppercase transition-all ${experience === 'over_10' ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-50 text-slate-400'}`}>Понад 2 роки</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coverages */}
              <div className="bg-slate-900 rounded-[48px] p-12 text-white overflow-hidden relative">
                 <Zap className="absolute top-0 right-0 w-64 h-64 text-orange-500 opacity-5 -mr-20 -mt-20 translate-x-1/2 -rotate-12" />
                 <h3 className="text-3xl font-black mb-10 uppercase italic">Що входить у покриття?</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all group">
                       <h4 className="font-black uppercase text-orange-500 text-xs tracking-widest mb-2 group-hover:translate-x-1 transition-transform">ДТП з будь-якої причини</h4>
                       <p className="text-slate-400 text-sm">Навіть якщо ви винні у пригоді — ми відремонтуємо авто.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all group">
                       <h4 className="font-black uppercase text-orange-500 text-xs tracking-widest mb-2 group-hover:translate-x-1 transition-transform">Незаконне заволодіння</h4>
                       <p className="text-slate-500 text-sm">Гарантована виплата повної вартості авто у разі викрадення.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all group">
                       <h4 className="font-black uppercase text-orange-500 text-xs tracking-widest mb-2 group-hover:translate-x-1 transition-transform">Стихійні лиха</h4>
                       <p className="text-slate-500 text-sm">Ураган, падіння дерев, повінь — ваш автомобіль захищений.</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all group">
                       <h4 className="font-black uppercase text-orange-500 text-xs tracking-widest mb-2 group-hover:translate-x-1 transition-transform">ПДТО</h4>
                       <p className="text-slate-500 text-sm">Дії третіх осіб, підпал, розбите скло або пошкодження шин.</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Results Stick Side */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
              <div className="bg-white rounded-[48px] p-10 shadow-2xl border border-gray-100 text-center flex flex-col items-center">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Річний платіж від</p>
                 <div className="flex items-baseline space-x-2 mb-10">
                   <motion.span 
                    key={price}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-6xl font-black text-slate-900"
                   >
                     {price.toLocaleString('uk-UA')}
                   </motion.span>
                   <span className="text-2xl font-black text-slate-400">₴</span>
                 </div>

                 <ul className="space-y-4 mb-10 w-full text-left">
                   <li className="flex items-center space-x-3 text-sm font-bold text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                     <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" />
                     <span>0% Франшиза по склу</span>
                   </li>
                   <li className="flex items-center space-x-3 text-sm font-bold text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                     <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" />
                     <span>Безкоштовний Евакуатор</span>
                   </li>
                 </ul>

                 <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-[32px] font-black text-xl shadow-xl shadow-orange-500/30 transition-all hover:-translate-y-1 mb-6 uppercase italic">
                    Замовити пропозицію
                 </button>
                 <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                   Персональний менеджер допоможе з вибором
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
