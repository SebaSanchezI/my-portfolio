import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const monserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "My portfolio",
  description: "Sebas Sanchez's portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${monserrat.variable} font-monserrat`}>{children}</body>
    </html>
  )
}
