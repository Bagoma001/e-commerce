import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/HeroSection/Hero";
import Background from "@/components/HeroSection/Background";
import SectionOne from "@/components/sections/SectionOne";
import FeaturedCategories from "@/components/sections/FeaturedCategories";
import Footer from "@/components/sections/Footer";
import ClientQuery from "@/components/utils/PageQuery/ClientQuery";

export default function Home() {
  return (
    <>
      <ClientQuery>
        <Background>
          <Navigation />
          <Hero />
        </Background>
        <SectionOne />
        <FeaturedCategories />
        <Footer />
      </ClientQuery>
    </>
  );
}
