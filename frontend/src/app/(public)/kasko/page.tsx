import type { Metadata } from 'next';
import KaskoClient from './_components/KaskoClient';

export const metadata: Metadata = {
  title: 'КАСКО страхування авто онлайн — Розрахунок ціни 2026 | Avto-Polis',
  description: 'Оформіть КАСКО онлайн і заощаджуйте до 7 000 грн. Повний захист від ДТП, викрадення, стихійних лих та військових ризиків. Нульова франшиза по склу. Безкоштовний евакуатор.',
  keywords: [
    'каско страхування',
    'каско онлайн',
    'каско розрахунок ціни',
    'каско автомобіль україна',
    'повне страхування авто',
    'каско 2026',
    'купити каско',
    'каско від угону',
  ],
  alternates: {
    canonical: 'https://avto-polis.com.ua/kasko',
  },
  openGraph: {
    title: 'КАСКО страхування авто онлайн | Avto-Polis',
    description: 'КАСКО онлайн. Захист від ДТП, угону, стихій. Від 3.2% вартості авто. Нульова франшиза по склу.',
    url: 'https://avto-polis.com.ua/kasko',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'КАСКО страхування автомобіля',
  description: 'Добровільне страхування транспортного засобу від усіх ризиків: ДТП, викрадення, стихійних лих та пошкодження третіми особами',
  provider: {
    '@type': 'InsuranceAgency',
    name: 'Avto-Polis',
    url: 'https://avto-polis.com.ua',
  },
  areaServed: { '@type': 'Country', name: 'Ukraine' },
  url: 'https://avto-polis.com.ua/kasko',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Головна', item: 'https://avto-polis.com.ua' },
    { '@type': 'ListItem', position: 2, name: 'КАСКО', item: 'https://avto-polis.com.ua/kasko' },
  ],
};

export default function KaskoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <KaskoClient />
    </>
  );
}
