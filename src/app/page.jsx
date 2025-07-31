import Header from "@/pages/Header/Header";
import HeroSlider from "@/pages/Home/HeroSlider";
import AboutSection from "@/pages/Home/AboutSection";
import AcademicPrograms from "@/pages/Home/AcademicPrograms";
import SsimStories from "@/pages/Home/SsimStories";
import LatestBlogsAndEvents from "@/pages/Home/LatestBlogs&Events";
import AlumniSection from "@/pages/Home/AlumniSection";
import PlacementIndustry from "@/pages/Home/Placement&Industry";
import Footer from "@/pages/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <AboutSection />
      <AcademicPrograms />
      <SsimStories />
      <LatestBlogsAndEvents />
      <AlumniSection />
      <PlacementIndustry />
      <Footer />
    </>
  );
}
