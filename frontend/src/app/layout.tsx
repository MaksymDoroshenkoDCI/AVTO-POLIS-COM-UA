import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    metadataBase: new URL('https://avto-polis.com.ua'),
    title: {
        default: "Avto-Polis — Онлайн сервіс страхових продуктів",
        template: "%s | Avto-Polis"
    },
    description: "Надійне онлайн страхування автомобіля: ОСЦПВ (Автоцивілка), КАСКО, Зелена карта та туристична страховка від провідних компаній України. Оформлюйте онлайн за 5 хвилин.",
    keywords: ["страхування", "автоцивілка", "каско", "зелена карта", "онлайн страхування", "автополіс", "страхування авто київ", "осаго онлайн"],
    authors: [{ name: 'Avto-Polis' }],
    creator: 'Avto-Polis',
    publisher: 'Avto-Polis',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'uk_UA',
        url: 'https://avto-polis.com.ua',
        siteName: 'Avto-Polis',
        title: 'Avto-Polis — Онлайн сервіс страхових продуктів',
        description: 'Надійне онлайн страхування автомобіля: ОСЦПВ, КАСКО, Зелена карта та туристична страховка.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Avto-Polis — Онлайн страхування',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Avto-Polis — Онлайн сервіс страхових продуктів',
        description: 'Надійне онлайн страхування автомобіля в Україні.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://avto-polis.com.ua',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="uk">
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
