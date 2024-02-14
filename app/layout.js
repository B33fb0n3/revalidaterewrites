import './globals.css'
import { Inter } from 'next/font/google'
import GlobalProvider from "@/app/GlobalProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'No Title',
  description: 'This is a default Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="eu">
      <body className={inter.className}>
        <GlobalProvider>
          {children}
        </GlobalProvider>
      </body>
    </html>
  )
}
