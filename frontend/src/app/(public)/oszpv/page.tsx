import type { Metadata } from 'next';
import OSZPVCalculator from './_components/OSZPVCalculator';

export const metadata: Metadata = {
  title: 'Автоцивілка онлайн — Розрахунок ОСЦПВ | Avto-Polis',
  description: 'Розрахуйте вартість автоцивілки (ОСЦПВ) онлайн за 2 хвилини. Пошук за номером авто, ліміт 250 000 грн по майну та 500 000 грн по здоров\'ю. Миттєва реєстрація в базі МТСБУ.',
  keywords: [
    'автоцивілка онлайн',
    'осцпв розрахунок',
    'осцпв калькулятор',
    'купити автоцивілку',
    'автоцивілка ціна 2026',
    'осаго україна',
    'обов\'язкове страхування авто',
    'мтсбу поліс',
  ],
  alternates: {
    canonical: 'https://avto-polis.com.ua/oszpv',
  },
  openGraph: {
    title: 'Автоцивілка онлайн — Розрахунок ОСЦПВ | Avto-Polis',
    description: 'Розрахуйте вартість автоцивілки за 2 хвилини. Ліміт до 500 000 грн. Миттєва реєстрація МТСБУ.',
    url: 'https://avto-polis.com.ua/oszpv',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Автоцивілка (ОСЦПВ)',
  description: 'Обов\'язкове страхування цивільно-правової відповідальності власників транспортних засобів',
  provider: {
    '@type': 'InsuranceAgency',
    name: 'Avto-Polis',
    url: 'https://avto-polis.com.ua',
  },
  areaServed: { '@type': 'Country', name: 'Ukraine' },
  url: 'https://avto-polis.com.ua/oszpv',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Головна', item: 'https://avto-polis.com.ua' },
    { '@type': 'ListItem', position: 2, name: 'Автоцивілка', item: 'https://avto-polis.com.ua/oszpv' },
  ],
};

export default function OSZPVPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <OSZPVCalculator />
    </>
  );
}
