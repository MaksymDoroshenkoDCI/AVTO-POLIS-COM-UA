# AVTO-POLIS Full-Stack Project Skeleton

Цей проєкт є сучасним скелетом для сайту страхової компанії, побудованим на **Next.js** (Frontend) та **NestJS** (Backend) з використанням **PostgreSQL** та **Prisma**.

## Структура проєкту

- `/frontend`: Next.js (App Router, TypeScript, Tailwind CSS, Lucide Icons)
- `/backend`: NestJS (TypeScript, Prisma, JWT Auth, Swagger)

## Технологічний стек

- **Frontend**: React, Next.js 14+, Tailwind CSS, Framer Motion, Axios, React Hook Form, Yup.
- **Backend**: NestJS, Prisma ORM, Passport.js, JWT, Bcrypt, class-validator.
- **Database**: PostgreSQL (рекомендовано) або будь-яка інша через Prisma.

## Функціонал

1.  **Публічна частина**:
    - Головна сторінка з героєм та послугами.
    - Сторінка контактів з робочою формою заявки.
    - Адаптивний дизайн та сучасна анімація.
2.  **Адмін-панель**:
    - Захищений вхід (JWT).
    - Дашборд зі статистикою.
    - Управління новинами (CRUD).
    - Перегляд та управління заявками на консультацію.
3.  **API**:
    - Повноцінне REST API для всіх сутностей.
    - Валідація даних на рівні DTO.
    - Інтеграція з базою даних через Prisma.

## Швидкий старт

### 1. Налаштування бази даних
Створіть базу даних PostgreSQL та додайте посилання у `backend/.env`:
```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME?schema=public"
```

### 2. Запуск Backend
```bash
cd backend
npm install
npx prisma generate
npx prisma db push # Для синхронізації схеми з БД
npm run start:dev
```

### 3. Запуск Frontend
```bash
cd frontend
npm install
npm run dev
```

## Адмін-панель
Для першого входу необхідно створити адміністратора в базі даних (або реалізувати реєстрацію).
Типовий шлях адмінки: `http://localhost:3000/admin/dashboard`

## Deployment
- **Frontend**: Найкраще на Vercel (просто підключіть папку `frontend`).
- **Backend**: Railway, Render, Heroku або Docker-контейнер.
- **Database**: Supabase, Neon.tech або Railway PostgreSQL.

---
Згенеровано з ❤️ командою Antigravity.
