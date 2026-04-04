import React from 'react';

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Продукти та Ціни</h2>
        <button className="px-5 py-2.5 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
          + Створити страховий продукт
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* КАСКО */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Активно</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">КАСКО</h3>
          <p className="text-sm text-gray-500 mb-6 border-b pb-4">Повний захист вашого автомобіля від будь-яких ризиків на дорозі та парковці.</p>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400">Базова ціна від</p>
              <p className="text-xl font-bold text-blue-600">8 000 ₴</p>
            </div>
            <button className="text-sm font-semibold text-gray-600 hover:text-blue-600">Редагувати</button>
          </div>
        </div>

        {/* ОСЦПВ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Активно</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Автоцивілка (ОСЦПВ)</h3>
          <p className="text-sm text-gray-500 mb-6 border-b pb-4">Обов'язкове страхування цивільно-правової відповідальності власників авто.</p>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400">Базова ціна від</p>
              <p className="text-xl font-bold text-blue-600">1 200 ₴</p>
            </div>
            <button className="text-sm font-semibold text-gray-600 hover:text-blue-600">Редагувати</button>
          </div>
        </div>

        {/* Зелена картка */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 opacity-60">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-gray-100 text-gray-500 rounded-xl">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">Неактивно</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Зелена картка</h3>
          <p className="text-sm text-gray-500 mb-6 border-b pb-4">Міжнародне страхування відповідальності для виїзду за кордон.</p>
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400">Базова ціна від</p>
              <p className="text-xl font-bold text-gray-400">950 ₴</p>
            </div>
            <button className="text-sm font-semibold text-gray-600 hover:text-blue-600">Редагувати</button>
          </div>
        </div>
      </div>
    </div>
  );
}
