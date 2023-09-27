import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'BlogPost',
    description: 'Inspired by Dave Gray post',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            <body className="flex flex-col justify-center min-h-screen">
                {' '}
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
