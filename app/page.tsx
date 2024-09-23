import Navigation from "@/components/navigation/Navigation";
import Hero from "@/components/HeroSection/Hero";
import Background from "@/components/HeroSection/Background";
import SectionOne from "@/components/sections/SectionOne";
import FeaturedCategories from "@/components/sections/FeaturedCategories";

export default function Home() {
  return (
    <>
      <Background>
        <Navigation />
        <Hero />
      </Background>
      <SectionOne />
      <FeaturedCategories />
    </>
  );
}
