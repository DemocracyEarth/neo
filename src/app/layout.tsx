import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Gov AI Interface',
  description: 'AI-powered governance interface editor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}
