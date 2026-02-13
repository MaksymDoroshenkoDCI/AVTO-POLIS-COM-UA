"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Newspaper, MessageSquare, Settings, LogOut, Menu, X, Shield } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const pathname = usePathname();

    // If we are on the login page, don't show the sidebar
    if (pathname === '/admin/login') return <>{children}</>;

    const menuItems = [
        { name: 'Дашборд', icon: LayoutDashboard, href: '/admin/dashboard' },
        { name: 'Новини', icon: Newspaper, href: '/admin/news' },
        { name: 'Заявки', icon: MessageSquare, href: '/admin/consultations' },
        { name: 'Налаштування', icon: Settings, href: '/admin/settings' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 flex">
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-900 text-white transition-all duration-300 flex flex-col fixed h-full z-40`}>
                <div className="p-6 flex items-center justify-between">
                    <Link href="/admin/dashboard" className={`flex items-center space-x-2 ${!sidebarOpen && 'hidden'}`}>
                        <Shield className="h-8 w-8 text-blue-500" />
                        <span className="font-bold text-xl">Admin Panel</span>
                    </Link>
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-400 hover:text-white">
                        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                <nav className="flex-1 px-4 py-4 space-y-2">
                    {menuItems.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${active ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                    }`}
                            >
                                <item.icon size={20} />
                                <span className={sidebarOpen ? 'block' : 'hidden'}>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-800">
                    <button className="flex items-center space-x-3 p-3 w-full text-gray-400 hover:bg-gray-800 hover:text-white rounded-lg transition-colors">
                        <LogOut size={20} />
                        <span className={sidebarOpen ? 'block' : 'hidden'}>Вийти</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'} p-8`}>
                <header className="mb-8 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        {menuItems.find(i => i.href === pathname)?.name || 'Панель керування'}
                    </h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-gray-600">Адміністратор</span>
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                            A
                        </div>
                    </div>
                </header>
                {children}
            </main>
        </div>
    );
}
