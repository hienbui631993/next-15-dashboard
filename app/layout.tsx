import '@/app/ui/global.css'
import { GF_Inter_Font } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GF_Inter_Font.className} antialiased`}>{children}</body>
    </html>
  );
}
