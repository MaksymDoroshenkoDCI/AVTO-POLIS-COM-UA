"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
    name: yup.string().required('Вкажіть ваше ім\'я'),
    phone: yup.string().required('Вкажіть номер телефону'),
    email: yup.string().email('Некоректний email'),
    service: yup.string(),
    message: yup.string(),
});

const ConsultationForm = () => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: any) => {
        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/consultations`, data);
            alert('Заявка успішно надіслана! Ми зв\'яжемося з вами найближчим часом.');
            reset();
        } catch (err) {
            alert('Сталася помилка при відправці. Спробуйте ще раз пізніше.');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ім'я *</label>
                    <input
                        {...register('name')}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 outline-none`}
                        placeholder="Ваше ім'я"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                    <input
                        {...register('phone')}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 outline-none`}
                        placeholder="+380..."
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email (опціонально)</label>
                <input
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="example@mail.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Виберіть послугу</label>
                <select
                    {...register('service')}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                >
                    <option value="">Виберіть послугу...</option>
                    <option value="osago">ОСЦПВ</option>
                    <option value="kasko">КАСКО</option>
                    <option value="green-card">Зелена карта</option>
                    <option value="other">Інше</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Повідомлення</label>
                <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    placeholder="Ваші запитання..."
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/50 disabled:opacity-50"
            >
                {isSubmitting ? 'Відправка...' : 'Надіслати запит'}
            </button>
        </form>
    );
};

export default ConsultationForm;
