import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Industries from "@/components/Industries";
import SuccessStories from "@/components/SuccessStories";
import CTA from "@/components/CTA";
import StoreLocation from "@/components/StoreLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Partners />
      <Services />
      <Solutions />
      <Industries />
      <SuccessStories />
      <CTA />
      <StoreLocation />
      <Footer />
    </main>
  );
}
