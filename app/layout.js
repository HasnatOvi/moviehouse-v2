// import './globals.css'
// import 'style/global.scss'
import App from "./App";

import './index.scss';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie House',
  description: 'Downloads any movie free',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
