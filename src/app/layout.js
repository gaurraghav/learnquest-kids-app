import './globals.css';

export const metadata = {
  title: 'LearnQuest — Adventure Learning for Amay & Ayra',
  description: 'A fun, gamified learning app for Grade 1 CBSE students. Practice Math and English through exciting adventures!',
  keywords: 'learning, kids, education, CBSE, Grade 1, math, english, gamified learning',
  other: {
    'theme-color': '#0F0E17',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
