import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AosInit from "@/components/ui/AosInit";
import "./global.css";
import "swiper/css";
import "swiper/css/pagination";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Muhamad Soleh",
    template: "%s | Muhamad Soleh",
  },
  description: "Menampilkan Profil, CV, Resume, dan Proyek dari Muhamad Soleh.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>

        <AosInit />

        <div>
          <div className="bg-img" aria-hidden="true" />

          <Header />

          <section className="relative z-[99]">
            <div className="main__body">{children}</div>
          </section>

          <Footer />
        </div>
      </body>
    </html>
  );
}
