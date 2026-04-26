# 🛡️ AVTO-POLIS — Сучасний сервіс онлайн страхування

[![Next.js](https://img.shields.io/badge/Frontend-Next.js%2015-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/Backend-NestJS%2010-red?style=flat-square&logo=nestjs)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2d3748?style=flat-square&logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20CSS%20v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

**Avto-Polis** — це високотехнологічна Full-Stack платформа для страхових послуг, створена з акцентом на швидкість, безпеку та зручність користувача. Проєкт натхненний дизайном та функціоналом провідного сервісу `avto-polis.com.ua`, поєднуючи перевірений часом контент із найсучаснішими технологіями вебу.

---

## 🚀 Основні модулі та функціонал

### 🌐 Публічна частина (Frontend)
*   **Інтерактивний калькулятор**: Швидкий розрахунок вартості автоцивілки (ОСЦПВ), КАСКО, Зеленої карти та туристичного страхування.
*   **Преміальний дизайн**: Сучасний інтерфейс з елементами Glassmorphism, адаптивною версткою та плавними анімаціями (Framer Motion).
*   **Розумні форми**: Валідація даних у реальному часі для замовлення консультацій та оформлення полісів.
*   **SEO-оптимізація**: Висока швидкість завантаження та правильна семантична структура для кращого ранжування.

### 🔐 Адмін-панель (Dashboard)
*   **Безпечна авторизація**: Захищений вхід на базі JWT (JSON Web Tokens).
*   **Управління заявками**: Перегляд, фільтрація та обробка запитів на консультацію.
*   **Контент-менеджер**: Повноцінне управління стрічкою новин та статтями про страхування.
*   **Статистика**: Візуалізація ключових показників активності сервісу.

### ⚙️ Бекенд та API
*   **RESTful API**: Чітка архітектура на базі NestJS.
*   **Prisma ORM**: Надійна робота з базою даних PostgreSQL з підтримкою Prisma Accelerate для високої продуктивності.
*   **Swagger/OpenAPI**: Документація API для легкого тестування та інтеграції.

---

## 🛠 Технологічний стек

| Складник | Технології |
| :--- | :--- |
| **Frontend** | Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4 |
| **Backend** | NestJS, TypeScript, Passport.js (JWT Strategy) |
| **База даних** | PostgreSQL, Prisma ORM, Prisma Accelerate |
| **Інструменти** | Lucide React (іконки), Framer Motion (анімація), Axios |

---

## 📦 Встановлення та запуск

### Попередні вимоги
*   Node.js 20+
*   Встановлений PostgreSQL (або використання Supabase/Neon)

### 1. Клонування репозиторію
```bash
git clone https://github.com/MaksymDoroshenkoDCI/AVTO-POLIS-COM-UA.git
cd AVTO-POLIS-COM-UA
```

### 2. Налаштування Backend
```bash
cd backend
npm install
# Налаштуйте файл .env за прикладом
npx prisma generate
npx prisma db push
npm run start:dev
```

### 3. Налаштування Frontend
```bash
cd ../frontend
npm install
# Налаштуйте файл .env.local
npm run dev
```

---

## 🏠 Структура репозиторію

```bash
.
├── backend/            # Серверна логіка на NestJS
│   ├── prisma/         # Схема бази даних та міграції
│   └── src/            # Вихідний код API та сервісів
├── frontend/           # Клієнтська частина на Next.js
│   ├── public/         # Статичні файли (зображення, іконки)
│   └── src/            # Компоненти, сторінки та логіка
└── README.md           # Цей файл
```

---

## 🎨 Дизайн та Контент
Проєкт використовує реальний контент та логіку сервісу **Avto-Polis**. Колірна схема базується на поєднанні **Deep Blue** (довіра та професіоналізм) та **Bright Orange** (акцент на дії та енергія), що відповідає ідентичності бренду.

---
Розроблено у 2026 році
