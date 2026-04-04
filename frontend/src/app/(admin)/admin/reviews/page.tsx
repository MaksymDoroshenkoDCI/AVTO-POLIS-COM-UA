'use client';

import React, { useState, useEffect } from 'react';
import { Star, Trash2, Edit, CheckCircle, XCircle, Plus, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface Review {
  id: string;
  author: string;
  text: string;
  rating: number;
  avatarUrl: string | null;
  published: boolean;
  createdAt: string;
}

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [formData, setFormData] = useState({
    author: '',
    text: '',
    rating: 5,
    avatarUrl: '',
    published: true,
  });

  const fetchReviews = async () => {
    try {
      const res = await fetch('http://localhost:3001/reviews');
      const data = await res.json();
      setReviews(data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSeed = async () => {
    setIsLoading(true);
    try {
      await fetch('http://localhost:3001/reviews/seed');
      await fetchReviews();
    } catch (error) {
      console.error('Error seeding reviews:', error);
      setIsLoading(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const method = editingReview ? 'PATCH' : 'POST';
      const url = editingReview 
        ? `http://localhost:3001/reviews/${editingReview.id}`
        : 'http://localhost:3001/reviews';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowModal(false);
        setEditingReview(null);
        setFormData({ author: '', text: '', rating: 5, avatarUrl: '', published: true });
        await fetchReviews();
      }
    } catch (error) {
      console.error('Error saving review:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Ви впевнені, що хочете видалити цей відгук?')) return;
    try {
      await fetch(`http://localhost:3001/reviews/${id}`, { method: 'DELETE' });
      setReviews(reviews.filter(r => r.id !== id));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  const togglePublished = async (review: Review) => {
    try {
      await fetch(`http://localhost:3001/reviews/${review.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ published: !review.published }),
      });
      setReviews(reviews.map(r => r.id === review.id ? { ...r, published: !r.published } : r));
    } catch (error) {
      console.error('Error toggling publish status:', error);
    }
  };

  const openEditModal = (review: Review) => {
    setEditingReview(review);
    setFormData({
      author: review.author,
      text: review.text,
      rating: review.rating,
      avatarUrl: review.avatarUrl || '',
      published: review.published,
    });
    setShowModal(true);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Відгуки клієнтів</h2>
          <p className="text-slate-500 text-sm mt-1">Керування відгуками на головній сторінці</p>
        </div>
        <div className="flex gap-4">
          {reviews.length === 0 && (
            <button 
              onClick={handleSeed}
              className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold hover:bg-slate-200 transition-colors"
            >
              Завантажити початкові
            </button>
          )}
          <button 
            onClick={() => {
              setEditingReview(null);
              setFormData({ author: '', text: '', rating: 5, avatarUrl: '', published: true });
              setShowModal(true);
            }}
            className="px-6 py-3 bg-blue-700 text-white rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Додати відгук
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-[32px] p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 border-2 border-white shadow-sm">
                  {review.avatarUrl ? (
                    <Image src={review.avatarUrl} alt={review.author} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold text-slate-400">{review.author[0]}</div>
                  )}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-sm uppercase tracking-tight">{review.author}</h4>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-orange-400 text-orange-400' : 'text-slate-200'}`} />
                    ))}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => togglePublished(review)}
                className={`p-2 rounded-full transition-colors ${review.published ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-400'}`}
                title={review.published ? 'Опубліковано' : 'Приховано'}
              >
                {review.published ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              </button>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed italic line-clamp-4 mb-8">
              "{review.text}"
            </p>

            <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-50">
              <button 
                onClick={() => openEditModal(review)}
                className="p-3 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
              >
                <Edit className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleDelete(review.id)}
                className="p-3 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-[40px] w-full max-w-lg p-10 shadow-2xl animate-in fade-in zoom-in duration-300">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-8">
              {editingReview ? 'Редагувати відгук' : 'Додати новий відгук'}
            </h3>
            <form onSubmit={handleSave} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Автор</label>
                <input 
                  type="text" 
                  required
                  value={formData.author}
                  onChange={e => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all font-bold"
                  placeholder="Прізвище та Ім'я"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Текст відгуку</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.text}
                  onChange={e => setFormData({ ...formData, text: e.target.value })}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all font-bold text-sm"
                  placeholder="Ваші враження..."
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Рейтинг (1-5)</label>
                  <select 
                    value={formData.rating}
                    onChange={e => setFormData({ ...formData, rating: Number(e.target.value) })}
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all font-black"
                  >
                    {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Зірок</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Статус</label>
                  <div className="flex items-center h-[60px]">
                    <button 
                      type="button"
                      onClick={() => setFormData({ ...formData, published: !formData.published })}
                      className={`flex items-center gap-2 px-6 py-2 rounded-full font-black text-[10px] uppercase transition-all ${formData.published ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}
                    >
                      {formData.published ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      {formData.published ? 'Опубліковано' : 'Чернетка'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">URL Аватара (лінк або шлях)</label>
                <input 
                  type="text" 
                  value={formData.avatarUrl}
                  onChange={e => setFormData({ ...formData, avatarUrl: e.target.value })}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-blue-500 focus:bg-white rounded-2xl outline-none transition-all font-bold"
                  placeholder="/avatar.png"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-8 py-4 bg-slate-100 text-slate-600 rounded-[20px] font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-all"
                >
                  Скасувати
                </button>
                <button 
                  type="submit"
                  disabled={isSaving}
                  className="flex-2 px-12 py-4 bg-blue-700 text-white rounded-[20px] font-black text-sm uppercase tracking-widest hover:bg-blue-800 transition-all shadow-xl shadow-blue-700/20 disabled:opacity-50"
                >
                  {isSaving ? 'Зберігання...' : 'Зберегти'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
