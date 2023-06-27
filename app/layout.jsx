import './globals.css';
import { Poppins } from 'next/font/google';
import Header from './components/Header';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Daniel Ulelu ',
  description: 'My website',
  keywords: 'web development, web design, javascript, html, next, vue, css, react, express',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ poppins.className }>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
