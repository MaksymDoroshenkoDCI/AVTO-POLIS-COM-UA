import React from 'react';

export default function AdminNewsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Управління новинами</h2>
        <button className="px-5 py-2.5 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
          Копіювати статтю (+ Створити)
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">
        <p className="mb-4">Тут буде список ваших новин, що генерується з бази даних (таблиця News).</p>
        <p>Наразі ви можете додати логіку отримання даних через Server Actions або API-маршрут.</p>
      </div>
    </div>
  );
}
