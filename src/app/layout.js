import { Poppins } from 'next/font/google'
import './globals.css'
import { SideBar } from '@/components/SideBar'

const poppins = Poppins({ weight: ['100','200','300','400','500','600','700','800','900'] ,subsets: ['latin'] })




export const metadata = {
  title: 'Marcelo',
  description: "Marcelo portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <link rel="icon" href="/favicon.ico" sizes="16x16" />


      <body className={poppins.className}>
        <SideBar />
        {children}
      </body>
    </html>
  )
}
