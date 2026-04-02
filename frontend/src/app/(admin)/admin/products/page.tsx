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

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">
        <p className="mb-4">Налаштування страхових продуктів (Автоцивілка, КАСКО, Зелена карта).</p>
        <p>Список продуктів зберігатиметься в таблиці Product у БД Prisma. Ви зможете змінювати базову ціну, додавати знижки або керувати тарифами.</p>
      </div>
    </div>
  );
}
