import { Locale, i18n } from "../../i18n-config"
import "./globals.css"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  )
}
