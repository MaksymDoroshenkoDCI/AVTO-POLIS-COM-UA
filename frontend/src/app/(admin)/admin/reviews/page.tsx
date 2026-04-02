import React from 'react';

export default function AdminReviewsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Відгуки клієнтів</h2>
        <button className="px-5 py-2.5 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-sm">
          + Додати відгук
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">
        <p className="mb-4">Тут будуть відображатися відгуки клієнтів з бази (модель Review).</p>
        <p>Ви зможете модерувати їх, приховувати, видаляти або створювати нові для відображення на головній сторінці.</p>
      </div>
    </div>
  );
}
