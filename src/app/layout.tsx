import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const nunito = Nunito({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Pizza Palace.ru",
    default:
      "Пицца СПб — заказать с доставкой на дом бесплатно, доставка еды из пиццерии Pizza Palace",
  },
  description:
    "Закажи пиццу с бесплатной доставкой в СПб после 30 минут. Купить недорогую еду в СПб рядом с домом или офисом в пиццерии Дворец пиццы. Оформи заказ на сайте pizza-palace.ru или по телефону +7 (999) 123-45-67",
  openGraph: {
    title:
      "Пицца Спб — заказать с доставкой на дом бесплатно, доставка еды из пиццерии Дворец пиццы",
    type: "website",
    description:
      "Закажи пиццу с бесплатной доставкой в СПб после 30 минут. Купить недорогую еду в СПб рядом с домом или офисом в пиццерии Дворец пиццы. Оформи заказ на сайте pizza-palace.ru или по телефону +7 (999) 123-45-67",
    url: "https://pizza-palace.ru",
    siteName: "Pizza-Palace",
    locale: "ru_RU",
    images: [
      {
        url: "https://pizza-palace/lunafood-ru.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  metadataBase: new URL("https://pizza-palace"),
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <Script src="/scripts/yandex.js" />
      <body className={`${nunito.className} antialiased`}>{children}</body>
    </html>
  )
}
