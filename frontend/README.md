# 🖼️ AVTO-POLIS — Frontend (Next.js)

Ця директорія містить клієнтську частину платформи **Avto-Polis**, побудовану на базі **Next.js 15**.

## ✨ Особливості
*   **App Router**: Використання найсучаснішої архітектури Next.js.
*   **Tailwind CSS v4**: Швидка та гнучка розробка інтерфейсу з новим рушієм стилів.
*   **Framer Motion**: Плавні анімації та мікро-інтерактиви.
*   **Lucide React**: Сучасний набір SVG іконок.
*   **Google Maps Integration**: Інтерактивна карта на сторінці контактів для зручного пошуку офісу.
*   **React Hook Form + Yup**: Надійна валідація всіх форм.

## 🛠 Технології
*   **Framework**: [Next.js](https://nextjs.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **State Management**: React Hooks & SWR (для API запитів)

## 🚀 Запуск локально
1. Встановіть залежності:
   ```bash
   npm install
   ```
2. Налаштуйте змінні оточення у файлі `.env.local`:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:4000
   ```
3. Запустіть сервер розробки:
   ```bash
   npm run dev
   ```

Відкрийте [http://localhost:3000](http://localhost:3000), щоб побачити результат.

## 📁 Структура папок
*   `/src/app`: Сторінки та лейаути (публічна частина та адмінка).
*   `/src/components`: Базові та складні компоненти (UI, форми, лейаути).
*   `/src/lib`: Утиліти, конфігурації API, типи даних.
*   `/public`: Статичні ресурси (логотипи, шрифти, зображення).

---
Для отримання повної інформації про проєкт зверніться до [головного README](../README.md).
