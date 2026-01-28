import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Muhammad Faiq Portfolio | Full Stack Developer | Crafting Digital Excellence",
    template: "%s | Muhammad Faiq Portfolio"
  },
  description: "Award-winning Full Stack & Mobile App Developer specializing in MERN stack, React Native, Flutter, and cross-platform development. Expert in building scalable web applications and mobile apps for iOS and Android. Transform your ideas into stunning, high-performance digital products.",
  keywords: ["Full Stack Developer", "React.js", "Next.js", "Web Development", "UI/UX Design", "Portfolio", "Muhammad Faiq"],
  authors: [{ name: "Muhammad Faiq" }],
  creator: "Muhammad Faiq",
  publisher: "Muhammad Faiq",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/favicon.ico',
    shortcut: '/favicon.ico'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://khadijatahir.dev'), // Update this to your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khadijatahir.dev',
    title: 'Muhammad Faiq | Full Stack Developer',
    description: 'Award-winning Full Stack & Mobile App Developer specializing in MERN stack, React Native, Flutter, and cross-platform development. Expert in building scalable web applications and mobile apps for iOS and Android.',
    siteName: 'Muhammad Faiq Portfolio',
    images: [
      {
        url: '/zaid.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Faiq - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Faiq | Full Stack Developer',
    description: 'Award-winning Full Stack & Mobile App Developer specializing in MERN stack, React Native, Flutter, and cross-platform development. Expert in building scalable web applications and mobile apps for iOS and Android.',
    images: ['/zaid.jpg'],
    creator: '@muhammadfaiq',
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
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Faiq",
    "jobTitle": "Full Stack Developer",
    "description": "Award-winning Full Stack & Mobile App Developer specializing in MERN stack, React Native, Flutter, and cross-platform development. Expert in building scalable web applications and mobile apps for iOS and Android.",
    "url": "https://khadijatahir.dev",
    "image": "/zaid.jpg",
    "sameAs": [
      "https://github.com/Kheejch"
    ],
    "knowsAbout": [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Web Development",
      "UI/UX Design"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]`}
      >
        {children}
      </body>
    </html>
  );
}
