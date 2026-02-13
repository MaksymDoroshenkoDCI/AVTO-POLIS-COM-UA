import React from 'react';
import { Newspaper, MessageSquare, Users, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl ${color} bg-opacity-10 text-opacity-100`}>
                <Icon size={24} className={color.replace('bg-', 'text-')} />
            </div>
            <span className="text-green-500 text-sm font-semibold flex items-center">
                <TrendingUp size={16} className="mr-1" /> +12%
            </span>
        </div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
);

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Заявки за сьогодні" value="24" icon={MessageSquare} color="bg-blue-600" />
                <StatCard title="Нові клієнти" value="12" icon={Users} color="bg-purple-600" />
                <StatCard title="Активні новини" value="45" icon={Newspaper} color="bg-orange-600" />
                <StatCard title="Конверсія" value="3.2%" icon={TrendingUp} color="bg-green-600" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Requests */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h2 className="font-bold text-lg">Останні заявки</h2>
                        <button className="text-blue-600 text-sm font-semibold">Всі заявки</button>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="p-4 hover:bg-gray-50 flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold">
                                        К{i}
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Клієнт {i}</h4>
                                        <p className="text-xs text-gray-500">ОСЦПВ • 2 год тому</p>
                                    </div>
                                </div>
                                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                                    Очікує
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="font-bold text-lg">Останні дії</h2>
                    </div>
                    <div className="p-6 space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex space-x-4">
                                <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                                <div>
                                    <p className="text-sm">Адміністратор оновив статтю <strong>"Нові тарифи 2024"</strong></p>
                                    <p className="text-xs text-gray-500 mt-1">10:45 AM</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
