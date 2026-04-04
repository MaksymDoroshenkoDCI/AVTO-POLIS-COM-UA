'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  Car, 
  MapPin, 
  UserCheck, 
  ShieldCheck, 
  CheckCircle2,
  AlertTriangle,
  Zap,
  ChevronRight,
  Info,
  Search,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const regions = [
  { id: 'kyiv', label: 'Київ (Мсто реєстрації)', factor: 1.8 },
  { id: 'kyiv_region', label: 'Київська область (Бориспіль, Ірпінь, Бровари)', factor: 1.4 },
  { id: 'large_cities', label: 'Міста від 500 тис. (Львів, Харків, Одеса, Дніпро)', factor: 1.6 },
  { id: 'small_towns', label: 'Інші населені пункти України', factor: 1.0 },
];

const engines = [
  { id: 'up_to_1600', label: 'До 1600 см³', factor: 1.0 },
  { id: '1601_2000', label: '1601 - 2000 см³', factor: 1.14 },
  { id: '2001_3000', label: '2001 - 3000 см³', factor: 1.18 },
  { id: 'over_3000', label: 'Понад 3000 см³', factor: 1.62 },
  { id: 'electric', label: 'Електромобіль', factor: 0.9 },
];

export default function OSZPVPage() {
  const [region, setRegion] = useState('small_towns');
  const [engine, setEngine] = useState('up_to_1600');
  const [isPrivileged, setIsPrivileged] = useState(false);
  const [plate, setPlate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [vehicleInfo, setVehicleInfo] = useState<any>(null);
  const [price, setPrice] = useState(0);

  // Базовий тариф (ринковий орієнтир 2026)
  const baseTariff = 1400;

  const handleSearchPlate = async () => {
    if (!plate || plate.length < 4) return;
    
    setIsLoading(true);
    setError('');
    setVehicleInfo(null);

    try {
      const res = await fetch(`http://localhost:3001/vehicles/info/${plate}`);
      if (!res.ok) {
        throw new Error('Авто не знайдено в базі МВС');
      }
      const result = await res.json();
      const vehicle = result.data;
      setVehicleInfo(vehicle);

      // Автоматично виставляємо параметри для розрахунку
      // 1. Двигун
      if (vehicle.engineVolume > 0) {
        if (vehicle.engineVolume <= 1600) setEngine('up_to_1600');
        else if (vehicle.engineVolume <= 2000) setEngine('1601_2000');
        else if (vehicle.engineVolume <= 3000) setEngine('2001_3000');
        else setEngine('over_3000');
      } else if (vehicle.fuel === 'ELECTRIC') {
        setEngine('electric');
      }

      // 2. Регіон (проста логіка для демонстрації)
      if (vehicle.registrationCity === 'КИЇВ') {
        setRegion('kyiv');
      } else if (['ЛЬВІВ', 'ХАРКІВ', 'ОДЕСА', 'ДНІПРО'].includes(vehicle.registrationCity)) {
        setRegion('large_cities');
      }

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const regionFactor = regions.find(r => r.id === region)?.factor || 1;
    const engineFactor = engines.find(e => e.id === engine)?.factor || 1;
    
    let finalPrice = baseTariff * regionFactor * engineFactor;
    
    if (isPrivileged) {
      finalPrice = finalPrice * 0.5; // Знижка 50% згідно закону 2025
    }

    setPrice(Math.round(finalPrice));
  }, [region, engine, isPrivileged]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Zap className="w-full h-full text-blue-500 rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="bg-blue-500/20 text-blue-400 px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-widest border border-blue-500/30 mb-8 inline-block">
              ОБОВ'ЯЗКОВЕ СТРАХУВАННЯ
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-8 tracking-tighter uppercase">
              Авто<span className="text-blue-500">цивілка</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Захистіть свій бюджет від непередбачуваних витрат при ДТП. Ми пропонуємо поліси з лімітами до 1 000 000 грн.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-24 -mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[48px] shadow-2xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            
            {/* Form */}
            <div className="lg:col-span-7 p-10 md:p-16">
              <div className="flex items-center space-x-4 mb-12">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Calculator className="text-blue-600 w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight leading-none">Розрахунок вартості</h2>
              </div>

              <div className="space-y-12">
                {/* Plate Search */}
                <div className="bg-blue-50 p-6 rounded-[32px] border border-blue-100 mb-8">
                  <label className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] block mb-4">Швидкий пошук за номером</label>
                  <div className="flex gap-3">
                    <input 
                      type="text" 
                      placeholder="AA 1111 BB"
                      value={plate}
                      onChange={(e) => setPlate(e.target.value.toUpperCase())}
                      className="flex-1 bg-white border-2 border-blue-100 rounded-2xl px-6 py-4 font-black text-xl uppercase tracking-widest focus:border-blue-500 outline-none transition-all placeholder:text-blue-100"
                    />
                    <button 
                      onClick={handleSearchPlate}
                      disabled={isLoading || !plate}
                      className="bg-blue-600 text-white px-8 rounded-2xl font-black hover:bg-blue-700 transition-all flex items-center shadow-lg shadow-blue-600/20 disabled:opacity-50"
                    >
                      {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Search className="w-6 h-6" />}
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {error && (
                      <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-[10px] font-black uppercase mt-4 italic">
                        {error}
                      </motion.p>
                    )}
                    {vehicleInfo && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-4 pt-4 border-t border-blue-100">
                        <p className="text-blue-900 font-black text-sm uppercase tracking-tight">
                          {vehicleInfo.make} {vehicleInfo.model} ({vehicleInfo.year})
                        </p>
                        <p className="text-blue-400 text-[10px] font-bold uppercase tracking-wider mt-1">
                          Реєстрація: {vehicleInfo.registrationCity} • {vehicleInfo.engineVolume > 0 ? `${vehicleInfo.engineVolume} см³` : 'Electric'}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="grid grid-cols-1 gap-12">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center">
                      <MapPin className="w-3 h-3 mr-2" /> Місце реєстрації власника
                    </label>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {regions.map((r) => (
                      <button
                        key={r.id}
                        onClick={() => setRegion(r.id)}
                        className={`text-left px-6 py-4 rounded-2xl border-2 transition-all font-bold text-sm ${
                          region === r.id 
                            ? 'border-blue-500 bg-blue-50 text-blue-700 shadow-lg shadow-blue-500/10' 
                            : 'border-gray-50 hover:border-gray-200 text-slate-600'
                        }`}
                      >
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Engine */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center">
                      <Car className="w-3 h-3 mr-2" /> Об'єм двигуна
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {engines.map((e) => (
                      <button
                        key={e.id}
                        onClick={() => setEngine(e.id)}
                        className={`px-8 py-4 rounded-xl border-2 transition-all font-black text-xs uppercase tracking-wider ${
                          engine === e.id 
                            ? 'border-blue-500 bg-blue-500 text-white shadow-xl shadow-blue-500/20' 
                            : 'border-gray-50 hover:border-gray-200 text-slate-400'
                        }`}
                      >
                        {e.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Privilege */}
                <div className="pt-6">
                  <button 
                    onClick={() => setIsPrivileged(!isPrivileged)}
                    className={`w-full flex items-center justify-between p-6 rounded-3xl border-2 transition-all ${
                      isPrivileged 
                        ? 'border-orange-400 bg-orange-50' 
                        : 'border-gray-50 bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-center text-left">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${isPrivileged ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <p className={`font-black text-sm uppercase tracking-tight ${isPrivileged ? 'text-orange-900' : 'text-slate-600'}`}>Маю право на пільгу</p>
                        <p className="text-xs text-slate-400 mt-1 uppercase font-bold">Пенсіонери, УБД, інваліди, чорнобильці (-50%)</p>
                      </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isPrivileged ? 'border-orange-500 bg-orange-500' : 'border-gray-300'}`}>
                      {isPrivileged && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="lg:col-span-5 bg-slate-50 border-l border-gray-100 p-10 md:p-16 flex flex-col justify-between relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <ShieldCheck className="w-48 h-48" />
              </div>
              
              <div className="text-center relative z-10">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">Орієнтовна вартість</p>
                 <div className="flex justify-center items-baseline space-x-2 mb-12">
                   <motion.span 
                    key={price}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-8xl font-black text-slate-900 leading-none tracking-tighter"
                   >
                     {price}
                   </motion.span>
                   <span className="text-3xl font-black text-slate-400 uppercase tracking-widest">ГРН</span>
                 </div>

                 <div className="space-y-4 mb-16 px-4">
                    <div className="flex items-center space-x-3 text-slate-600 font-bold text-sm bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white">
                       <CheckCircle2 className="text-blue-500 w-5 h-5 shrink-0" />
                       <span className="uppercase tracking-tight text-[11px]">Ліміт по майну: 250 000 грн</span>
                    </div>
                    <div className="flex items-center space-x-3 text-slate-600 font-bold text-sm bg-white/60 p-4 rounded-2xl backdrop-blur-sm border border-white">
                       <CheckCircle2 className="text-blue-500 w-5 h-5 shrink-0" />
                       <span className="uppercase tracking-tight text-[11px]">Ліміт по здоров'ю: 500 000 грн</span>
                    </div>
                 </div>

                 <button className="w-full group bg-blue-600 hover:bg-blue-700 text-white py-8 rounded-[32px] font-black text-2xl shadow-2xl shadow-blue-600/30 transition-all hover:-translate-y-1 flex items-center justify-center space-x-3 uppercase tracking-tight">
                    <span>Оформити</span>
                    <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
                 </button>
                 <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-8">
                    Миттєва реєстрація в базі МТСБУ
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-10 italic">
                Все про <span className="text-blue-600 underline">Автоцивілку</span> у 2026 році
              </h2>
              <div className="space-y-8">
                <div className="flex space-x-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                    <Zap className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-2">Нові ліміти</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Покриття збитків збільшено до 250 тис. грн за майно та 500 тис. грн за шкоду здоров'ю кожного потерпілого.</p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                    <AlertTriangle className="text-orange-500 w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-2">Зміни в пільгах</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">За законом 2025 року, повне звільнення скасовано. Пільговики отримують знижку 50%, а поліс має бути оформлений саме на власника ТЗ.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 rounded-[64px] p-12 text-white relative h-full">
              <div className="flex items-center space-x-4 mb-8">
                <Info className="text-blue-400 w-8 h-8" />
                <h3 className="text-2xl font-black uppercase tracking-tight">Чому ми?</h3>
              </div>
              <ul className="space-y-6">
                <li className="flex items-center space-x-4 text-slate-400 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Тільки надійні СК з рейтингом A++</span>
                </li>
                <li className="flex items-center space-x-4 text-slate-400 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Безкоштовна допомога в супроводі ДТП</span>
                </li>
                <li className="flex items-center space-x-4 text-slate-400 text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  <span>Нагадування про закінчення поліса</span>
                </li>
              </ul>
              <div className="mt-12 p-8 bg-blue-600 rounded-[40px] text-center">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-100 mb-2">Наш Телеграм Бот</p>
                <p className="font-black text-xl mb-4">Отримуйте поліс за 1 хвилину</p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                  ПЕРЕЙТИ В TG
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
