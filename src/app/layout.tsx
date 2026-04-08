import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to Batya Harush's showcase! Dive into the world of a seasoned radio broadcaster and talented narrator.">
        <title>Batya Harush</title>
      </head>
      <body className={inter.className}>
        <header className="header p-4">
          <nav className="container mx-auto">
            <ul className="flex space-x-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/voice-samples">Voice Samples</Link></li>
              <li><Link href="/videos">Videos</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="footer p-4 text-center">
          <p>©2024 by Batya Harush. בתיה הרוש</p>
          <a href="mailto:605a7baede844d278b89dc95ae0a9123@sentry-next.wixpress.com">Contact Us</a>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
