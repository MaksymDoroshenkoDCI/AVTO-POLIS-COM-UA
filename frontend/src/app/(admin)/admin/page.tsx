import React from 'react';
import { Users, FileText, ClipboardList, Wallet } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    { name: 'Заявки на страхування', value: '12', change: '+2', icon: ClipboardList, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Клієнти в системі', value: '145', change: '+18', icon: Users, color: 'text-orange-600', bg: 'bg-orange-100' },
    { name: 'Оформлено полісів (місяць)', value: '38', change: '+5%', icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { name: 'Дохід (приблизно)', value: '120 000 ₴', change: '+12%', icon: Wallet, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Головна панель</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start">
            <div className={`p-3 rounded-xl ${stat.bg} mr-4`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{stat.name}</p>
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Останні заявки */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Останні заявки</h3>
          <p className="text-sm text-gray-500">Тут з'являтимуться нові звернення від клієнтів (через форму або калькулятор).</p>
          <div className="mt-4 border-2 border-dashed border-gray-100 p-8 text-center rounded-xl text-gray-400">
            Поки що немає нових заявок
          </div>
        </div>

        {/* Швидкі дії */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Швидкі дії</h3>
          <div className="space-y-3">
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 flex items-center transition-colors">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 shrink-0">+</span>
              <span className="font-medium text-gray-700">Додати нову статтю (Новини)</span>
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 flex items-center transition-colors">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-3 shrink-0">+</span>
              <span className="font-medium text-gray-700">Оновити ціни на страховки</span>
            </button>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100 flex items-center transition-colors">
              <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3 shrink-0">+</span>
              <span className="font-medium text-gray-700">Опублікувати новий відгук</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
