import { locales } from "@/i18n";
import { Toaster } from "@shared/components/Toaster"

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
