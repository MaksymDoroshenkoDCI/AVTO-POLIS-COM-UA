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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-bold">М</div>
                <div>
                  <h4 className="font-bold text-gray-900">Михайло Петренко</h4>
                  <p className="text-xs text-gray-500">Оцінка: 5/5</p>
                </div>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Опубліковано</span>
            </div>
            <p className="text-gray-600 text-sm">"Швидко оформили автоцивілку, навіть не довелося їхати в офіс. Дуже задоволений сервісом!"</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-50 flex justify-end space-x-3">
            <button className="text-sm font-semibold text-gray-500 hover:text-gray-800">Приховати</button>
            <button className="text-sm font-semibold text-red-600 hover:text-red-800">Видалити</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">О</div>
                <div>
                  <h4 className="font-bold text-gray-900">Олена Василенко</h4>
                  <p className="text-xs text-gray-500">Оцінка: 4/5</p>
                </div>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Новий</span>
            </div>
            <p className="text-gray-600 text-sm">"Користуюсь не перший рік. В цілому все добре, але цього разу трохи довго чекала на відповідь в телеграмі."</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-50 flex justify-end space-x-3">
            <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">Опублікувати</button>
            <button className="text-sm font-semibold text-red-600 hover:text-red-800">Видалити</button>
          </div>
        </div>
      </div>
    </div>
  );
}
