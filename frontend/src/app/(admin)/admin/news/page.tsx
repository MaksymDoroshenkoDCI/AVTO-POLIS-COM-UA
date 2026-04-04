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

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Заголовок</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Статус</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Дата</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Дії</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4">
                <div className="text-sm font-bold text-gray-900">Нові тарифи автоцивілки у 2026 році</div>
                <div className="text-xs text-gray-500 truncate max-w-xs">Що зміниться для водіїв і як це вплине на...</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Опубліковано</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">02 Квітня, 2026</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                <button className="text-blue-600 hover:text-blue-900">Редагувати</button>
                <button className="text-red-600 hover:text-red-900">Видалити</button>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4">
                <div className="text-sm font-bold text-gray-900">Що робити при ДТП?</div>
                <div className="text-xs text-gray-500 truncate max-w-xs">Список дій: від включення аварійки до...</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Чернетка</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28 Березня, 2026</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                <button className="text-blue-600 hover:text-blue-900">Редагувати</button>
                <button className="text-red-600 hover:text-red-900">Видалити</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
