import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Chef Claude',
  description: 'A small Next.js app inspired by the "Chef Claude" project from @bobziroll.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased h-screen bg-slate-100`}>
        <header className="bg-white text-4xl h-20 flex items-center justify-center gap-4 shadow-[0_1px_2px_0px_rgba(0,0,0,0.05)]">
          <Image
            src="/chef-claude-icon.png"
            width={43}
            height={52}
            alt="Chef Claude icon"
          />
          <h1>Chef Claude</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
