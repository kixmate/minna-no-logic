import './globals.css'; // グローバルスタイルを適用する場合
import { ReactNode } from 'react';

export const metadata = {
  title: 'みんなのロジック',
  description: '賛成・反対の意見を整理する場所',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-4 bg-blue-600 text-white">
          <h1 className="text-xl font-bold">みんなのロジック</h1>
        </header>
        <main>{children}</main>
        <footer className="p-4 bg-gray-800 text-white text-center">
          © 2025 みんなのロジック
        </footer>
      </body>
    </html>
  );
}
