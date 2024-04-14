import { NextAuthProvider } from "@shared/contexts/SessionProvider"
import "./globals.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <NextAuthProvider>{children}</NextAuthProvider>
}
