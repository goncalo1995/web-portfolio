import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: 'Gonçalo Cereja | Fullstack & Cloud Architect',
  description: 'Fullstack & Cloud Architect specializing in enterprise-scale solutions, Google Cloud Platform, and modern fullstack development. Building robust, scalable systems.',
  keywords: ['Cloud Architect', 'Fullstack Developer', 'GCP', 'Google Cloud', 'DevOps', 'Kubernetes', 'React', 'Node.js'],
  authors: [{ name: 'Gonçalo Lascasas Cereja Ribeiro Pereira' }],
  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-96x96.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon-96x96.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
      title: 'Gonçalo Cereja | Fullstack & Cloud Architect',
      description: 'Fullstack & Cloud Architect specializing in enterprise-scale solutions, Google Cloud Platform, and modern fullstack development. Building robust, scalable systems.',
      images: [{ url: 'https://files.rochanegra.com/cv/me-cropped.JPG', width: 1200, height: 630, alt: 'Gonçalo Cereja | Fullstack & Cloud Architect' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Gonçalo Cereja | Fullstack & Cloud Architect',
      description: 'Fullstack & Cloud Architect specializing in enterprise-scale solutions, Google Cloud Platform, and modern fullstack development. Building robust, scalable systems.',
      images: ['https://files.rochanegra.com/cv/me-cropped.JPG'],
    },
    robots: {
      index: true,
      follow: true,
    },
}

export const viewport: Viewport = {
  themeColor: '#09090b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
