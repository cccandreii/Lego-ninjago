import React from "react"
import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })

export const metadata: Metadata = {
  title: 'Ninjago — More Than Just a Kids Show',
  description: 'An English project exploring the life lessons, characters, and lasting impact of the Lego Ninjago animated series.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${_inter.variable} ${_cinzel.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
