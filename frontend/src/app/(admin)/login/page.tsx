"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        // In a real app, call the backend API and store the token
        console.log('Login attempt:', data);
        router.push('/admin/dashboard');
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl">
                <div className="p-8 bg-blue-600 text-white text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold">Admin Portal</h1>
                    <p className="opacity-80">Вхід до панелі керування</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                            {...register('email')}
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="admin@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
                        <input
                            {...register('password')}
                            type="password"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg"
                    >
                        Увійти
                    </button>
                </form>
            </div>
        </div>
    );
}
