import type { Metadata } from 'next'
import './globals.css'
import PrimaryHeader from "@/app/components/primary-header/primary-header";
import SiteFooter from "@/app/components/footer/footer";
import SecondaryHeader from "@/app/components/secondary-header/secondary-header";
import {bigShouldersDisplay, heebo} from "@/app/fonts/fonts";

export const metadata: Metadata = {
  title: 'Movie Library',
  description: 'Movie library app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="business">
      <body className={`${heebo.variable} ${bigShouldersDisplay.variable}`}>
        <PrimaryHeader />
        <SecondaryHeader />
        <main className='py-8 px-6'>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
