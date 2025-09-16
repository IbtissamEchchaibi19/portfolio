import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ibtissam Ech-Chaibi — AI Engineer & Full-Stack Developer',
  description: 'Portfolio of Ibtissam Ech-Chaibi, software engineering student and freelance AI & full-stack developer specializing in Python, Django, React, and AWS. Explore case studies, experience, and get in touch.',
  keywords: [
    'AI Engineer',
    'Full-Stack Developer',
    'Machine Learning Engineer',
    'Python Developer',
    'React Developer',
    'Next.js Developer',
    'Django',
    'AWS',
    'Freelancer',
    'Morocco',
    'Portfolio',
    'Software Engineer'
  ],
  authors: [{ name: 'Ibtissam Ech-Chaibi', url: 'https://your-domain.com' }],
  creator: 'Ibtissam Ech-Chaibi',
  publisher: 'Ibtissam Ech-Chaibi',
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: 'https://your-domain.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    siteName: 'Ibtissam Ech-Chaibi Portfolio',
    title: 'Ibtissam Ech-Chaibi — AI Engineer & Full-Stack Developer',
    description: 'Portfolio of Ibtissam Ech-Chaibi, software engineering student and freelance AI & full-stack developer specializing in Python, React, and AWS.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ibtissam Ech-Chaibi - AI Engineer & Full-Stack Developer',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@your_twitter',
    creator: '@your_twitter',
    title: 'Ibtissam Ech-Chaibi — AI Engineer & Full-Stack Developer',
    description: 'Portfolio of Ibtissam Ech-Chaibi, software engineering student and freelance AI & full-stack developer.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#100C08',
    'color-scheme': 'dark',
  },
}

export default metadata
