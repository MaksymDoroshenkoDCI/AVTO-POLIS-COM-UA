'use client';

import React, { useState } from 'react';
import { Shield, Car, AlertCircle, CheckCircle } from 'lucide-react';

export default function ClientDashboard() {
  const [plate, setPlate] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!plate) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Виклик нашого нового API для МТСБУ
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/mtibu/check/${encodeURIComponent(plate)}`);
      
      if (!res.ok) {
        throw new Error('Поліс не знайдено або сталася помилка.');
      }
      
      const data = await res.json();
      setResult(data.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Кабінет Клієнта</h1>
        <p className="text-gray-500 mt-2">Керуйте своїми автомобілями та страховими полісами.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Ліва колонка: Форма перевірки */}
        <div className="md:col-span-1 border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <Car className="mr-2 text-blue-600" />
            Перевірка по МТСБУ
          </h2>
          <p className="text-sm text-gray-500 mb-6">Введіть номер автомобіля, щоб знайти діючий поліс у базі.</p>
          
          <form onSubmit={handleCheck} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Номерний знак (напр. КА1234ВК)</label>
              <input
                type="text"
                value={plate}
                onChange={(e) => setPlate(e.target.value.toUpperCase())}
                placeholder="КА1234ВК"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors uppercase"
                required
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-800 transition-colors disabled:bg-blue-400"
            >
              {loading ? 'Пошук...' : 'Перевірити в МТСБУ'}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-start text-sm">
              <AlertCircle className="w-5 h-5 mr-2 shrink-0" />
              {error}
            </div>
          )}
        </div>

        {/* Права колонка: Результат */}
        <div className="md:col-span-2">
          {result ? (
            <div className="border border-green-200 rounded-2xl p-6 bg-green-50/30">
              <div className="flex items-center text-green-700 mb-6">
                <CheckCircle className="w-8 h-8 mr-3" />
                <div>
                  <h3 className="text-xl font-bold">Поліс знайдено!</h3>
                  <p className="text-sm">Автомобіль {result.licensePlate} застрахований.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="grid grid-cols-2 gap-y-4 text-sm">
                  <div className="text-gray-500">Марка / Модель:</div>
                  <div className="font-semibold text-gray-900">{result.make} {result.model}</div>
                  
                  <div className="text-gray-500">Страхова компанія:</div>
                  <div className="font-semibold text-gray-900">{result.insurerName}</div>
                  
                  <div className="text-gray-500">Номер полісу:</div>
                  <div className="font-mono bg-gray-100 px-2 py-1 rounded w-max text-blue-800 font-bold">{result.policyNumber}</div>
                  
                  <div className="text-gray-500">Термін дії:</div>
                  <div className="font-semibold text-gray-900">
                    до {new Date(result.endDate).toLocaleDateString('uk-UA')}
                  </div>
                  
                  <div className="text-gray-500">Статус:</div>
                  <div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                      ДІЙСНИЙ
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors w-full sm:w-auto text-sm shadow-md">
                    Зберегти авто в мій гараж
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl p-10 text-center">
              <Shield className="w-16 h-16 mb-4 text-gray-300" />
              <p>Введіть номерний знак ліворуч, щоб перевірити наявність полісу.</p>
              <p className="text-sm mt-2 max-w-sm">Знайдені поліси можна буде додати у ваш особистий список автомобілів для автоматичних нагадувань.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
