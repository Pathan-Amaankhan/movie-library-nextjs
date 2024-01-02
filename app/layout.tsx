import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'
import PrimaryHeader from "@/app/components/primary-header/primary-header";
import SiteFooter from "@/app/components/footer/footer";
import SecondaryHeader from "@/app/components/secondary-header/secondary-header";

const roboto = Heebo( { subsets: [ "latin" ], weight: "400" } );

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
      <body className={roboto.className}>
        <PrimaryHeader />
        <SecondaryHeader />
        <main className='max-w-[1200px] mx-auto py-8 px-6'>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
