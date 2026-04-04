'use client';

import React from 'react';
import { Save } from 'lucide-react';

export default function AdminSettingsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Налаштування системи</h2>
        <button className="flex items-center px-5 py-2.5 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
          <Save className="w-4 h-4 mr-2" />
          Зберегти зміни
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-4">Загальні налаштування сайту</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Контактний номер телефону</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="+38 (097) 717-21-21" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email для отримання заявок</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="avtopolis.com.ua@gmail.com" />
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Посилання на Telegram канал</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="https://t.me/avtopoliscomua" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Посилання на Instagram</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="https://instagram.com/avtopolis" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
