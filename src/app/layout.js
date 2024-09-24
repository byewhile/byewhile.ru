import { Roboto } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/Header";

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"] 
});

export const metadata = {
  title: "byewhile",
  description: "byewhile - byewhile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <div className="wrapper">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
