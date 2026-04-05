'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Loader2, Newspaper } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string | null;
  createdAt: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('http://localhost:3001/news');
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
              <Newspaper className="text-white w-6 h-6" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
              Новини <span className="text-orange-500">Страхування</span>
            </h1>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl font-medium">
            Будьте в курсі останніх змін у законодавстві, нових тарифів та корисних порад для водіїв в Україні.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 relative z-20">
        {news.length === 0 ? (
          <div className="bg-white rounded-[40px] p-20 text-center shadow-xl border border-slate-100">
            <Newspaper className="w-16 h-16 text-slate-200 mx-auto mb-6" />
            <h3 className="text-2xl font-black text-slate-900 uppercase">Новин поки немає</h3>
            <p className="text-slate-500 mt-2">Ми скоро додамо свіжу інформацію. Заходьте пізніше!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <article 
                key={item.id} 
                className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={item.image || '/news_placeholder.jpg'} 
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                      Важливо
                    </span>
                  </div>
                </div>
                
                <div className="p-10">
                  <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest mb-4">
                    <Calendar className="w-3 h-3 text-orange-500" />
                    {new Date(item.createdAt).toLocaleDateString('uk-UA')}
                  </div>
                  
                  <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {item.title}
                  </h2>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium italic">
                    {item.excerpt}
                  </p>
                  
                  <Link 
                    href={`/news/${item.slug}`}
                    className="inline-flex items-center gap-3 text-blue-700 font-black text-[12px] uppercase tracking-widest hover:gap-5 transition-all group/link"
                  >
                    Читати повністю
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
