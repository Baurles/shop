import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import "./globals.css";
import { ModalProviderWindow } from "@/components/providers/ModalProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container scroll-smooth h-fit flex flex-col  justify-between align-middle">
        <Header />
        <ModalProviderWindow />
        {children}
        <Footer />
      </body>
    </html>
  );
}
