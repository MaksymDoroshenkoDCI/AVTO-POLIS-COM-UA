"use client"

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-center space-y-4">
            <AnimatePresence>
                {/* Telegram / Message Button */}
                <motion.a
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    href="https://t.me/avtopolis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-600 transition-all hover:-translate-y-1 group relative"
                    aria-label="Написати у Telegram"
                >
                    <MessageCircle className="h-7 w-7" />
                    <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Написати у Telegram
                    </span>
                </motion.a>

                {/* Phone Button */}
                <motion.a
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    href="tel:+380977172121"
                    className="w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-orange-600 transition-all hover:-translate-y-1 group relative"
                    aria-label="Зателефонувати"
                >
                    <Phone className="h-7 w-7" />
                    <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        +38 (097) 717-21-21
                    </span>
                </motion.a>

                {/* Scroll to Top */}
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center shadow-xl border border-gray-100 hover:bg-gray-50 transition-all hover:-translate-y-1 group relative"
                        aria-label="Вгору"
                    >
                        <ArrowUp className="h-6 w-6" />
                        <span className="absolute right-full mr-4 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                            Вгору
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FloatingActions;
