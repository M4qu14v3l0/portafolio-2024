import { Poppins } from 'next/font/google'
import './globals.css'
import { SideBar } from '@/components/SideBar'

const poppins = Poppins({ weight: ['100','200','300','400','500','600','700','800','900'] ,subsets: ['latin'] })




export const metadata = {
  title: 'Marcelo',
  description: "Marcelo is a software developer currently looking for best companies to collaborate with",
  openGraph: {
    title: 'Marcelo Portfolio',
    description: 'Marcelo is a software developer currently looking for best companies to collaborate with',
    url: 'https://m4qu14v3l0.com',
    siteName: 'Marcelo Portfolio',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og.png',
        width: 1800,
        height: 1600,
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SideBar />
        {children}
      </body>
    </html>
  )
}
