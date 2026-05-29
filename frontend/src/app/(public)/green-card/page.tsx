import type { Metadata } from 'next';
import GreenCardClient from './_components/GreenCardClient';

export const metadata: Metadata = {
  title: 'Зелена Карта онлайн — Ціни 2026 | Avto-Polis',
  description: 'Оформіть Зелену карту онлайн за 5 хвилин. Покриття у 40+ країнах Європи. Вільні тарифи МТСБУ 2026. Миттєво з\'являється в «Дії». Від 450 грн на 15 днів.',
  keywords: [
    'зелена карта онлайн',
    'зелена карта ціна 2026',
    'зелена карта страхування',
    'green card ukraine',
    'страхування для виїзду за кордон',
    'зелена картка авто',
    'мтсбу зелена карта',
    'зелена карта для шенгену',
  ],
  alternates: {
    canonical: 'https://avto-polis.com.ua/green-card',
  },
  openGraph: {
    title: 'Зелена Карта онлайн — Ціни 2026 | Avto-Polis',
    description: 'Зелена карта онлайн. Покриття у 40+ країнах. Від 450 грн. Миттєво в «Дії».',
    url: 'https://avto-polis.com.ua/green-card',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Чи можна оформити Зелену карту, якщо я вже за кордоном?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Так, ви можете оформити поліс електронно через наш сервіс. Але пам\'ятайте: поліс не діє "сьогодні на сьогодні". Початок дії зазвичай з 00:00 наступної доби або з конкретної обраної дати у майбутньому.',
      },
    },
    {
      '@type': 'Question',
      name: 'Чи потрібно друкувати поліс Зеленої карти?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'За правилами системи Зелена Карта, допускається електронний формат (PDF в телефоні). Проте у багатьох країнах Європи поліція все ще може вимагати паперову роздруківку. Рекомендуємо мати роздрукований варіант.',
      },
    },
    {
      '@type': 'Question',
      name: 'В яких країнах діє Зелена карта?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Поліс діє у всіх країнах Європейського Союзу, а також у Молдові, Грузії, Туреччині та інших країнах-партнерах системи. З квітня 2022 року дія полісів Green Card в росії та білорусі повністю припинена.',
      },
    },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Зелена Карта (Green Card)',
  description: 'Міжнародне страхування цивільно-правової відповідальності для виїзду за кордон',
  provider: {
    '@type': 'InsuranceAgency',
    name: 'Avto-Polis',
    url: 'https://avto-polis.com.ua',
  },
  areaServed: { '@type': 'Country', name: 'Ukraine' },
  url: 'https://avto-polis.com.ua/green-card',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Головна', item: 'https://avto-polis.com.ua' },
    { '@type': 'ListItem', position: 2, name: 'Зелена Карта', item: 'https://avto-polis.com.ua/green-card' },
  ],
};

export default function GreenCardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <GreenCardClient />
    </>
  );
}
