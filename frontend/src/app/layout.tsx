import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
    title: "Avto-Polis — Онлайн сервіс страхових продуктів",
    description: "Надійне онлайн страхування автомобіля: ОСЦПВ, КАСКО, Зелена карта та туристична страховка від провідних компаній України.",
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
