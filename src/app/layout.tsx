import './globals.css'
import { Inter, Amatic_SC, Sawarabi_Mincho } from 'next/font/google'

import Sticky from './components/sticky/sticky'
import SectionFour from './components/sectionFour/sectionFour'


const inter = Inter({ subsets: ['latin'] })
const amatic = Amatic_SC({
  subsets: ['latin'],
  weight: ['400', '700'],

})
const sawarabi = Sawarabi_Mincho({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: 'Mi Portafolio',
  description: 'Portafolio de Diego Gutierrez Casallas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='flex justify-center md:justify-start bg-black text-white'>

      <body className={amatic.className}>
        <Sticky />
        {children}

      </body>
    </html>
  )
}
