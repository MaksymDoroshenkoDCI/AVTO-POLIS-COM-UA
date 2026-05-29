import type { Metadata } from 'next';
import TravelClient from './_components/TravelClient';

export const metadata: Metadata = {
  title: 'Туристичне страхування онлайн — Ціни 2026 | Avto-Polis',
  description: 'Оформіть туристичне страхування для виїзду за кордон онлайн. Медичне покриття 30 000 €, покриття COVID-19, асистанс 24/7. Приймається всіма посольствами. Від 35 грн/день.',
  keywords: [
    'туристичне страхування онлайн',
    'страховка для виїзду за кордон',
    'страховка для шенгену',
    'медичне страхування туристів',
    'страхування подорожей',
    'travel insurance ukraine',
    'страховка від ковід',
    'туристична страховка ціна',
  ],
  alternates: {
    canonical: 'https://avto-polis.com.ua/travel',
  },
  openGraph: {
    title: 'Туристичне страхування онлайн | Avto-Polis',
    description: 'Страхування подорожей онлайн. Покриття 30 000 €. Приймається всіма посольствами. Від 35 грн/день.',
    url: 'https://avto-polis.com.ua/travel',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Туристичне страхування',
  description: 'Медичне страхування для туристів та мандрівників з покриттям у всьому світі',
  provider: {
    '@type': 'InsuranceAgency',
    name: 'Avto-Polis',
    url: 'https://avto-polis.com.ua',
  },
  areaServed: { '@type': 'Country', name: 'Ukraine' },
  url: 'https://avto-polis.com.ua/travel',
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Головна', item: 'https://avto-polis.com.ua' },
    { '@type': 'ListItem', position: 2, name: 'Туристичне страхування', item: 'https://avto-polis.com.ua/travel' },
  ],
};

export default function TravelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <TravelClient />
    </>
  );
}
