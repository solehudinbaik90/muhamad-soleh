import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ProfileImage from "@/components/home/ProfileImage";

export const metadata: Metadata = {
  title: "Beranda | Muhamad Soleh",
  description: "Menampilkan Profil, CV, Resume, dan Proyek dari Muhamad Soleh.",
};

export default function HomePage() {
  return (
    <section className="py-[30px] md:py-[80px]">
      <div className="container">
        <div className="grid grid-cols-12 gap-[30px]">
          <Hero />
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}
