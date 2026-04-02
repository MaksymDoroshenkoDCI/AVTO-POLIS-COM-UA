import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, Newspaper, MessageSquare, Package, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuItems = [
    { name: 'Дашборд', href: '/admin', icon: LayoutDashboard },
    { name: 'Заявки', href: '/admin/consultations', icon: MessageSquare },
    { name: 'Новини', href: '/admin/news', icon: Newspaper },
    { name: 'Відгуки', href: '/admin/reviews', icon: MessageSquare },
    { name: 'Продукти та Ціни', href: '/admin/products', icon: Package },
    { name: 'Налаштування', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white fixed h-full z-10 flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-2xl font-bold tracking-tight">Avto-Polis <span className="text-orange-500">Admin</span></h1>
        </div>
        
        <nav className="flex-1 py-6">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                >
                  <item.icon className="h-5 w-5 mr-3 shrink-0" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center px-4 py-3 w-full rounded-lg text-red-400 hover:bg-red-500/10 transition-colors">
            <LogOut className="h-5 w-5 mr-3 shrink-0" />
            <span className="font-medium">Вийти</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
